export const getCategories = async (locale: string) => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/categories/items`, {
    headers: {
      'x-vercel-oidc-token': `Bearer ${process.env.VERCEL_OIDC_TOKEN}`,
      'Accept-Language': locale,
    },
  });
  return await res.json();
};
