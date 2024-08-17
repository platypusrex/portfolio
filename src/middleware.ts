import { NextRequest, NextResponse } from 'next/server';

const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.includes('nothing')) {
    const newResponse = NextResponse.next();
    newResponse.headers.set('Authorization', `Bearer ${accessToken}`);
    return newResponse;
  }
}
