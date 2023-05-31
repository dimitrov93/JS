import { NextResponse } from "next/server";

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://www.yoursite.com", "https://www.yoursite.com"]
    : ["http://localhost:3000"];

export function middleware(req: Request) {
//   const regex = new RegExp("/api/*");

//   if (regex.test(req.url)) {
//   }

  // if (req.url.includes('/api/')) {

  // }
  // console.log('Middleware!');

  // console.log(req.method);
  // console.log(req.url);

  const origin = req.headers.get("origin");
  console.log(origin);

  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
        status: 400,
        statusText: 'Bad Request', 
        headers: {
            'Content-Type': 'text/plain'
        }
    })
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
