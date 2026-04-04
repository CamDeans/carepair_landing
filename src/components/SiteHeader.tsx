import Link from 'next/link';

import { BrandLogo } from '@/components/BrandLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { site } from '@/lib/site';

const nav = [
  { href: '/product', label: 'Product' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
] as const;

export function SiteHeader() {
  return (
    <header className="header-cp sticky top-0 z-20">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <BrandLogo variant="header" />
        <nav
          aria-label="Main"
          className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium sm:gap-x-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="cp-nav-link text-[var(--cp-ink-muted)] pb-0.5">
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
        <p className="w-full text-xs font-medium text-[var(--cp-ink-muted)] sm:w-auto sm:text-right">{site.icp}</p>
      </div>
    </header>
  );
}
