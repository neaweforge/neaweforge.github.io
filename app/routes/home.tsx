import type { Route } from "./+types/home";
import { games } from "../data/games";
import { GameCard } from "../components/game_card";
import { mainContentId, homePath } from "../lib/paths";
import { buildMeta } from "../lib/seo";
import { softwareApplicationJsonLd } from "../lib/json_ld";
import { usePageTitle } from "../lib/use_page_title";
import "../styles/home.css";

const title = {
  en: "Neawe Forge — Independent Game Studio",
  tr: "Neawe Forge — Bağımsız Oyun Stüdyosu",
};
const description = {
  en: "Neawe Forge is an independent game studio building mobile games with Flutter, Dart & Flame. Currently developing Words & Hammers.",
  tr: "Flutter, Dart ve Flame ile mobil oyunlar geliştiren bağımsız oyun stüdyosu. Şu an Words & Hammers üzerinde çalışılıyor.",
};

export function meta({ matches }: Route.MetaArgs) {
  return [
    ...buildMeta({ matches, path: homePath, title: title.en, description: description.en }),
    ...games.map((game) => ({ "script:ld+json": softwareApplicationJsonLd(game) })),
  ];
}

export default function Home() {
  usePageTitle({ title, description });
  return (
    <main id={mainContentId} tabIndex={-1}>
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
          <span className="en_inline">
            Explore Games{" "}
            <span aria-hidden="true">↓</span>
          </span>
          <span className="tr_inline">
            Oyunları Keşfet{" "}
            <span aria-hidden="true">↓</span>
          </span>
        </a>
      </section>

      <div id="games" className="section">
        <div className="section_eyebrow">
          <span className="en_inline">Games &amp; Projects</span>
          <span className="tr_inline">Oyunlar &amp; Projeler</span>
        </div>
        <h2 className="section_title">
          <span className="en_inline">What We're Building</span>
          <span className="tr_inline">Neler Geliştiriyoruz</span>
        </h2>
        <div className="game_card_list">
          {games.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </div>
    </main>
  );
}
