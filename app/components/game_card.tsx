import { Link } from "react-router";
import type { Game } from "../data/games";
import { gamesCopy } from "../content/site_copy";
import { gamePath } from "../lib/paths";
import { GameGallery } from "./game_gallery";
import { Localized } from "./localized";

function StoreBadge({ url, name }: { url: string | null; name: string }) {
  if (url) {
    return (
      <a className="status_badge store" href={url} target="_blank" rel="noopener noreferrer">
        {name} <span aria-hidden="true">↗</span>
      </a>
    );
  }
  return (
    <span className="status_badge store soon">
      {name}
      <Localized inline className="badge_soon_tag" text={gamesCopy.soon} />
    </span>
  );
}

// Information order follows what a player needs first: what the game is,
// what it looks like, where it's available — and only then what it was
// built with. The tech row sits last on purpose.
export function GameCard({ game }: { game: Game }) {
  return (
    <article className="game_card">
      <div className="game_card_inner">
        <header className="game_header">
          <h3 className="game_title">{game.name}</h3>
          <Localized className="game_tagline" text={game.tagline} />
        </header>

        <GameGallery shots={game.screenshots} gameName={game.name} />

        <Localized className="game_desc" text={game.description} />

        <div className="game_status">
          <StoreBadge url={game.stores.android} name="Play Store" />
          <StoreBadge url={game.stores.ios} name="App Store" />
        </div>

        <Link className="btn btn_primary" to={gamePath(game.slug)}>
          <Localized inline text={gamesCopy.viewGame}>
            {" "}
            <span aria-hidden="true">→</span>
          </Localized>
        </Link>

        <div className="game_tech">
          <Localized inline className="game_tech_label" text={gamesCopy.builtWith} />
          {game.techStack.map((tech) => (
            <a key={tech.label} className="tech_chip" href={tech.url} target="_blank" rel="noopener noreferrer">
              {tech.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
