import type { Config } from "@react-router/dev/config";
import { games } from "./app/data/games";
import { assertLegalContentComplete } from "./app/content/legal_content";

export default {
  // Fully static site — no server runtime. GitHub Pages only serves files.
  ssr: false,
  async prerender() {
    // Fails the build loudly if any game is missing a legal doc, instead of
    // silently shipping a "Not found" page at a URL that may already be
    // submitted to an app store. See legal_content.ts for details.
    assertLegalContentComplete();

    const paths = ["/", "/founder", "/404"];
    for (const game of games) {
      paths.push(`/${game.slug}/privacy_policy`);
      paths.push(`/${game.slug}/terms_of_service`);
    }
    return paths;
  },
} satisfies Config;
