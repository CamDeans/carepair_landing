'use client';

import { useMemo, useState } from 'react';

import { CONTACT_INQUIRY_TOPICS, site } from '@/lib/site';

const copy = site.contact;

function isValidOptionalEmail(value: string): boolean {
  const v = value.trim();
  if (!v) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

type Props = { contactEmail: string | null };

export function ContactInquiryForm({ contactEmail }: Props) {
  const [topicId, setTopicId] = useState<(typeof CONTACT_INQUIRY_TOPICS)[number]['id']>(
    CONTACT_INQUIRY_TOPICS[0].id,
  );
  const [name, setName] = useState('');
  const [replyEmail, setReplyEmail] = useState('');
  const [message, setMessage] = useState('');
  const [touched, setTouched] = useState(false);

  const topicLabel = useMemo(
    () => CONTACT_INQUIRY_TOPICS.find((t) => t.id === topicId)?.label ?? 'Inquiry',
    [topicId],
  );

  const mailtoHref = useMemo(() => {
    if (!contactEmail) return null;
    const subject = encodeURIComponent(`CarePair — ${topicLabel}`);
    const bodyLines = [
      message.trim() || '(No message text provided.)',
      '',
      '---',
      `Topic: ${topicLabel}`,
      name.trim() ? `Name: ${name.trim()}` : null,
      replyEmail.trim() ? `Reply-to: ${replyEmail.trim()}` : null,
    ];
    const body = encodeURIComponent(bodyLines.filter(Boolean).join('\n'));
    return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }, [contactEmail, topicLabel, message, name, replyEmail]);

  const messageOk = message.trim().length >= 10;
  const emailOk = isValidOptionalEmail(replyEmail);
  const canSend = Boolean(contactEmail && mailtoHref && messageOk && emailOk);

  if (!contactEmail) {
    return (
      <div className="card card-static rounded-[var(--cp-radius-lg)] border border-[var(--cp-border-strong)] px-6 py-6">
        <p className="card-title">{copy.noChannelTitle}</p>
        <p className="card-body mt-2">{copy.noChannelBody}</p>
      </div>
    );
  }

  return (
    <div className="card card-static rounded-[var(--cp-radius-lg)] p-6 sm:p-8">
      <form
        className="space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          setTouched(true);
          if (canSend && mailtoHref) {
            window.location.href = mailtoHref;
          }
        }}
        noValidate>
        <div>
          <label htmlFor="inquiry-topic" className="cp-label">
            {copy.formTopicLabel}
          </label>
          <select
            id="inquiry-topic"
            name="topic"
            value={topicId}
            onChange={(e) => setTopicId(e.target.value as typeof topicId)}
            className="input-cp mt-2">
            {CONTACT_INQUIRY_TOPICS.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="inquiry-name" className="cp-label">
            {copy.formNameLabel}
          </label>
          <input
            id="inquiry-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-cp mt-2"
          />
        </div>

        <div>
          <label htmlFor="inquiry-email" className="cp-label">
            {copy.formEmailLabel}
          </label>
          <p className="mt-1 text-xs text-[var(--cp-ink-muted)]">{copy.formEmailHelp}</p>
          <input
            id="inquiry-email"
            name="replyEmail"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={replyEmail}
            onChange={(e) => setReplyEmail(e.target.value)}
            className={`input-cp mt-2 ${
              touched && !emailOk ? '!border-[var(--cp-error)]' : ''
            }`}
          />
          {touched && !emailOk ? (
            <p className="mt-1 text-xs text-[var(--cp-error)]" role="alert">
              {copy.validationEmail}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="inquiry-message" className="cp-label">
            {copy.formMessageLabel}
          </label>
          <textarea
            id="inquiry-message"
            name="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={copy.formMessagePlaceholder}
            className={`input-cp mt-2 min-h-[120px] resize-y ${
              touched && !messageOk ? '!border-[var(--cp-error)]' : ''
            }`}
          />
          {touched && !messageOk ? (
            <p className="mt-1 text-xs text-[var(--cp-error)]" role="alert">
              {copy.validationShort}
            </p>
          ) : null}
        </div>

        <p className="text-xs text-[var(--cp-ink-muted)]">{copy.formHint}</p>

        <button type="submit" className="btn btn-primary w-full sm:w-auto">
          {copy.formSubmitLabel}
        </button>
      </form>
    </div>
  );
}
