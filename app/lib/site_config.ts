// Single source of truth for site-wide contact/social values — never
// hardcode these strings directly in a component.
export const siteConfig = {
  // Kept as two halves and only joined at runtime (see lib/contact.ts) so
  // the full address never appears as one string in the prerendered HTML
  // or the JS bundle — address-harvesting bots pattern-match on the joined
  // form. Rendering goes through components/contact_email.tsx.
  contactEmail: { user: "support", domain: "neaweforge.com" },
  // The founder's personal accounts, shown only on the founder page. The
  // studio itself has no accounts, so these must not appear in site-wide
  // chrome (footer, nav) or in the Organization schema's `sameAs` — that
  // would present them as the studio's own.
  founderSocial: {
    x: "https://x.com/neawerse",
    linkedin: "https://www.linkedin.com/in/saitkaplan",
    github: "https://github.com/saitkaplan",
  },
  // Shown on the founder page's "Now" line. Update this one place when the
  // studio's current milestone changes (e.g. once Words & Hammers ships) —
  // not tied to games.ts so a game's status field can change independently.
  studioStatus: {
    en: "Words & Hammers — out on the App Store; the Android release is next.",
    tr: "Words & Hammers — App Store'da yayında; sırada Android sürümü var.",
  },
} as const;
