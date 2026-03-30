'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger with siblings (ms). Respects reduced motion via CSS. */
  delayMs?: number;
};

/**
 * Fades/slides content in when it enters the viewport. Spec: ~380ms, translateY 12px → 0, ease-out.
 */
export function RevealOnView({ children, className = '', delayMs = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`cp-reveal ${visible ? 'cp-reveal--visible' : ''} ${className}`.trim()}
      style={delayMs > 0 ? { transitionDelay: visible ? `${delayMs}ms` : '0ms' } : undefined}>
      {children}
    </div>
  );
}
