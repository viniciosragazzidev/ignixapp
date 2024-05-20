// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { auth } from "./shared/services/auth";

// the following code is taken from : https://nextjs.org/docs/advanced-features/middleware#setting-headers

export async function middleware(request: NextRequest, response: NextResponse) {
  return NextResponse.next();
}

// the following code has been copied from https://nextjs.org/docs/advanced-features/middleware#matcher
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/((?!api/xu23r).*)",
    "/api/:path*",
    "/app/(.*)",
  ],
};
