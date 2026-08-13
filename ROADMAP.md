# Yol Haritası — neaweforge.com

Bu dosya projenin tek referans planıdır. Bir faz bittiğinde durumu burada
güncellenir. Sohbet geçmişi veya ajan hafızası değil, bu dosya bağlayıcıdır.

Adlandırma, dizin ve URL kuralları için `CONVENTIONS.md`.

---

## Durum Özeti — 2026-08-13

**Durum:** Faz 8 (Semantik ve Erişilebilirlik) kısmen tamamlandı — kod tarafı
bitti, 3 karar açık. Dependabot majör sürüm güncellemesi tamamlandı, henüz
commit'lenmedi.

**Açık 3 karar (Faz 8'i kapatmak için gereken tek şey bunlar):**

1. Kontrast tablosundaki 14 geçemeyen token çifti (aşağıda, Faz 8 içinde) —
   hangi renk nasıl değişecek?
2. 404 sayfasının stilsiz "← Studio Hub" linki — sitenin diğer linkleriyle
   aynı stili alsın mı?
3. Skip-to-content bağlantısı eklensin mi? (Öneri: düşük öncelikli ama
   sıfır maliyetli değil — nav kısa olduğu için gerekmeyebilir.)

**Sıradaki adım:** 3 karar netleşince uygulanır, build alınır, Faz 8
"Tamamlandı" olarak işaretlenir, ardından Faz 9'a (SEO ve Sosyal Paylaşım)
geçilir.

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
| 7 | Temizlik, dokümantasyon, CI sertleştirme | `967c6a1` |

**Altyapı (kod dışı, repo dışında yapılandırıldı):**
Üç domain Cloudflare Registrar üzerinde kayıtlı; GitHub Pages custom-domain
doğrulaması üç yerde ayrı ayrı yapılandırıldı (`neaweforge.com` → neaweforge
org, `neawe.com` → neawerse org, `saitkaplan.com` → kişisel hesap); üç
domainde DNSSEC etkin; üç domainde SPF + DMARC (`p=reject`) yapılandırıldı,
`neaweforge.com`'da Email Routing ve gerçek DKIM anahtarı var, diğer
ikisinde joker DKIM iptal kaydı bulunuyor; org'larda 2FA zorunlu ve workflow
izinleri salt okunur; public repolarda secret protection, push protection,
Dependabot ve `main` dalında force-push engeli etkin; `neawe.com` ve
`saitkaplan.com` için ayrı repolarda "coming soon" sayfaları yayında.

---

## Faz 7 — Temizlik, Dokümantasyon ve CI Sertleştirme

**Durum: Tamamlandı** (2026-08-10). Aşağıdaki her madde tamamlandı — silinen
liste onaylanmadan önce sunuldu, silme sonrası build çıktısı (dosya listesi
birebir aynı, `__spa-fallback.html` hariç) ve dokümantasyon referansları
doğrulandı.

Amaç: repoyu yalın hale getirmek. Ölü kod her grep sonucunu iki katına
çıkarıyordu ve hangi dosyanın canlı olduğu belirsizdi — sonraki her faza vergi.

**Ölü dosyaların kaldırılması — ✅ tamamlandı.** Tüm içerik Faz 4/5/6'da
taşınmıştı, aşağıdakiler artık kaynak değildi. Silinen: `index.html`,
`founder/`, `wordsandhammers/`, `assets/css/`, `assets/js/`, `assets/img/`
(favicon `public/`'te zaten mevcuttu). `.markdownlint.json` — VS Code
eklentisi tarafından okunan geçerli bir editör config dosyası olduğu
doğrulandı, **kaldı**.

**`__spa-fallback.html` build çıktısından çıkarılması — ✅ tamamlandı.**
`scripts/postbuild.mjs` artık build sonrası bu dosyayı siliyor.

**Dokümantasyon — ✅ tamamlandı.** `README.md` ve `KURULUM.md` tamamen
yeniden yazıldı — eski "build adımı yok", "saf HTML/CSS/JS", `.github.io`
URL'leri kaldırıldı, gerçek mimari/komutlar/portlar yazıldı. `CONVENTIONS.md`
gözden geçirildi: "React Router v7" → "v8" düzeltildi, `.github/dependabot.yml`
istisna listesine eklendi.

**CI tedarik zinciri — ✅ tamamlandı.** `.github/workflows/deploy.yml`'deki
4 action tam commit SHA'sına sabitlendi (sürüm yorumlarıyla, `git ls-remote`
ve GitHub API ile doğrulanmış gerçek SHA'lar, ayrıca bağımsız olarak da
teyit edildi): `actions/checkout` v4.4.0, `actions/setup-node` v4.4.0,
`actions/upload-pages-artifact` v3.0.1, `actions/deploy-pages` v4.0.5.
`.github/dependabot.yml` eklendi (`github-actions` ekosistemi, aylık).

**Kod sağlığı — ✅ tamamlandı.** `nav.tsx`'teki elle yazılan route-id
string'leri (`"routes/legal_page"`, `"routes/founder"`) `app/lib/paths.ts`'teki
`legalPageRouteId`/`founderRouteId` sabitlerine taşındı.

**Ek — Dependabot majör sürüm güncellemesi — ✅ tamamlandı** (2026-08-13).
Dependabot 4 action için majör sürüm PR'ı açtı. **Kalıcı kural: bu PR'lar
körlemesine merge edilmeyecek, her biri kırıcı değişiklik açısından
incelenecek.** Bu turda incelendi (gerçek release notes/changelog'lardan,
uydurulmadı):

- `actions/checkout` v4.4.0→**v7.0.1** — v7.0.0'ın tek kırıcı değişikliği
  `pull_request_target`/`workflow_run` tetikleyicili fork PR'larını
  engellemesi. Workflow yalnızca `push` ile çalışıyor, bu değişiklikten
  etkilenmiyor.
- `actions/setup-node` v4.4.0→**v7.0.0** — ESM'e geçiş + cache output'ları,
  kullanılan `node-version`/`cache` girdilerini etkilemiyor.
- `actions/upload-pages-artifact` v3.0.1→**v5.0.0** — v4.0.0'dan beri
  dotfile'lar (nokta ile başlayan dosyalar) artifact'a varsayılan olarak
  girmiyor. `.nojekyll` bir dotfile, `CNAME` değil (etkilenmiyor). Actions
  deploy'unda Jekyll hiç çalışmadığı için `.nojekyll`'in artifact'ta olup
  olmaması şu an pratik bir fark yaratmıyor — ama build'in kendi çıktısında
  (`build/client/.nojekyll`) hâlâ var, `postbuild.mjs`'in assert'i onu
  kontrol ediyor (branch-deploy'a dönme ihtimaline karşı, o senaryoda tekrar
  önem kazanır). v5.0.0 yeni bir `include-hidden-files` girdisi ekledi —
  istenirse dotfile'ları artifact'a geri katabilir, şu an kullanılmıyor.
- `actions/deploy-pages` v4.0.5→**v5.0.0** — tek değişiklik action'ın kendi
  çalışma zamanının Node 24'e güncellenmesi (build Node sürümüyle ilgisi
  yok), GitHub-hosted runner'larda sorunsuz.

