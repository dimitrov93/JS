import Categories from "@/components/categories";
import { GallerySkeleton } from "@/components/gallery-skeleton";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main>
      <Suspense fallback={<GallerySkeleton />}>
        <Categories />
      </Suspense>
    </main>
  );
}