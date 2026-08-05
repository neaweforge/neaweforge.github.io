import type { Route } from "./+types/not_found";

export function meta(_: Route.MetaArgs) {
  return [{ title: "404 — Neawe Forge" }];
}

export default function NotFound() {
  return (
    <main className="content">
      <h1>Neawe Forge</h1>
      <p className="en_content">404 — Page not found.</p>
      <p className="tr_content">404 — Sayfa bulunamadı.</p>
      <a href="/">
        <span className="en_inline">← Studio Hub</span>
        <span className="tr_inline">← Ana Sayfa</span>
      </a>
    </main>
  );
}
