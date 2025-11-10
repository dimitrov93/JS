import { getHeaderData } from '@/lib/getHeadersData';
import { cacheLife } from 'next/cache';
import React from 'react';

export default async function Header() {
  'use cache';
  cacheLife({ revalidate: 35 });

  const data = await getHeaderData(4);

  return (
    <header className="w-full flex items-center justify-between bg-clr-darkBlue px-6 py-3 shadow-md">
      <h1 className="text-clr-lightBlue text-2xl font-bold">Testing</h1>

      <nav className="flex items-center gap-12  text-clr-white">
        <a href="/client" className="hover:text-clr-lightBlue transition-colors">
          Client
        </a>
        <a href="/category" className="hover:text-clr-lightBlue transition-colors">
          Category
        </a>
        <a href="/terms-of-use" className="hover:text-clr-lightBlue transition-colors">
          Terms of use
        </a>
        <a href="/cached-route" className="hover:text-clr-lightBlue transition-colors">
          Cached Route
        </a>

        <div className="text-clr-lightGray text-sm">
          Hits: {data.hits} <br />
          Time: {data.time} <br />
          Sec: {data.seconds}
        </div>
      </nav>
    </header>
  );
}
