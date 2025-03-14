import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const pathname = request.nextUrl.pathname

  // Get the base path from the environment variable
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

  // If the pathname doesn't start with the base path, redirect to the base path
  if (basePath && !pathname.startsWith(basePath)) {
    return NextResponse.redirect(new URL(`${basePath}${pathname}`, request.url))
  }

  return NextResponse.next()
}

// Only run the middleware on the client-side navigation
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images/ (public images)
     */
    "/((?!_next/static|_next/image|favicon.ico|images/).*)",
  ],
}

