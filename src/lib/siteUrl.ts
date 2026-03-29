/**
 * Canonical site URL for Open Graph, sitemap, and robots.
 * Set `NEXT_PUBLIC_SITE_URL` in Vercel (e.g. https://www.yourdomain.com).
 */
function normalizeToOrigin(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;
  const withScheme = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    return new URL(withScheme).origin;
  } catch {
    return null;
  }
}

export function getSiteOrigin(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    const o = normalizeToOrigin(fromEnv);
    if (o) return o;
  }
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const o = normalizeToOrigin(vercel);
    if (o) return o;
  }
  return 'https://carepair.app';
}
