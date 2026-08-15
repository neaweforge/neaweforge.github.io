# Yol Haritası — neaweforge.com

Bu dosya projenin tek referans planıdır. Bir faz bittiğinde durumu burada
güncellenir. Sohbet geçmişi veya ajan hafızası değil, bu dosya bağlayıcıdır.

Adlandırma, dizin ve URL kuralları için `CONVENTIONS.md`.

---

## Durum Özeti — 2026-08-13

**Durum: Faz 8 (Semantik ve Erişilebilirlik) TAMAMLANDI.** Kontrast
taraması sıfır geçemeyen satırla kapandı (194 ham ölçüm, 54 benzersiz
token çifti, hepsi WCAG AA eşiğini geçiyor). 404 linki stillendirildi,
skip-to-content eklendi ve klavyeyle test edildi. Kontrast düzeltmesi
sırasında bulunan 2 marka-tutarlılığı hatası (`--ctrl-active-br` ve
`--green-glow`, ikisi de açık tema) düzeltildi, `--ctrl-*` ailesindeki 5
kırılgan kopya `var()` ile kaynağına bağlandı — tekrarlanan hex artık
`tokens.css`'te yok (grep ile doğrulandı). Dependabot majör sürüm
güncellemesi de tamamlandı. Hiçbiri henüz commit'lenmedi.

**Durum: Faz 9 (SEO ve Sosyal Etiketler) TAMAMLANDI** (2026-08-13, og:image
hariç — Faz 12'ye ertelendi). Yaklaşan logo/renk yenilemesi nedeniyle
görsele/renk paletine bağlı her iş Faz 12'de toplanıyor — kapsam ve yeni
faz sıralaması (9 SEO, 10 Yasal Denetim, 11 Ölçüm ve Performans, 12 Logo ve
Renk Yenilemesi, 13 Bulut Hesap Paketi) aşağıda güncel. Her sayfada EN+TR
title/description (onaylanmış metinlerle), canonical URL, OG/Twitter metin
etiketleri, `Organization`+`SoftwareApplication` JSON-LD, `robots.txt`,
build'den üretilen `sitemap.xml` — hepsi uygulandı ve doğrulandı. Hiçbiri
henüz commit'lenmedi.

**Sıradaki adım:** Faz 10'a (Yasal Denetim) geçilir — kapsamı henüz
detaylandırılmadı.

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

**Durum: ✅ TAMAMLANDI** (kontrast ve klavye/semantik maddeleri 2026-08-10,
kontrast token güncellemesi + 404 link + skip-to-content 2026-08-13,
kontrast taraması sıfır geçemeyen satırla kapandı ve kapanışta bulunan
2 marka-tutarlılığı hatası + 5 kırılgan token kopyası düzeltildi
2026-08-13, aynı gün ikinci tur).

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

**✅ Kontrast — 5 token güncellendi, yeniden tarandı (2026-08-13).**
`tokens.css`'te 5 değer değişti: koyu tema `--text-mute` `#5a6a56`→`#7c9276`,
koyu tema `--orange` `#c85a18`→`#d9621a`, açık tema (hem `[data-theme="light"]`
hem `@media (prefers-color-scheme: light)` bloğu, ikisi de) `--cyan`
`#0e96a4`→`#0b737e`, `--green` `#38920a`→`#2e7708`, `--orange` `#b84e10`→`#ad490f`.
Playwright taraması tekrar çalıştırıldı (194 ham ölçüm → 53 benzersiz token
çifti, önceki turdan daha fazla — skip-to-content ve 404 link stilinin
eklenmesiyle yeni ölçülebilir eleman sayısı arttı). **Önceki 14 geçemeyen
çiftten 10'u artık geçiyor:**

| Tema | Metin token | Zemin | Eski oran | Yeni oran |
| --- | --- | --- | --- | --- |
| koyu | `--text-mute` | `--surface3` | 2.65 | 4.55 ✅ |
| koyu | `--text-mute` | `--surface` | 3.19 | 5.47 ✅ |
| koyu | `--text-mute` | `--bg` | 3.38 | 5.80 ✅ |
| light | `--cyan` | `--surface3` | 2.88 | 4.52 ✅ |
| light | `--cyan` | `--surface2` | 2.92 | 4.59 ✅ |
| light | `--green` | `--surface3` | 3.22 | 4.53 ✅ |
| light | `--cyan` | `--bg` | 3.25 | 5.11 ✅ |
| light | `--green` | `--bg` | 3.64 | 5.12 ✅ |
| light | `--green` | `--surface` | 3.97 | 5.59 ✅ |
| koyu | `--orange` | `--warn-bg` | 4.35 | 5.04 ✅ |

**✅ Kalan 4 çift de çözüldü — ikinci tur (2026-08-13).** Kalan 4 satır,
listelenen 5 token'ın dışında iki ayrı token'a bağlıydı:

- **`--ctrl-text`** (koyu+açık) — `--text-mute` ile aynı eski hex'i elle iki
  yerde taşıyordu, biri düzelince diğeri düzelmedi. Artık bağımsız bir hex
  değil: `--ctrl-text: var(--text-mute)`. Bir daha ayrışamaz.
- **`--badge-bg`** (koyu+açık) — `rgba()` idi, gerçek rengi altındaki yüzeye
  göre değişiyordu. Kullanıldığı asıl yüzey (`--surface2`, oyun kartı zemini)
  üzerinde hesaplanmış opak hex'e çevrildi, sonra hem `--green` hem `--orange`
  metnin 4.5'i geçmesi için ayarlandı (koyuda koyulaştırıldı, açıkta
  açıldı; 4.5 tam sınırında değil, ~4.6 güvenlik payıyla): koyu
  `#151f14` (30 adımlık aramada 30. adım), açık `#e2ecdb` (21. adım).

