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

export function Layout({ children }: { children: ReactNode }) {
  return (
    // The boot script below mutates lang/data-theme on this exact element
    // before React hydrates — suppressHydrationWarning tells React to let
    // the DOM's current values win instead of reverting them to match SSR.
    <html lang="en" data-theme="auto" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <Meta />
        <Links />
        {/* Applies the previously-chosen theme/lang before first paint —
            see app/lib/theme_lang.ts for why this can't just be a React effect. */}
        <script dangerouslySetInnerHTML={{ __html: themeLangBootScript }} />
      </head>
      <body>
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
