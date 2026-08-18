# neaweforge.com

Official developer hub for **Neawe Forge** — a brand-wide site for an independent mobile game studio, covering studio introduction, founder profile, and legal documents.

🌐 **Live site:** [https://neaweforge.com](https://neaweforge.com)

---

## What's on the Site

- **Studio introduction** — who Neawe Forge is and what it builds (home page)
- **Games** — a showcase of released and in-development games
- **Founder** — a short, studio-focused profile of the founder (`/founder/`)
- **Legal center** — privacy policy and terms of service for each app

**English / Turkish** language switching and **dark / light / auto** theme selection are both supported.

---

## Technology

**React 19 + Vite 7 + TypeScript + React Router 8** (framework mode). Runs with `ssr:false` and a build-time `prerender()` — there is no server-side runtime, the output is entirely static HTML/CSS/JS. GitHub Pages serves that static output directly.

Deployment runs through GitHub Actions via `.github/workflows/deploy.yml`: every push to `main` triggers a build and publishes to GitHub Pages.

---

## Structure

```text
app/
  root.tsx                    ← <html>/<body> shell, boot script, global style imports
  routes.ts                   ← Route definitions
  routes/
    home.tsx                  ← Home page (hero + game showcase)
    founder.tsx                ← Founder page
    legal_page.tsx             ← Single dynamic route serving every game's legal docs (:gameSlug/:docType)
    not_found.tsx               ← 404
  components/                 ← Nav, Footer, GameCard, settings panel, legal doc renderer
  data/
    games.ts                  ← Single source of truth for games — adding a game needs no route/prerender changes
  content/
    legal_types.ts             ← Legal content types
    legal_content.ts            ← Maps games.ts to legal content; the build fails if a game is missing content
    words_and_hammers/         ← Each game's own folder with EN+TR legal text
  lib/
    paths.ts                  ← Every internal URL and route id is generated from this one place
    site_config.ts             ← Contact address, social links, studio status text
    theme_lang.ts / theme_lang_context.tsx  ← Theme/language state + localStorage
  styles/                     ← Per-page/component CSS, snake_case
public/
  CNAME, .nojekyll
  favicon.ico, favicon.svg, apple_touch_icon.png, icon_192.png, icon_512.png
  site_manifest.json          ← Name/icon for Android "add to home screen" — not a PWA, no service worker
scripts/
  postbuild.mjs                ← Post-build: copies 404.html, verifies CNAME/.nojekyll, removes unused files
```

### Legal Document URLs

Each app is defined by a `slug` in `app/data/games.ts`; its legal pages are generated automatically at:

| App | Privacy Policy | Terms of Service |
| --- | --- | --- |
| Words & Hammers | `https://neaweforge.com/words_and_hammers/privacy_policy/` | `https://neaweforge.com/words_and_hammers/terms_of_service/` |

### Adding a New Game

1. Add a new `Game` entry to `app/data/games.ts` (slug, name, package id, description, tech badges, store links, screenshots)
2. Create `app/content/<slug>/privacy_policy.ts` and `terms_of_service.ts`, and register them in `app/content/legal_content.ts`
3. That's it — routes, prerender paths, and the home page's game card are generated automatically. If a game is missing an entry in `legal_content.ts`, the build fails instead of silently publishing an empty page.

---

## Running Locally

```bash
npm install   # first time only
npm run dev   # http://localhost:5173 — binds to localhost only
```

Other commands:

```bash
npm run build       # production build (build/client/)
npm run typecheck   # React Router type generation + tsc
```

---

## Contact

📧 [support@neaweforge.com](mailto:support@neaweforge.com)
