import { NextRequest, NextResponse } from "next/server";
import {
  refreshTokensInCookies,
  sendFetchTokenRequest,
} from "@/app/_utils/auth";

export async function GET(req: NextRequest) {
  let respToken = await sendFetchTokenRequest(req);
  const response = NextResponse.redirect(
    `${process.env.PUBLIC_HOLOCRON_WEB_URL}${req.nextUrl.searchParams.get("targetPath") || ""}`
  );
  refreshTokensInCookies(respToken, response);
  return response;
}
