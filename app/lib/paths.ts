import type { LegalDocType } from "../content/legal_content";

// Every internal path is built here, trailing slash included. GitHub Pages
// serves each route as a folder + index.html; requesting the path without
// the trailing slash costs every visitor one extra 301 redirect round-trip.
// react-router.config.ts's prerender() imports these same builders so the
// generated files and the links pointing at them can never drift apart.

export const homePath = "/";
export const founderPath = "/founder/";

export function legalPath(gameSlug: string, docType: LegalDocType): string {
  return `/${gameSlug}/${docType}/`;
}
