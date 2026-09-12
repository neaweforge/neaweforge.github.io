import { Link } from "react-router";
import type { Route } from "./+types/game_page";
import { games, type Game } from "../data/games";
import { gamePageCopy, gamesCopy } from "../content/site_copy";
import { GameGallery } from "../components/game_gallery";
import { Localized } from "../components/localized";
import { gamePath, homeSectionPath, legalPath, mainContentId } from "../lib/paths";
import { buildMeta } from "../lib/seo";
import { softwareApplicationJsonLd } from "../lib/json_ld";
import { usePageTitle } from "../lib/use_page_title";
import "../styles/game.css";

export function loader({ params }: Route.LoaderArgs) {
  return { game: games.find((candidate) => candidate.slug === params.gameSlug) };
}

export function meta({ loaderData, params, matches }: Route.MetaArgs) {
  const game = loaderData?.game;
  if (!game) {
    return buildMeta({
      matches,
      path: gamePath(params.gameSlug),
      title: "Not Found",
      description: "The requested game doesn't exist.",
      noindex: true,
    });
  }
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

function StoreLink({ url, name, note }: { url: string | null; name: string; note?: React.ReactNode }) {
  if (!url) {
    return (
      <span className="store_link soon">
        <span className="store_name">{name}</span>
        <Localized inline className="store_note" text={gamesCopy.soon} />
      </span>
    );
  }
  return (
    <a className="store_link" href={url} target="_blank" rel="noopener noreferrer">
      <span className="store_name">{name}</span>
      {note}
      <span className="store_arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
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
        <div className="store_row">
          <StoreLink url={game.stores.ios} name="App Store" />
          <StoreLink url={game.stores.android} name="Google Play" />
        </div>
      </section>

      <section className="game_section">
        <Localized as="h2" className="section_title" text={gamePageCopy.legalTitle} />
        <div className="legal_row">
          <a className="text_link" href={legalPath(game.slug, "privacy_policy")}>
            <Localized inline text={gamePageCopy.privacyPolicy} />
          </a>
          <a className="text_link" href={legalPath(game.slug, "terms_of_service")}>
            <Localized inline text={gamePageCopy.termsOfService} />
          </a>
        </div>
      </section>

      <footer className="game_tech_row">
        <Localized inline className="game_tech_label" text={gamePageCopy.builtWith} />
        {game.techStack.map((tech) => (
          <a key={tech.label} className="tech_chip" href={tech.url} target="_blank" rel="noopener noreferrer">
            {tech.label}
          </a>
        ))}
      </footer>
    </>
  );
}

export default function GamePage({ loaderData }: Route.ComponentProps) {
  const { game } = loaderData;
  usePageTitle(
    game
      ? {
          title: { en: `${game.name} — Neawe Forge`, tr: `${game.name} — Neawe Forge` },
          description: game.description,
        }
      : { title: { en: "Not Found", tr: "Bulunamadı" } },
  );

  return (
    <main className="content" id={mainContentId} tabIndex={-1}>
      {game ? <GameDetail game={game} /> : <Localized as="h1" text={gamePageCopy.notFound} />}
    </main>
  );
}
