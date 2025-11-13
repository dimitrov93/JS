import { cacheLife } from 'next/cache';

// lib/data.ts
let hits = 0;

export async function getCounterPayload(numberOfSeconds?: number) {
  'use cache';
  cacheLife({ revalidate: numberOfSeconds ?? 10 });
  hits++;
  const now = new Date();
  return {
    hits,
    time: now.toLocaleTimeString('en-GB', { hour12: false }),
    seconds: String(now.getSeconds()).padStart(2, '0'),
  };
}
