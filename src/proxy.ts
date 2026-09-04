import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const host = request.headers.get('host') || '';
  
  // Enforce Apex domain (redirect www to naked domain)
  if (host.startsWith('www.')) {
    const newHost = host.replace(/^www\./, '');
    const url = new URL(request.url);
    url.host = newHost;
    url.protocol = 'https:';
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const middleware = proxy;

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimisation files)
     * - favicon.ico (favicon file)
     * - static assets
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
