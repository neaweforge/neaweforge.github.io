// Single source of truth for site-wide contact/social values — never
// hardcode these strings directly in a component.
export const siteConfig = {
  // Kept as two halves and only joined at runtime (see lib/contact.ts) so
  // the full address never appears as one string in the prerendered HTML
  // or the JS bundle — address-harvesting bots pattern-match on the joined
  // form. Rendering goes through components/contact_email.tsx.
  contactEmail: { user: "support", domain: "neaweforge.com" },
} as const;
