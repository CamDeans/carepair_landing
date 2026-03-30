import { ContactInquiryForm } from '@/components/ContactInquiryForm';
import { isContactApiConfigured } from '@/lib/contactEnv';
import { site, storeLinks } from '@/lib/site';

const copy = site.contact;

type Props = {
  /** Use `h1` on the dedicated `/contact` page; `h2` on the home page section. */
  headingLevel?: 'h1' | 'h2';
  /** `page` drops the top border (standalone `/contact` view). */
  variant?: 'default' | 'page';
  /** When true, only the form is rendered (page already has title and intro above). */
  hideIntro?: boolean;
};

export function ContactInquirySection({
  headingLevel = 'h2',
  variant = 'default',
  hideIntro = false,
}: Props) {
  const contactApiConfigured = isContactApiConfigured();
  const { contact } = storeLinks();
  const Heading = headingLevel;
  const topRule = variant === 'page' ? '' : 'border-t border-[var(--cp-border)]';

  if (hideIntro) {
    return (
      <section id="contact" aria-label="Contact form">
        <h2 className="text-xl font-semibold">Your message</h2>
        <div className="mt-6 max-w-xl">
          <ContactInquiryForm contactApiConfigured={contactApiConfigured} contactEmail={contact || null} />
        </div>
      </section>
    );
  }

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
          <ContactInquiryForm contactApiConfigured={contactApiConfigured} contactEmail={contact || null} />
        </div>
      </div>
    </section>
  );
}
