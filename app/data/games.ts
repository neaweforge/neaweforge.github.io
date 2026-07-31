export type GameStatus = "coming_soon" | "released";

export interface LocalizedText {
  en: string;
  tr: string;
}

export interface GameStoreLinks {
  android: string | null;
  ios: string | null;
  // Reserved for future desktop releases (Steam/Windows/macOS via Flutter + Flame + Bonfire).
  // Left undefined until a game actually ships there — do not populate speculatively.
  steam?: string | null;
  windows?: string | null;
  macos?: string | null;
}

export interface Game {
  /** URL slug — snake_case, drives every route under this game (e.g. /words_and_hammers/privacy_policy). */
  slug: string;
  /** Display name shown in cards, titles, and legal page headers. */
  name: string;
  /** Store package/bundle identifier — reference data only, never rendered as a URL. */
  packageId: string;
  status: GameStatus;
  tagline: LocalizedText;
  stores: GameStoreLinks;
  screenshots: string[];
}

export const games: Game[] = [
  {
    slug: "words_and_hammers",
    name: "Words & Hammers",
    packageId: "com.neaweforge.wordsandhammers",
    status: "coming_soon",
    tagline: {
      en: "Find and collect words hidden among the letters on the board, earn points, and spend them wisely along the way — the smartest strategy earns you the most points and takes you straight to the top of the leaderboard.",
      tr: "Oyun alanındaki harfler arasından kelimeleri bul ve ilerle, puan topla, bir yandan da harca — en stratejik yaklaşım sana en çok puanı kazandıracak ve seni sıralamada en üstlere çıkaracak.",
    },
    stores: {
      android: null,
      ios: null,
    },
    screenshots: [],
  },
];
