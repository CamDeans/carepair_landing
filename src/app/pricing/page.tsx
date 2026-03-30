import type { Metadata } from 'next';

import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { pricingPage } from '@/content/pages';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: pricingPage.title,
  description: pricingPage.metaDescription,
};

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1" id="main">
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="text-3xl font-semibold">{pricingPage.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--cp-ink-muted)]">{pricingPage.intro}</p>

          <section
            className="pricing-band mt-12 rounded-[var(--cp-radius-lg)] px-6 py-8 sm:px-8"
            aria-labelledby="summary-heading">
            <h2 id="summary-heading" className="text-xl font-semibold text-white">
              At a glance
            </h2>
            <p className="mt-4 leading-relaxed">
              <span className="tabular-price font-semibold text-white">{site.pricing.familyMonthly}</span> for the family
              subscription, following a <span className="font-semibold text-white">{site.pricing.trial}</span>.{' '}
              {site.pricing.caregiver}.
            </p>
            <p className="pricing-muted mt-4 max-w-2xl text-sm leading-relaxed">{site.pricing.note}</p>
          </section>

          <section className="mt-12" aria-labelledby="family-heading">
            <h2 id="family-heading" className="text-xl font-semibold">
              {pricingPage.familyTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-[var(--cp-ink-muted)]">{pricingPage.familyLead}</p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-[var(--cp-ink-muted)]">
              {pricingPage.familyBullets.map((b) => (
                <li key={b} className="leading-relaxed">
                  {b}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 border-t border-[var(--cp-border)] pt-12" aria-labelledby="caregiver-heading">
            <h2 id="caregiver-heading" className="text-xl font-semibold">
              {pricingPage.caregiverTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-[var(--cp-ink-muted)]">{pricingPage.caregiverBody}</p>
          </section>

          <section className="mt-12 border-t border-[var(--cp-border)] pt-12" aria-labelledby="trial-heading">
            <h2 id="trial-heading" className="text-xl font-semibold">
              {pricingPage.trialTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-[var(--cp-ink-muted)]">{pricingPage.trialBody}</p>
          </section>

          <section className="mt-12 border-t border-[var(--cp-border)] pt-12" aria-labelledby="platforms-heading">
            <h2 id="platforms-heading" className="text-xl font-semibold">
              {pricingPage.platformsTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-[var(--cp-ink-muted)]">{pricingPage.platformsBody}</p>
          </section>

          <section className="mt-12 border-t border-[var(--cp-border)] pt-12" aria-labelledby="transparency-heading">
            <h2 id="transparency-heading" className="text-xl font-semibold">
              {pricingPage.transparencyTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-[var(--cp-ink-muted)]">{pricingPage.transparencyBody}</p>
          </section>

          <section className="mt-12 border-t border-[var(--cp-border)] pt-12" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-xl font-semibold">
              {pricingPage.faqTitle}
            </h2>
            <dl className="mt-6 space-y-8">
              {pricingPage.faq.map((item) => (
                <div key={item.q}>
                  <dt className="font-semibold text-[var(--cp-ink)]">{item.q}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-[var(--cp-ink-muted)]">{item.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <p className="mt-12 max-w-2xl border-t border-[var(--cp-border)] pt-8 text-xs leading-relaxed text-[var(--cp-ink-muted)]">
            Apple App Store and Google Play may process certain purchases according to their policies. Nothing on this
            page overrides the in-app purchase or checkout disclosures you see before paying.
          </p>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
