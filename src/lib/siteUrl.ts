/**
 * Canonical site URL for Open Graph, sitemap, and robots.
 * Set `NEXT_PUBLIC_SITE_URL` in Vercel (e.g. https://www.yourdomain.com).
 */
export function getSiteOrigin(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    try {
      const u = new URL(raw);
      return u.origin;
    } catch {
      /* fall through */
    }
  }
  return 'https://carepair.app';
}
