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
      en: "Find the words among the letters, break the ones you don't need, and climb toward your best score step by step.",
      tr: "Harflerin arasından kelimeleri bul, gereksiz harfleri kır, en iyi puanına adım adım ilerle.",
    },
    description: {
      en: "Find the target words among letters that are the same for everyone. Break the letters you don't need with hammers and keep going. Remember: every hammer costs points and every word earns them — the smartest strategy scores the most.",
      tr: "Herkes için aynı olan harflerin arasından istenen kelimeleri bul. Çekiçlerle gereksiz harfleri kır ve ilerle. Unutma: her çekiç puan götürür, her kelime puan getirir. En iyi stratejiyi kuran, en çok puanı kapar.",
    },
    // Each entry corresponds to something visible in the screenshots and the
    // description above — nothing here is aspirational.
    features: [
      {
        title: { en: "Find the words on the board", tr: "Oyun alanında kelimeleri bul" },
        body: {
          en: "Words hide on the grid. Trace one from its first letter to its last, complete it and earn points. Every letter counts.",
          tr: "Kelimeler ızgarada gizli. İlk harften son harfe kadar izini sür, kelimeyi tamamla ve puanı kap. Her harf değerli.",
        },
      },
      {
        title: { en: "Use the hammers", tr: "Çekiçleri kullan" },
        body: {
          en: "Basic or special, it doesn't matter: break the letters you don't need with hammers and open the way to new words. The right hammer, in the right place, at the right moment changes everything.",
          tr: "Basit ya da özel, fark etmez: çekiçlerle gereksiz harfleri kır, yeni kelimelere yol aç. Doğru anda, doğru yerde, doğru çekiç her şeyi değiştirir.",
        },
      },
      {
        title: { en: "Best strategy, highest score", tr: "En iyi strateji, en yüksek puan" },
        body: {
          en: "The right words and the right hammers bring the best result — and the best result takes you one step higher. Every stage's score and stars, and your total Forge Points, build up on your profile.",
          tr: "Doğru kelimeler ve doğru çekiçler en iyi sonucu getirir; en iyi sonuç da seni bir adım yukarı taşır. Her bölümün puanı, yıldızı ve toplam Forge Puanın profilinde birikir.",
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
          tr: "Yatay, dikey ve çapraz çekiçler sunan çekiç dükkânı.",
        },
      },
      {
        src: "/img/words_and_hammers/screenshot_04.webp",
        alt: {
          en: "Player profile showing Forge Points and per-stage statistics.",
          tr: "Forge Puanını ve bölümlere göre istatistikleri gösteren oyuncu profili.",
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
