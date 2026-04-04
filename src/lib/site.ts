/**
 * CarePair marketing copy — keep aligned with the native app product (see monorepo `mobile/` and scope doc).
 * Shared pricing, features, and trial length live in `brand/product-copy.ts` (imported below).
 * Store URLs and contact come from env (`NEXT_PUBLIC_*`).
 *
 * Parity checklist (consumer app, iOS & Android — same router/features unless a store blocks it):
 * Tabs: Discover · Messages · CareSpace · Saved · Settings.
 * Flows: onboarding → auth (email + optional Google) → family/caregiver profile setup → publish → discover (location,
 * like/pass/heart save) → match → messaging → meet-up proposals & scheduling → CareSpace (trial/subscription for
 * families: shifts, optional Google Calendar, care notes) · saved list · subscription & billing · notifications
 * prefs · help · community guidelines · data & privacy (export/delete paths as implemented).
 * Staff-only (not marketed here): staff portal, valued-tester persona, internal tools.
 */

import { marketingFeatures, productPricing } from '../../../brand/product-copy';

export const site = {
  name: 'CarePair',
  legalEntity: 'CarePair', // Replace with operating legal name after incorporation
  tagline: 'Relationship-first childcare matching',
  icp: 'Built in Calgary · serving Alberta families first',
  hero: {
    headline: 'Find care through relationships — not anonymous gig posts.',
    sub:
      'Native iOS and Android apps help families and caregivers discover each other (location-aware profiles), message after a mutual match, propose meet-ups, save profiles to revisit, and — when you agree to work together — run shifts and care notes in CareSpace (families: trial then subscription).',
  },
  pricing: {
    familyMonthly: productPricing.familyMonthlyCad,
    trial: productPricing.trialMarketingShort,
    caregiver: productPricing.caregiverNoChargeLine,
    note: productPricing.subscriptionNote,
  },
  problem:
    'Traditional listings and group chats scatter trust, availability, and history across too many tools. Families burn time; caregivers lose context.',
  solution:
    'CarePair keeps discovery, conversation, and shared scheduling in one native experience — so you can focus on fit, safety, and continuity of care.',
  nativeProduct:
    'CarePair is delivered as native iOS and Android apps. This website is for information only — you sign up and subscribe inside the app.',
  features: marketingFeatures,
  trust: [
    'We design for calm, professional communication — not noisy feeds.',
    'You control who you match and message with.',
    'Native apps allow us to meet platform security and notification standards.',
  ],
  contact: {
    sectionTitle: 'Support, partnerships & early access',
    sectionIntro:
      'Choose a topic and send your note. When secure delivery is configured for this site, your message goes straight to our inbox; otherwise the form opens a draft in your mail app — nothing sends until you confirm there.',
    formTopicLabel: 'Topic',
    formNameLabel: 'Name (optional)',
    formEmailLabel: 'Your email',
    formEmailLabelOptional: 'Your email (optional)',
    formEmailHelp:
      'Required when the site sends the message for you. Optional when you only open a draft in your own mail app.',
    formMessageLabel: 'Message',
    formMessagePlaceholder: 'How can we help?',
    formSubmitLabelApi: 'Send message',
    formSubmitLabelMailto: 'Open in email app',
    formHintApi:
      'Your message is delivered by our host to the inbox we monitor. If something fails, you can try again without retyping everything.',
    formHintMailto:
      'This deployment opens your email app with a pre-filled draft only. Nothing is transmitted from this page until you send from your mail client.',
    formSuccessTitle: 'Message sent',
    formSuccessBody:
      'Thanks — we received your note. If it is urgent, you can send another message below; please avoid duplicate threads when possible.',
    formErrorBody:
      'We could not deliver that just now. Check your connection and try again, or use the mail-app option if it is available.',
    formResendLabel: 'Try again',
    formSendAnotherLabel: 'Send another message',
    validationShort: 'Please add a bit more detail (at least 10 characters).',
    validationEmail: 'If you enter an email, use a valid address.',
    validationEmailRequired: 'Enter the email address you want us to reply to.',
    noChannelTitle: 'Contact is not configured yet',
    noChannelBody:
      'Add Resend and inbox environment variables for secure delivery, or set a public contact email for the mail-app draft flow. See landing/.env.example.',
  },
} as const;

/** Used by the contact inquiry form (client-safe labels). */
export const CONTACT_INQUIRY_TOPICS = [
  { id: 'support', label: 'Product support' },
  { id: 'partnership', label: 'Partnership or organization' },
  { id: 'early-access', label: 'Early access' },
  { id: 'press', label: 'Press or media' },
  { id: 'other', label: 'Other' },
] as const;

export function storeLinks() {
  return {
    appStore: process.env.NEXT_PUBLIC_APP_STORE_URL?.trim() || '',
    playStore: process.env.NEXT_PUBLIC_PLAY_STORE_URL?.trim() || '',
    contact: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || '',
  };
}
