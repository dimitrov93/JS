import { NextResponse } from "next/server";


export async function route(req: Request) {
  return NextResponse.json({"message": "hello"})
}
