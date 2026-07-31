import type { Config } from "@react-router/dev/config";
import { games } from "./app/data/games";

export default {
  // Fully static site — no server runtime. GitHub Pages only serves files.
  ssr: false,
  async prerender() {
    const paths = ["/", "/founder", "/404"];
    for (const game of games) {
      paths.push(`/${game.slug}/privacy_policy`);
      paths.push(`/${game.slug}/terms_of_service`);
    }
    return paths;
  },
} satisfies Config;
