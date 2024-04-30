import { NextResponse, NextRequest } from "next/server";
import { decodeJwt, JWTPayload } from "jose";
import { COOKIE_ACCESS_TOKEN, COOKIE_REFRESH_TOKEN } from "../_constants/constants";

export const refreshTokensInCookies = (token: any, response: NextResponse) => {
  response.cookies.set(COOKIE_ACCESS_TOKEN, token.access_token || "", {
    httpOnly: true,
  });
  response.cookies.set(COOKIE_REFRESH_TOKEN, token.refresh_token || "", {
    httpOnly: true,
  });
  response.cookies.set("id_token", token.id_token || "", {
    httpOnly: true,
  });
  response.cookies.set("scope", token.scope || "", {
    httpOnly: true,
  });
};

export const sendFetchTokenRequest = async (req: NextRequest) => {
  let tokenBody = new URLSearchParams();
  tokenBody.append("code", req.nextUrl.searchParams.get("code") || "");
  tokenBody.append("grant_type", "authorization_code");
  tokenBody.append("client_id", process.env.KEYCLOAK_CLIENT_ID || "");
  tokenBody.append("client_secret", process.env.KEYCLOAK_CLIENT_SECRET || "");
  tokenBody.append(
    "redirect_uri",
    `${
      process.env.PUBLIC_HOLOCRON_WEB_URL
    }/api/auth/oauth_callback?targetPath=${
      req.nextUrl.searchParams.get("targetPath") || "/"
    }`
  );

  return await fetch(`${process.env.KEYCLOAK_URL}/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: tokenBody,
  }).then((response) => response.json());
};

export const sendRefreshTokenRequest = async (refreshToken: string) => {
  let tokenBody = new URLSearchParams();
  tokenBody.append("grant_type", "refresh_token");
  tokenBody.append("client_id", process.env.KEYCLOAK_CLIENT_ID || "");
  tokenBody.append("refresh_token", refreshToken);
  tokenBody.append("client_secret", process.env.KEYCLOAK_CLIENT_SECRET || "");
  return await fetch(`${process.env.KEYCLOAK_URL}/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: tokenBody,
  }).then((response) => response.json());
};

export const fetchUserWithToken = async (token: string) => {
  return await fetch(`${process.env.KEYCLOAK_URL}/userinfo`, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json());
};

export const isTokenValid = (request: NextRequest, tokenName: string) => {
  let token = request.cookies.get(tokenName)?.value;
  if (!token) return false;
  let tokenPayload = undefined;
  try {
    tokenPayload = decodeJwt(token);
  } finally {
    return isTokenActive(tokenPayload);
  }
};

const isTokenActive = (jwtPayload: JWTPayload) =>
  (jwtPayload?.exp || 0) > new Date().getTime() / 1000;
