import type { Metadata } from 'next';

import { ContactInquirySection } from '@/components/ContactInquirySection';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { contactPage } from '@/content/pages';
import { isContactApiConfigured } from '@/lib/contactEnv';
import { site } from '@/lib/site';

/** Inbox env vars are read at request time so production secrets apply without a stale static shell. */
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Contact',
  description: contactPage.metaDescription,
};

export default function ContactPage() {
  const contactApiConfigured = isContactApiConfigured();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1" id="main">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <section className="mb-10" aria-labelledby="contact-intro-heading">
            <h1 id="contact-intro-heading" className="text-3xl font-semibold">
              {site.contact.sectionTitle}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[var(--cp-ink-muted)]">{site.contact.sectionIntro}</p>
            <h2 className="mt-10 text-xl font-semibold">{contactPage.introTitle}</h2>
            <p className="mt-3 leading-relaxed text-[var(--cp-ink-muted)]">
              {contactApiConfigured ? contactPage.introBodyApi : contactPage.introBodyMailto}
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-[var(--cp-ink-muted)]">
              {contactPage.introBullets.map((b) => (
                <li key={b} className="leading-relaxed">
                  {b}
                </li>
              ))}
            </ul>
          </section>
          <ContactInquirySection headingLevel="h2" variant="page" hideIntro />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
