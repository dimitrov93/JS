import { cacheLife } from 'next/cache';

let hits = 0;

export async function getHeaderData(numberOfSeconds?: number) {
  'use cache';
  cacheLife({ revalidate: numberOfSeconds ?? 10 });
  console.log('Get header data', numberOfSeconds);

  hits++;
  const now = new Date();
  const time = now.toLocaleTimeString('en-GB', { hour12: false });
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return {
    message: 'Header data loaded',
    hits,
    time,
    seconds,
  };
}
