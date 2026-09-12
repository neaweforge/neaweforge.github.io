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
  slogan: { en: "Forged with fire. Played with joy.", tr: "Ateşle dövüldü, keyifle oynanır." },
  description: {
    en: "A small, independent studio making mobile games by hand — few titles, each one built with care. Our first game, Words & Hammers, is out on the App Store, with Android on the way.",
    tr: "Mobil oyunları elle döven küçük, bağımsız bir stüdyo — az sayıda oyun, her biri özenle. İlk oyunumuz Words & Hammers App Store'da; Android yolda.",
  },
  outNowLabel: { en: "Out now", tr: "Yayında" },
  primaryCta: { en: "Explore the game", tr: "Oyunu keşfet" },
  secondaryCta: { en: "Get in touch", tr: "Bize ulaş" },
} satisfies Record<string, LocalizedText>;

export const gamesCopy = {
  eyebrow: { en: "Games", tr: "Oyunlar" },
  title: { en: "What we're forging", tr: "Neler dövüyoruz" },
  platforms: { en: "Platforms", tr: "Platformlar" },
  soon: { en: "Coming soon", tr: "Yakında" },
  legalDocs: { en: "Legal documents", tr: "Yasal belgeler" },
  builtWith: { en: "Built with", tr: "Şunlarla yapıldı" },
  screenshotSoon: { en: "Screenshots coming soon", tr: "Ekran görüntüleri hazırlanıyor" },
  viewGame: { en: "See the game", tr: "Oyuna göz at" },
} satisfies Record<string, LocalizedText>;

export const gamePageCopy = {
  backToGames: { en: "All games", tr: "Tüm oyunlar" },
  featuresTitle: { en: "How it plays", tr: "Nasıl oynanır" },
  screenshotsTitle: { en: "Screenshots", tr: "Ekran görüntüleri" },
  availability: { en: "Where to get it", tr: "Nereden edinilir" },
  legalTitle: { en: "Legal", tr: "Yasal" },
  privacyPolicy: { en: "Privacy Policy", tr: "Gizlilik Politikası" },
  termsOfService: { en: "Terms of Service", tr: "Kullanım Koşulları" },
  builtWith: { en: "Built with", tr: "Şunlarla yapıldı" },
  notFound: { en: "Game not found", tr: "Oyun bulunamadı" },
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
    en: "Neawe Forge is a one-person studio founded in 2025. We'd rather ship a few games we're proud of than many we're not — every screen and every animation is deliberate. Our games are built with Flutter and Flame for iOS and Android.",
    tr: "Neawe Forge, 2025'te kurulmuş tek kişilik bir stüdyo. Gurur duymadığımız çok oyun yerine gurur duyduğumuz az oyun çıkarmayı tercih ediyoruz — her ekran, her animasyon kasıtlı. Oyunlarımız Flutter ve Flame ile iOS ve Android için geliştiriliyor.",
  },
  founderLink: { en: "Meet the founder", tr: "Kurucuyla tanış" },
} satisfies Record<string, LocalizedText>;

export const contactCopy = {
  eyebrow: { en: "Contact", tr: "İletişim" },
  title: { en: "Say hello", tr: "Merhaba de" },
  body: {
    en: "Questions, feedback, or just want to say hi? Write to us — a real person reads every message.",
    tr: "Soru, geri bildirim ya da sadece selam vermek için yaz — her mesajı gerçek bir insan okuyor.",
  },
  emailCta: { en: "Email us", tr: "E-posta gönder" },
  betaTitle: { en: "Test before release", tr: "Çıkıştan önce dene" },
  betaBody: {
    en: "Want to play Words & Hammers before it launches and tell us what you think? Ask for a beta spot.",
    tr: "Words & Hammers'ı çıkmadan oynayıp fikrini söylemek ister misin? Beta için yer iste.",
  },
  betaCta: { en: "Become a beta tester", tr: "Beta testçisi ol" },
  betaSubject: { en: "Words & Hammers beta", tr: "Words & Hammers beta" },
} satisfies Record<string, LocalizedText>;

