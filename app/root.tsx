import type { ReactNode } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

// --display/--body in tokens.css name Cinzel and Jost; fonts.css is what
// actually loads them, from the site itself (no Google Fonts request).
import "./styles/fonts.css";
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
import { organizationJsonLd } from "./lib/json_ld";

// Root-level meta runs on every route (react-router merges it with each
// leaf route's own meta() automatically) — the Organization schema
// describes the studio itself, not any one page, so it belongs here once
// rather than repeated in every route file.
export function meta() {
  return [{ "script:ld+json": organizationJsonLd() }];
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    // The boot script below mutates lang/data-theme on this exact element
    // before React hydrates — suppressHydrationWarning tells React to let
    // the DOM's current values win instead of reverting them to match SSR.
    <html lang="en" data-theme="auto" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* The emblem is a raster illustration (flame gradients), so there
            is no SVG favicon — the .ico carries 16+32px renders and every
            browser understands it. */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple_touch_icon.png" />
        <link rel="manifest" href="/site_manifest.json" />
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
