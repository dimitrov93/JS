const CACHE_IMMUTABLE: string = 'public, max-age=31536000, immutable'; // 1 year cache, immutable = no revalidate
const CACHE_SHORT = 'public, max-age=60, stale-while-revalidate=59'; // 1 min cache + 59 sec before next revalidate

const getHeaders = async () => {
  return [
    {
      source: '/',
      headers: [{ key: 'Cache-Control', value: CACHE_SHORT }],
    },
  ];
};

export default getHeaders;
