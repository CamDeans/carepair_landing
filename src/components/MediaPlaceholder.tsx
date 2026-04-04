type Ratio = '16/9' | '4/5' | '1/1' | '9/16';

const ratioClass: Record<Ratio, string> = {
  '16/9': 'aspect-video',
  '4/5': 'aspect-[4/5]',
  '1/1': 'aspect-square',
  '9/16': 'aspect-[9/16]',
};

type Props = {
  /** Accessible name for the empty frame (e.g. "Team photo — add image"). */
  label: string;
  ratio?: Ratio;
  /** Optional short hint shown inside the frame. */
  hint?: string;
  className?: string;
};

/**
 * Dashed frame for future images (screenshots, headshots). Not a decorative image until you add `next/image`.
 */
export function MediaPlaceholder({ label, ratio = '16/9', hint, className = '' }: Props) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`cp-media-slot flex flex-col items-center justify-center gap-2 rounded-[var(--cp-radius-lg)] border-2 border-dashed border-[var(--cp-border-strong)] bg-[var(--cp-surface-muted)] text-center ${ratioClass[ratio]} w-full min-h-0 ${className}`.trim()}>
      <span className="max-w-[90%] px-3 text-xs font-medium leading-snug text-[var(--cp-ink-muted)]">{label}</span>
      {hint ? <span className="max-w-[90%] px-3 text-[11px] leading-snug text-[var(--cp-ink-subtle)]">{hint}</span> : null}
    </div>
  );
}
