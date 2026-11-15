import type { LocalizedText } from "./games";

export interface Announcement {
  /** Publication date, YYYY-MM-DD. */
  date: string;
  title: LocalizedText;
  body: LocalizedText;
}

// Studio announcements shown on the home page, newest first. A new
// announcement is one more entry at the top; nothing else changes. Release
// dates are the dates the stores actually published the version.
export const announcements: Announcement[] = [
  {
    date: "2026-11-15",
    title: { en: "About progress resets", tr: "Kayıt sıfırlaması hakkında" },
    body: {
      en: "Words & Hammers is still in development. Major updates before the full release will reset in-game progress and items. We will post a dated notice in the game and here at least 7 days before each reset.",
      tr: "Words & Hammers hâlâ geliştirme aşamasında. Tam sürüme kadar gelecek büyük güncellemelerde oyun içi ilerleme ve öğeler sıfırlanacak. Her sıfırlamadan en az 7 gün önce oyunda ve burada tarihli duyuru yapacağız.",
    },
  },
  {
    date: "2026-09-19",
    title: { en: "Words & Hammers is on Play Store", tr: "Words & Hammers Play Store'da" },
    body: {
      en: "Version 1.0.1 of our first game, Words & Hammers, is now out on Play Store too. For now it's available in Türkiye only.",
      tr: "İlk oyunumuz Words & Hammers'ın 1.0.1 sürümü artık Play Store'da da yayında. Şimdilik yalnızca Türkiye'de indirilebilir.",
    },
  },
  {
    date: "2026-08-29",
    title: { en: "Words & Hammers is on the App Store", tr: "Words & Hammers App Store'da" },
    body: {
      en: "Our first game, Words & Hammers, is out on the App Store with version 1.0.1. For now it's available in Türkiye only.",
      tr: "İlk oyunumuz Words & Hammers, 1.0.1 sürümüyle App Store'da yayında. Şimdilik yalnızca Türkiye'de indirilebilir.",
    },
  },
];
