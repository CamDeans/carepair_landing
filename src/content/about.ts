/**
 * About, team, and testimonials — no fabricated quotes or names.
 * Calgary origin story reflects the client brief; slots are ready for real assets later.
 */

export const aboutPage = {
  title: 'About',
  metaDescription:
    'The story behind CarePair: care experience rooted in Calgary, growing to support more families and caregivers who need relationship-first childcare.',

  story: {
    title: 'About CarePair',
    paragraphs: [
      'CarePair is shaped by firsthand experience providing care in the Calgary area. That work made it clear how much families and caregivers rely on trust, continuity, and clear communication — not just a listing or a one-off message.',
      'The same need exists well beyond a single city: parents and caregivers everywhere deserve tools that respect the relationship side of care, not only the transaction. CarePair is being built to broaden that reach — starting with a product native to phones, where coordination actually happens.',
      'This site and the apps will grow with the community. What you read here is the real direction of the product; we are not filling pages with placeholder testimonials or invented team bios.',
    ] as const,
  },

  team: {
    title: 'Team',
    intro:
      'Photos, names, and bios will be added as you publish them. Each card below is a reserved slot — swap in real headshots and copy when ready.',
    slots: [
      {
        id: 'leadership',
        roleLabel: 'Leadership',
        caption: 'Founder photo and bio — add when ready.',
      },
      {
        id: 'member-2',
        roleLabel: 'Team member',
        caption: 'Reserved for a future profile.',
      },
      {
        id: 'member-3',
        roleLabel: 'Team member',
        caption: 'Reserved for a future profile.',
      },
    ] as const,
  },

  testimonials: {
    title: 'Testimonials',
    intro:
      'We are not using sample quotes. When families or caregivers share feedback you are comfortable publishing, it will appear in the slots below — with their consent and accurate attribution.',
    slotNote: 'No testimonial has been published in this slot yet. Text and attribution are added only with consent.',
    slotMeta: 'Attribution line — to be added when a quote goes live.',
    slots: 2,
    ctaLabel: 'Share a story or feedback',
    ctaHref: '/contact' as const,
  },
} as const;

/** Short teaser for the home page visual strip */
export const homeVisual = {
  title: 'Built for real care workflows',
  intro:
    'Screenshots and motion from the apps will land in these frames — aligned with discovery, messaging, and CareSpace so visitors know what to expect.',
  frames: [
    { id: 'discover', label: 'Discovery — add app screenshot' },
    { id: 'messages', label: 'Messages — add app screenshot' },
    { id: 'carespace', label: 'CareSpace — add app screenshot' },
  ] as const,
} as const;
