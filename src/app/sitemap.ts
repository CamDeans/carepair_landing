import type { MetadataRoute } from 'next';

import { getSiteOrigin } from '@/lib/siteUrl';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteOrigin();
  const now = new Date();
  return ['', '/privacy', '/terms'].map((path) => ({
    url: `${base}${path || '/'}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.6,
  }));
}
