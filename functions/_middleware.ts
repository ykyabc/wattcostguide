const securityHeaders = {
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com",
    "style-src 'self'",
    "img-src 'self' data:",
    "font-src 'self'",
    "connect-src 'self' https://cloudflareinsights.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join("; "),
  "Permissions-Policy": "camera=(), geolocation=(), microphone=()",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Strict-Transport-Security": "max-age=31536000",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
};

function withResponseHeaders(response: Response, url: URL) {
  const headers = new Headers(response.headers);

  for (const [name, value] of Object.entries(securityHeaders)) {
    headers.set(name, value);
  }

  if (url.pathname.startsWith("/_astro/")) {
    headers.set("Cache-Control", "public, max-age=31536000, immutable");
  } else if (/\.(?:ico|jpg|jpeg|png|svg|webp|woff2?)$/i.test(url.pathname)) {
    headers.set("Cache-Control", "public, max-age=86400");
  } else if (/\.(?:css|js)$/i.test(url.pathname) || url.pathname === "/robots.txt" || url.pathname === "/sitemap.xml") {
    headers.set("Cache-Control", "public, max-age=3600, must-revalidate");
  } else {
    headers.set("Cache-Control", "public, max-age=0, must-revalidate");
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);

  if (url.hostname === "www.wattcostguide.com") {
    url.hostname = "wattcostguide.com";
    return withResponseHeaders(Response.redirect(url.toString(), 301), url);
  }

  return withResponseHeaders(await context.next(), url);
};