| Tema | Metin token | Zemin | Eski oran | Yeni oran |
| --- | --- | --- | --- | --- |
| koyu | `--ctrl-text` | `--ctrl-bg` | 2.88 | 4.94 ✅ |
| koyu | `--orange` | `--badge-bg` (opak) | 3.98 | 4.61 ✅ |
| light | `--green` | `--badge-bg` (opak) | 4.36 | 4.59 ✅ |
| light | `--orange` | `--badge-bg` (opak) | 4.39 | 4.62 ✅ |

**Son tarama: 194 ham ölçüm → 54 benzersiz token çifti, 54/54 GEÇTİ, 0
geçemeyen.** En düşük oran 4.52:1 (`--cyan`/`--surface3`, açık tema), en
yüksek 17.89:1. Playwright ile doğrulandı, elle hesaplanmadı.

**✅ Duplicate-hex denetiminin sonucu düzeltildi (2026-08-13, ikinci tur).**
`--ctrl-text` düzeltmesi istenirken tokens.css'teki tüm el-ile-kopyalanmış
hex tekrarları tarandı, 7 örnek daha bulundu — hepsi çözüldü:

- **2 çift gerçekten bozuktu, düzeltildi:** `--ctrl-active-br` (açık tema,
  `#38920a` eski `--green`'di → artık `var(--green)`, çözülen `#2e7708`)
  ve `--green-glow` (açık tema, `rgba(56,146,10,…)` eski `--green`'in
  RGB'siydi → `rgba(46,119,8,…)`'e güncellendi, güncel `--green` ile
  eşleşiyor). İkisi de sadece `:hover`'da görünüyordu (ayarlar butonu
  aktif kenarlığı, "Explore Games" CTA hover parıltısı) — bu yüzden statik
  kontrast taraması yakalamamıştı, gerçek klavye/fare hover testiyle ve
  `getComputedStyle` ile doğrulandı.
- **5 çift senkrondu ama kırılgandı, artık gerçek `var()` alias:**
  `--ctrl-bg: var(--surface2)`, `--ctrl-br: var(--border2)` (koyu) /
  `var(--border)` (açık), `--ctrl-active-bg: var(--green-dim)`,
  `--ctrl-active-text: var(--text)`, `--ctrl-active-br: var(--green)`
  (artık her iki temada da, koyu için de).
- **`--green-glow`, iki temada da,** `rgba()` olduğu için doğrudan `var()`
  alamıyor (renk argümanı hex string kabul etmiyor) — RGB triplet elle
  senkron tutuluyor, yanına "bu değer --green ile senkron tutulmalı" yorumu
  eklendi.

`tokens.css`'te el-ile-tekrarlanan hex kalmadığı bir script ile doğrulandı
(her iki tema bloğu ayrı ayrı tarandı, sıfır duplicate). Kalıcı kural
`CONVENTIONS.md`'ye yazıldı ("tokens.css — tek kaynak kuralı"): bir renk
değeri yalnızca bir yerde ham tanımlanır, gerisi `var()` ile bağlanır.

