# Yol Haritası — neaweforge.com

Bu dosya projenin tek referans planıdır. Bir faz bittiğinde durumu burada
güncellenir. Sohbet geçmişi veya ajan hafızası değil, bu dosya bağlayıcıdır.

Adlandırma, dizin ve URL kuralları için `CONVENTIONS.md`.

---

## Tamamlanan fazlar

| # | Faz | Commit |
| --- | ----- | -------- |
| 1 | Keşif — tasarım yönü, tipografi, prerender aracı kararı | (kod yok) |
| 2 | İskelet — React 19 + Vite 7 + TS + React Router 8, Actions deploy | `4634e9b` |
| 3 | Ortak katman — nav, footer, tema/dil, tsconfig sıkılaştırma | `0080ce8` |
| 4 | Yasal sayfalar — EN+TR içerik taşıma, eşleşme kontrolü | `9cd9a30` |
| 5 | Anasayfa — hero, oyun vitrini, Kor Hattı, ayarlar paneli | `d25d8d7` |
| 6 | Kurucu sayfası — içerik, font yükleme bug'ı, sticky footer | `b0dda18` |
| 7 | Temizlik, dokümantasyon, CI sertleştirme | *(commit bekleniyor)* |

**Altyapı (kod dışı, tarayıcıdan yapıldı, ajan tarafından doğrulanmadı):**
Üç domain Cloudflare Registrar'da; GitHub Pages custom-domain doğrulaması üç
yerde ayrı ayrı yapıldı (`neaweforge.com` → neaweforge org, `neawe.com` →
neawerse org, `saitkaplan.com` → kişisel hesap); üç domainde DNSSEC;
üç domainde SPF + DMARC (`p=reject`), `neaweforge.com`'da Email Routing ve
gerçek DKIM anahtarı, diğer ikisinde joker DKIM iptal kaydı; org'larda 2FA
zorunlu ve workflow izinleri salt okunur; public repolarda secret protection,
push protection, Dependabot ve `main` dalında force-push engeli;
`neawe.com` ve `saitkaplan.com` için ayrı repolarda "coming soon" sayfaları.

---

## Faz 7 — Temizlik, Dokümantasyon ve CI Sertleştirme

**Durum: Tamamlandı** (2026-08-10). Aşağıdaki her madde yapıldı — silinen
liste onaylanmadan önce sunuldu, silme sonrası build çıktısı (dosya listesi
birebir aynı, `__spa-fallback.html` hariç) ve dokümantasyon referansları
doğrulandı.

Amaç: repoyu yalın hale getirmek. Şu an ölü kod her grep sonucunu iki katına
çıkarıyor ve hangi dosyanın canlı olduğu belirsiz — sonraki her faza vergi.

**Ölü dosyaların kaldırılması — ✅ yapıldı.** Tüm içerik Faz 4/5/6'da taşındı,
aşağıdakiler artık kaynak değildi. Silinen: `index.html`, `founder/`,
`wordsandhammers/`, `assets/css/`, `assets/js/`, `assets/img/` (favicon
`public/`'te zaten mevcuttu). `.markdownlint.json` — VS Code eklentisi
tarafından okunan geçerli bir editör config dosyası olduğu doğrulandı,
**kaldı**.

**`__spa-fallback.html` build çıktısından çıkarılsın — ✅ yapıldı.**
`scripts/postbuild.mjs` artık build sonrası bu dosyayı siliyor.

**Dokümantasyon — ✅ yapıldı.** `README.md` ve `KURULUM.md` tamamen yeniden
yazıldı — eski "build adımı yok", "saf HTML/CSS/JS", `.github.io` URL'leri
kaldırıldı, gerçek mimari/komutlar/portlar yazıldı. `CONVENTIONS.md` gözden
geçirildi: "React Router v7" → "v8" düzeltildi, `.github/dependabot.yml`
istisna listesine eklendi.

**CI tedarik zinciri — ✅ yapıldı.** `.github/workflows/deploy.yml`'deki 4
action tam commit SHA'sına sabitlendi (sürüm yorumlarıyla, `git ls-remote` +
GitHub API ile doğrulanmış gerçek SHA'lar — Sait bağımsız olarak da
doğruladı): `actions/checkout` v4.4.0, `actions/setup-node` v4.4.0,
`actions/upload-pages-artifact` v3.0.1, `actions/deploy-pages` v4.0.5.
`.github/dependabot.yml` eklendi (`github-actions` ekosistemi, aylık).

