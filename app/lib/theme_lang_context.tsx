import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  THEME_KEY,
  LANG_KEY,
  effectiveLang,
  readStoredLang,
  readStoredTheme,
  type Lang,
  type Theme,
} from "./theme_lang";

interface ThemeLangContextValue {
  theme: Theme;
  lang: Lang;
  setTheme: (theme: Theme) => void;
  setLang: (lang: Lang) => void;
}

const ThemeLangContext = createContext<ThemeLangContextValue | null>(null);

export function ThemeLangProvider({ children }: { children: ReactNode }) {
  // Prerender/build time has no localStorage — these defaults match the
  // <html data-theme="auto"> baked into the static markup. The effect
  // below syncs them with whatever the boot script (or a prior visit)
  // already applied, right after hydration.
  const [theme, setThemeState] = useState<Theme>("auto");
  const [lang, setLangState] = useState<Lang>("auto");

  useEffect(() => {
    setThemeState(readStoredTheme());
    setLangState(readStoredLang());
  }, []);

  function setTheme(next: Theme) {
    setThemeState(next);
    localStorage.setItem(THEME_KEY, next);
    document.documentElement.setAttribute("data-theme", next);
  }

  function setLang(next: Lang) {
    setLangState(next);
    localStorage.setItem(LANG_KEY, next);
    // Content visibility is keyed off html[lang] in base.css, not a body
    // class — see theme_lang.ts's boot-script comment for why.
    document.documentElement.lang = effectiveLang(next, navigator.language);
  }

  return (
    <ThemeLangContext.Provider value={{ theme, lang, setTheme, setLang }}>
      {children}
    </ThemeLangContext.Provider>
  );
}

export function useThemeLang(): ThemeLangContextValue {
  const ctx = useContext(ThemeLangContext);
  if (ctx === null) {
    throw new Error("useThemeLang must be used within a ThemeLangProvider");
  }
  return ctx;
}