Kontrast taraması tekrar çalıştırıldı: **54/54 GEÇTİ, hâlâ 0 geçemeyen**
(alias'lar aynı sonuç değerine çözüldüğü için beklenen sonuç). Hover
durumları (ayarlar paneli aktif pilli, CTA hover parıltısı, rozet hover
dolgusu) koyu+açık temada ekran görüntüsüyle ve `getComputedStyle` ile
ayrıca doğrulandı — `--ctrl-active-br`/`--green-glow` artık ikisi de
güncel `--green`'e (`#2e7708`) çözülüyor.

**✅ 404 sayfası linki — düzeltildi (2026-08-13).** "← Studio Hub" /
"← Ana Sayfa" linkine `layout.css`'te yeni, global `.back_link` class'ı
eklendi (legal sayfalardaki `.back_to_top` ile birebir aynı stil:
`--text-mute` rengi, hover'da `--green`) — artık tarayıcı varsayılan
mavisi değil, sitenin geri kalanıyla tutarlı. Ölçülen: koyu tema 5.80:1,
açık tema 7.06:1 (ikisi de 4.5 hedefinin üstünde).

**✅ Skip-to-content bağlantısı — eklendi (2026-08-13).** `app/lib/paths.ts`'e
`mainContentId` sabiti, `app/components/skip_link.tsx`'e `SkipLink`
bileşeni eklendi; `root.tsx`'te `<body>`'nin ilk çocuğu olarak render
ediliyor. `base.css`'te `.skip_link` — `transform: translateY(-100%)` ile
ekran dışına gizli (`display:none` değil, odaklanabilir kalıyor),
`:focus`'ta `translateY(0)` ile görünür oluyor; `--ctrl-active-bg`/
`--ctrl-active-text` token'larıyla markaya uygun. Hedefi tüm route'ların
`<main>`'i, hepsine `id={mainContentId}` + `tabIndex={-1}` eklendi (odak
gerçekten taşınıyor, sadece scroll değil). Gerçek klavye etkileşimiyle
test edildi (Playwright `keyboard.press`): ilk Tab linke odaklanıyor ve
`top:0`'a taşıyor (dark 6.01:1, light 13.40:1 kontrast), Enter `<main>`'e
odağı taşıyor (`document.activeElement.id === "main_content"`), sıradaki
Tab `<main>` içindeki ilk gerçek elemana (`.hero_cta`) gidiyor.
`prefers-reduced-motion` zaten global blok tarafından kapsanıyor, ayrı
işlem gerekmedi.

**Görsel regresyon — kontrol edildi (2026-08-13).** Yeni token'larla anasayfa,
kurucu sayfası, yasal sayfa, 404 — hepsi koyu ve açık temada ekran görüntüsü
alındı. Renk uyumunda bozulma yok, "Kor Hattı" (turuncu→yeşil gradient)
hero altında, oyun kartı üst kenarında ve yasal sayfa başlığında beklendiği
gibi görünüyor.

---

## Faz 9 — SEO ve Sosyal Etiketler (og:image hariç)

**Durum: ✅ TAMAMLANDI** (2026-08-13). `og:image` ve renk paletine bağlı
her şey **Faz 12'ye ertelendi** — yaklaşan logo/renk yenilemesi bu işi
geçersiz kılacağı için: `og:image`/`twitter:image` etiketleri,
`site_manifest.json`'daki `theme_color`/`background_color` revizyonu.

**✅ Hreflang — araştırıldı, karar verildi ve gerekçesiyle kayıtlı: hiçbir
şey yapılmıyor.** Hreflang aynı içeriğin FARKLI URL'lerdeki dil
sürümlerini birbirine bağlar; bu sitede tek URL var, iki dil aynı sayfada
— bağlanacak ikinci bir URL yok, yani hreflang teknik olarak anlamsız.
Gerçek çözüm `/tr/...` gibi ayrı URL'ler olurdu, bilinçli olarak
uygulanmadı: (1) route sayısı ikiye katlanır, kalıcı bakım yükü, (2) yasal
URL'ler değişir, onlar mağazaya gidecek, (3) kazanç marjinal — bu siteye
arama motorundan trafik hedeflenmiyor, ziyaretçi mağazadan veya doğrudan
gelecek, (4) yasal sayfalarda iki dilin birlikte görünmesi avantaj —
mağaza incelemecisi hangi dili konuşursa konuşsun okuyabiliyor. **Buna
bağlı kabul:** `root.tsx`'in statik `<html lang="en">`'i prerender'da hep
böyle kalıyor (dil script'i yalnızca tarayıcıda çalışıyor) — taranan HTML
her zaman İngilizce, Türkçe içerik tarayıcıda görünür ama indekslenmiyor.
Bu, siteye arama trafiği hedeflenmediği için bilinçli olarak kabul edildi,
düzeltilmeye çalışılmadı. `og:locale="en_US"` + `og:locale:alternate="tr_TR"`
eklendi — hreflang değil, sosyal platformlara sayfanın iki dilli olduğunu
söylemenin ucuz yolu.

**✅ Title + meta description — EN ve TR, onaylandı (3 düzeltmeyle).**
Önce mevcut durum çıkarıldı (home/founder'da yalnızca EN vardı, legal ve
404'te hiç description yoktu), sonra öneriler sunulup onaylandı:

| Sayfa | Dil | Title | Description |
| --- | --- | --- | --- |
| `/` | EN | Neawe Forge — Independent Game Studio | Neawe Forge is an independent game studio building mobile games with Flutter, Dart & Flame. Currently developing Words & Hammers. |
| `/` | TR | Neawe Forge — Bağımsız Oyun Stüdyosu | Flutter, Dart ve Flame ile mobil oyunlar geliştiren bağımsız oyun stüdyosu. Şu an Words & Hammers üzerinde çalışılıyor. |
| `/founder/` | EN | Sait Kaplan — Founder, Neawe Forge | Sait Kaplan — founder and lead developer of Neawe Forge, an independent game studio. |
| `/founder/` | TR | Sait Kaplan — Neawe Forge Kurucusu | Bağımsız oyun stüdyosu Neawe Forge'un kurucusu ve geliştiricisi Sait Kaplan. |
| `/:game/privacy_policy/` | EN | `${game.name} — ${doc.en.headerSub}` (dinamik) | Privacy Policy for ${game.name} — how Neawe Forge collects, uses, and protects your data. |
| `/:game/privacy_policy/` | TR | `${game.name} — ${doc.tr.headerSub}` (dinamik) | ${game.name} Gizlilik Politikası — Neawe Forge verilerinizi nasıl topluyor, kullanıyor ve koruyor. |
| `/:game/terms_of_service/` | EN | `${game.name} — ${doc.en.headerSub}` (dinamik) | Terms of Service for ${game.name} — the rules for using the app, from Neawe Forge. |
| `/:game/terms_of_service/` | TR | `${game.name} — ${doc.tr.headerSub}` (dinamik) | ${game.name} Kullanım Koşulları — uygulamayı kullanırken geçerli olan kurallar. |
| `/404` | EN/TR | 404 — Neawe Forge (değişmedi) | The page you're looking for doesn't exist. / Aradığınız sayfa bulunamadı. |

Legal sayfalar `game.name`/`doc.headerSub` ile şablon halinde
(`app/routes/legal_page.tsx`'teki `legalDescription()`) — yeni oyun
eklenince elle bir şey yazmaya gerek yok. Sunucudan giden `<title>`/
`meta description` (crawler'ın gördüğü, her zaman EN — yukarıdaki hreflang
kararına bakınız) `app/lib/seo.ts`'teki `buildMeta()`'dan geliyor.
**Ek olarak** (istenenin ötesinde, düşük riskli): `app/lib/use_page_title.ts`'teki
`usePageTitle()` hook'u, dil `tr`'ye çevrilince tarayıcı sekmesi
başlığını VE description meta etiketini istemci tarafında TR'ye
güncelliyor — SEO değeri yok (crawler bunu hiç görmüyor) ama TR
ziyaretçinin sekme/yer imi başlığı doğru dilde görünüyor. Onaylanan TR
description metinlerinin bir kullanım yeri olsun diye eklendi (yoksa hiç
kullanılmayan ölü kod olarak kalacaklardı — kendi incelememde fark edilip
düzeltildi).

**✅ Canonical URL'ler.** `app/lib/paths.ts`'e `siteUrl`
(`https://neaweforge.com`, `public/CNAME` ile aynı) ve `absoluteUrl()`
eklendi. Her sayfa `buildMeta()` üzerinden `<link rel="canonical">` alıyor,
sondaki slash dahil.

**✅ Open Graph + Twitter Card metin etiketleri.** `og:title`,
`og:description`, `og:url`, `og:type` (`website`), `og:site_name`
(`Neawe Forge`), `og:locale`/`og:locale:alternate`, `twitter:card`
(`summary` — `og:image` yokken doğru değer). Hepsi `buildMeta()`'da tek
yerde, her route kendi title/description/path'ini veriyor. `og:image`
eklenince `twitter:card`'ı `summary_large_image`'a çevirmek tek satır.

**✅ JSON-LD.** `app/lib/json_ld.ts`: `organizationJsonLd()` (stüdyo —
`name`, `url`, `sameAs` `site_config.ts`'teki sosyal linkler, `logo`
**`icon_512.png`** — `favicon.ico`/`.svg` değil, Google'ın yapılandırılmış
veri kuralları `logo` alanı için raster görsel (PNG/JPEG/WebP) istiyor,
`.ico` desteklenmiyor ve `.svg` özellikle önerilmiyor) ve
`softwareApplicationJsonLd(game)` (oyun — tamamen `games.ts`'ten, elle
yazılmadı; mağaza linki yoksa `installUrl` eklenmiyor, veri yokken tahmin
yürütülmedi). Organization `root.tsx`'in `meta()`'sından, her sayfada.
**Gerçek bir react-router davranışı bulundu:** bir route kendi `meta()`'sını
tanımlarsa üst (root) route'un meta'sı OTOMATİK BİRLEŞMİYOR, tamamen
değişiyor — ilk uygulamada Organization şeması her sayfada kayboluyordu.
Çözüm: her route'un `meta()`'sı `matches` argümanından root'un meta'sını
bulup kendi listesinin başına ekliyor (`buildMeta()`'nın içinde,
tek yerde). Build çıktısında doğrulandı: home 2 şema (Organization +
SoftwareApplication), diğer 4 sayfa 1 şema (yalnızca Organization).

**✅ `public/robots.txt`.** `Allow: /` + `Sitemap:` satırı, disallow
kuralı yok (özel/admin alan yok).

**✅ `sitemap.xml` — build'den üretiliyor, elle yazılmadı.**
`scripts/generate_sitemap.mjs`, `react-router build` sonrası çalışıyor:
`build/client`'ı gezip her `index.html`'i bir URL'e çeviriyor (404 hariç
tutuluyor), `sitemap.xml`'i oraya yazıyor. `contentPaths()`'e (paths.ts,
`prerender()`'ın da kullandığı aynı fonksiyon) bağlı olmak yerine
GERÇEK build çıktısını okuyor — bu yüzden üretilen dosya sayısı ile
sitemap'teki URL sayısı asla birbirinden kopamaz, "elle yazılmasın" kuralı
en güçlü haliyle sağlanmış oluyor. Domain `public/CNAME`'den okunuyor
(`siteUrl` burada da ayrıca tanımlanmadı). `package.json`'ın `build`
script'ine eklendi. Doğrulandı: 4 URL (home, founder, 2 legal sayfa),
404 doğru şekilde dışarıda.

**Doğrulama:** typecheck+build temiz. Build çıktısında her sayfanın
`<title>`/`meta description`/canonical/OG/JSON-LD'si grep ile tek tek
kontrol edildi. Gerçek klavye/fare değil ama gerçek Playwright testiyle:
dil TR'ye çevrilince sekme başlığı VE description meta'sı doğru TR
metnine geçiyor, statik (sunucudan gelen) description EN kalıyor —
ayrıca doğrulandı. `robots.txt`/`sitemap.xml` sunucudan 200 dönüyor.
Görsel regresyon yok (bu fazda hiçbir CSS/görsel değişmedi) — ekran
görüntüsüyle spot-check yapıldı.

---

## Faz 10 — Yasal Denetim

Words & Hammers'ın gizlilik politikası/kullanım koşullarının, uygulamanın
fiilen yaptıklarıyla eşleşip eşleşmediği denetlenecek. Kapsam henüz
detaylandırılmadı, bu fazın konusu netleşince buraya yazılır.

---

## Faz 11 — Ölçüm ve Performans

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

## Faz 12 — Logo ve Renk Yenilemesi

Faz 9'dan ertelenen, görsele/renk paletine bağlı her şey burada toplanıyor:

- `og:image` görseli (1200×630, WebP/PNG) ve onu referans eden `og:image`/
  `twitter:image` etiketleri — Faz 9'da yapı hazır bırakıldıysa tek satır
- `public/site_manifest.json`'daki `theme_color`/`background_color` revizyonu
  (yeni palet netleşince)
- Yeni logo netleşince favicon ailesinin (`favicon.ico/svg`,
  `apple_touch_icon.png`, `icon_192/512.png`) yeniden üretilmesi
- Görsele veya renk paletine bağlı, bu fazdan önce ertelenen başka her iş

---

## Faz 13 — Bulut Hesap Paketi (tarih yok, tetiklemeli)

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
