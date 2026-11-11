import type { LocalizedText } from "../data/games";

// Every piece of home/nav/footer copy, EN and TR side by side. Components
// render these through <Localized>; nothing user-facing is written inline
// in JSX, so the two languages can't drift apart and a later move to
// per-language URLs is a data change, not a rewrite.

export const navCopy = {
  games: { en: "Games", tr: "Oyunlar" },
  studio: { en: "Studio", tr: "Stüdyo" },
  contact: { en: "Contact", tr: "İletişim" },
} satisfies Record<string, LocalizedText>;

export const heroCopy = {
  badge: { en: "Independent Game Studio", tr: "Bağımsız Oyun Stüdyosu" },
  slogan: { en: "Forged with love. Played with joy.", tr: "Sevgiyle dövüldü, keyifle oynanır." },
  description: {
    en: "A small, independent studio making games with persistence and passion. We build fun, educational and simple games for multiple platforms. Our first game, Words & Hammers, is available on the App Store and Play Store. Give it a try!",
    tr: "Oyunlarını azim ve tutkuyla yapan küçük, bağımsız bir stüdyo. Birden çok platform için eğlenceli, eğitici ve sade oyunlar geliştiriyoruz. İlk oyunumuz Words & Hammers, App Store ve Play Store'da. Mutlaka dene!",
  },
  primaryCta: { en: "Explore the game", tr: "Oyunu keşfet" },
  secondaryCta: { en: "Get in touch", tr: "Bize ulaş" },
} satisfies Record<string, LocalizedText>;

export const gamesCopy = {
  eyebrow: { en: "Games", tr: "Oyunlar" },
  title: { en: "What we're forging", tr: "Neler dövüyoruz" },
  soon: { en: "Coming soon", tr: "Yakında" },
  screenshotSoon: { en: "Screenshots coming soon", tr: "Ekran görüntüleri hazırlanıyor" },
  viewGame: { en: "See the game", tr: "Oyuna göz at" },
} satisfies Record<string, LocalizedText>;

export const gamePageCopy = {
  backToGames: { en: "All games", tr: "Tüm oyunlar" },
  featuresTitle: { en: "How it plays", tr: "Nasıl oynanır" },
  screenshotsTitle: { en: "Screenshots", tr: "Ekran görüntüleri" },
  availability: { en: "Where can I download it?", tr: "Nereden indirebilirim?" },
  availabilityIntro: {
    en: "You can get our game on both iOS and Android.",
    tr: "Oyunumuzu hem iOS'ta hem Android'de indirebilirsin.",
  },
  legalTitle: { en: "Legal documents", tr: "Yasal belgeler" },
  legalIntro: {
    en: "You can find the game's legal documents here.",
    tr: "Oyunun yasal belgelerine buradan ulaşabilirsin.",
  },
  privacyPolicy: { en: "Privacy Policy", tr: "Gizlilik Politikası" },
  termsOfService: { en: "Terms of Service", tr: "Kullanım Koşulları" },
  techDetailsTitle: { en: "Technical details", tr: "Teknik ayrıntılar" },
} satisfies Record<string, LocalizedText>;

export const galleryCopy = {
  previous: { en: "Previous screenshot", tr: "Önceki ekran görüntüsü" },
  next: { en: "Next screenshot", tr: "Sonraki ekran görüntüsü" },
  enlarge: { en: "Enlarge screenshot", tr: "Ekran görüntüsünü büyüt" },
  close: { en: "Close", tr: "Kapat" },
} satisfies Record<string, LocalizedText>;

export const studioCopy = {
  eyebrow: { en: "Studio", tr: "Stüdyo" },
  title: { en: "Small by design", tr: "Bilerek küçük" },
  body: {
    en: "Founded on July 3, 2025, Neawe Forge is a small game and app studio that started with one person. Our goal is to bring you games that are fun and just as educational. We'd rather release a few things we're proud of than many we're not — every screen and every animation is made with care.",
    tr: "Neawe Forge, 3 Temmuz 2025'te tek kişiyle yola çıkan küçük bir oyun ve uygulama geliştirme stüdyosu. Hedefimiz, eğlenceli ve bir o kadar da eğitici oyunları seninle buluşturmak. Gurur duymadığımız çok oyun yerine, az ama değerli işler çıkarmayı seçiyoruz; her ekranı ve her animasyonu özenle düşünüyoruz.",
  },
} satisfies Record<string, LocalizedText>;

export const contactCopy = {
  eyebrow: { en: "Contact", tr: "İletişim" },
  title: { en: "Say hello", tr: "Merhaba de" },
  body: {
    en: "Got a question, a suggestion or a complaint, or just want to say hi? Write to us — a real person reads every message.",
    tr: "Sorun, önerin ya da eleştirin mi var, yoksa sadece selam mı vermek istiyorsun? Bize yaz; her mesajı gerçek bir insan okuyor.",
  },
  emailCta: { en: "Email us", tr: "E-posta gönder" },
} satisfies Record<string, LocalizedText>;

// Store badge alt texts mirror the official badge wording; the trademark
// line is the credit Apple asks for wherever a site gives legal notice when
// its badge is used (Google's line sits beside it for the same reason).
export const storeCopy = {
  appStoreBadge: { en: "Download on the App Store", tr: "App Store'dan İndirin" },
  googlePlayBadge: { en: "Get it on Google Play", tr: "Google Play'den indirin" },
  trademarks: {
    en: "Apple, the Apple logo and App Store are trademarks of Apple Inc., registered in the U.S. and other countries. Google Play and the Google Play logo are trademarks of Google LLC.",
    tr: "Apple, Apple logosu ve App Store, Apple Inc.'in ABD'de ve diğer ülkelerde tescilli ticari markalarıdır. Google Play ve Google Play logosu, Google LLC'nin ticari markalarıdır.",
  },
} satisfies Record<string, LocalizedText>;
