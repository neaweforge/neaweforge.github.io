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
