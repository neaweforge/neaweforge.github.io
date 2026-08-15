import type { Game } from "../data/games";
import { siteConfig } from "./site_config";
import { absoluteUrl, homePath } from "./paths";

// Organization schema — describes the studio itself, not any one page.
// Rendered from root.tsx's meta() so it's on every route, not just home.
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Neawe Forge",
    url: absoluteUrl(homePath),
    // icon_512.png, not favicon.ico/svg — Google's structured-data
    // guidelines require a raster image (PNG/JPEG/WebP) for Organization's
    // logo; .ico isn't a supported format there and .svg is explicitly
    // discouraged, even though both are otherwise valid favicons.
    logo: absoluteUrl("/icon_512.png"),
    sameAs: [siteConfig.social.x, siteConfig.social.linkedin, siteConfig.social.github],
  };
}

function operatingSystems(game: Game): string | undefined {
  const systems: string[] = [];
  if (game.stores.android) systems.push("Android");
  if (game.stores.ios) systems.push("iOS");
  return systems.length > 0 ? systems.join(", ") : undefined;
}

interface SoftwareApplicationSchema {
  "@context": string;
  "@type": string;
  name: string;
  applicationCategory: string;
  description: string;
  url: string;
  operatingSystem?: string;
  installUrl?: string;
}

// SoftwareApplication schema for one game — built entirely from games.ts
// so it can never drift from what's actually on the page. Fields with no
// backing data (installUrl before a store link exists, pricing that was
// never entered) are omitted rather than guessed.
export function softwareApplicationJsonLd(game: Game): SoftwareApplicationSchema {
  const schema: SoftwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: game.name,
    applicationCategory: "GameApplication",
    description: game.description.en,
    url: absoluteUrl(homePath),
  };

  const os = operatingSystems(game);
  if (os) schema.operatingSystem = os;

  const installUrl = game.stores.android ?? game.stores.ios;
  if (installUrl) schema.installUrl = installUrl;

  return schema;
}
