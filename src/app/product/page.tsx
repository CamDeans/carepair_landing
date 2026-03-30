import type { Metadata } from 'next';

import { MediaPlaceholder } from '@/components/MediaPlaceholder';
import { RevealOnView } from '@/components/RevealOnView';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { productPage } from '@/content/pages';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: productPage.title,
  description: productPage.metaDescription,
};

export default function ProductPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1" id="main">
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="text-3xl font-semibold">{productPage.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--cp-ink-muted)]">{productPage.intro}</p>
          <RevealOnView className="mt-8">
            <MediaPlaceholder
              ratio="16/9"
              label="Product in context — add screenshot or short screen recording"
              hint="Use the same frames as the App Store / Play listings when possible."
            />
          </RevealOnView>

          <section className="mt-12" aria-labelledby="mission-heading">
            <h2 id="mission-heading" className="text-xl font-semibold">
              {productPage.missionTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-[var(--cp-ink-muted)]">{productPage.missionBody}</p>
          </section>

          <section className="mt-12 border-t border-[var(--cp-border)] pt-12" aria-labelledby="problem-heading">
            <h2 id="problem-heading" className="text-xl font-semibold">
              {productPage.problemTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-[var(--cp-ink-muted)]">{productPage.problemLead}</p>
            <p className="mt-4 leading-relaxed text-[var(--cp-ink-muted)]">{productPage.problemDetail}</p>
          </section>

          <section className="mt-12 border-t border-[var(--cp-border)] pt-12" aria-labelledby="solution-heading">
            <h2 id="solution-heading" className="text-xl font-semibold">
              {productPage.solutionTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-[var(--cp-ink-muted)]">{productPage.solutionLead}</p>
            <p className="mt-4 leading-relaxed text-[var(--cp-ink-muted)]">{productPage.solutionDetail}</p>
          </section>

          <section className="mt-12 border-t border-[var(--cp-border)] pt-12" aria-labelledby="trust-heading">
            <h2 id="trust-heading" className="text-xl font-semibold">
              {productPage.trustTitle}
            </h2>
            <ul className="mt-4 space-y-3">
              {[...site.trust, ...productPage.trustExtra].map((line) => (
                <li key={line} className="flex gap-3 text-sm leading-relaxed text-[var(--cp-ink-muted)]">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--cp-primary)]"
                    aria-hidden
                  />
                  {line}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 border-t border-[var(--cp-border)] pt-12" aria-labelledby="how-heading">
            <h2 id="how-heading" className="text-xl font-semibold">
              {productPage.howItWorksTitle}
            </h2>
            <ol className="mt-6 space-y-8">
              {productPage.howItWorks.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--cp-primary-light)] text-sm font-semibold text-[var(--cp-primary)]"
                    aria-hidden>
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[var(--cp-ink)]">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--cp-ink-muted)]">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-12 border-t border-[var(--cp-border)] pt-12" aria-labelledby="features-heading">
            <h2 id="features-heading" className="text-xl font-semibold">
              Capabilities in the apps
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--cp-ink-muted)]">
              {productPage.featuresPreamble}
            </p>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
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

          <section className="mt-12 border-t border-[var(--cp-border)] pt-12" aria-labelledby="native-heading">
            <h2 id="native-heading" className="text-xl font-semibold">
              {productPage.nativeTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-[var(--cp-ink-muted)]">{productPage.nativeBody}</p>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
