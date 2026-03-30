import Link from 'next/link';

import { storeLinks } from '@/lib/site';

function StoreLink({
  href,
  children,
  variant = 'primary',
  'aria-label': ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  'aria-label': string;
}) {
  const cls = variant === 'secondary' ? 'btn btn-secondary' : 'btn btn-primary';
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cls}
      aria-label={ariaLabel}>
      {children}
    </a>
  );
}

export function StoreCtas() {
  const { appStore, playStore } = storeLinks();

  if (appStore && playStore) {
    return (
      <>
        <StoreLink href={appStore} aria-label="Download CarePair on the App Store">
          Download for iPhone
        </StoreLink>
        <StoreLink href={playStore} variant="secondary" aria-label="Download CarePair on Google Play">
          Download for Android
        </StoreLink>
      </>
    );
  }

  if (appStore) {
    return (
      <StoreLink href={appStore} aria-label="Download CarePair on the App Store">
        Download for iPhone
      </StoreLink>
    );
  }

  if (playStore) {
    return (
      <StoreLink href={playStore} aria-label="Download CarePair on Google Play">
        Download for Android
      </StoreLink>
    );
  }

  return (
    <div className="card card-static card-soft max-w-xl">
      <p className="card-title">iOS & Android apps</p>
      <p className="card-body mt-1">
        Public store listings are being finalized. Interested in early access or partnerships? Use the{' '}
        <Link href="/contact" className="link-cp">
          contact page
        </Link>{' '}
        so we can route your note correctly.
      </p>
    </div>
  );
}
