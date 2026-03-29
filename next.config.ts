import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /** Browsers still request `/favicon.ico` by default; we ship a PNG and serve it for that path. */
  async rewrites() {
    return [{ source: '/favicon.ico', destination: '/icon.png' }];
  },
};

export default nextConfig;
