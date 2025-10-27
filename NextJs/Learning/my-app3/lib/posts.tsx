import "server-only";
import fs from "fs/promises";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import Video from "@/app/components/Video";
import CustomImage from "@/app/components/CustomImage";

const POSTS_DIR = path.join(process.cwd(), "blogposts");

type Meta = {
  id: string;
  title: string;
  date: string;
  tags: string[];
};
type BlogPost = {
  meta: Meta;
  content: React.ReactNode;
};

export async function getPostByName(fileName: string): Promise<BlogPost | undefined> {
  const base = fileName.replace(/\.(md|mdx)$/i, "");
  const candidates = [`${base}.mdx`, `${base}.md`].map((f) => path.join(POSTS_DIR, f));

  let filePath: string | undefined;
  for (const c of candidates) {
    try {
      await fs.access(c);
      filePath = c;
      break;
    } catch {}
  }
  if (!filePath) return undefined;

  const rawMDX = await fs.readFile(filePath, "utf8");

  const { frontmatter, content } = await compileMDX<{
    title: string;
    date: string;
    tags: string[];
  }>({
    source: rawMDX,
    components: { Video, CustomImage },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
        ],
      },
    },
  });

  const id = path.basename(base);

  return {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      tags: frontmatter.tags ?? [],
    },
    content,
  };
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
  let entries: string[];
  try {
    entries = await fs.readdir(POSTS_DIR);
  } catch {
    return undefined;
  }

  const files = entries.filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  const metas: Meta[] = [];
  for (const f of files) {
    const post = await getPostByName(f);
    if (post) metas.push(post.meta);
  }

  metas.sort((a, b) => (a.date < b.date ? 1 : -1));
  return metas;
}
