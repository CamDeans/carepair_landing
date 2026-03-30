import type { Metadata } from 'next';
import Link from 'next/link';

import { MediaPlaceholder } from '@/components/MediaPlaceholder';
import { RevealOnView } from '@/components/RevealOnView';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { aboutPage } from '@/content/about';

export const metadata: Metadata = {
  title: aboutPage.title,
  description: aboutPage.metaDescription,
};

export default function AboutPage() {
  const testimonialIndices = Array.from({ length: aboutPage.testimonials.slots }, (_, i) => i);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1" id="main">
        <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
          <RevealOnView>
            <h1 className="text-3xl font-semibold">{aboutPage.title}</h1>
          </RevealOnView>

          <section className="mt-14" aria-labelledby="story-heading">
            <div className="grid gap-10 lg:grid-cols-[1fr_minmax(240px,320px)] lg:items-start">
              <div>
                <RevealOnView delayMs={60}>
                  <h2 id="story-heading" className="text-xl font-semibold">
                    {aboutPage.story.title}
                  </h2>
                </RevealOnView>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-[var(--cp-ink-muted)]">
                  {aboutPage.story.paragraphs.map((p, i) => (
                    <RevealOnView key={i} delayMs={80 + i * 40}>
                      <p>{p}</p>
                    </RevealOnView>
                  ))}
                </div>
              </div>
              <RevealOnView delayMs={120}>
                <MediaPlaceholder
                  ratio="4/5"
                  label="About — add founder or team photo"
                  hint="Replace with a real image when available."
                />
              </RevealOnView>
            </div>
          </section>

          <section className="mt-20 border-t border-[var(--cp-border)] pt-16" aria-labelledby="team-heading">
            <RevealOnView>
              <h2 id="team-heading" className="text-xl font-semibold">
                {aboutPage.team.title}
              </h2>
            </RevealOnView>
            <RevealOnView delayMs={40}>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--cp-ink-muted)]">
                {aboutPage.team.intro}
              </p>
            </RevealOnView>
            <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {aboutPage.team.slots.map((slot, i) => (
                <li key={slot.id}>
                  <RevealOnView delayMs={i * 70}>
                    <div className="card flex flex-col gap-4">
                      <MediaPlaceholder
                        ratio="4/5"
                        label={`${slot.roleLabel} — photo slot`}
                        hint="Drop in a headshot when you have one."
                      />
                      <div>
                        <p className="text-sm font-semibold text-[var(--cp-ink)]">{slot.roleLabel}</p>
                        <p className="mt-1 text-sm text-[var(--cp-ink-muted)]">{slot.caption}</p>
                      </div>
                    </div>
                  </RevealOnView>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-20 border-t border-[var(--cp-border)] pt-16" aria-labelledby="testimonials-heading">
            <RevealOnView>
              <h2 id="testimonials-heading" className="text-xl font-semibold">
                {aboutPage.testimonials.title}
              </h2>
            </RevealOnView>
            <RevealOnView delayMs={40}>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--cp-ink-muted)]">
                {aboutPage.testimonials.intro}
              </p>
            </RevealOnView>
            <ul className="mt-10 grid gap-8 md:grid-cols-2">
              {testimonialIndices.map((i) => (
                <li key={i}>
                  <RevealOnView delayMs={i * 80}>
                    <div
                      className="card card-static card-soft flex flex-col gap-4 border-dashed border-[var(--cp-border-strong)]"
                      role="region"
                      aria-label={`Testimonial slot ${i + 1}`}>
                      <MediaPlaceholder
                        ratio="1/1"
                        className="!max-w-[88px] !rounded-full"
                        label={`Testimonial ${i + 1} — optional portrait`}
                        hint="Optional; use only with permission."
                      />
                      <p className="text-sm leading-relaxed text-[var(--cp-ink-muted)]">
                        {aboutPage.testimonials.slotNote}
                      </p>
                      <p className="text-xs text-[var(--cp-ink-subtle)]">{aboutPage.testimonials.slotMeta}</p>
                    </div>
                  </RevealOnView>
                </li>
              ))}
            </ul>
            <RevealOnView delayMs={100}>
              <p className="mt-10">
                <Link href={aboutPage.testimonials.ctaHref} className="btn btn-secondary btn-sm">
                  {aboutPage.testimonials.ctaLabel}
                </Link>
              </p>
            </RevealOnView>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
