import { NextResponse } from 'next/server';

// Cloudflare's Page Rule for www -> non-www doesn't reliably fire here, because
// www.sgdgroupofcompanies.com is bound as its own Worker Custom Domain, which
// routes directly to this Worker ahead of the zone's Page Rules engine. Doing
// the redirect here instead is host-agnostic — it runs inside the same Worker
// already serving the request, so it can't be bypassed by that precedence, and
// it'll keep working unchanged even if hosting ever moves off Cloudflare.
export function middleware(request) {
  const host = request.headers.get('host') || '';

  if (host.startsWith('www.')) {
    const url = request.nextUrl.clone();
    url.hostname = host.slice(4);
    url.protocol = 'https';
    url.port = '';
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Skip Next's own internals and static files — nothing there needs the
  // canonical-host check, and excluding them keeps the redirect fast.
  matcher: ['/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png).*)'],
};
