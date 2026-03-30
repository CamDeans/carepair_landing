import { ContactInquiryForm } from '@/components/ContactInquiryForm';
import { site, storeLinks } from '@/lib/site';

const copy = site.contact;

type Props = {
  /** Use `h1` on the dedicated `/contact` page; `h2` on the home page section. */
  headingLevel?: 'h1' | 'h2';
  /** `page` drops the top border (standalone `/contact` view). */
  variant?: 'default' | 'page';
};

export function ContactInquirySection({ headingLevel = 'h2', variant = 'default' }: Props) {
  const { contact } = storeLinks();
  const Heading = headingLevel;
  const topRule = variant === 'page' ? '' : 'border-t border-[var(--cp-border)]';

  return (
    <section
      id="contact"
      className={`scroll-mt-24 bg-[var(--cp-bg)] py-16 sm:py-20 ${topRule}`.trim()}
      aria-labelledby="contact-heading">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Heading id="contact-heading" className="text-2xl font-semibold">
          {copy.sectionTitle}
        </Heading>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--cp-ink-muted)]">{copy.sectionIntro}</p>
        <div className="mt-8 max-w-xl">
          <ContactInquiryForm contactEmail={contact || null} />
        </div>
      </div>
    </section>
  );
}
