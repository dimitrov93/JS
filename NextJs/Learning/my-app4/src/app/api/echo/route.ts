import { NextResponse } from "next/server";


export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
//   const name = searchParams.get('name')
//   const instrument = searchParams.get('instrument')

//   return NextResponse.json({ name, instrument })

  const obj = Object.fromEntries(searchParams.entries())
  return NextResponse.json( obj )
}
