import type { Metadata } from 'next';

import { ContactInquirySection } from '@/components/ContactInquirySection';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Reach ${site.name} for support, partnerships, early access, or press — via your email app.`,
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1" id="main">
        <ContactInquirySection headingLevel="h1" variant="page" />
      </main>
      <SiteFooter />
    </div>
  );
}
