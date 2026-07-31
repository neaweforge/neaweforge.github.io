import type { Route } from "./+types/legal_page";
import { games } from "../data/games";
import { legalContent, type LegalDocType } from "../content/legal_content";

export function loader({ params }: Route.LoaderArgs) {
  const { gameSlug, docType } = params;
  const game = games.find((g) => g.slug === gameSlug);
  const doc = game ? legalContent[gameSlug]?.[docType as LegalDocType] : undefined;
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
        {game.name} — {doc.title.en} / {doc.title.tr}
      </h1>
      <p>{doc.body.en}</p>
      <p>{doc.body.tr}</p>
    </main>
  );
}
