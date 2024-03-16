import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const sessionToken = process.env.TOKEN_PUBLIC ?? 'next-auth.session-token'

  const cookie = request.cookies.get(sessionToken)?.value

  if (!cookie) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/checkout', '/orders', '/orders/:path*']
}