**Kod sağlığı — ✅ yapıldı.** `nav.tsx`'teki elle yazılan route-id string'leri
(`"routes/legal_page"`, `"routes/founder"`) `app/lib/paths.ts`'teki
`legalPageRouteId`/`founderRouteId` sabitlerine taşındı.

**Ek — Favicon ve Web App Manifest — ✅ yapıldı** (2026-08-10, 2 turda). İlk
turda Sait `favicon.ico` (16/32/48 çoklu boyut), `apple_touch_icon.png`
(180×180), `icon_192.png`, `icon_512.png` ekledi; eski `favicon.svg`'nin
marka renkleriyle uyumlu olduğu düşünülmüştü. **İkinci turda Sait bunun
yanlış olduğunu fark etti** — eski SVG tamamen farklı bir logo tasarımıydı
(yuvarlak çerçeve + Georgia serif "N"), yeni markayla ilgisi yoktu. Yeni logo
vektörleştirildi, `favicon.svg` dahil **beş dosyanın hepsi aynı kaynaktan**
yeniden üretildi. `root.tsx`'teki favicon linki: `.ico` (fallback) →
`.svg` (modern tarayıcı tercih eder, son eşleşen kazanır) →
`apple-touch-icon` → `manifest`. `public/site_manifest.json`
(`name`/`short_name` "Neawe Forge", `icon_192`+`icon_512`,
`theme_color`/`background_color` `#0a0d0a`, `display: "browser"` — PWA
değil, servis worker yok, sadece Android "ana ekrana ekle" için doğru
isim/ikon). Yeni `favicon.svg`'nin arka planı düz `#000` (tokens.css'in
`#0a0d0a`'sından farklı) — Sait'e görüş sorusu olarak sunuldu; **karar:
dokunulmuyor, logo kendi siyahını koruyor** (favicon açık temalı sekme
çubuğu/görev çubuğu gibi sitenin dışındaki zeminlerde de görünüyor, bu
fark o boyutta zaten seçilmiyor). Üçüncü turda `start_url`/`scope`
eksikliği fark edildi ve `"/"` olarak eklendi — Android'de "ana ekrana
ekle" hangi sayfadan yapılırsa yapılsın kısayol her zaman ana sayfayı
açsın diye. Build çıktısında 6 dosyanın da `build/client` köküne
byte-birebir kopyalandığı üç turda da doğrulandı.

---

## Faz 8 — Semantik ve Erişilebilirlik

Somut bulgular (kod incelemesinde tespit edildi):

- **Kurucu sayfasında `<h1>` yok** — `<div className="founder_name">` semantik
  olarak başlık değil. Sayfa hem arama motoruna hem ekran okuyucuya başlıksız
  görünüyor.
- **Sitede hiç `<h2>` yok.** `section_title`, `label_eyebrow`,
  `founder_currently_label` hepsi `<div>`. Başlık hiyerarşisi yok.
- **Ana sayfanın `<h1>`'i `<main>` dışında** — hero bloğu `<main>`'den önce.
  "İçeriğe atla" diyen kullanıcı H1'i ve tüm hero'yu atlıyor.
- **`prefers-reduced-motion` hiçbir yerde yok.** CSS'te 10 `transition` ve
  `html { scroll-behavior: smooth }` var. Faz 5'te şart koşulmuştu, atlandı.
- **404 sayfasının `<h1>`'i "Neawe Forge"** — sayfanın bulunamadığını söylemeli.
- **Yasal sayfada `<h1>` oyun adı**, belge türü `<p>`. Belge türü başlığın
  parçası olmalı.

Ayrıca:

- Klavye-only gezinme turu: her etkileşimli öğeye Tab ile erişilebiliyor mu,
  focus göstergesi her temada görünür mü, ayarlar paneli tuzağa düşürüyor mu
- WCAG AA kontrast hedefi: normal metin 4.5:1, büyük metin 3:1 — açık ve koyu
  temada ölçülecek, geçmeyen renkler bildirilecek (token değiştirmeden önce sor)
- `<html lang>` dil değişiminde güncelleniyor mu (boot script yapıyor, teyit)
- Ekran okuyucu taraması: bir sayfa baştan sona okunup rapor edilecek
- Atlama bağlantısı ("skip to content") gerekiyor mu değerlendirilecek

---

## Faz 9 — SEO ve Sosyal Paylaşım

- Her sayfada `<title>` ve `meta description` (bazıları var, tamamlanacak)
- `canonical` URL'ler
- Open Graph ve Twitter Card etiketleri — X'te (@neawerse) paylaşımda düzgün
  önizleme. `og:image` gerekiyor: 1200×630 WebP/PNG, marka görseli
