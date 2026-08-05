import type { Game } from "../data/games";
import { legalPath } from "../lib/paths";

function StoreBadge({ url, name }: { url: string | null; name: string }) {
  if (url) {
    return (
      <a className="status_badge store" href={url} target="_blank" rel="noopener noreferrer">
        {name} ↗
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

function GameShot({ game }: { game: Game }) {
  const shot = game.screenshots[0];
  if (!shot) {
    return (
      <div className="game_shot_placeholder">
        <span className="en_inline">Screenshot coming soon</span>
        <span className="tr_inline">Ekran görüntüsü hazırlanıyor</span>
      </div>
    );
  }
  return (
    <>
      <img
        className="game_shot en_content"
        src={shot.src}
        alt={shot.alt.en}
        width={390}
        height={844}
        loading="lazy"
      />
      <img
        className="game_shot tr_content"
        src={shot.src}
        alt={shot.alt.tr}
        width={390}
        height={844}
        loading="lazy"
      />
    </>
  );
}

export function GameCard({ game }: { game: Game }) {
  return (
    <div className="game_card">
      <div className="game_card_grid">
        <div className="game_shot_frame">
          <GameShot game={game} />
        </div>
        <div className="game_info">
          <div className="game_tech">
            {game.techStack.map((tech) => (
              <a key={tech.label} className="tech_chip" href={tech.url} target="_blank" rel="noopener noreferrer">
                {tech.label}
              </a>
            ))}
          </div>
          <div className="game_title">{game.name}</div>
          <p className="game_desc en_content">{game.description.en}</p>
          <p className="game_desc tr_content">{game.description.tr}</p>
          <div className="game_status">
            <StoreBadge url={game.stores.android} name="Play Store" />
            <StoreBadge url={game.stores.ios} name="App Store" />
            <a className="status_badge legal" href={legalPath(game.slug, "privacy_policy")}>
              <span className="en_inline">Legal Docs ↗</span>
              <span className="tr_inline">Yasal Belgeler ↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
