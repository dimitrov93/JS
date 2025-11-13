import React, { Suspense } from 'react';
import Link from 'next/link';
import { getCategories } from '@/actions/categories';

export default function CategoriesPage() {
  return (
    <>
      <h1>Categories Page</h1>
      {<CachedComponent />}
    </>
  );
}

const CachedComponent = async () => {
  'use cache';
  const categories = await getCategories('en');

  return (
    <div className="flex flex-col gap-4">
      {categories.items.map((category: any) => (
        <Link key={category.id} href={`/category/${category.name}`}>
          {category.name}
        </Link>
      ))}
    </div>
  );
};
