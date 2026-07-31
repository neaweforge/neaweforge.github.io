// Single source of truth for site-wide contact/social values — never
// hardcode these strings directly in a component.
export const siteConfig = {
  contactEmail: "support@neaweforge.com",
  social: {
    x: "https://x.com/neawerse",
    linkedin: "https://www.linkedin.com/in/saitkaplan",
    github: "https://github.com/saitkaplan",
  },
} as const;
