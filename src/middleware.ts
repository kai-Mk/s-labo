import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export const middleware = async (req: NextRequest) => {
  const pathname = req.nextUrl.pathname;

  const isAuthPath =
    pathname.startsWith('/login') ||
    pathname.startsWith('/signup') ||
    pathname.startsWith('/forgot-password');

  // トークンの取得
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token && !isAuthPath) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
};
