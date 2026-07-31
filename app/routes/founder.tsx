import type { Route } from "./+types/founder";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Sait Kaplan — Founder, Neawe Forge" },
    {
      name: "description",
      content: "Sait Kaplan — founder and lead developer of Neawe Forge, an independent game studio.",
    },
  ];
}

export default function Founder() {
  return (
    <main>
      <h1>Sait Kaplan</h1>
      <p>
        Phase 2 skeleton — real founder page design lands in Phase 6.
        <br />
        Faz 2 iskeleti — gerçek kurucu sayfası tasarımı Faz 6'da gelecek.
      </p>
    </main>
  );
}
