import { Link } from "react-router";
import type { Route } from "./+types/legal_page";
import { games } from "../data/games";
import { legalContent, isLegalDocType, type LegalDocType } from "../content/legal_content";
import { LegalDocView } from "../components/legal_doc_view";
import { legalPath, mainContentId } from "../lib/paths";
import { buildMeta } from "../lib/seo";
import { usePageTitle } from "../lib/use_page_title";
import "../styles/legal.css";

export function loader({ params }: Route.LoaderArgs) {
  const { gameSlug, docType } = params;
  const game = games.find((g) => g.slug === gameSlug);
  const doc = game && isLegalDocType(docType) ? legalContent[gameSlug]?.[docType] : undefined;
  return { game, doc };
}

// Description templates, keyed by doc type rather than by game — a new
// game's legal pages get a correct description for free, no new copy.
function legalDescription(docType: LegalDocType, gameName: string): { en: string; tr: string } {
  if (docType === "privacy_policy") {
    return {
      en: `Privacy Policy for ${gameName} — how Neawe Forge collects, uses, and protects your data.`,
      tr: `${gameName} Gizlilik Politikası — Neawe Forge verilerinizi nasıl topluyor, kullanıyor ve koruyor.`,
    };
  }
  return {
    en: `Terms of Service for ${gameName} — the rules for using the app, from Neawe Forge.`,
    tr: `${gameName} Kullanım Koşulları — uygulamayı kullanırken geçerli olan kurallar.`,
  };
}

export function meta({ loaderData, params, matches }: Route.MetaArgs) {
  const docType = isLegalDocType(params.docType) ? params.docType : undefined;
  const path = docType ? legalPath(params.gameSlug, docType) : `/${params.gameSlug}/${params.docType}/`;

  if (!loaderData?.game || !loaderData?.doc || !docType) {
    return buildMeta({
      matches,
      path,
      title: "Not Found",
      description: "The requested legal document doesn't exist.",
      noindex: true,
    });
  }

  const { game, doc } = loaderData;
  return buildMeta({
    matches,
    path,
    title: `${game.name} — ${doc.en.headerSub}`,
    description: legalDescription(docType, game.name).en,
  });
}

const docTabs: { docType: LegalDocType; en: string; tr: string }[] = [
  { docType: "privacy_policy", en: "Privacy Policy", tr: "Gizlilik Politikası" },
  { docType: "terms_of_service", en: "Terms of Service", tr: "Kullanım Koşulları" },
];

export default function LegalPage({ loaderData, params }: Route.ComponentProps) {
  const { game, doc } = loaderData;
  const docType = isLegalDocType(params.docType) ? params.docType : undefined;

  usePageTitle(
    game && doc && docType
      ? {
          title: { en: `${game.name} — ${doc.en.headerSub}`, tr: `${game.name} — ${doc.tr.headerSub}` },
          description: legalDescription(docType, game.name),
        }
      : { title: { en: "Not Found", tr: "Bulunamadı" } },
  );

  if (!game || !doc) {
    return (
      <main className="content" id={mainContentId} tabIndex={-1}>
        <p>Not found / Bulunamadı</p>
      </main>
    );
  }

  return (
    <main id={mainContentId} tabIndex={-1}>
      <header>
        <div className="header_eyebrow en_content">Neawe Forge · Legal Documents</div>
        <div className="header_eyebrow tr_content">Neawe Forge · Yasal Belgeler</div>
        <h1>
          {game.name}
          {/* Visually the heading only ever shows the game name — the doc
              type is already restated right below in .header_sub. This
              hidden span just makes the *type* part of the <h1>'s
              accessible name too ("Words & Hammers — Privacy Policy"),
              since the visible .header_sub line is marked aria-hidden
              below to avoid announcing the same words twice. */}
          <span className="sr_only en_content"> — {doc.en.headerSub}</span>
          <span className="sr_only tr_content"> — {doc.tr.headerSub}</span>
        </h1>
        <div className="header_rule" />
        <p className="header_sub en_content" aria-hidden="true">
          {doc.en.headerSub}
        </p>
        <p className="header_sub tr_content" aria-hidden="true">
          {doc.tr.headerSub}
        </p>
      </header>

      <nav className="tabs_nav" aria-label="Legal document tabs / Yasal belge sekmeleri">
        {docTabs.map((tab) => (
          <Link
            key={tab.docType}
            className={`tab_btn${tab.docType === params.docType ? " active" : ""}`}
            to={legalPath(params.gameSlug, tab.docType)}
          >
            <span className="en_inline">{tab.en}</span>
            <span className="tr_inline">{tab.tr}</span>
          </Link>
        ))}
      </nav>

      <div className="content" id="top" tabIndex={-1}>
        <div className="en_content">
          <LegalDocView doc={doc} lang="en" content={doc.en} />
        </div>
        <div className="tr_content">
          <LegalDocView doc={doc} lang="tr" content={doc.tr} />
        </div>
        <a className="back_to_top" href="#top">
          <span className="en_inline">
            <span aria-hidden="true">↑</span> Back to top
          </span>
          <span className="tr_inline">
            <span aria-hidden="true">↑</span> Başa dön
          </span>
        </a>
      </div>
    </main>
  );
}
