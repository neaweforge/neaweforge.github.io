import type { LegalDocType } from "../content/legal_content";
import { games } from "../data/games";

// Every internal path is built here, trailing slash included. GitHub Pages
// serves each route as a folder + index.html; requesting the path without
// the trailing slash costs every visitor one extra 301 redirect round-trip.
// react-router.config.ts's prerender() imports these same builders so the
// generated files and the links pointing at them can never drift apart.

export const homePath = "/";
export const founderPath = "/founder/";

// In-page sections of the home page. The nav links to these from every
// route, so the hash form is built here rather than typed at call sites.
export const homeSectionId = {
  games: "games",
  studio: "studio",
  contact: "contact",
} as const;
export type HomeSection = keyof typeof homeSectionId;

export function homeSectionPath(section: HomeSection): string {
  return `${homePath}#${homeSectionId[section]}`;
}

export function gamePath(gameSlug: string): string {
  return `/${gameSlug}/`;
}

// Note the shape: a game's own page sits at /<slug>/ and its legal documents
// one level deeper at /<slug>/<docType>/. These legal URLs were submitted to
// the app stores, so they must keep working exactly as they are — adding the
// game page above them does not disturb that, because React Router matches
// the deeper, two-segment route on its own.
export function legalPath(gameSlug: string, docType: LegalDocType): string {
  return `/${gameSlug}/${docType}/`;
}

// Every real, indexable page — the one list react-router.config.ts's
// prerender() and scripts/generate_sitemap.mjs both read, so the set of
// files actually built and the set of URLs listed in the sitemap can never
// drift apart. /404 is deliberately not included here: it's a real
// prerendered file (see react-router.config.ts) but not a page a search
// engine should ever be sent to.
export function contentPaths(): string[] {
  const paths = [homePath, founderPath];
  for (const game of games) {
    paths.push(gamePath(game.slug));
    paths.push(legalPath(game.slug, "privacy_policy"));
    paths.push(legalPath(game.slug, "terms_of_service"));
  }
  return paths;
}

// Brand emblem renders under public/img/brand/ — the small one is sized
// for the nav (2x of its 32px slot), the large one for hero-scale use.
export const brandEmblemSmall = "/img/brand/neawe_forge_emblem_160.webp";
export const brandEmblemLarge = "/img/brand/neawe_forge_emblem_512.webp";

// Deployed custom domain — see public/CNAME. Used to build absolute URLs
// for canonical links, Open Graph/JSON-LD, and the sitemap, none of which
// are meaningful as root-relative paths.
export const siteUrl = "https://neaweforge.com";

export function absoluteUrl(path: string): string {
  return `${siteUrl}${path}`;
}

// React Router's own route identifier (app/routes.ts file path without
// extension) — a different thing from the URL paths above. Nav.tsx matches
// this against useMatches() to decide when to hide its links; centralized
// here so the id string only has to be right in one place.
export const legalPageRouteId = "routes/legal_page";

// The skip link's target: every route's top-level <main> carries this id
// plus tabIndex={-1} so the skip link's #-navigation actually moves focus
// there, not just the scroll position.
export const mainContentId = "main_content";
