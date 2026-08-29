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

export interface TechBadge {
  label: string;
  url: string;
}

export interface GameScreenshot {
  /** Path under public/, e.g. "/img/words_and_hammers/screenshot_01.webp". */
  src: string;
  alt: LocalizedText;
}

export interface Game {
  /** URL slug — snake_case, drives every route under this game (e.g. /words_and_hammers/privacy_policy). */
  slug: string;
  /** Display name shown in cards, titles, and legal page headers. */
  name: string;
  /** Store package/bundle identifier — reference data only, never rendered as a URL. */
  packageId: string;
  status: GameStatus;
  /** Long-form pitch paragraph shown on the game card — not a short tagline. */
  description: LocalizedText;
  techStack: TechBadge[];
  stores: GameStoreLinks;
  /** Empty until real screenshots exist — the card renders a placeholder frame until then. */
  screenshots: GameScreenshot[];
}

export const games: Game[] = [
  {
    slug: "words_and_hammers",
    name: "Words & Hammers",
    packageId: "com.neaweforge.wordsandhammers",
    status: "coming_soon",
    description: {
      en: "Find and collect words hidden among the letters on the board, earn points, and spend them wisely along the way — the smartest strategy earns you the highest score in every stage.",
      tr: "Oyun alanındaki harfler arasından kelimeleri bul ve ilerle, puan topla, bir yandan da harca — en stratejik yaklaşım sana her bölümde en yüksek skoru kazandırır.",
    },
    techStack: [
      { label: "Flutter", url: "https://flutter.dev" },
      { label: "Dart", url: "https://dart.dev" },
      { label: "Flame", url: "https://flame-engine.org" },
    ],
    stores: {
      android: null,
      ios: null,
    },
    screenshots: [
      {
        src: "/img/words_and_hammers/screenshot_01.webp",
        alt: {
          en: "Gameplay board — tracing a word through a grid of letters.",
          tr: "Oynanış tahtası — harf ızgarasında bir kelimenin izini sürme.",
        },
      },
      {
        src: "/img/words_and_hammers/screenshot_02.webp",
        alt: {
          en: "Stage intro screen with themed level artwork and a start button.",
          tr: "Temalı bölüm görseli ve başlat düğmesiyle bölüm giriş ekranı.",
        },
      },
      {
        src: "/img/words_and_hammers/screenshot_03.webp",
        alt: {
          en: "Hammer shop offering horizontal, vertical and diagonal hammers.",
          tr: "Yatay, dikey ve çapraz çekiçler sunan çekiç dükkanı.",
        },
      },
      {
        src: "/img/words_and_hammers/screenshot_04.webp",
        alt: {
          en: "Player profile showing Forge Points and per-stage statistics.",
          tr: "Forge Puanı ve bölüm bazlı istatistikleri gösteren oyuncu profili.",
        },
      },
      {
        src: "/img/words_and_hammers/screenshot_05.webp",
        alt: {
          en: "In-game tutorial welcoming the player and explaining the basics.",
          tr: "Oyuncuyu karşılayan ve temel kuralları anlatan oyun içi eğitim.",
        },
      },
    ],
  },
];
