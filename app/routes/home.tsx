import type { Route } from "./+types/home";
import { games } from "../data/games";

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
    <main>
      <h1>Neawe Forge</h1>
      <p className="en_content">Phase 3 skeleton — the real homepage design lands in Phase 5.</p>
      <p className="tr_content">Faz 3 iskeleti — gerçek anasayfa tasarımı Faz 5'te gelecek.</p>
      <h2>
        <span className="en_inline">Games</span>
        <span className="tr_inline">Oyunlar</span>
      </h2>
      <ul>
        {games.map((game) => (
          <li key={game.slug}>
            {game.name} — {game.status}
          </li>
        ))}
      </ul>
    </main>
  );
}
