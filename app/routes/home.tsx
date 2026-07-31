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
      <p>
        Phase 2 skeleton — real homepage design lands in Phase 5.
        <br />
        Faz 2 iskeleti — gerçek anasayfa tasarımı Faz 5'te gelecek.
      </p>
      <h2>Games / Oyunlar</h2>
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
