import type { Route } from "./+types/not_found";
import { homePath, mainContentId } from "../lib/paths";
import { buildMeta } from "../lib/seo";
import { usePageTitle } from "../lib/use_page_title";

const title = { en: "404 — Neawe Forge", tr: "404 — Neawe Forge" };
const description = {
  en: "The page you're looking for doesn't exist. Return to the Neawe Forge homepage.",
  tr: "Aradığın sayfa bulunamadı. Neawe Forge ana sayfasına dönebilirsin.",
};

export function meta({ matches }: Route.MetaArgs) {
  return buildMeta({ matches, path: "/404", title: title.en, description: description.en, noindex: true });
}

export default function NotFound() {
  usePageTitle({ title, description });
  return (
    <main className="content" id={mainContentId} tabIndex={-1}>
      <h1 className="en_content">404 — Page not found</h1>
      <h1 className="tr_content">404 — Sayfa bulunamadı</h1>
      <a className="back_link" href={homePath}>
        <span className="en_inline">
          <span aria-hidden="true">←</span> Home page
        </span>
        <span className="tr_inline">
          <span aria-hidden="true">←</span> Ana sayfa
        </span>
      </a>
    </main>
  );
}
