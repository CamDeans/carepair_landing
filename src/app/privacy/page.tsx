import type { Metadata } from 'next';

import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: `How ${site.name} handles information on this marketing website and how the mobile apps treat your data at a high level.`,
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <article className="mx-auto max-w-3xl flex-1 px-4 py-12 sm:px-6 sm:py-16" id="main">
        <h1 className="text-3xl font-bold text-ink">Privacy policy</h1>
        <p className="mt-2 text-sm font-medium text-primary">Last updated: March 29, 2026</p>

        <div className="mt-8 max-w-none space-y-3 text-sm leading-relaxed text-ink-muted">
          <p className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-ink">
            <strong>Important:</strong> This is a <strong>draft template</strong> for a marketing site and product overview.
            It is <strong>not legal advice</strong>. Have qualified privacy counsel review and replace this text before you
            collect personal data at scale or run paid acquisition.
          </p>

          <h2 className="mt-10 text-lg font-bold text-ink">Who we are</h2>
          <p className="mt-3">
            {site.name} ({site.legalEntity}) operates native mobile applications and may operate this website to describe
            the service. The mobile apps are the primary place where accounts, profiles, messaging, and payments are
            handled.
          </p>

          <h2 className="mt-10 text-lg font-bold text-ink">What this site collects</h2>
          <p className="mt-3">
            This marketing website may use standard server and analytics logs (for example IP address, user agent, and
            pages viewed) as configured by your hosting provider (such as Vercel). If you add analytics or cookies, list
            them here with purpose and retention.
          </p>

          <h2 className="mt-10 text-lg font-bold text-ink">What the apps collect (summary)</h2>
          <p className="mt-3">
            The {site.name} apps are designed to operate accounts, profiles, location used for discovery, messages between
            matched users, scheduling and care notes within CareSpace, and payment-related data processed by our payment
            provider. A complete statement must list categories, purposes, legal bases (where GDPR/PIPEDA apply),
            subprocessors, retention, and user rights.
          </p>

          <h2 className="mt-10 text-lg font-bold text-ink">Children</h2>
          <p className="mt-3">
            {site.name} is a tool for adults arranging care. Do not use the service in a way that violates child-privacy
            laws. Your final policy should spell out age limits and parental roles clearly.
          </p>

          <h2 className="mt-10 text-lg font-bold text-ink">Contact</h2>
          <p className="mt-3">
            For privacy requests, publish a dedicated email or web form after counsel review. Until then, use the contact
            address published on the home page when configured.
          </p>
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}
