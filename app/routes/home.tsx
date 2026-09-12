import { Link } from "react-router";
import type { Route } from "./+types/home";
import { games } from "../data/games";
import { contactCopy, gamesCopy, heroCopy, studioCopy } from "../content/site_copy";
import { ContactEmail } from "../components/contact_email";
import { GameCard } from "../components/game_card";
import { Localized } from "../components/localized";
import { brandEmblemLarge, founderPath, homePath, homeSectionId, mainContentId } from "../lib/paths";
import { buildMeta } from "../lib/seo";
import { usePageTitle } from "../lib/use_page_title";
import "../styles/home.css";

const title = {
  en: "Neawe Forge — Independent Game Studio",
  tr: "Neawe Forge — Bağımsız Oyun Stüdyosu",
};
const description = {
  en: "Neawe Forge is an independent studio making mobile games by hand. Words & Hammers is out now on the App Store, with Android on the way.",
  tr: "Neawe Forge, mobil oyunları elle döven bağımsız bir stüdyo. Words & Hammers App Store'da yayında, Android sürümü yolda.",
};

// Only the Organization schema (added by root) belongs here now — each
// game's SoftwareApplication schema lives on that game's own page, which is
// its canonical URL.
export function meta({ matches }: Route.MetaArgs) {
  return buildMeta({ matches, path: homePath, title: title.en, description: description.en });
}

export default function Home() {
  usePageTitle({ title, description });
  const released = games.find((game) => game.status === "released");

  return (
    <main id={mainContentId} tabIndex={-1}>
      <section className="hero">
        <img className="hero_emblem" src={brandEmblemLarge} alt="" width={200} height={200} fetchPriority="high" />
        {/* The language classes carry their own display value, so they go on
            an inner span — the badge's own inline-block layout stays here. */}
        <div className="hero_badge">
          <Localized inline text={heroCopy.badge} />
        </div>
        <h1>
          Neawe <span className="forge">Forge</span>
        </h1>
        <div className="kor_hatti_h" />
        <Localized className="hero_slogan" text={heroCopy.slogan} />
        <Localized className="hero_desc" text={heroCopy.description} />
        {released && (
          <p className="hero_forging">
            <Localized inline className="hero_forging_label" text={heroCopy.outNowLabel} />
            <span className="hero_forging_name">{released.name}</span>
          </p>
        )}
        <div className="hero_actions">
          <a href={`#${homeSectionId.games}`} className="btn btn_primary">
            <Localized inline text={heroCopy.primaryCta}>
              {" "}
              <span aria-hidden="true">↓</span>
            </Localized>
          </a>
          <a href={`#${homeSectionId.contact}`} className="btn btn_secondary">
            <Localized inline text={heroCopy.secondaryCta} />
          </a>
        </div>
      </section>

      <section id={homeSectionId.games} className="section">
        <Localized as="div" className="section_eyebrow" text={gamesCopy.eyebrow} />
        <Localized as="h2" className="section_title" text={gamesCopy.title} />
        <div className="game_card_list">
          {games.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </section>

      <section id={homeSectionId.studio} className="section section_alt">
        <Localized as="div" className="section_eyebrow" text={studioCopy.eyebrow} />
        <Localized as="h2" className="section_title" text={studioCopy.title} />
        <div className="studio_body">
          <Localized className="studio_text" text={studioCopy.body} />
          <Link to={founderPath} className="text_link">
            <Localized inline text={studioCopy.founderLink}>
              {" "}
              <span aria-hidden="true">→</span>
            </Localized>
          </Link>
        </div>
      </section>

      <section id={homeSectionId.contact} className="section">
        <Localized as="div" className="section_eyebrow" text={contactCopy.eyebrow} />
        <Localized as="h2" className="section_title" text={contactCopy.title} />
        <div className="contact_grid">
          <div className="contact_block">
            <Localized className="contact_text" text={contactCopy.body} />
            <ContactEmail className="btn btn_primary">
              <Localized inline text={contactCopy.emailCta} />
            </ContactEmail>
          </div>
          <div className="contact_block contact_beta">
            <Localized as="h3" className="contact_block_title" text={contactCopy.betaTitle} />
            <Localized className="contact_text" text={contactCopy.betaBody} />
            <ContactEmail className="btn btn_secondary" subject={contactCopy.betaSubject.en}>
              <Localized inline text={contactCopy.betaCta} />
            </ContactEmail>
          </div>
        </div>
      </section>
    </main>
  );
}
