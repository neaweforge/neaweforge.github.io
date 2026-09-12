import { useEffect } from "react";
import { useThemeLang } from "./theme_lang_context";
import { effectiveLang } from "./theme_lang";

interface LocalizedCopy {
  en: string;
  tr: string;
}

interface PageMetaCopy {
  title: LocalizedCopy;
  /** Optional — not every route needs its description kept in sync (e.g. legal pages could, but title alone already covers the common case). */
  description?: LocalizedCopy;
}

// Keeps the browser tab title (and, when provided, the description meta
// tag) in sync with the active language after hydration. The
// server-rendered versions (see seo.ts's buildMeta) always stay English —
// that's what search crawlers and share previews actually see (deliberate,
// see the Faz 2.9 hreflang decision) — this only updates what a human
// visitor's own browser shows once the page has loaded.
export function usePageTitle({ title, description }: PageMetaCopy): void {
  const { lang } = useThemeLang();
  // Pulled apart before the effect so the dependency list holds the strings
  // themselves. Callers build these objects inline, so depending on the
  // objects would re-run the effect on every render.
  const { en: titleEn, tr: titleTr } = title;
  const descriptionEn = description?.en;
  const descriptionTr = description?.tr;

  useEffect(() => {
    const active = effectiveLang(lang, navigator.language);
    document.title = active === "tr" ? titleTr : titleEn;
    const text = active === "tr" ? descriptionTr : descriptionEn;
    if (text !== undefined) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", text);
    }
  }, [lang, titleEn, titleTr, descriptionEn, descriptionTr]);
}
