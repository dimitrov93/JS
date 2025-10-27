import { Gallery, GalleryItem } from "@/components/gallery";
import { Category } from "@/types";

  async function getCategories(): Promise<GalleryItem[]> {
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/categories?limit=5"
    );
    const data = await response.json();
    const items = data.map((p: Category) => ({
      id: `item-${p.id}`,
      title: p.name,
      summary: p.description,
      url: "#",
      image: p.image,
    }));

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return items;
  }

export default async function Categories() {


  return (
    <main>
      <Gallery items={await getCategories()} heading="Categories" />
    </main>
  );
}