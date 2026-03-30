import Image from 'next/image';
import Link from 'next/link';

import { site } from '@/lib/site';

type Props = {
  /** `header` tightens size for the sticky nav */
  variant?: 'header' | 'footer' | 'hero';
  className?: string;
  /** If false, omit the wordmark text (mark only) */
  showWordmark?: boolean;
};

const sizes = {
  header: { mark: 36, word: 'text-lg font-semibold text-[var(--cp-ink)]' as const },
  footer: { mark: 40, word: 'text-base font-semibold text-[var(--cp-ink)]' as const },
  hero: { mark: 48, word: 'text-xl font-semibold text-[var(--cp-ink)]' as const },
};

/**
 * Uses `public/brand/logo-mark.svg` — keep in sync with `brand/logo-mark.svg` and the mobile `LogoMark` component.
 */
export function BrandLogo({
  variant = 'header',
  className = '',
  showWordmark = true,
}: Props) {
  const { mark, word } = sizes[variant];
  const inner = (
    <span className={`inline-flex items-center gap-2.5 ${className}`.trim()}>
      <Image
        src="/brand/logo-mark.svg"
        alt=""
        width={mark}
        height={mark}
        priority={variant === 'header'}
        className="shrink-0 rounded-[10px]"
      />
      {showWordmark ? <span className={`tracking-tight ${word}`}>{site.name}</span> : null}
    </span>
  );

  if (variant === 'header') {
    return (
      <Link href="/" className="focus-ring-cp inline-flex items-center rounded-sm">
        {inner}
      </Link>
    );
  }

  return inner;
}
