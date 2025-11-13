import { getCounterPayload } from '@/lib/data';
import { getHeaderData } from '@/lib/getHeadersData';
import { cacheLife } from 'next/cache';
import React, { Suspense } from 'react';
async function testApi() {
  'use cache';
  cacheLife({ revalidate: 10 });
  const res = await fetch('http://localhost:3000/api/data');
  return await res.json();
}

export default async function page() {
  //   'use cache';
  //   cacheLife({ revalidate: 10 });
  //   const data = await testApi();
  const data = await getCounterPayload(1);
  const data2 = await getHeaderData(2);
  return (
    <>
      <h1>Cached Route</h1>

      <div className="flex flex-row justify-between">
        <section>
          <p className="text-5xl">Dynamic p</p>
          <p className="text-5xl">Hits: {data.hits}</p>
          <p className="text-5xl">Time: {data.time}</p>
          <p className="text-5xl">Seconds: {data.seconds}</p>
        </section>

        <section>
          <p className="text-5xl">Dynamic p</p>
          <p className="text-5xl">Hits: {data2.hits}</p>
          <p className="text-5xl">Time: {data2.time}</p>
          <p className="text-5xl">Seconds: {data2.seconds}</p>
        </section>
      </div>
    </>
  );
}

// const Dynamic = async () => {
//   const data = await testApi();

//   return (
//     <section>
//       <p className="text-5xl">Dynamic p</p>
//       <p className="text-5xl">Hits: {data.hits}</p>
//       <p className="text-5xl">Time: {data.time}</p>
//       <p className="text-5xl">Seconds: {data.seconds}</p>
//     </section>
//   );
// };
