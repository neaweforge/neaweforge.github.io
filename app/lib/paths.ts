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

// React Router's own route identifiers (app/routes.ts file paths without
// extension) — a different thing from the URL paths above. Nav.tsx matches
// these against useMatches() to decide when to hide itself; centralized
// here so the id string only has to be right in one place.
export const legalPageRouteId = "routes/legal_page";
export const founderRouteId = "routes/founder";

// The skip link's target: every route's top-level <main> carries this id
// plus tabIndex={-1} so the skip link's #-navigation actually moves focus
// there, not just the scroll position.
export const mainContentId = "main_content";
