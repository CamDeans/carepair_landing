'use client';

import { useCallback, useMemo, useState } from 'react';

import { CONTACT_INQUIRY_TOPICS, site } from '@/lib/site';

const copy = site.contact;

function isValidOptionalEmail(value: string): boolean {
  const v = value.trim();
  if (!v) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function isValidRequiredEmail(value: string): boolean {
  const v = value.trim();
  if (!v) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

type Props = {
  contactApiConfigured: boolean;
  contactEmail: string | null;
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactInquiryForm({ contactApiConfigured, contactEmail }: Props) {
  const [topicId, setTopicId] = useState<(typeof CONTACT_INQUIRY_TOPICS)[number]['id']>(
    CONTACT_INQUIRY_TOPICS[0].id,
  );
  const [name, setName] = useState('');
  const [replyEmail, setReplyEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [deliveryId, setDeliveryId] = useState<string | null>(null);

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
  const emailOkOptional = isValidOptionalEmail(replyEmail);
  const emailOkRequired = isValidRequiredEmail(replyEmail);

  const canSubmitMailto = Boolean(contactEmail && mailtoHref && messageOk && emailOkOptional);
  const canSubmitApi = Boolean(messageOk && emailOkRequired && honeypot.trim() === '');

  const submitViaApi = useCallback(async () => {
    setTouched(true);
    if (!canSubmitApi || honeypot.trim() !== '') return;

    setStatus('submitting');
    setDeliveryId(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: topicId,
          name: name.trim() || undefined,
          replyEmail: replyEmail.trim(),
          message: message.trim(),
          company: honeypot,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        code?: string;
        id?: string | null;
      };

      if (res.status === 503 && data.code === 'NOT_CONFIGURED' && contactEmail && mailtoHref && canSubmitMailto) {
        window.location.href = mailtoHref;
        setStatus('idle');
        return;
      }

      if (res.ok && data.ok) {
        setDeliveryId(typeof data.id === 'string' ? data.id : null);
        setStatus('success');
        return;
      }

      setStatus('error');
    } catch {
      setStatus('error');
    }
  }, [
    canSubmitApi,
    canSubmitMailto,
    contactEmail,
    honeypot,
    mailtoHref,
    message,
    name,
    replyEmail,
    topicId,
  ]);

  const resetAfterSuccess = useCallback(() => {
    setStatus('idle');
    setTouched(false);
    setDeliveryId(null);
    setMessage('');
    setTopicId(CONTACT_INQUIRY_TOPICS[0].id);
  }, []);

  const clearErrorIfNeeded = useCallback(() => {
    if (status === 'error') setStatus('idle');
  }, [status]);

  if (!contactApiConfigured && !contactEmail) {
    return (
      <div className="card card-static rounded-[var(--cp-radius-lg)] border border-[var(--cp-border-strong)] px-6 py-6">
        <p className="card-title">{copy.noChannelTitle}</p>
        <p className="card-body mt-2">{copy.noChannelBody}</p>
      </div>
    );
  }

  const showMailtoPath = !contactApiConfigured;
  const emailLabel = showMailtoPath ? copy.formEmailLabelOptional : copy.formEmailLabel;
  const emailValidForMode = showMailtoPath ? emailOkOptional : emailOkRequired;
  const formHint = showMailtoPath ? copy.formHintMailto : copy.formHintApi;
  const submitLabel = showMailtoPath ? copy.formSubmitLabelMailto : copy.formSubmitLabelApi;

  return (
    <div className="card card-static rounded-[var(--cp-radius-lg)] p-6 sm:p-8">
      {status === 'success' ? (
        <div className="space-y-4" role="status" aria-live="polite">
          <p className="card-title">{copy.formSuccessTitle}</p>
          <p className="card-body text-[var(--cp-ink-muted)]">{copy.formSuccessBody}</p>
          {deliveryId ? (
            <p className="text-xs text-[var(--cp-ink-subtle)]">Reference: {deliveryId}</p>
          ) : null}
          <button type="button" className="btn btn-secondary" onClick={resetAfterSuccess}>
            {copy.formSendAnotherLabel}
          </button>
        </div>
      ) : (
        <form
          className="relative space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            setTouched(true);
            if (contactApiConfigured) {
              if (canSubmitApi) void submitViaApi();
              return;
            }
            if (canSubmitMailto && mailtoHref) {
              window.location.href = mailtoHref;
            }
          }}
          noValidate>
          {status === 'error' ? (
            <div
              className="rounded-[var(--cp-radius-md)] border border-[var(--cp-error)]/35 bg-[var(--cp-error)]/8 px-4 py-3 text-sm text-[var(--cp-ink)]"
              role="alert">
              <p>{copy.formErrorBody}</p>
              <button type="button" className="btn btn-primary btn-sm mt-3" onClick={() => void submitViaApi()}>
                {copy.formResendLabel}
              </button>
            </div>
          ) : null}

          <div className="absolute -left-[10000px] h-0 w-0 overflow-hidden" aria-hidden="true">
            <label htmlFor="contact-company">Company</label>
            <input
              id="contact-company"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="inquiry-topic" className="cp-label">
              {copy.formTopicLabel}
            </label>
            <select
              id="inquiry-topic"
              name="topic"
              value={topicId}
              onChange={(e) => {
                clearErrorIfNeeded();
                setTopicId(e.target.value as typeof topicId);
              }}
              className="input-cp mt-2"
              disabled={status === 'submitting'}>
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
              onChange={(e) => {
                clearErrorIfNeeded();
                setName(e.target.value);
              }}
              className="input-cp mt-2"
              disabled={status === 'submitting'}
            />
          </div>

          <div>
            <label htmlFor="inquiry-email" className="cp-label">
              {emailLabel}
            </label>
            <p className="mt-1 text-xs text-[var(--cp-ink-muted)]">{copy.formEmailHelp}</p>
            <input
              id="inquiry-email"
              name="replyEmail"
              type="email"
              autoComplete="email"
              inputMode="email"
              value={replyEmail}
              onChange={(e) => {
                clearErrorIfNeeded();
                setReplyEmail(e.target.value);
              }}
              className={`input-cp mt-2 ${
                touched && !emailValidForMode ? '!border-[var(--cp-error)]' : ''
              }`}
              disabled={status === 'submitting'}
              required={!showMailtoPath}
            />
            {touched && !emailValidForMode ? (
              <p className="mt-1 text-xs text-[var(--cp-error)]" role="alert">
                {showMailtoPath ? copy.validationEmail : copy.validationEmailRequired}
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
              onChange={(e) => {
                clearErrorIfNeeded();
                setMessage(e.target.value);
              }}
              placeholder={copy.formMessagePlaceholder}
              className={`input-cp mt-2 min-h-[120px] resize-y ${
                touched && !messageOk ? '!border-[var(--cp-error)]' : ''
              }`}
              disabled={status === 'submitting'}
            />
            {touched && !messageOk ? (
              <p className="mt-1 text-xs text-[var(--cp-error)]" role="alert">
                {copy.validationShort}
              </p>
            ) : null}
          </div>

          <p className="text-xs text-[var(--cp-ink-muted)]">{formHint}</p>

          <button
            type="submit"
            className="btn btn-primary w-full sm:w-auto"
            disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : submitLabel}
          </button>
        </form>
      )}
    </div>
  );
}
