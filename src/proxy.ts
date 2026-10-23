import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const host = request.headers.get('host') || '';
  
  // 1. Enforce Apex domain (redirect www to naked domain)
  if (host.startsWith('www.')) {
    const newHost = host.replace(/^www\./, '');
    const url = new URL(request.url);
    url.host = newHost;
    url.protocol = 'https:';
    return NextResponse.redirect(url, 308);
  }

  const { pathname } = request.nextUrl;

  // 2. Direct .md twin route support (e.g. /services/aeo.md -> /api/markdown?path=/services/aeo)
  if (pathname.endsWith('.md')) {
    if (pathname !== '/auth.md' && pathname !== '/AGENTS.md') {
      const strippedPath = pathname.replace(/\.md$/, '') || '/';
      const url = request.nextUrl.clone();
      url.pathname = '/api/markdown';
      url.searchParams.set('path', strippedPath);
      const response = NextResponse.rewrite(url);
      response.headers.set('Vary', 'Accept');
      return response;
    }
  }

  // 3. HTTP Content Negotiation (RFC 7231) for AI Agents
  const accept = request.headers.get('accept') || '';
  if (accept.includes('text/markdown')) {
    if (
      !pathname.startsWith('/api') &&
      !pathname.startsWith('/_next') &&
      pathname !== '/auth.md' &&
      pathname !== '/AGENTS.md' &&
      pathname !== '/llms.txt' &&
      pathname !== '/llms-full.txt' &&
      pathname !== '/robots.txt' &&
      pathname !== '/sitemap.xml'
    ) {
      const url = request.nextUrl.clone();
      url.pathname = '/api/markdown';
      url.searchParams.set('path', pathname);
      const response = NextResponse.rewrite(url);
      response.headers.set('Vary', 'Accept');
      return response;
    }
  }

  // 4. Standard HTML / asset response with Vary: Accept to preserve cache segregation
  const response = NextResponse.next();
  response.headers.set('Vary', 'Accept');
  return response;
}

export const middleware = proxy;

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimisation files)
     * - favicon.ico (favicon file)
     * - static assets (.svg, .png, .jpg, .jpeg, .gif, .webp, .woff, .woff2, .vcf)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|woff|woff2|vcf)$).*)',
  ],
};
