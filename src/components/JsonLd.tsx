import { site } from '@/lib/site';
import { getSiteOrigin } from '@/lib/siteUrl';

export function JsonLdOrganization() {
  const origin = getSiteOrigin();
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    description:
      'Relationship-first marketplace connecting families and caregivers for childcare. Native iOS and Android apps.',
    url: origin,
    areaServed: {
      '@type': 'City',
      name: 'Calgary',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Alberta' },
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
