import { getCategories } from '@/actions/categories';
import { cacheLife } from 'next/cache';
import { Suspense } from 'react';

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.items.map((category: any) => ({
    category: category.name.toLowerCase(),
  }));
}

export default function CategoriesPage({ params }: any) {
  return (
    <>
      <Suspense>
        <Dynamic params={params} />
      </Suspense>
    </>
  );
}

const Dynamic = async ({ params }: any) => {
  'use cache';
  cacheLife('max');
  const { category } = await params;

  return <div>{category || 'default'}</div>;
};
