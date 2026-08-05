import type { Config } from "@react-router/dev/config";
import { games } from "./app/data/games";
import { assertLegalContentComplete } from "./app/content/legal_content";
import { founderPath, homePath, legalPath } from "./app/lib/paths";

export default {
  // Fully static site — no server runtime. GitHub Pages only serves files.
  ssr: false,
  async prerender() {
    // Fails the build loudly if any game is missing a legal doc, instead of
    // silently shipping a "Not found" page at a URL that may already be
    // submitted to an app store. See legal_content.ts for details.
    assertLegalContentComplete();

    // Reuses the same path builders every internal <Link> renders with, so
    // a generated file can never end up at a URL nothing in the app links
    // to (or vice versa).
    const paths = [homePath, founderPath, "/404"];
    for (const game of games) {
      paths.push(legalPath(game.slug, "privacy_policy"));
      paths.push(legalPath(game.slug, "terms_of_service"));
    }
    return paths;
  },
} satisfies Config;
