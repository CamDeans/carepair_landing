import type { Metadata } from 'next';
import { JsonLdOrganization } from '@/components/JsonLd';
import { site } from '@/lib/site';
import { getSiteOrigin } from '@/lib/siteUrl';
import './globals.css';

const origin = getSiteOrigin();

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description:
    'Discover caregivers and families, message securely, and coordinate care in CareSpace. Native apps for iOS and Android. Calgary-first.',
  keywords: ['childcare', 'nanny', 'Calgary', 'caregiver', 'family', 'CareSpace', 'CarePair'],
  authors: [{ name: site.legalEntity }],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: origin,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description:
      'Relationship-first childcare matching. Native iOS & Android apps for families and caregivers.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description:
      'Discover, connect, and coordinate care in one trusted place. Calgary-first.',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png', sizes: 'any' }],
    apple: '/icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA">
      <body className="min-h-screen font-sans">
        <JsonLdOrganization />
        {children}
      </body>
    </html>
  );
}
