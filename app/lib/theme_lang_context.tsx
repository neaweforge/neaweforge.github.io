import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";
import {
  readStoredLang,
  readStoredTheme,
  serverLang,
  serverTheme,
  storeLang,
  storeTheme,
  subscribeThemeLang,
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
  // The stored preference is external state that React doesn't own, so it's
  // read through useSyncExternalStore rather than mirrored into useState from
  // an effect — that kept a second copy of the truth and made every visit
  // render twice. See the store in theme_lang.ts.
  const theme = useSyncExternalStore(subscribeThemeLang, readStoredTheme, serverTheme);
  const lang = useSyncExternalStore(subscribeThemeLang, readStoredLang, serverLang);

  return (
    <ThemeLangContext.Provider value={{ theme, lang, setTheme: storeTheme, setLang: storeLang }}>
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
