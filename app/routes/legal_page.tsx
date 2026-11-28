import { Link } from "react-router";
import type { Route } from "./+types/legal_page";
import { games } from "../data/games";
import { legalContent, isLegalDocType, type LegalDocType } from "../content/legal_content";
import { withEmailSlots } from "../content/legal_email_slots";
import { LegalDocView } from "../components/legal_doc_view";
import { legalPath, mainContentId, pathSegments } from "../lib/paths";
import { buildMeta } from "../lib/seo";
import { usePageTitle } from "../lib/use_page_title";
import "../styles/legal.css";

// routes.ts registers this module once per game and document type, so both
// always resolve; a miss means routes.ts, games.ts and legal_content.ts
// drifted apart, and the prerender fails loudly instead of shipping a
// "Not found" page at a URL that may already be submitted to an app store.
export function loader({ request }: Route.LoaderArgs) {
  const [gameSlug = "", docSegment = ""] = pathSegments(request.url);
  const game = games.find((g) => g.slug === gameSlug);
  const docType = isLegalDocType(docSegment) ? docSegment : undefined;
  const found = game && docType ? legalContent[game.slug]?.[docType] : undefined;
  if (!game || !docType || !found) {
    throw new Error(`legal_page: no legal document for "${gameSlug}/${docSegment}" (routes.ts and legal_content.ts drifted apart).`);
  }
  // Strip the contact address here rather than in the view — this return
  // value is what ends up serialized in the prerendered HTML and _.data.
  // See content/legal_email_slots.ts.
  return { game, docType, doc: withEmailSlots(found) };
}

// Description templates, keyed by doc type rather than by game — a new
// game's legal pages get a correct description for free, no new copy.
function legalDescription(docType: LegalDocType, gameName: string): { en: string; tr: string } {
  if (docType === "privacy_policy") {
    return {
      en: `Privacy Notice (privacy policy) for ${gameName} — how Neawe Forge processes your personal data.`,
      tr: `${gameName} Aydınlatma Metni (gizlilik politikası) — Neawe Forge kişisel verilerinizi nasıl işliyor.`,
    };
  }
  return {
    en: `Terms of Service for ${gameName} — the rules for using the app, from Neawe Forge.`,
    tr: `${gameName} Kullanım Koşulları — uygulamayı kullanırken geçerli olan kurallar.`,
  };
}

export function meta({ loaderData, matches }: Route.MetaArgs) {
  if (!loaderData) return [];
  const { game, docType, doc } = loaderData;
  return buildMeta({
    matches,
    path: legalPath(game.slug, docType),
    title: `${game.name} — ${doc.en.headerSub}`,
    description: legalDescription(docType, game.name).en,
  });
}

const docTabs: { docType: LegalDocType; en: string; tr: string }[] = [
  { docType: "privacy_policy", en: "Privacy Notice", tr: "Aydınlatma Metni" },
  { docType: "terms_of_service", en: "Terms of Service", tr: "Kullanım Koşulları" },
];

export default function LegalPage({ loaderData }: Route.ComponentProps) {
  const { game, docType, doc } = loaderData;

  usePageTitle({
    title: { en: `${game.name} — ${doc.en.headerSub}`, tr: `${game.name} — ${doc.tr.headerSub}` },
    description: legalDescription(docType, game.name),
  });

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
              accessible name too ("Words & Hammers — Privacy Notice"),
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
            className={`tab_btn${tab.docType === docType ? " active" : ""}`}
            to={legalPath(game.slug, tab.docType)}
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
