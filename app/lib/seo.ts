import type { MetaDescriptor } from "react-router";
import { absoluteUrl } from "./paths";

// Only what buildMeta actually reads off each matched route — kept minimal
// (rather than importing a specific route's generated Route.MetaArgs type)
// so this stays usable from every route file without per-route coupling.
interface MinimalMetaMatch {
  id: string;
  meta: MetaDescriptor[];
}

interface PageMetaInput {
  // React Router only uses ONE route's meta() per page — a leaf route's
  // meta() entirely replaces its parent's rather than merging with it. Root
  // meta (the Organization JSON-LD) has to be re-included by hand here, via
  // matches, or it silently vanishes on every non-root page. Elements can be
  // undefined — react-router's generated Matches type allows for route
  // trees with optional segments, even though this app's is flat.
  matches: (MinimalMetaMatch | undefined)[];
  path: string;
  title: string;
  description: string;
  /** Set on pages that shouldn't be indexed (404s, invalid dynamic-route combinations). */
  noindex?: boolean;
}

// Single source for every route's <title>, meta description, canonical
// link, and Open Graph/Twitter Card tags — a route's meta() only supplies
// its own title/description/path, everything else stays consistent site-wide.
export function buildMeta({ matches, path, title, description, noindex }: PageMetaInput): MetaDescriptor[] {
  const rootMeta = matches.find((m): m is MinimalMetaMatch => m !== undefined && m.id === "root")?.meta ?? [];
  const url = absoluteUrl(path);
  const tags: MetaDescriptor[] = [
    ...rootMeta,
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Neawe Forge" },
    // The served, crawled HTML is always the English render (deliberate,
    // see the Faz 2.9 hreflang decision — no separate TR URL exists).
    // og:locale reflects what's actually on the page; :alternate tells
    // sharing platforms a Turkish version of this same content exists too,
    // without claiming a separate URL the way hreflang would.
    { property: "og:locale", content: "en_US" },
    { property: "og:locale:alternate", content: "tr_TR" },
    // No og:image yet (deferred to Aşama 4 — logo/palette refresh) —
    // "summary" is the correct twitter:card variant without one. Adding
    // "twitter:image" and switching this to "summary_large_image" later is
    // a two-line change here, not a redesign.
    { name: "twitter:card", content: "summary" },
  ];
  if (noindex) {
    tags.push({ name: "robots", content: "noindex" });
  }
  return tags;
}
