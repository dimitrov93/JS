import { NextResponse } from 'next/server';

let counter = 0;

export async function GET() {
  counter++;

  const now = new Date();
  const timeString = now.toLocaleTimeString('en-GB', { hour12: false });
  const seconds = now.getSeconds().toString().padStart(2, '0');

  return NextResponse.json({
    message: 'API is working',
    hits: counter,
    time: timeString,
    seconds: seconds,
  });
}
