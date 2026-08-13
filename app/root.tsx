import type { ReactNode } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/nav.css";
import "./styles/footer.css";
import "./styles/layout.css";

import { themeLangBootScript } from "./lib/theme_lang";
import { ThemeLangProvider } from "./lib/theme_lang_context";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { SkipLink } from "./components/skip_link";

export function Layout({ children }: { children: ReactNode }) {
  return (
    // The boot script below mutates lang/data-theme on this exact element
    // before React hydrates — suppressHydrationWarning tells React to let
    // the DOM's current values win instead of reverting them to match SSR.
    <html lang="en" data-theme="auto" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Order matters: browsers use the last icon they support, not the
            first. .ico first as the fallback every browser understands,
            .svg last so anything that understands type="image/svg+xml"
            (i.e. everything modern) prefers the scalable version over it. */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple_touch_icon.png" />
        <link rel="manifest" href="/site_manifest.json" />
        {/* --display/--body/--mono in tokens.css name these families, but
            naming a font doesn't load it — this is what actually fetches
            Cinzel/Jost/JetBrains Mono. Without it every page silently falls
            back to each variable's system-font alternate. Weights listed
            here are exactly the ones the CSS uses (checked via grep) — at
            most 2 per family, nothing speculative. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Jost:wght@300;700&family=JetBrains+Mono:wght@700&display=swap"
          rel="stylesheet"
        />
        <Meta />
        <Links />
        {/* Applies the previously-chosen theme/lang before first paint —
            see app/lib/theme_lang.ts for why this can't just be a React effect. */}
        <script dangerouslySetInnerHTML={{ __html: themeLangBootScript }} />
      </head>
      <body>
        {/* First focusable element in the document, ahead of even the
            theme/lang provider's children — a keyboard user tabbing from
            the address bar must land here before anything else. */}
        <SkipLink />
        <ThemeLangProvider>
          <Nav />
          {children}
          <Footer />
        </ThemeLangProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}
