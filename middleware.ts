// middleware.ts
import type { NextRequest } from "next/server";

// the following code is taken from : https://nextjs.org/docs/advanced-features/middleware#setting-headers
export async function middleware(request: NextRequest) {}

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
  ],
};