- JSON-LD yapılandırılmış veri: `Organization` (stüdyo), `SoftwareApplication`
  (oyun, `games.ts`'ten beslensin)
- `public/robots.txt`
- `sitemap.xml` — build sırasında `prerender()` yollarından üretilsin, elle
  yazılmasın
- Yasal sayfalarda EN ve TR içeriğin ikisi de DOM'da; arama motorunun bunu
  yinelenen içerik saymaması için `hreflang` veya benzeri bir çözüm
  değerlendirilecek

---

## Faz 10 — Ölçüm ve Performans

- **Cloudflare Web Analytics beacon** `root.tsx`'e eklenecek. DNS-only kurulum
  olduğu için Cloudflare panel analitiği hiçbir veri göremiyor; beacon tek yol.
  Çerezsiz, KVKK/GDPR açısından temiz.
- **Lighthouse mobil modda** ölçülecek. Hedef: dört kategoride 90+. Skorlar
  rapor edilecek, geçmeyen kalemler tek tek listelenecek.
- **Bundle bütçesi:** ilk yüklemede JS gzip 100 KB altı hedef. Şu an ~59 KB,
  yani alan var — ama ölçüm kalıcı hale gelsin.
- Font yükleme davranışı: `display=swap` çalışıyor mu, düzen kayması var mı
- Görseller eklendiğinde: WebP, `width`/`height` belirtilmiş, `loading="lazy"`,
  EXIF metadata temizliği (konum bilgisi taşıyabilir)

**Karar bekleyen:** repoya kalıcı smoke test eklenecek mi? Artı yönü regresyon
koruması; eksi yönü Playwright'ın kendisi bir bakım yükü (sürüm güncellemeleri,
CI süresi) ve bu proje 15+ yıl düşük bakımla yaşamayı hedefliyor. Karar
verilmeden yapılmayacak.

---

## Faz 11 — Bulut Hesap Paketi (tarih yok, tetiklemeli)

Words & Hammers'a Supabase tabanlı bulut hesap özelliği eklendiğinde
başlayacak. Takvime bağlı değil, özelliğe bağlı.

- **Hesap silme sayfası** — gizlilik politikası §07'de "bulut hesap sistemi
  etkinleştirildiğinde bu sitede yayınlanacak" diye taahhüt edilmiş. Google
  Play bu konuda titiz; özellik canlıya çıktığı gün sayfa hazır olmalı.
- KVKK/GDPR veri talebi akışının fiilen çalışır hale gelmesi
- İlgili yasal metin bölümlerinin güncellenmesi
- Anahtar yönetimi kuralı: `anon key` istemcide olabilir, `service_role`
  anahtarı **asla** mobil uygulamada veya repoda bulunmayacak

---

## Bekleyen kullanıcı işleri

- **Oyun ekran görüntüleri** — WebP, dikey ~9:19.5, `public/img/words_and_hammers/`
  altına, sonra `games.ts`'teki `screenshots` alanına eklenecek. Kart yer
  tutucuyla çalışıyor, eklenince otomatik doluyor.
- **`og:image` görseli** — 1200×630, Faz 9 için gerekli
- **Gerçek telefonda `100dvh` kontrolü** — Faz 6'da headless test yeterli
  olmadı, mobil adres çubuğu davranışı gerçek cihazda doğrulanacak
- **GitHub kurtarma kodları** kâğıda yazılıp saklanacak
- **Smoke test kararı** (Faz 10)
- **Footer davranışı gerçek cihazlarda tekrar gözden geçirilecek** — Faz 6'da
  düzeltilen sticky footer hâlâ tam istenildiği gibi değil. Fazlar bitince
  topluca ele alınacak, şimdi dokunulmuyor.

---

## Kapatılan konular

- **Nav'da "kayan buton" (segmented slider) fikri** — ayarlar paneli çözümüyle
  gereksizleşti, kapatıldı.
- **Geçmiş commit'lerdeki kişisel e-posta** — dokunulmayacak. Bundan sonraki
  commit'ler noreply adresiyle gidiyor.
- **Repoyu private yapmak** — vazgeçildi. Pages ücretsiz planda private repodan
  yayın yapmıyor, ayrıca statik sitenin kaynağı tarayıcıdan okunabiliyor.
- **`prerender` aracı** — `vite-react-ssg` yerine React Router 8'in dahili
  prerender'ı kullanılıyor.
