import { siteConfig } from "./site_config";

// Joined only here, at call time in the browser — never at module scope,
// so no static string in the bundle or prerendered HTML holds the full
// address (see the note on siteConfig.contactEmail).
export function contactEmailAddress(): string {
  const { user, domain } = siteConfig.contactEmail;
  return `${user}@${domain}`;
}

export function mailtoHref(subject?: string): string {
  const base = `mailto:${contactEmailAddress()}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}
