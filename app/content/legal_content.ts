import type { LocalizedText } from "../data/games";

export type LegalDocType = "privacy_policy" | "terms_of_service";

const legalDocTypes: readonly LegalDocType[] = ["privacy_policy", "terms_of_service"];

export function isLegalDocType(value: string): value is LegalDocType {
  return (legalDocTypes as readonly string[]).includes(value);
}

export interface LegalDoc {
  title: LocalizedText;
  // Placeholder body for the Phase 2 skeleton — Phase 4 replaces this with
  // the real, fully structured legal content migrated from the old site.
  body: LocalizedText;
}

export const legalContent: Record<string, Record<LegalDocType, LegalDoc>> = {
  words_and_hammers: {
    privacy_policy: {
      title: { en: "Privacy Policy", tr: "Gizlilik Politikası" },
      body: {
        en: "Full content is migrated in Phase 4.",
        tr: "Tam içerik Faz 4'te taşınacak.",
      },
    },
    terms_of_service: {
      title: { en: "Terms of Service", tr: "Kullanım Koşulları" },
      body: {
        en: "Full content is migrated in Phase 4.",
        tr: "Tam içerik Faz 4'te taşınacak.",
      },
    },
  },
};
