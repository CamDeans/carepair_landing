/**
 * Marketing copy per route — keep home lean; elaborate here so each page owns its narrative.
 * Shared facts (features list, pricing amounts) stay in `@/lib/site`.
 */

export const homePage = {
  exploreTitle: 'Learn more',
  exploreIntro:
    'Product, story & team, pricing, and contact each have their own page so you can go deep without scrolling a single long landing view.',
  cards: [
    {
      href: '/product',
      title: 'Product',
      description:
        'Why we built CarePair, how discovery and CareSpace work, and what you get in the native apps for families and caregivers.',
    },
    {
      href: '/about',
      title: 'About',
      description:
        'The story behind the product, team placeholders for real bios and photos, and testimonial slots for genuine community voices.',
    },
    {
      href: '/pricing',
      title: 'Pricing',
      description:
        'Family subscription, trial, how billing works, and what caregivers pay — with platform disclaimers spelled out.',
    },
    {
      href: '/contact',
      title: 'Contact',
      description:
        'Support, partnerships, early access, or press. Reach us through the contact form with topic routing and a clear confirmation or retry flow.',
    },
  ] as const,
} as const;

export const productPage = {
  title: 'Product',
  metaDescription:
    'CarePair product overview: relationship-first matching, messaging, CareSpace scheduling and notes, and native iOS & Android apps for Alberta families.',
  intro:
    'CarePair is a care marketplace built around relationships — not anonymous gig posts. Families and caregivers use native apps to discover each other, have structured conversations, and, when there is a mutual fit, coordinate ongoing care in a shared workspace called CareSpace.',
  missionTitle: 'What we are optimizing for',
  missionBody:
    'We believe the hardest part of arranging care is not posting a job — it is building enough context to trust someone with your routine, your children, and your communication style. CarePair keeps that context in one place so both sides can move deliberately from introduction to a working relationship.',
  problemTitle: 'The problem with scattered tools',
  problemLead:
    'Traditional listings, DMs, and group chats scatter trust signals, availability, and history across too many surfaces. Families burn time repeating themselves; caregivers lose the thread of what was agreed.',
  problemDetail:
    'That fragmentation makes it harder to compare candidates fairly, harder to onboard a new caregiver, and harder to resolve misunderstandings when schedules shift. CarePair is designed as a single native experience for the journey from first impression to confirmed shifts and shared notes.',
  solutionTitle: 'How CarePair helps',
  solutionLead:
    'Discovery stays profile-driven and location-aware so you can evaluate fit with the context that matters to you — not just a headline rate.',
  solutionDetail:
    'Messaging stays with the people you have chosen to connect with, so your care conversations are not mixed into unrelated threads. When both sides want to work together, CareSpace gives you a dedicated place for shifts, confirmations, and care notes — optional calendar links included so your primary calendar stays honest.',
  trustTitle: 'Principles behind the product',
  trustExtra: [
    'Calm, professional communication by default — we avoid noisy feeds and engagement tricks.',
    'You decide who you match and message with; discovery does not bypass your consent.',
    'Native apps let us align with platform expectations for sign-in, notifications, and payments where stores are involved.',
  ] as const,
  featuresPreamble:
    'Below is a capability-level view of what the apps are built to support after you create an account. Exact availability can evolve with releases; the in-app experience is always the source of truth.',
  nativeTitle: 'Where you actually use CarePair',
  nativeBody:
    'CarePair ships as native iOS and Android applications. This website is for learning and outreach only: you sign up, manage your profile, match, message, subscribe, and use CareSpace inside the apps. Store listings and in-app screens are the right place to verify current flows before you pay.',
  howItWorksTitle: 'How the journey typically flows',
  howItWorks: [
    {
      title: 'Profiles & discovery',
      body: 'Families and caregivers complete profiles with the context each side needs to evaluate fit. Discovery is built to surface relevant people — not to maximize endless swipes.',
    },
    {
      title: 'Connect & message',
      body: 'When there is mutual interest, you connect and keep introductions and follow-ups in a dedicated thread tied to that relationship.',
    },
    {
      title: 'CareSpace after alignment',
      body: 'When you agree to work together, CareSpace becomes the shared home for proposed shifts, confirmations, and care notes — with optional calendar integration for confirmed times.',
    },
    {
      title: 'Family subscription path',
      body: 'Families who continue past trial subscribe through the payment path presented in the app; caregivers use core matching and messaging without a parallel family subscription.',
    },
  ] as const,
} as const;

