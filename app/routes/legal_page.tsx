import { Link } from "react-router";
import type { Route } from "./+types/legal_page";
import { games } from "../data/games";
import { legalContent, isLegalDocType, type LegalDocType } from "../content/legal_content";
import { LegalDocView } from "../components/legal_doc_view";
import "../styles/legal.css";

export function loader({ params }: Route.LoaderArgs) {
  const { gameSlug, docType } = params;
  const game = games.find((g) => g.slug === gameSlug);
  const doc = game && isLegalDocType(docType) ? legalContent[gameSlug]?.[docType] : undefined;
  return { game, doc };
}

export function meta({ loaderData }: Route.MetaArgs) {
  if (!loaderData?.game || !loaderData?.doc) {
    return [{ title: "Not Found" }];
  }
  return [{ title: `${loaderData.game.name} — ${loaderData.doc.en.headerSub}` }];
}

const docTabs: { docType: LegalDocType; en: string; tr: string }[] = [
  { docType: "privacy_policy", en: "Privacy Policy", tr: "Gizlilik Politikası" },
  { docType: "terms_of_service", en: "Terms of Service", tr: "Kullanım Koşulları" },
];

export default function LegalPage({ loaderData, params }: Route.ComponentProps) {
  const { game, doc } = loaderData;

  if (!game || !doc) {
    return (
      <main className="content">
        <p>Not found / Bulunamadı</p>
      </main>
    );
  }

  return (
    <main>
      <header>
        <div className="header_eyebrow en_content">Neawe Forge · Legal Documents</div>
        <div className="header_eyebrow tr_content">Neawe Forge · Yasal Belgeler</div>
        <h1>{game.name}</h1>
        <div className="header_rule" />
        <p className="header_sub en_content">{doc.en.headerSub}</p>
        <p className="header_sub tr_content">{doc.tr.headerSub}</p>
      </header>

      <nav className="tabs_nav">
        {docTabs.map((tab) => (
          <Link
            key={tab.docType}
            className={`tab_btn${tab.docType === params.docType ? " active" : ""}`}
            to={`/${params.gameSlug}/${tab.docType}`}
          >
            <span className="en_inline">{tab.en}</span>
            <span className="tr_inline">{tab.tr}</span>
          </Link>
        ))}
      </nav>

      <div className="content" id="top">
        <div className="en_content">
          <LegalDocView doc={doc} lang="en" content={doc.en} />
        </div>
        <div className="tr_content">
          <LegalDocView doc={doc} lang="tr" content={doc.tr} />
        </div>
        <a className="back_to_top" href="#top">
          <span className="en_inline">↑ Back to top</span>
          <span className="tr_inline">↑ Başa dön</span>
        </a>
      </div>
    </main>
  );
}
