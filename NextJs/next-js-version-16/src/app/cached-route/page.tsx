import { getCounterPayload } from '@/lib/data';
import { cacheLife } from 'next/cache';
import React, { Suspense } from 'react';
async function testApi() {
  'use cache';
  cacheLife({ revalidate: 10 });
  const res = await fetch('http://localhost:3000/api/data');
  return await res.json();
}

export default async function page() {
  'use cache';
  cacheLife({ revalidate: 15 });
  //   const data = await testApi();
  const data = await getCounterPayload();
  return (
    <>
      <h1>Here</h1>
      <section>
        <p className="text-5xl">Dynamic p</p>
        <p className="text-5xl">Hits: {data.hits}</p>
        <p className="text-5xl">Time: {data.time}</p>
        <p className="text-5xl">Seconds: {data.seconds}</p>
      </section>
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