export const pricingPage = {
  title: 'Pricing',
  metaDescription:
    'CarePair pricing for families: monthly subscription after trial, caregiver access, billing notes, and App Store / Google Play disclaimers.',
  intro:
    'Pricing on CarePair is intentionally simple at a high level: families subscribe after a trial when both sides are ready to move forward; caregivers are not charged a parallel subscription for core matching and messaging. The app always shows the exact checkout experience, currency, and renewal rules before you pay.',
  familyTitle: 'Family subscription',
  familyLead:
    'The family plan is billed to the family account through our payment provider when you complete purchase in the app.',
  familyBullets: [
    'Monthly subscription after the trial period shown in the product.',
    'Access is managed inside the app for the family account that completes purchase.',
    'Exact price, tax treatment, and renewal cadence appear at checkout and in platform receipts.',
  ] as const,
  caregiverTitle: 'Caregivers',
  caregiverBody:
    'Caregivers use core matching and messaging without a CarePair subscription fee parallel to the family plan. If we introduce optional paid caregiver features in the future, they will be disclosed in-app before any charge.',
  trialTitle: 'Trial',
  trialBody:
    'Families see a clear trial window in the product before a subscription begins. If you cancel during the trial according to the rules shown in the app and by the store, you should not be charged for that period — follow the store and in-app instructions for your account.',
  platformsTitle: 'App Store & Google Play',
  platformsBody:
    'When you subscribe through Apple or Google, those companies may apply their own terms, receipt flows, and refund policies. Nothing on this website overrides what you see at purchase time in the app or on the store.',
  transparencyTitle: 'Transparency',
  transparencyBody:
    'We do not use this marketing site to collect payment credentials. If something on the web asks for card details and claims to be CarePair outside the official apps or a future counsel-approved flow, treat it as suspicious and use only the paths we publish in store listings and official communications.',
  faqTitle: 'Common questions',
  faq: [
    {
      q: 'Is the price on this page guaranteed?',
      a: 'This page summarizes how pricing is structured. The authoritative numbers and terms are always those shown in the app and at checkout, which can be updated for taxes, regions, or product changes.',
    },
    {
      q: 'Do caregivers pay to be listed?',
      a: 'Core matching and messaging for caregivers is not sold as a separate subscription today. Future optional add-ons, if any, would be presented clearly before purchase.',
    },
    {
      q: 'Who do I contact about a billing issue?',
      a: 'Use the contact page with topic “Product support” for general questions. For charges processed by Apple or Google, their support channels may also apply depending on how you subscribed.',
    },
  ] as const,
} as const;

export const contactPage = {
  metaDescription:
    'Contact CarePair for support, partnerships, early access, or press. Choose a topic and send a message securely, or open a mail draft when the site is on the lightweight path.',
  introTitle: 'Before you write',
  introBodyMailto:
    'This deployment uses the mail-app path: the form prepares a draft in your default mail client with your topic and message. Nothing leaves your device until you send from that app.',
  introBodyApi:
    'The form below sends your message securely to our monitored inbox. You will see a confirmation here, and you can retry if delivery fails or send another note when needed.',
  introBullets: [
    'Pick the topic that best matches your note so we can route it internally.',
    'Include enough detail for a human to act on (partnership ideas, timelines, or support context).',
    'Use an email address you check regularly so we can reply.',
  ] as const,
} as const;
