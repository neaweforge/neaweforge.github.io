// Single source of truth for site-wide contact/social values — never
// hardcode these strings directly in a component.
export const siteConfig = {
  contactEmail: "support@neaweforge.com",
  social: {
    x: "https://x.com/neawerse",
    linkedin: "https://www.linkedin.com/in/saitkaplan",
    github: "https://github.com/saitkaplan",
  },
  // Shown on the founder page's "Now" line. Update this one place when the
  // studio's current milestone changes (e.g. once Words & Hammers ships) —
  // not tied to games.ts so a game's status field can change independently.
  studioStatus: {
    en: "Words & Hammers — preparing for release on iOS and Android.",
    tr: "Words & Hammers — iOS ve Android yayınına hazırlanıyor.",
  },
} as const;
