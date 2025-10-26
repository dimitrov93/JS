import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  isTokenValid,
  sendRefreshTokenRequest,
  refreshTokensInCookies,
} from "./app/_utils/auth";
const keycloakAuthBaseUrl = process.env.KEYCLOAK_URL;
import { COOKIE_ACCESS_TOKEN, COOKIE_REFRESH_TOKEN } from "./app/_constants/constants";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  if (isTokenValid(request, COOKIE_ACCESS_TOKEN) || !keycloakAuthBaseUrl) {
    return response;
  }
  if (isTokenValid(request, COOKIE_REFRESH_TOKEN)) {
    const refreshedTokenResponse = await sendRefreshTokenRequest(
      request.cookies.get(COOKIE_REFRESH_TOKEN)?.value || ""
    );
    refreshTokensInCookies(refreshedTokenResponse, response);
    return response;
  }
  const keycloakAuthUrl = new URL(`${keycloakAuthBaseUrl}/auth`);
  keycloakAuthUrl.searchParams.append(
    "client_id",
    process.env.KEYCLOAK_CLIENT_ID || ""
  );
  keycloakAuthUrl.searchParams.append("scope", "email roles openid");
  keycloakAuthUrl.searchParams.append("response_type", "code");
  keycloakAuthUrl.searchParams.append(
    "redirect_uri",
    `${process.env.PUBLIC_HOLOCRON_WEB_URL}/api/auth/oauth_callback?targetPath=${request.nextUrl.pathname}`
  );
  return NextResponse.redirect(keycloakAuthUrl);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.png|/api/health|/api/auth/oauth_callback*$).*)",
  ],
};