4 SHA `git ls-remote` ile bağımsız doğrulandı, hepsi kendi majör serisinin
gerçek en son kararlı sürümü (daha yenisi yok, Dependabot'un önerdiğiyle
birebir eşleşiyor). `.github/workflows/deploy.yml`'de tek commit'te
güncellendi — 4 PR'ı ayrı ayrı merge etmek 4 ayrı deploy tetiklerdi.
**`main`'e push edildikten sonra Dependabot PR #1, #2, #3, #4'ün dördü de
elle kapatılmalı** (otomatik kapanmıyor, çünkü değişiklik PR'ların kendi
branch'i merge edilerek değil, doğrudan `main`'e yapıldı).

**Ek — Favicon ve Web App Manifest — ✅ tamamlandı** (2026-08-10, 3 turda).
İlk turda `favicon.ico` (16/32/48 çoklu boyut), `apple_touch_icon.png`
(180×180), `icon_192.png`, `icon_512.png` eklendi; eski `favicon.svg`'nin
marka renkleriyle uyumlu olduğu düşünülmüştü. **İkinci turda bunun yanlış
olduğu fark edildi** — eski SVG tamamen farklı bir logo tasarımıydı
(yuvarlak çerçeve + Georgia serif "N"), yeni markayla ilgisi yoktu. Yeni logo
vektörleştirildi, `favicon.svg` dahil **beş dosyanın hepsi aynı kaynaktan**
yeniden üretildi. `root.tsx`'teki favicon linki: `.ico` (fallback) →
`.svg` (modern tarayıcı tercih eder, son eşleşen kazanır) →
`apple-touch-icon` → `manifest`. `public/site_manifest.json`
(`name`/`short_name` "Neawe Forge", `icon_192`+`icon_512`,
`theme_color`/`background_color` `#0a0d0a`, `display: "browser"` — PWA
değil, servis worker yok, sadece Android "ana ekrana ekle" için doğru
isim/ikon). Yeni `favicon.svg`'nin arka planı düz `#000` (tokens.css'in
`#0a0d0a`'sından farklı) — değerlendirildi; **karar: dokunulmuyor, logo
kendi siyahını koruyor** (favicon açık temalı sekme çubuğu/görev çubuğu
gibi sitenin dışındaki zeminlerde de görünüyor, bu fark o boyutta zaten
seçilmiyor). Üçüncü turda `start_url`/`scope` eksikliği fark edildi ve
`"/"` olarak eklendi — Android'de "ana ekrana ekle" hangi sayfadan
yapılırsa yapılsın kısayol her zaman ana sayfayı açsın diye. Build
çıktısında 6 dosyanın da `build/client` köküne byte-birebir kopyalandığı
üç turda da doğrulandı.

