import type { Route } from "./+types/home";
import { announcements } from "../data/announcements";
import { games } from "../data/games";
import { announcementsCopy, contactCopy, gamesCopy, heroCopy, studioCopy } from "../content/site_copy";
import { ContactEmail } from "../components/contact_email";
import { GameCard } from "../components/game_card";
import { Localized } from "../components/localized";
import { brandEmblemLarge, homePath, homeSectionId, mainContentId } from "../lib/paths";
import { localizedDate } from "../lib/format_date";
import { buildMeta } from "../lib/seo";
import { usePageTitle } from "../lib/use_page_title";
import "../styles/home.css";

// Just the name — the "Independent Game Studio" subtitle is already right
// there in the hero badge, so it's noise in a browser tab.
const title = {
  en: "Neawe Forge",
  tr: "Neawe Forge",
};
const description = {
  en: "Neawe Forge is a small, independent studio making fun, educational and simple games. Our first game, Words & Hammers, is available on the App Store and Play Store.",
  tr: "Neawe Forge, eğlenceli, eğitici ve sade oyunlar yapan küçük, bağımsız bir stüdyo. İlk oyunumuz Words & Hammers, App Store'da ve Play Store'da.",
};

// Only the Organization schema (added by root) belongs here now — each
// game's SoftwareApplication schema lives on that game's own page, which is
// its canonical URL.
export function meta({ matches }: Route.MetaArgs) {
  return buildMeta({ matches, path: homePath, title: title.en, description: description.en });
}

export default function Home() {
  usePageTitle({ title, description });

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

      <section id={homeSectionId.announcements} className="section">
        <Localized as="div" className="section_eyebrow" text={announcementsCopy.eyebrow} />
        <Localized as="h2" className="section_title" text={announcementsCopy.title} />
        <ol className="announcement_list">
          {announcements.map((item) => (
            <li key={`${item.date} ${item.title.en}`} className="announcement">
              <time className="announcement_date" dateTime={item.date}>
                <Localized inline text={localizedDate(item.date)} />
              </time>
              <Localized as="h3" className="announcement_title" text={item.title} />
              <Localized className="announcement_body" text={item.body} />
            </li>
          ))}
        </ol>
      </section>

      <section id={homeSectionId.studio} className="section section_alt">
        <Localized as="div" className="section_eyebrow" text={studioCopy.eyebrow} />
        <Localized as="h2" className="section_title" text={studioCopy.title} />
        <div className="studio_body">
          <Localized className="studio_text" text={studioCopy.body} />
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
        </div>
      </section>
    </main>
  );
}
