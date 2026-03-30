import type { Metadata } from 'next';

import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of use',
  description: `Terms governing use of the ${site.name} marketing website. App terms are presented in the mobile product.`,
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <article className="mx-auto max-w-3xl flex-1 px-4 py-12 sm:px-6 sm:py-16" id="main">
        <h1 className="text-3xl font-semibold">Terms of use</h1>
        <p className="mt-2 text-sm font-medium text-[var(--cp-primary)]">Last updated: March 29, 2026</p>

        <div className="mt-8 max-w-none space-y-3 text-sm leading-relaxed text-[var(--cp-ink-muted)]">
          <p className="notice-cp">
            <strong>Important:</strong> This is a <strong>draft template</strong>. Replace with counsel-approved terms
            before launch. In-app terms, end-user license agreements, and marketplace rules may be separate documents.
          </p>

          <h2 className="mt-10 text-lg font-semibold">Agreement</h2>
          <p className="mt-3">
            By accessing this website, you agree to these terms. If you do not agree, do not use the site. The {site.name}{' '}
            mobile applications are governed by separate terms presented in the app.
          </p>

          <h2 className="mt-10 text-lg font-semibold">Not professional advice</h2>
          <p className="mt-3">
            Content on this site is for general information. It is not medical, legal, or financial advice. Care decisions
            remain your responsibility.
          </p>

          <h2 className="mt-10 text-lg font-semibold">No warranty</h2>
          <p className="mt-3">
            The site is provided &quot;as is&quot; without warranties of any kind. We do not guarantee uninterrupted or
            error-free operation.
          </p>

          <h2 className="mt-10 text-lg font-semibold">Limitation of liability</h2>
          <p className="mt-3">
            To the maximum extent permitted by law, {site.legalEntity} and its affiliates are not liable for indirect or
            consequential damages arising from use of this website. Your counsel should tune this section for your
            jurisdiction.
          </p>

          <h2 className="mt-10 text-lg font-semibold">Subscriptions and payments</h2>
          <p className="mt-3">
            Fees, trials, and renewals for {site.name} are described in the app and checkout flows. App Store and Google
            Play may apply additional terms when you purchase through those platforms.
          </p>

          <h2 className="mt-10 text-lg font-semibold">Changes</h2>
          <p className="mt-3">We may update these terms. The &quot;Last updated&quot; date will change when we do.</p>
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}
