import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("founder", "routes/founder.tsx"),
  // A single dynamic route serves every game's legal docs — adding a new
  // game to app/data/games.ts is enough, no route changes needed.
  route(":gameSlug/:docType", "routes/legal_page.tsx"),
  route("*", "routes/not_found.tsx"),
] satisfies RouteConfig;
