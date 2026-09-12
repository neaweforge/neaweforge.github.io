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

/** One selling point on the game's own page. Kept short — a label and a sentence. */
export interface GameFeature {
  title: LocalizedText;
  body: LocalizedText;
}

export interface Game {
  /** URL slug — snake_case, drives every route under this game (e.g. /words_and_hammers/privacy_policy). */
  slug: string;
  /** Display name shown in cards, titles, and legal page headers. */
  name: string;
  /** Store package/bundle identifier — reference data only, never rendered as a URL. */
  packageId: string;
  status: GameStatus;
  /** One-line hook shown right under the name — what the game is, in a breath. */
  tagline: LocalizedText;
  /** Long-form pitch paragraph shown on the game card — not a short tagline. */
  description: LocalizedText;
  /** Shown on the game's own page. Every entry must describe something the game
      actually does — no speculative or planned features. */
  features: GameFeature[];
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
    status: "released",
    tagline: {
      en: "Find the words, swing the hammers, top your best score.",
      tr: "Kelimeleri bul, çekiçleri salla, en iyi skorunu geç.",
    },
    description: {
      en: "Find and collect words hidden among the letters on the board, earn points, and spend them wisely along the way — the smartest strategy earns you the highest score in every stage.",
      tr: "Oyun alanındaki harfler arasından kelimeleri bul ve ilerle, puan topla, bir yandan da harca — en stratejik yaklaşım sana her bölümde en yüksek skoru kazandırır.",
    },
    // Each entry corresponds to something visible in the screenshots and the
    // description above — nothing here is aspirational.
    features: [
      {
        title: { en: "Trace words on the board", tr: "Tahtada kelimeleri ara" },
        body: {
          en: "Words hide among the letters on the grid. Trace one to collect it and earn points toward your stage score.",
          tr: "Kelimeler ızgaradaki harflerin arasına saklanır. Birini bulup izini sürerek topla ve bölüm skoruna puan kazan.",
        },
      },
      {
        title: { en: "Spend points on hammers", tr: "Puanını çekiçlere harca" },
        body: {
          en: "The shop sells horizontal, vertical and diagonal hammers. Points spent on the right hammer at the right moment open up the board.",
          tr: "Dükkanda yatay, dikey ve çapraz çekiçler var. Doğru anda doğru çekiç, tahtayı açan hamle olur.",
        },
      },
      {
        title: { en: "Chase a higher score", tr: "Daha yüksek skorun peşinde" },
        body: {
          en: "Every stage tracks its own score, stars and completion. Your profile keeps the running total of Forge Points.",
          tr: "Her bölüm kendi skorunu, yıldızını ve tamamlanma durumunu tutar. Profilinde toplam Forge Puanın birikir.",
        },
      },
    ],
    techStack: [
      { label: "Flutter", url: "https://flutter.dev" },
      { label: "Dart", url: "https://dart.dev" },
      { label: "Flame", url: "https://flame-engine.org" },
    ],
    stores: {
      android: "https://play.google.com/store/apps/details?id=com.neaweforge.wordsandhammers",
      // Country-scoped URL on purpose: the release is Turkey-only for now,
      // and the country-less short form (/app/id…) 404s.
      ios: "https://apps.apple.com/tr/app/words-hammers-kelime-oyunu/id6799218627",
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
