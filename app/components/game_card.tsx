import { useRef } from "react";
import type { Game, GameScreenshot } from "../data/games";
import { legalPath } from "../lib/paths";
import { useDragScroll } from "../lib/use_drag_scroll";

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
      <span className="badge_soon_tag">
        <span className="en_inline">Soon</span>
        <span className="tr_inline">Yakında</span>
      </span>
    </span>
  );
}

// Both <img>s point at the same file; only the alt text differs per language,
// and base.css's .en_content / .tr_content toggles which one is shown.
function ShotImg({ shot }: { shot: GameScreenshot }) {
  return (
    <>
      <img
        className="game_shot en_content"
        src={shot.src}
        alt={shot.alt.en}
        width={620}
        height={1342}
        loading="lazy"
      />
      <img
        className="game_shot tr_content"
        src={shot.src}
        alt={shot.alt.tr}
        width={620}
        height={1342}
        loading="lazy"
      />
    </>
  );
}

function GameShots({ game }: { game: Game }) {
  const stripRef = useRef<HTMLDivElement>(null);
  useDragScroll(stripRef); // no-op unless the strip below is the one that renders

  const shots = game.screenshots;
  const [first] = shots;

  // No real screenshots yet — keep the single placeholder frame.
  if (!first) {
    return (
      <div className="game_shot_frame">
        <div className="game_shot_placeholder">
          <span className="en_inline">Screenshot coming soon</span>
          <span className="tr_inline">Ekran görüntüsü hazırlanıyor</span>
        </div>
      </div>
    );
  }

  // A lone screenshot needs no scroll affordance.
  if (shots.length === 1) {
    return (
      <div className="game_shot_frame">
        <ShotImg shot={first} />
      </div>
    );
  }

  // Multiple shots: a horizontal, scroll-snapping strip. Touch pans it
  // natively; useDragScroll adds click-and-drag panning for a mouse; tabIndex
  // makes it keyboard-reachable so arrow keys can pan it too. aria-label stays
  // English to match the always-English prerendered HTML (see quick_context —
  // server HTML is EN).
  return (
    <div
      ref={stripRef}
      className="game_shot_strip"
      role="group"
      aria-label={`${game.name} screenshots`}
      tabIndex={0}
    >
      {shots.map((shot) => (
        <div className="game_shot_frame" key={shot.src}>
          <ShotImg shot={shot} />
        </div>
      ))}
    </div>
  );
}

export function GameCard({ game }: { game: Game }) {
  return (
    <div className="game_card">
      <div className="game_card_grid">
        <GameShots game={game} />
        <div className="game_info">
          <div className="game_tech">
            {game.techStack.map((tech) => (
              <a key={tech.label} className="tech_chip" href={tech.url} target="_blank" rel="noopener noreferrer">
                {tech.label}
              </a>
            ))}
          </div>
          <h3 className="game_title">{game.name}</h3>
          <p className="game_desc en_content">{game.description.en}</p>
          <p className="game_desc tr_content">{game.description.tr}</p>
          <div className="game_status">
            <StoreBadge url={game.stores.android} name="Play Store" />
            <StoreBadge url={game.stores.ios} name="App Store" />
            <a className="status_badge legal" href={legalPath(game.slug, "privacy_policy")}>
              <span className="en_inline">
                Legal Docs <span aria-hidden="true">↗</span>
              </span>
              <span className="tr_inline">
                Yasal Belgeler <span aria-hidden="true">↗</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
