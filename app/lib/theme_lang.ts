export const THEME_KEY = "nf_theme";
export const LANG_KEY = "nf_lang";

export type Theme = "auto" | "dark" | "light";
export type Lang = "auto" | "en" | "tr";

const themes: readonly Theme[] = ["auto", "dark", "light"];
const langs: readonly Lang[] = ["auto", "en", "tr"];

export function isTheme(value: string): value is Theme {
  return (themes as readonly string[]).includes(value);
}

export function isLang(value: string): value is Lang {
  return (langs as readonly string[]).includes(value);
}

export function readStoredTheme(): Theme {
  const stored = localStorage.getItem(THEME_KEY);
  return stored !== null && isTheme(stored) ? stored : "auto";
}

export function readStoredLang(): Lang {
  const stored = localStorage.getItem(LANG_KEY);
  return stored !== null && isLang(stored) ? stored : "auto";
}

export function effectiveLang(lang: Lang, navigatorLanguage: string): "en" | "tr" {
  if (lang !== "auto") return lang;
  return navigatorLanguage.toLowerCase().startsWith("tr") ? "tr" : "en";
}

// ── External store ──
// localStorage is the actual source of truth here, not React state, so the
// provider subscribes to it through useSyncExternalStore rather than copying
// it into state from an effect. readStoredTheme/readStoredLang double as the
// snapshot getters: both return a plain string, so React's identity check
// settles immediately instead of looping.

const listeners = new Set<() => void>();

export function subscribeThemeLang(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function emit(): void {
  for (const listener of listeners) listener();
}

export function storeTheme(next: Theme): void {
  localStorage.setItem(THEME_KEY, next);
  document.documentElement.setAttribute("data-theme", next);
  emit();
}

export function storeLang(next: Lang): void {
  localStorage.setItem(LANG_KEY, next);
  // Content visibility is keyed off html[lang] in base.css, not a body
  // class — see the boot-script comment below for why.
  document.documentElement.lang = effectiveLang(next, navigator.language);
  emit();
}

// Prerender has no localStorage. These match the <html data-theme="auto"
// lang="en"> baked into the static markup, so hydration starts from the same
// values the server wrote and only then picks up the visitor's real choice.
export function serverTheme(): Theme {
  return "auto";
}

export function serverLang(): Lang {
  return "auto";
}

/**
 * Inlined into <head> as a blocking script (see app/root.tsx) so the
 * previously-chosen theme/lang apply before first paint — no
 * hydration flash. Necessarily plain JS, not TS: it runs standalone
 * before any bundle loads, so it can't import from this module. Keep it
 * in sync by hand with the logic above if either ever changes.
 *
 * Only touches `document.documentElement` (the <html> tag) — this runs
 * while the browser is still parsing <head>, so `document.body` does not
 * exist yet. Lang-based content visibility is keyed off `html[lang]` in
 * base.css for exactly this reason, not a body class.
 */
export const themeLangBootScript = `(function () {
  var theme = localStorage.getItem(${JSON.stringify(THEME_KEY)}) || "auto";
  var lang = localStorage.getItem(${JSON.stringify(LANG_KEY)}) || "auto";
  document.documentElement.setAttribute("data-theme", theme);
  var effective = lang === "auto" ? (navigator.language.toLowerCase().indexOf("tr") === 0 ? "tr" : "en") : lang;
  document.documentElement.lang = effective;
})();`;
