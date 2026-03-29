import Link from 'next/link';

import { site, storeLinks } from '@/lib/site';

export function SiteFooter() {
  const { contact } = storeLinks();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-muted/15 bg-canvas py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="font-bold text-ink">{site.name}</p>
            <p className="mt-2 max-w-sm text-sm text-ink-muted">{site.nativeProduct}</p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/privacy" className="text-ink-muted hover:text-primary-dark">
              Privacy policy
            </Link>
            <Link href="/terms" className="text-ink-muted hover:text-primary-dark">
              Terms of use
            </Link>
            {contact ? (
              <a href={`mailto:${contact}`} className="text-ink-muted hover:text-primary-dark">
                {contact}
              </a>
            ) : null}
          </div>
        </div>
        <p className="mt-10 border-t border-ink-muted/15 pt-8 text-xs text-ink-muted">
          © {year} {site.legalEntity}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
