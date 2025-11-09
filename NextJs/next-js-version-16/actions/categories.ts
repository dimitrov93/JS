export const getCategories = async () => {
  const res = await fetch(
    `${process.env.BACKEND_URL}/categories/items`,
    {
      headers: {
        "x-vercel-oidc-token": `Bearer ${process.env.VERCEL_OIDC_TOKEN}`,
        "Accept-Language": "en",
      },
    }
  );
  return await res.json();
};