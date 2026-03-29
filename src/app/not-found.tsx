import Link from 'next/link';

import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { site } from '@/lib/site';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto flex max-w-lg flex-1 flex-col justify-center px-4 py-20 sm:px-6" id="main">
        <p className="text-sm font-semibold text-primary">404</p>
        <h1 className="mt-2 text-2xl font-bold text-ink">Page not found</h1>
        <p className="mt-3 text-ink-muted">
          The page you requested is not part of this marketing site. Product features live in the {site.name} mobile apps.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex w-fit rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark">
          Back to home
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
