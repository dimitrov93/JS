import { NextResponse } from "next/server";
import { limiter } from "../config/limiter"



export async function GET(req: Request) {
  const origin = req.headers.get('origin')
  const remaining = await limiter.removeTokens(1)
  console.log("remaining", remaining);

  if (remaining < 0) {
    return new NextResponse(null, {
      status: 429,
      statusText: "Too many request",
      headers: {
        'Access-Control-Allow-Origin': origin || '*',
        'Content-Type': 'text/plain'
      }
    })
  }
  
  return new Response('Hello, Next.js!')
}