import type { Route } from "./+types/not_found";

export function meta(_: Route.MetaArgs) {
  return [{ title: "404 — Neawe Forge" }];
}

export default function NotFound() {
  return (
    <main className="content">
      <h1 className="en_content">404 — Page Not Found</h1>
      <h1 className="tr_content">404 — Sayfa Bulunamadı</h1>
      <a href="/">
        <span className="en_inline">
          <span aria-hidden="true">←</span> Studio Hub
        </span>
        <span className="tr_inline">
          <span aria-hidden="true">←</span> Ana Sayfa
        </span>
      </a>
    </main>
  );
}
