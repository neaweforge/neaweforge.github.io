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

`snake_case`, küçük harf, **uzantısız**, **sonda her zaman `/`** (kök hariç):

```text
/                                      → anasayfa
/founder/                             → kurucu
/words_and_hammers/privacy_policy/    → gizlilik politikası
/words_and_hammers/terms_of_service/  → kullanım koşulları
```

Prerender çıktısında bu, `words_and_hammers/privacy_policy/index.html`
şeklinde klasör + index dosyası olarak üretilir. `.html` hiçbir adreste
görünmez. Sondaki `/` zorunlu: GitHub Pages, slash'sız bir klasör adresine
gelen isteği slash'lıya 301 ile yönlendiriyor — mağaza formlarına ve site
içi bağlantılara doğrudan slash'lı hali vererek bu gereksiz yönlendirmeyi
atlıyoruz. Site içi tüm bağlantılar `app/lib/paths.ts`'teki tek merkezden
üretilir; yeni bir link eklerken oraya bir builder eklemek, path'i elle
yazmak yerine tercih edilir.

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
- **React Router v8 (framework mode) konvansiyonları** — `app/` kök klasörü,
  `app/root.tsx`, `app/routes.ts`, React Router'ın ürettiği
  `app/routes/+types/*` dosyaları: bunlar React Router'ın kendi dayattığı,
  değiştirilemez adlardır. Bunların **içindeki** route bileşen dosyaları yine
  `snake_case` kalır (`app/routes/legal_page.tsx`), yalnızca çatının kendi
  beklediği üst düzey dosya/klasör adları (`root.tsx`, `routes.ts`,
  `+types/`) korunur.
- **Ekosistem dosyaları kendi adlarını korur:** `package.json`,
  `vite.config.ts`, `tsconfig.json`, `react-router.config.ts`, `.nojekyll`,
  `CNAME`, `README.md`, `CONVENTIONS.md`, `.markdownlint.json`,
  `.github/workflows/deploy.yml`, `.github/dependabot.yml` — bunların adları
  ilgili aracın kendisi tarafından aranıyor, değiştirilemez.

## Dokümantasyon ve yorum dili

Marka genelinde (bu site, `neawe.com`, `saitkaplan.com`) geçerli, tek karar:

- **Kod yorumları İngilizce** — `.ts`, `.tsx`, `.css`, `.mjs`, `.yml` fark
  etmeksizin. Kod zaten İngilizce isimlerle yazılıyor, yorumların da aynı
  dilde olması tutarlılık sağlıyor.
- **README.md İngilizce** — repoya ilk bakan kişinin okuduğu dosya budur.
- **Diğer çalışma dokümanları (`KURULUM.md`, `CONVENTIONS.md`, `ROADMAP.md`
  ve benzerleri) Türkçe kalabilir** — bunlar projeyi işleten kişiye yönelik
  günlük çalışma dokümanlarıdır.

**Dilden bağımsız, her ikisi için de geçerli kural — tarafsız dil:**
Kod yorumları ve dokümantasyon, herhangi bir kişiye hitaben değil, projenin
kendisi hakkında yazılır. Repo public olduğu için bu, üçüncü bir kişinin
bir konuşmanın ortasına düşmüş gibi hissetmemesi için önemli.

- Bir yorum/madde "neden böyle" olduğunu anlatır — hangi kısıtın, hangi
  kararın sonucu olduğunu. "Kim karar verdi" bilgisi (isim, "sen/ben" gibi
  hitaplar) yorumun bir parçası değildir; kararın kendisi ve gerekçesi kalır.
- Örnek: ~~"senin istediğin gibi X yapıldı"~~ → "X yapıldı, çünkü Y" veya
  sadece "X yapıldı" (gerekçe zaten madde içinde geçiyorsa).
- Açık kalan bir karar "sana bırakıyorum" değil, tarafsız biçimde "karar
  bekliyor" olarak yazılır.

## tokens.css — tek kaynak kuralı

Bir renk değeri `tokens.css`'te yalnızca **bir** yerde ham (hex veya rgb)
olarak tanımlanır. Aynı rengi kullanan her başka token, kendi kopyasını
taşımak yerine ona `var()` ile bağlanır: `--ctrl-bg: var(--surface2)`,
`--ctrl-active-br: var(--green)` gibi.

**Neden:** İki token aynı değeri elle iki yerde taşırsa, biri güncellenip
diğeri unutulduğunda sessizce ayrışır — bu, bir kontrast/erişilebilirlik
sorunu ya da görünür bir marka tutarsızlığı olarak ortaya çıkana kadar fark
edilmez. Faz 8'de tam olarak bu yaşandı: `--ctrl-text`, `--text-mute` ile
aynı hex'i elle taşıyordu; `--text-mute` bir kontrast düzeltmesinde
güncellendi, `--ctrl-text` unutuldu, WCAG kontrastı bozuldu. Aynı ailede
5 token daha aynı riski taşıdığı, 2 tanesinin (`--ctrl-active-br`,
`--green-glow`, ikisi de açık tema) başka bir renk değişikliğinde zaten
sessizce ayrıştığı ayrıca bulundu.

**`rgba()` gibi alfa gerektiren durumlar istisna:** `rgba()`'nın renk
argümanı, içinde hex string tutan bir custom property'yi doğrudan kabul
etmiyor (`rgba(var(--green), .12)` geçersiz), bu yüzden doğrudan `var()`
bağlanamıyor. Bu durumda değer elle kopyalanır ama üstüne "bu değer
--X ile senkron tutulmalı" yorumu eklenir — unutulma ihtimalini sıfırlamaz
ama en azından değişiklik anında görünür kılar.

## Neden alt çizgi, tire değil

Marka genelinde (mobil projeler dahil) uygulanan bir karar. Google tire'yi
kelime ayırıcı sayıyor, teorik olarak arama tarafında minik bir avantajı var
— ama bu sitenin sayfalarına arama rekabetiyle değil, marka adıyla
geliniyor. Tutarlılık daha değerli. Bu karar verildi, tekrar açılmaz.
