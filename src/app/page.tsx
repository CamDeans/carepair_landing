import Link from 'next/link';

import { MediaPlaceholder } from '@/components/MediaPlaceholder';
import { RevealOnView } from '@/components/RevealOnView';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { StoreCtas } from '@/components/StoreCtas';
import { homeVisual } from '@/content/about';
import { homePage } from '@/content/pages';
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
        <section className="bg-[var(--cp-bg)]" aria-labelledby="hero-heading">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_minmax(220px,340px)]">
              <div>
                <RevealOnView>
                  <p className="hero-eyebrow">{site.tagline}</p>
                </RevealOnView>
                <RevealOnView delayMs={60}>
                  <h1 id="hero-heading" className="hero-headline max-w-3xl">
                    <HeroHeadline />
                  </h1>
                </RevealOnView>
                <RevealOnView delayMs={100}>
                  <p className="hero-sub">{site.hero.sub}</p>
                </RevealOnView>
                <RevealOnView delayMs={140}>
                  <div className="hero-cta-row flex-col sm:flex-row">
                    <StoreCtas />
                  </div>
                </RevealOnView>
                <RevealOnView delayMs={180}>
                  <p className="hero-social-proof">
                    <span>
                      <strong>Support, partnerships, or early access?</strong>{' '}
                      <Link href="/contact" className="link-cp">
                        Go to contact
                      </Link>
                      .
                    </span>
                  </p>
                </RevealOnView>
              </div>
              <RevealOnView delayMs={120}>
                <MediaPlaceholder
                  ratio="9/16"
                  label="App preview — add phone screenshot or short loop"
                  hint="Aligns with the native UI: discovery, chat, or CareSpace."
                  className="mx-auto max-w-[280px] lg:mx-0 lg:max-w-none"
                />
              </RevealOnView>
            </div>
          </div>
        </section>

        <section
          className="border-t border-[var(--cp-border)] bg-[var(--cp-surface-muted)] py-16 sm:py-20"
          aria-labelledby="visual-strip-heading">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <RevealOnView>
              <h2 id="visual-strip-heading" className="text-2xl font-semibold">
                {homeVisual.title}
              </h2>
            </RevealOnView>
            <RevealOnView delayMs={50}>
              <p className="mt-3 max-w-3xl text-[var(--cp-ink-muted)]">{homeVisual.intro}</p>
            </RevealOnView>
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {homeVisual.frames.map((frame, i) => (
                <li key={frame.id}>
                  <RevealOnView delayMs={i * 60}>
                    <MediaPlaceholder ratio="16/9" label={frame.label} hint="PNG or WebP from the app build." />
                  </RevealOnView>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-[var(--cp-border)] bg-[var(--cp-bg)] py-16 sm:py-20" aria-labelledby="explore-heading">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <RevealOnView>
              <h2 id="explore-heading" className="text-2xl font-semibold">
                {homePage.exploreTitle}
              </h2>
            </RevealOnView>
            <RevealOnView delayMs={40}>
              <p className="mt-3 max-w-2xl text-[var(--cp-ink-muted)]">{homePage.exploreIntro}</p>
            </RevealOnView>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {homePage.cards.map((card, i) => (
                <li key={card.href}>
                  <RevealOnView delayMs={i * 50}>
                    <Link
                      href={card.href}
                      className="card cp-explore-card flex h-full flex-col no-underline focus-visible:outline focus-visible:outline-[2.5px] focus-visible:outline-offset-[3px] focus-visible:outline-[var(--cp-focus-ring)]">
                      <h3 className="card-title text-[var(--cp-primary)]">{card.title}</h3>
                      <p className="card-body mt-2 flex-1">{card.description}</p>
                      <span className="link-cp mt-4 inline-block text-sm font-medium">Read more</span>
                    </Link>
                  </RevealOnView>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
