import { API_URL, COOKIE_ACCESS_TOKEN } from "../_constants/constants";
import { cookies } from "next/headers";

export async function apiFetch<D = any, E = any>(
  path: string,
  init?: Parameters<typeof fetch>[1] | undefined
) {
  const pathIsFull = path.startsWith("http");
  path = path.startsWith("/") || pathIsFull ? path : `/${path}`;
  const fullUrl = pathIsFull ? path : `${API_URL}${path}`;
  const response = await fetch(fullUrl, {
    ...init,
    headers: {
      Authorization: `Bearer ${cookies().get(COOKIE_ACCESS_TOKEN)?.value}`,
    },
  });
  try {
    const responseData = await response.json();
    const result = response.ok
      ? ({ ok: true, data: responseData } as { ok: true; data: D })
      : ({ ok: false, data: responseData } as { ok: false; data: E });
    return result;
  } catch (e) {
    console.error(e);
    return { ok: false, data: e } as { ok: false; data: E };
  }
}
