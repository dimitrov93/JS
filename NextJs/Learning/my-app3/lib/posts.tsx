import { compileMDX } from "next-mdx-remote/rsc";

type Filetree = {
  tree: [
    {
      path: string;
    }
  ];
};

export async function getPostByName(
  fileName: string
): Promise<BlogPost | undefined> {
  const res = await fetch(
    `https://raw.githubusercontent.com/dimitrov93/test-repo/main/${fileName}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!res.ok) return undefined;

  const rawMDX = await res.text();

  if (rawMDX === "404: Not Found") {
    return undefined;
  }

  const { frontmatter, content } = await compileMDX<{
    title: string;
    date: string;
    tags: string[];
  }>({
    source: rawMDX,
    options: {
        parseFrontmatter: true,
    }
  });

  const id = fileName.replace(/\.mdx$/, '')

  const blogPostsObj: BlogPost = {
    meta: { id, title: frontmatter.title, date: frontmatter.date, tags: frontmatter.tags},
    content
  }

  return blogPostsObj
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
  const res = await fetch(
    `https://api.github.com/repos/dimitrov93/test-repo/git/trees/main?recursive=1`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  
  if (!res.ok) return undefined;

  const repoFiletree: Filetree = await res.json();
  
  const filesArray = repoFiletree.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith(".mdx"));

  const posts: Meta[] = [];

  for (const file of filesArray) {
    const post = await getPostByName(file);
    
    if (post) {
      const { meta } = post;      
      posts.push(meta);
    }
  }

  return posts
}
