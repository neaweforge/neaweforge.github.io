import { Link } from "react-router";
import type { Game } from "../data/games";
import { gamesCopy } from "../content/site_copy";
import { gamePath } from "../lib/paths";
import { GameGallery } from "./game_gallery";
import { Localized } from "./localized";
import { StoreButtons } from "./store_buttons";

// Information order follows what a player needs first: what the game is,
// what it looks like, where it's available. Tech stack lives on the game's
// own page now, under its own "Technical details" heading.
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

        <StoreButtons ios={game.stores.ios} android={game.stores.android} />

        <Link className="btn btn_primary" to={gamePath(game.slug)}>
          <Localized inline text={gamesCopy.viewGame}>
            {" "}
            <span aria-hidden="true">→</span>
          </Localized>
        </Link>
      </div>
    </article>
  );
}
