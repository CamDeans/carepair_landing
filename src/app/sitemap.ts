import type { MetadataRoute } from 'next';

import { getSiteOrigin } from '@/lib/siteUrl';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteOrigin();
  const now = new Date();
  const paths: { path: string; changeFrequency: 'weekly' | 'monthly'; priority: number }[] = [
    { path: '', changeFrequency: 'weekly', priority: 1 },
    { path: '/product', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/pricing', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/privacy', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/terms', changeFrequency: 'monthly', priority: 0.6 },
  ];

  return paths.map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path || '/'}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
