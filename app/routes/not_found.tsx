import type { Route } from "./+types/not_found";

export function meta(_: Route.MetaArgs) {
  return [{ title: "404 — Neawe Forge" }];
}

export default function NotFound() {
  return (
    <main>
      <h1>Neawe Forge</h1>
      <p>
        404 — Page not found.
        <br />
        404 — Sayfa bulunamadı.
      </p>
      <a href="/">
        ← Studio Hub / Ana Sayfa
      </a>
    </main>
  );
}
