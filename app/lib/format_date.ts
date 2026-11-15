import type { LocalizedText } from "../data/games";

// Month names are spelled out here instead of using Intl.DateTimeFormat:
// the prerendered HTML is built with Node's ICU data and hydrated with the
// browser's, and any difference between the two would be a hydration
// mismatch. A fixed table gives byte-identical output on both sides.
const monthNames: Record<keyof LocalizedText, readonly string[]> = {
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  tr: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
};

/** "2026-08-29" → { en: "August 29, 2026", tr: "29 Ağustos 2026" }. */
export function localizedDate(isoDate: string): LocalizedText {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
  const monthIndex = match ? Number(match[2]) - 1 : -1;
  const enMonth = monthNames.en[monthIndex];
  const trMonth = monthNames.tr[monthIndex];
  if (!match || enMonth === undefined || trMonth === undefined) {
    // Fails the prerender instead of shipping a wrong date.
    throw new Error(`Invalid announcement date: ${isoDate}`);
  }
  const year = match[1];
  const day = Number(match[3]);
  return {
    en: `${enMonth} ${day}, ${year}`,
    tr: `${day} ${trMonth} ${year}`,
  };
}
