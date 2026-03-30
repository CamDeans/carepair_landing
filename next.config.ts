import type { NextConfig } from 'next';

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
] as const;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  /** Security headers live here (not vercel.json) so routing is handled only by Next.js. */
  async headers() {
    return [
      { source: '/:path*', headers: [...securityHeaders] },
    ];
  },
  /** Browsers still request `/favicon.ico` by default; we ship a PNG and serve it for that path. */
  async rewrites() {
    return [{ source: '/favicon.ico', destination: '/brand/logo-mark.svg' }];
  },
};

export default nextConfig;
