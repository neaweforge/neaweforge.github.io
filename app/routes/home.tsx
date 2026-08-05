import type { Route } from "./+types/home";
import { games } from "../data/games";
import { GameCard } from "../components/game_card";
import "../styles/home.css";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Neawe Forge" },
    {
      name: "description",
      content: "Neawe Forge is an independent game studio building mobile games with Flutter, Dart & Flame.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero_badge">
          <span className="en_inline">Independent Game Studio</span>
          <span className="tr_inline">Bağımsız Oyun Stüdyosu</span>
        </div>
        <h1>
          Neawe <span className="forge">Forge</span>
        </h1>
        <div className="kor_hatti_h" />
        <p className="hero_tagline">
          <span className="en_inline">Crafting Digital Experiences.</span>
          <span className="tr_inline">Dijital Deneyimler İnşa Ediyoruz.</span>
        </p>
        <p className="hero_desc en_content">
          A solo game studio building mobile games with Flutter, Dart &amp; Flame. Currently developing Words &amp;
          Hammers — a fast-paced competitive word puzzle game.
        </p>
        <p className="hero_desc tr_content">
          Flutter, Dart ve Flame ile mobil oyunlar geliştiren bağımsız oyun stüdyosu. Şu an hızlı tempolu rekabetçi
          kelime bulmaca oyunu Words &amp; Hammers üzerinde çalışılıyor.
        </p>
        <a href="#games" className="hero_cta">
          <span className="en_inline">Explore Games ↓</span>
          <span className="tr_inline">Oyunları Keşfet ↓</span>
        </a>
      </section>

      <main>
        <div id="games" className="section">
          <div className="section_eyebrow">
            <span className="en_inline">Games &amp; Projects</span>
            <span className="tr_inline">Oyunlar &amp; Projeler</span>
          </div>
          <div className="section_title">
            <span className="en_inline">What We're Building</span>
            <span className="tr_inline">Neler Geliştiriyoruz</span>
          </div>
          <div className="game_card_list">
            {games.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
