import Link from 'next/link';

import { BrandLogo } from '@/components/BrandLogo';
import { site, storeLinks } from '@/lib/site';

const footerLink = 'cp-nav-link text-[var(--cp-ink-muted)] pb-0.5';

export function SiteFooter() {
  const { contact } = storeLinks();
  const year = new Date().getFullYear();

  return (
    <footer className="footer-cp py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <BrandLogo variant="footer" />
            <p className="mt-3 max-w-sm text-sm text-[var(--cp-ink-muted)]">{site.nativeProduct}</p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/product" className={footerLink}>
              Product
            </Link>
            <Link href="/about" className={footerLink}>
              About
            </Link>
            <Link href="/pricing" className={footerLink}>
              Pricing
            </Link>
            <Link href="/contact" className={footerLink}>
              Contact &amp; early access
            </Link>
            <Link href="/privacy" className={footerLink}>
              Privacy policy
            </Link>
            <Link href="/terms" className={footerLink}>
              Terms of use
            </Link>
            {contact ? (
              <a href={`mailto:${contact}`} className={footerLink}>
                {contact}
              </a>
            ) : null}
          </div>
        </div>
        <p className="mt-10 border-t border-[var(--cp-border)] pt-8 text-xs text-[var(--cp-ink-muted)]">
          © {year} {site.legalEntity}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
