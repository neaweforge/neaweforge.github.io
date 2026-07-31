# Adlandırma Standardı

Bu doküman, Neawe Forge markası altındaki tüm projelerde (bu site, ileride
`neawe.com` ve `saitkaplan.com`) geçerli olan tek adlandırma standardını
belgeler. Karar verilmiştir, gerekçesiz değiştirilmez.

**Tek kural: küçük harf + alt çizgi (`snake_case`).** Projenin her katmanında
aynı.

## Dosya ve klasör adları

`snake_case`

```text
app/routes/legal_page.tsx
app/data/games.ts
app/styles/tokens.css
public/img/words_and_hammers/screenshot_01.webp
```

## URL yolları

`snake_case`, küçük harf, **uzantısız**:

```text
/                                     → anasayfa
/founder                             → kurucu
/words_and_hammers/privacy_policy    → gizlilik politikası
/words_and_hammers/terms_of_service  → kullanım koşulları
```

Prerender çıktısında bu, `words_and_hammers/privacy_policy/index.html`
şeklinde klasör + index dosyası olarak üretilir. `.html` hiçbir adreste
görünmez.

## CSS sınıf adları

`snake_case`, tire yok:

```css
.game_card { }
.game_card_title { }
.nav_bar_link { }
```

## Görsel ve varlık adları

`snake_case`, açıklayıcı:

```text
words_and_hammers_hero.webp
words_and_hammers_screenshot_01.webp
neawe_forge_logo.svg
og_image_home.webp
```

## Zorunlu istisnalar

Bunlar dilin, platformun veya ekosistemin dayattığı kurallardır — standardı
bozmaz, danışılmadan uygulanır.

- **React bileşen adları `PascalCase`.** Dosya adı `snake_case`, içindeki
  bileşen `PascalCase`: `legal_page.tsx` içinde `export default function LegalPage()`.
- **JavaScript/TypeScript değişken ve fonksiyon adları `camelCase`.**
- **Uygulama paket adları (`packageId`) ayırıcısız, tümü küçük harf** —
  `com.neaweforge.wordsandhammers`. Android `applicationId` tire kabul
  etmiyor, iOS bundle identifier alt çizgi kabul etmiyor; ikisinde de aynı
  kalabilen tek biçim bu. Paket adı sitede URL olarak **kullanılmaz**,
  yalnızca `app/data/games.ts`'te veri alanı olarak durur. URL'lerde her
  zaman `snake_case` slug kullanılır (paket `com.neaweforge.wordsandhammers`
  iken URL `/words_and_hammers/...`). Bu tutarsızlık değil, iki ayrı isim
  alanı.
- **React Router v7 (framework mode) konvansiyonları** — `app/` kök klasörü,
  `app/root.tsx`, `app/routes.ts`, React Router'ın ürettiği
  `app/routes/+types/*` dosyaları: bunlar React Router'ın kendi dayattığı,
  değiştirilemez adlardır. Bunların **içindeki** route bileşen dosyaları yine
  `snake_case` kalır (`app/routes/legal_page.tsx`), yalnızca çatının kendi
  beklediği üst düzey dosya/klasör adları (`root.tsx`, `routes.ts`,
  `+types/`) korunur.
- **Ekosistem dosyaları kendi adlarını korur:** `package.json`,
  `vite.config.ts`, `tsconfig.json`, `react-router.config.ts`, `.nojekyll`,
  `CNAME`, `README.md`, `CONVENTIONS.md`, `.markdownlint.json`,
  `.github/workflows/deploy.yml` — bunların adları ilgili aracın kendisi
  tarafından aranıyor, değiştirilemez.

## Neden alt çizgi, tire değil

Marka genelinde (mobil projeler dahil) uygulanan bir karar. Google tire'yi
kelime ayırıcı sayıyor, teorik olarak arama tarafında minik bir avantajı var
— ama bu sitenin sayfalarına arama rekabetiyle değil, marka adıyla
geliniyor. Tutarlılık daha değerli. Bu karar verildi, tekrar açılmaz.
