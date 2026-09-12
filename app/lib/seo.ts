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

const ogImageUrl = absoluteUrl("/og_image.png");
const ogImageWidth = 1200;
const ogImageHeight = 630;
const ogImageAlt = "Neawe Forge emblem — a steel N wreathed in flame inside a bronze ring";

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
    // One site-wide share image (the emblem on the brand backdrop) — pages
    // don't get their own. PNG rather than WebP: share-card fetchers on
    // messaging apps still don't reliably decode WebP.
    { property: "og:image", content: ogImageUrl },
    { property: "og:image:width", content: String(ogImageWidth) },
    { property: "og:image:height", content: String(ogImageHeight) },
    { property: "og:image:alt", content: ogImageAlt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: ogImageUrl },
    { name: "twitter:image:alt", content: ogImageAlt },
  ];
  if (noindex) {
    tags.push({ name: "robots", content: "noindex" });
  }
  return tags;
}
