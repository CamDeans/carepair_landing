/**
 * CarePair marketing copy — keep aligned with the native app product (see monorepo `mobile/` and scope doc).
 * Store URLs and contact come from env (`NEXT_PUBLIC_*`).
 */

export const site = {
  name: 'CarePair',
  legalEntity: 'CarePair', // Replace with operating legal name after incorporation
  tagline: 'Relationship-first childcare matching',
  icp: 'Built in Calgary · serving Alberta families first',
  hero: {
    headline: 'Find care through relationships — not anonymous gig posts.',
    sub:
      'CarePair helps families and caregivers discover each other, talk in one place, and coordinate schedules and notes in CareSpace once you decide to work together.',
  },
  pricing: {
    familyMonthly: '$19.99 CAD / month',
    trial: '7-day trial for families',
    caregiver: 'Caregivers use core matching and messaging at no charge',
    note:
      'Subscription is billed to the family account through our payment provider when both sides agree to move forward. Exact terms are shown in the app before you pay.',
  },
  problem:
    'Traditional listings and group chats scatter trust, availability, and history across too many tools. Families burn time; caregivers lose context.',
  solution:
    'CarePair keeps discovery, conversation, and shared scheduling in one native experience — so you can focus on fit, safety, and continuity of care.',
  nativeProduct:
    'CarePair is delivered as native iOS and Android apps. This website is for information only — you sign up and subscribe inside the app.',
  features: [
    {
      title: 'Thoughtful discovery',
      body: 'Location-aware profiles with the context families and caregivers need to evaluate fit — not a blind swipe factory.',
    },
    {
      title: 'In-app messaging',
      body: 'Keep introductions and ongoing coordination in one thread with the people you have matched with.',
    },
    {
      title: 'CareSpace',
      body: 'After you connect, share shifts, confirmations, and care notes in a dedicated workspace for your match.',
    },
    {
      title: 'Scheduling you can trust',
      body: 'Families propose times; caregivers confirm or request changes so expectations stay explicit.',
    },
    {
      title: 'Google Calendar (optional)',
      body: 'Link Google Calendar so confirmed shifts can appear on the primary calendars you already use.',
    },
    {
      title: 'Family subscription',
      body: 'Stripe-backed billing for the family plan after trial, with access managed inside the app.',
    },
  ],
  trust: [
    'We design for calm, professional communication — not noisy feeds.',
    'You control who you match and message with.',
    'Native apps allow us to meet platform security and notification standards.',
  ],
} as const;

export function storeLinks() {
  return {
    appStore: process.env.NEXT_PUBLIC_APP_STORE_URL?.trim() || '',
    playStore: process.env.NEXT_PUBLIC_PLAY_STORE_URL?.trim() || '',
    contact: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || '',
  };
}
