import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { legalDocTypes } from "./content/legal_types";
import { games } from "./data/games";
import { gameRouteId, legalRouteId } from "./lib/paths";

// One literal route per real page, generated from games.ts — never a
// catch-all ":gameSlug". A dynamic segment also matches every unknown
// one-segment URL, /404 included: the prerendered 404.html rendered the game
// page's "Game not found" instead of not_found.tsx, and in the browser an
// unknown address asked for a data file that was never built. With literal
// routes every unknown URL reaches the "*" route below. Adding a game to
// app/data/games.ts is still all it takes, and the legal URLs already
// submitted to the app stores keep exactly the same shape.
export default [
  index("routes/home.tsx"),
  ...games.flatMap((game) => [
    route(game.slug, "routes/game_page.tsx", { id: gameRouteId(game.slug) }),
    ...legalDocTypes.map((docType) =>
      route(`${game.slug}/${docType}`, "routes/legal_page.tsx", { id: legalRouteId(game.slug, docType) }),
    ),
  ]),
  route("*", "routes/not_found.tsx"),
] satisfies RouteConfig;
