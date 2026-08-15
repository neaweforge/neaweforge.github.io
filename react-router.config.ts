import type { Config } from "@react-router/dev/config";
import { assertLegalContentComplete } from "./app/content/legal_content";
import { contentPaths } from "./app/lib/paths";

export default {
  // Fully static site — no server runtime. GitHub Pages only serves files.
  ssr: false,
  async prerender() {
    // Fails the build loudly if any game is missing a legal doc, instead of
    // silently shipping a "Not found" page at a URL that may already be
    // submitted to an app store. See legal_content.ts for details.
    assertLegalContentComplete();

    // contentPaths() is also what scripts/generate_sitemap.mjs reads, so
    // the set of files actually built and the sitemap's URL list can never
    // drift apart. /404 is prerendered too (GitHub Pages' error page) but
    // deliberately isn't part of contentPaths() — it doesn't belong in a
    // sitemap.
    return [...contentPaths(), "/404"];
  },
} satisfies Config;
