import Link from 'next/link';

import { ContactInquirySection } from '@/components/ContactInquirySection';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { StoreCtas } from '@/components/StoreCtas';
import { site } from '@/lib/site';

function HeroHeadline() {
  const h = site.hero.headline;
  const key = 'relationships';
  const idx = h.indexOf(key);
  if (idx === -1) {
    return <>{h}</>;
  }
  return (
    <>
      {h.slice(0, idx)}
      <span className="highlight">{key}</span>
      {h.slice(idx + key.length)}
    </>
  );
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1" id="main">
        <section
          className="bg-[var(--cp-bg)]"
          aria-labelledby="hero-heading">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
            <p className="hero-eyebrow">{site.tagline}</p>
            <h1 id="hero-heading" className="hero-headline max-w-3xl">
              <HeroHeadline />
            </h1>
            <p className="hero-sub">{site.hero.sub}</p>

            <div className="hero-cta-row flex-col sm:flex-row">
              <StoreCtas />
            </div>
            <p className="hero-social-proof">
              <span>
                <strong>Support, partnerships, or early access?</strong>{' '}
                <Link href="/contact" className="link-cp">
                  Contact
                </Link>
                {' · '}
                <Link href="/#contact" className="link-cp">
                  Form below
                </Link>
              </span>
            </p>
          </div>
        </section>

        <section className="section-muted border-y border-[var(--cp-border)] py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl font-semibold">Why CarePair exists</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-[var(--cp-ink-muted)]">{site.problem}</p>
            <p className="mt-4 max-w-3xl font-medium leading-relaxed text-[var(--cp-ink)]">{site.solution}</p>
            <ul className="mt-8 space-y-3">
              {site.trust.map((line) => (
                <li key={line} className="flex gap-3 text-sm text-[var(--cp-ink-muted)]">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--cp-primary)]"
                    aria-hidden
                  />
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm font-medium text-[var(--cp-ink-muted)]">{site.nativeProduct}</p>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-5xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-semibold">Inside the app</h2>
          <p className="mt-2 max-w-2xl text-sm text-[var(--cp-ink-muted)]">
            Everything below is available in the native apps after you create an account.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.features.map((f) => (
              <li key={f.title} className="card card-feature">
                <div className="card-icon" aria-hidden>
                  {f.title.charAt(0)}
                </div>
                <h3 className="card-title">{f.title}</h3>
                <p className="card-body">{f.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="pricing" className="pricing-band scroll-mt-24 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl font-semibold">Pricing</h2>
            <p className="mt-4 max-w-2xl leading-relaxed">
              <span className="tabular-price font-semibold text-white">{site.pricing.familyMonthly}</span> for the
              family subscription, following a <span className="font-semibold text-white">{site.pricing.trial}</span>.{' '}
              {site.pricing.caregiver}.
            </p>
            <p className="pricing-muted mt-4 max-w-2xl text-sm leading-relaxed">{site.pricing.note}</p>
            <p className="pricing-fine mt-6 max-w-2xl">
              Apple App Store and Google Play may process certain purchases according to their policies. Nothing on this
              page overrides the in-app purchase or checkout disclosures you see before paying.
            </p>
          </div>
        </section>

        <ContactInquirySection headingLevel="h2" />
      </main>

      <SiteFooter />
    </div>
  );
}
