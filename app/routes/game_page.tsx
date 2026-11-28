import { Link } from "react-router";
import type { Route } from "./+types/game_page";
import { games, type Game } from "../data/games";
import { gamePageCopy } from "../content/site_copy";
import { GameGallery } from "../components/game_gallery";
import { Localized } from "../components/localized";
import { StoreButtons } from "../components/store_buttons";
import { gamePath, homeSectionPath, legalPath, mainContentId, pathSegments } from "../lib/paths";
import { buildMeta } from "../lib/seo";
import { softwareApplicationJsonLd } from "../lib/json_ld";
import { usePageTitle } from "../lib/use_page_title";
import "../styles/game.css";

// routes.ts registers this module once per game in games.ts, so the slug
// always resolves; a miss means the two lists drifted apart, and the
// prerender fails loudly instead of shipping an empty page.
export function loader({ request }: Route.LoaderArgs) {
  const [gameSlug] = pathSegments(request.url);
  const game = games.find((candidate) => candidate.slug === gameSlug);
  if (!game) {
    throw new Error(`game_page: no game in games.ts for "${gameSlug}" (routes.ts and games.ts drifted apart).`);
  }
  return { game };
}

export function meta({ loaderData, matches }: Route.MetaArgs) {
  if (!loaderData) return [];
  const { game } = loaderData;
  return [
    ...buildMeta({
      matches,
      path: gamePath(game.slug),
      title: `${game.name} — Neawe Forge`,
      description: game.description.en,
    }),
    // The application schema belongs on the game's own page, not the home
    // page — this is the canonical URL for the app now.
    { "script:ld+json": softwareApplicationJsonLd(game) },
  ];
}

function GameDetail({ game }: { game: Game }) {
  return (
    <>
      <header className="game_hero">
        <Link to={homeSectionPath("games")} className="back_link">
          <Localized inline text={gamePageCopy.backToGames}>
            {" "}
            <span aria-hidden="true">↑</span>
          </Localized>
        </Link>
        <h1 className="game_hero_title">{game.name}</h1>
        <Localized className="game_hero_tagline" text={game.tagline} />
        <div className="kor_hatti_h" />
        <Localized className="game_hero_desc" text={game.description} />
      </header>

      <section className="game_section">
        <Localized as="h2" className="section_title" text={gamePageCopy.screenshotsTitle} />
        <GameGallery shots={game.screenshots} gameName={game.name} />
      </section>

      <section className="game_section">
        <Localized as="h2" className="section_title" text={gamePageCopy.featuresTitle} />
        <div className="feature_grid">
          {game.features.map((feature) => (
            <article className="feature" key={feature.title.en}>
              <Localized as="h3" className="feature_title" text={feature.title} />
              <Localized className="feature_body" text={feature.body} />
            </article>
          ))}
        </div>
      </section>

      <section className="game_section">
        <Localized as="h2" className="section_title" text={gamePageCopy.availability} />
        <Localized className="section_intro" text={gamePageCopy.availabilityIntro} />
        <StoreButtons ios={game.stores.ios} android={game.stores.android} />
      </section>

      <section className="game_section">
        <Localized as="h2" className="section_title" text={gamePageCopy.legalTitle} />
        <Localized className="section_intro" text={gamePageCopy.legalIntro} />
        <div className="legal_row">
          <a className="text_link" href={legalPath(game.slug, "privacy_policy")}>
            <Localized inline text={gamePageCopy.privacyPolicy} />
          </a>
          <a className="text_link" href={legalPath(game.slug, "terms_of_service")}>
            <Localized inline text={gamePageCopy.termsOfService} />
          </a>
        </div>
      </section>

      <section className="game_section">
        <Localized as="h2" className="section_title" text={gamePageCopy.techDetailsTitle} />
        <div className="game_tech_row">
          {game.techStack.map((tech) => (
            <a key={tech.label} className="tech_chip" href={tech.url} target="_blank" rel="noopener noreferrer">
              {tech.label}
            </a>
          ))}
        </div>
        {game.aiUse && <Localized className="section_intro game_ai_note" text={game.aiUse} />}
      </section>
    </>
  );
}

export default function GamePage({ loaderData }: Route.ComponentProps) {
  const { game } = loaderData;
  usePageTitle({
    title: { en: `${game.name} — Neawe Forge`, tr: `${game.name} — Neawe Forge` },
    description: game.description,
  });

  return (
    <main className="content" id={mainContentId} tabIndex={-1}>
      <GameDetail game={game} />
    </main>
  );
}
