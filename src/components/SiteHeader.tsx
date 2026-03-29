import Link from 'next/link';

import { site } from '@/lib/site';

const nav = [
  { href: '/#features', label: 'Product' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-ink-muted/15 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-primary-dark">
          {site.name}
        </Link>
        <nav aria-label="Main" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-ink-muted">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-primary-dark">
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="w-full text-xs font-medium uppercase tracking-wide text-ink-muted sm:w-auto sm:text-right">{site.icp}</p>
      </div>
    </header>
  );
}
