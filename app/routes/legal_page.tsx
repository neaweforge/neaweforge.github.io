import type { Route } from "./+types/legal_page";
import { games } from "../data/games";
import { legalContent, isLegalDocType } from "../content/legal_content";

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
  return [{ title: `${loaderData.game.name} — ${loaderData.doc.title.en}` }];
}

export default function LegalPage({ loaderData }: Route.ComponentProps) {
  const { game, doc } = loaderData;

  if (!game || !doc) {
    return (
      <main>
        <p>Not found / Bulunamadı</p>
      </main>
    );
  }

  return (
    <main>
      <h1>
        {game.name} —{" "}
        <span className="en_inline">{doc.title.en}</span>
        <span className="tr_inline">{doc.title.tr}</span>
      </h1>
      <p className="en_content">{doc.body.en}</p>
      <p className="tr_content">{doc.body.tr}</p>
    </main>
  );
}
