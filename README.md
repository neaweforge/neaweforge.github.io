# neaweforge.github.io

Official website for **Neawe Forge** — an independent mobile game studio.

🌐 **Live site:** [https://neaweforge.github.io](https://neaweforge.github.io)

---

## What's on the site

The site is a single-page studio website hosted via **GitHub Pages**. It includes:

- **Studio intro** — Who Neawe Forge is and what it builds
- **Games** — Showcase of released and in-development games with screenshots
- **Founder** — About Sait Kaplan (founder, developer)
- **Legal Hub** — Privacy policies and terms of service for published apps

Supports **English / Turkish** language switching and **dark / light / auto** theming.

---

## Structure

```
index.html                        ← Main studio website (single page)
wordsandhammers/
  index.html                      ← Redirects to privacy-policy.html (keeps the /wordsandhammers/ URL working)
  privacy-policy.html             ← Privacy Policy for Words & Hammers
  terms-of-service.html           ← Terms of Service for Words & Hammers
assets/
  css/
    legal.css                     ← Shared styles for legal pages (any game's privacy/terms page)
  js/
    legal.js                      ← Shared theme/language toggle logic for legal pages
  img/
    wordsandhammers/               ← Game screenshots
```

Each game's legal subfolder follows the same pattern: an `index.html` redirector plus real, descriptively named `privacy-policy.html` / `terms-of-service.html` files that both link to the shared `assets/css/legal.css` and `assets/js/legal.js` — so styling and the theme/language toggle stay in sync across every game's legal pages without duplicating the code per folder.

### Legal document URLs

Each app has its own subfolder with dedicated pages. These are the URLs submitted to Google Play / App Store as the privacy policy / terms of service links.

| App | Privacy Policy | Terms of Service |
|-----|-----------------|-------------------|
| Words & Hammers | `https://neaweforge.github.io/wordsandhammers/privacy-policy.html` | `https://neaweforge.github.io/wordsandhammers/terms-of-service.html` |

### Adding a new app

1. Copy the `wordsandhammers/` folder, rename it without underscores (e.g. `mynewgame/`)
2. Update `privacy-policy.html` and `terms-of-service.html` inside the new folder with the app's content (they already link to the shared `assets/css/legal.css` and `assets/js/legal.js`)
3. Update the redirect target in the new folder's `index.html` if the filename differs
4. Add a game card to the main `index.html`
5. Submit the `privacy-policy.html` URL to the app store as the privacy policy link

---

## Tech

Pure HTML/CSS/JS — no frameworks, no build step. Deployed automatically via GitHub Pages on every push to `main`.

---

## Contact

📧 [neaweforge.support@gmail.com](mailto:neaweforge.support@gmail.com)