---

## Faz 8 — Semantik ve Erişilebilirlik

**Durum: Kısmen tamamlandı** (2026-08-10). Semantik/etiket/klavye/ekran-okuyucu
maddeleri bitti. Kontrast token'ları ve iki görsel karar açık — aşağıda
ayrı işaretli.

**Başlık yapısı — ✅ tamamlandı.** Her sayfada tam 1 `<h1>`, atlamasız
h1→h2→h3: kurucu sayfası (`founder_name`→h1, `label_eyebrow`/
`founder_currently_label`→h2 — bunlar kendi içerik grubunun tek etiketi
olduğu için; önündeki gerçek bir başlığı olan "kicker" eyebrow'lar bilinçli
olarak başlık yapılmadı), ana sayfa (`<main>` artık hero'yu da sarmalıyor,
`section_title`→h2, oyun kartı `game_title`→h3), 404 (`<h1>` artık
"404 — Page Not Found"), yasal sayfa (`<h1>` görünürde oyun adı, doküman
türü `.sr_only` ile gizlice ekleniyor — altındaki görünür `.header_sub`
çift okunmasın diye `aria-hidden`; `section_title`→h2, `sub_title`→h3).
`doc_title` bilinçli olarak başlık yapılmadı (h1'de zaten aynı bilgi var).
Playwright `ariaSnapshot()` ile gerçek erişilebilirlik ağacı üzerinden
doğrulandı, textContent'e güvenilmedi.

**`prefers-reduced-motion` — ✅ tamamlandı.** `base.css`'e tek global blok,
10 transition + 1 `scroll-behavior`'ın hepsini kapsıyor.

**Dekoratif glifler — ✅ tamamlandı.** 𝕏/in/⬡/@/↗/↓/←/↑ — hepsi
`aria-hidden`, `<i>`→`<span>`. `ariaSnapshot` ile linklerin artık temiz
okunduğu doğrulandı.

**Landmark/etiketleme — ✅ tamamlandı.** Nav ve `tabs_nav`'a ayrı
`aria-label`, `back_to_top` hedefine `tabIndex={-1}`, yasal tablo
`<th>`'lerine `scope="col"`.

**Klavye turu — ✅ test edildi, sorun yok.** Tab sırası görsel sırayla
uyumlu, her durakta tarayıcı varsayılan focus ring'i görünür, ayarlar
paneli tuzak değil (son kontrolden sonraki Tab panelin dışına çıkıyor),
Esc odağı tetikleyiciye döndürüyor, dil/tema değişince odak kaybolmuyor.

**Ekran okuyucu turu — ✅ test edildi, sorun yok.** `ariaSnapshot()` ile EN
ve TR ayrı ayrı tam ağaç kontrolü: gizli dil (`display:none`) hiçbir zaman
ağaçta görünmüyor, çift okuma riski yok.

**⚠️ Kontrast — ÖLÇÜLDÜ, KARAR BEKLİYOR (tokens.css'e dokunulmadı).**
Playwright ile gerçek sayfalar taranıp her görünür metin/zemin çiftinin
gerçek renkleri okundu, WCAG formülüyle hesaplandı (170 ham ölçüm → 54
benzersiz token çifti). WCAG AA hedefi: normal metin 4.5:1, büyük metin
(18px+ veya 14px+ bold) 3:1. **Geçemeyen 14 çift:**

| Tema | Metin token | Zemin token | Oran | Nerede kullanılıyor |
| --- | --- | --- | --- | --- |
| koyu | `--text-mute` #5a6a56 | `--surface3` #1f271f | 2.65 | "Screenshot coming soon" yer tutucu |
| koyu | `--text-mute` #5a6a56 | `--surface2`/`--ctrl-bg` #192019 | 2.88 | nav butonları "EN"/"TR", footer sosyal linkler |
| light | `--cyan` #0e96a4 | `--surface3` #dfebd8 | 2.88 | tech_chip ("Flutter" vb.) |
| light | `--cyan` #0e96a4 | `--surface2` #eaf0e5 | 2.92 | "Legal Docs ↗" rozeti |
| light | `--green` #38920a | `--surface2` #eaf0e5 | 3.10 | "Soon" rozeti (yeşil kısım) |
| koyu | `--text-mute` #5a6a56 | `--surface` #111511 | 3.19 | nav_link "Founder", footer telif, legal header_eyebrow |
| light | `--green` #38920a | `--surface3` #dfebd8 | 3.22 | tablo `<th>` başlıkları |
| light | `--cyan` #0e96a4 | `--bg` #f3f6ef | 3.25 | dış link metinleri (policies.google.com vb.) |
| koyu | `--text-mute` #5a6a56 | `--bg` #0a0d0a | 3.38 | "Find Me", versiyon no, "Back to top" |
| koyu | `--orange` #c85a18 | `--surface2` #192019 | 3.43 | "Soon" rozeti (turuncu kısım) |
| light | `--green` #38920a | `--bg` #f3f6ef | 3.64 | eyebrow'lar ("Games & Projects" vb.), `section_num` |
| light | `--orange` #b84e10 | `--surface2` #eaf0e5 | 3.96 | "Soon" rozeti (açık tema turuncu) |
| light | `--green` #38920a | `--surface` #ffffff | 3.97 | nav logo "Forge", e-posta linkleri |
| koyu | `--orange` #c85a18 | `--warn-bg` #1a1208 | 4.35 | "⚠ Important Security Notice" (4.5'e çok yakın) |

**En kritik/sistemik bulgu:** `--text-mute` **koyu temada** kendi 4 tipik
zemininin HİÇBİRİNE karşı geçmiyor (yukarıdaki 4 satır). Aynı token açık
temada (`#3e5a38`) aynı zeminlere karşı 6.24–7.71 ile sorunsuz — yani tek
yönlü, koyu temaya özgü bir sorun. Açık temada `--cyan`/`--green`/`--orange`
bazı yüzeylere karşı geçemiyor ama aynı renklerin koyu temadaki halleri
(`--green` #5cb84a, `--cyan` #1eb8c4) çoğu zeminde zaten geçiyor (7-8:1) —
sorun büyük ölçüde açık temanın accent renklerinin biraz soluk kalması ve
koyu temanın `--text-mute`'unun biraz karanlık kalması. Karar bekleyen:
hangi token değişecek, ne kadar (ör. sadece `--text-mute` mü, yoksa accent
renkler de mi).

**⚠️ Gerçek bug bulundu, görsel karar bekliyor:** 404 sayfasının
"← Studio Hub" linkinde hiç CSS class yok, tarayıcı varsayılan mavisiyle
render oluyor (koyu zeminde 2.08:1). Düzeltme görsel bir değişiklik
(link rengi) gerektirdiği için dokunulmadı.

**⚠️ Atlama bağlantısı ("skip to content") — değerlendirme yapıldı, karar
bekliyor.** Nav kısa (mobilde 3, masaüstünde en fazla ~8 durak) olduğu için
düşük öncelikli ama sıfır maliyetli değil; eklenmedi.

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

## Bekleyen manuel işler

Kodla otomatikleştirilemeyen, proje sahibinin kendisinin yapması gereken işler.

- **Oyun ekran görüntüleri** — WebP, dikey ~9:19.5, `public/img/words_and_hammers/`
  altına, sonra `games.ts`'teki `screenshots` alanına eklenecek. Kart yer
  tutucuyla çalışıyor, eklenince otomatik doluyor.
- **`og:image` görseli** — 1200×630, Faz 9 için gerekli
- **Gerçek telefonda `100dvh` kontrolü** — Faz 6'da headless test yeterli
  olmadı, mobil adres çubuğu davranışı gerçek cihazda doğrulanacak
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
