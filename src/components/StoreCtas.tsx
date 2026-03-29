import { storeLinks } from '@/lib/site';

function StoreLink({
  href,
  children,
  'aria-label': ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  'aria-label': string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-[48px] min-w-[200px] items-center justify-center rounded-xl bg-ink px-8 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      aria-label={ariaLabel}>
      {children}
    </a>
  );
}

export function StoreCtas() {
  const { appStore, playStore } = storeLinks();

  if (appStore && playStore) {
    return (
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <StoreLink href={appStore} aria-label="Download CarePair on the App Store">
          Download for iPhone
        </StoreLink>
        <StoreLink href={playStore} aria-label="Download CarePair on Google Play">
          Download for Android
        </StoreLink>
      </div>
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
    <div className="max-w-xl rounded-2xl border border-ink-muted/25 bg-surface px-6 py-5 shadow-sm">
      <p className="font-semibold text-ink">iOS & Android apps</p>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        Public store listings are being finalized. If you are a family or caregiver interested in early access, use the
        contact email below — we respond from the same address we use for support.
      </p>
    </div>
  );
}
