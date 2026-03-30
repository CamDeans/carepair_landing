/**
 * Extended marketing-site legal copy (draft). Counsel must review before production use.
 * Kept separate from `lib/site.ts` so policy pages own their narrative.
 */

export const privacyPage = {
  metaDescription:
    'CarePair privacy overview: marketing site logs, mobile app data categories at a high level, children, and how to reach us — draft; not legal advice.',
  intro:
    'This page explains, at a high level, how information may be handled when you browse this website and when you use the CarePair mobile apps. It is not a substitute for a jurisdiction-complete privacy notice, data processing agreement, or counsel review.',
  whoWeAreExtra:
    'When you create an account or use product features, processing typically shifts to the applications and backend services that power matching, messaging, CareSpace, and billing. This policy section should eventually name the data controller, representative (if any), and registration details your counsel requires.',
  siteCollectsExtra:
    'If you embed third-party analytics, heatmaps, or advertising pixels, each tool needs its own disclosure: what it collects, why, lawful basis, retention, and opt-out. The contact form on this site prepares mailto drafts locally; it does not, by itself, store message content on our servers unless you later add server-side handling.',
  appsCollectExtra:
    'Expect to document: account identifiers, profile and preference fields, approximate or precise location (depending on permission), message content between matched users, shift and care-note metadata, device and diagnostic logs, and payment-related identifiers held by your payment processor. Cross-border transfers and subprocessors belong in a detailed notice.',
  retentionTitle: 'Retention (placeholder)',
  retentionBody:
    'Describe how long you keep each category of data and the criteria used to determine retention (for example, account lifetime plus a grace period, or legal hold). Align with backup and disaster-recovery practices.',
  rightsTitle: 'Your rights (placeholder)',
  rightsBody:
    'For regions with statutory rights (access, correction, deletion, portability, objection, restriction), list how users exercise them and any verification steps. Include appeal or regulator contact where required.',
  securityTitle: 'Security (high level)',
  securityBody:
    'Summarize administrative, technical, and organizational measures appropriate to risk — without making promises you cannot operationalize. Mobile platforms already impose baseline requirements for distribution; say how you handle incidents and notifications where law requires.',
  childrenExtra:
    'Clarify that the service is not directed to children as primary users, how parental or guardian involvement is expected, and how you treat information that may incidentally relate to minors in a care context.',
  contactExtra:
    'Publish a dedicated privacy inbox or ticket path after launch. Until then, the Contact page on this site is the appropriate place for general inquiries when a public address is configured.',
} as const;

export const termsPage = {
  metaDescription:
    'Terms for using the CarePair marketing website; in-app terms and store rules are separate. Draft — replace with counsel-approved text.',
  intro:
    'These terms apply to this informational website only. Using the CarePair iOS or Android apps may require accepting additional agreements shown at install, sign-up, or purchase.',
  acceptableUseTitle: 'Acceptable use',
  acceptableUseBody:
    'Do not misuse this site: no automated scraping that harms performance, no attempts to breach security, no transmission of unlawful or harmful content through any form we provide. We may suspend access that appears abusive or fraudulent.',
  ipTitle: 'Intellectual property',
  ipBody:
    'CarePair name, logos, and site content are protected by applicable intellectual property laws unless otherwise noted. You may not copy or redistribute materials except as allowed by law or with our written permission.',
  thirdPartyTitle: 'Third-party links',
  thirdPartyBody:
    'The site may link to app stores, documentation, or partners. Those services have their own terms and privacy practices; we are not responsible for their content or handling of your data.',
  disputeTitle: 'Governing law (placeholder)',
  disputeBody:
    'Your counsel should specify governing law, venue, and whether arbitration or class-action waivers apply — consistent with consumer protection rules in your markets.',
  subscriptionsExtra:
    'Trials convert to paid plans according to the rules shown in-app. Cancellations, refunds, and tax lines follow the checkout path and the policies of Apple, Google, or other processors where applicable.',
  changesExtra:
    'Material changes to website terms should be highlighted with an updated date and, where appropriate, a short summary of what changed. App terms may follow a separate change process required by platforms.',
} as const;
