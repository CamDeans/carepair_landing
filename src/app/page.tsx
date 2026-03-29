import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { StoreCtas } from '@/components/StoreCtas';
import { site, storeLinks } from '@/lib/site';

export default function HomePage() {
  const { contact } = storeLinks();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1" id="main">
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24" aria-labelledby="hero-heading">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">{site.tagline}</p>
          <h1 id="hero-heading" className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            {site.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">{site.hero.sub}</p>

          <div className="mt-10 space-y-6">
            <StoreCtas />
            {contact ? (
              <p className="text-sm text-ink-muted">
                <span className="font-medium text-ink">Support &amp; partnerships:</span>{' '}
                <a
                  className="text-primary underline-offset-4 hover:underline"
                  href={`mailto:${contact}?subject=CarePair%20inquiry`}>
                  {contact}
                </a>
              </p>
            ) : null}
          </div>
        </section>

        <section className="border-y border-ink-muted/15 bg-surface py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-ink">Why CarePair exists</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-ink-muted">{site.problem}</p>
            <p className="mt-4 max-w-3xl font-medium leading-relaxed text-ink">{site.solution}</p>
            <ul className="mt-8 space-y-3">
              {site.trust.map((line) => (
                <li key={line} className="flex gap-3 text-sm text-ink-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm font-medium text-ink-muted">{site.nativeProduct}</p>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-5xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-bold text-ink">Inside the app</h2>
          <p className="mt-2 max-w-2xl text-sm text-ink-muted">
            Everything below is available in the native apps after you create an account.
          </p>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {site.features.map((f) => (
              <li key={f.title} className="rounded-2xl border border-ink-muted/20 bg-surface p-6 shadow-sm">
                <h3 className="font-bold text-primary-dark">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="pricing" className="scroll-mt-24 bg-primary-dark py-16 text-white sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold">Pricing</h2>
            <p className="mt-4 max-w-2xl text-white/90 leading-relaxed">
              <span className="font-semibold text-white">{site.pricing.familyMonthly}</span> for the family subscription,
              following a <span className="font-semibold">{site.pricing.trial}</span>. {site.pricing.caregiver}.
            </p>
            <p className="mt-4 max-w-2xl text-sm text-white/75 leading-relaxed">{site.pricing.note}</p>
            <p className="mt-6 text-xs text-white/60">
              Apple App Store and Google Play may process certain purchases according to their policies. Nothing on this
              page overrides the in-app purchase or checkout disclosures you see before paying.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
