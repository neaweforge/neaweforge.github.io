# neaweforge.com

**Neawe Forge** için resmi geliştirici merkezi — bağımsız bir mobil oyun stüdyosunun marka genelindeki tanıtım, kurucu ve yasal belge sitesi.

🌐 **Canlı site:** [https://neaweforge.com](https://neaweforge.com)

---

## Sitede Neler Var

- **Stüdyo tanıtımı** — Neawe Forge'un kim olduğu ve ne inşa ettiği (ana sayfa)
- **Oyunlar** — yayınlanan ve geliştirilmekte olan oyunların vitrini
- **Kurucu** — Sait Kaplan hakkında kısa, stüdyo odaklı bilgi (`/founder/`)
- **Yasal Merkez** — her uygulama için gizlilik politikası ve kullanım koşulları

**İngilizce / Türkçe** dil değişimi ve **koyu / açık / otomatik** tema seçimi desteklenmektedir.

---

## Teknoloji

**React 19 + Vite 7 + TypeScript + React Router 8** (framework mode). `ssr:false` ve build-time `prerender()` ile çalışır — sunucu tarafı çalışma zamanı yoktur, çıktı tamamen statik HTML/CSS/JS'tir. GitHub Pages bu statik çıktıyı doğrudan sunar.

Dağıtım `.github/workflows/deploy.yml` üzerinden GitHub Actions ile yapılır: `main`'e her push, build alır ve GitHub Pages'e yayınlar.

---

## Yapı

```text
app/
  root.tsx                    ← <html>/<body> iskeleti, boot script, global stil importları
  routes.ts                   ← Route tanımları
  routes/
    home.tsx                  ← Ana sayfa (hero + oyun vitrini)
    founder.tsx                ← Kurucu sayfası
    legal_page.tsx             ← Tek dinamik route, her oyunun yasal belgelerini karşılar (:gameSlug/:docType)
    not_found.tsx               ← 404
  components/                 ← Nav, Footer, GameCard, ayarlar paneli, yasal belge render bileşeni
  data/
    games.ts                  ← Oyunların TEK veri kaynağı — yeni oyun eklemek route/prerender değişikliği gerektirmez
  content/
    legal_types.ts             ← Yasal içerik tipleri
    legal_content.ts            ← games.ts ↔ yasal içerik eşleşmesi, eksikse build'i patlatır
    words_and_hammers/         ← Her oyunun kendi klasöründe EN+TR yasal metinleri
  lib/
    paths.ts                  ← Tüm site-içi URL'ler ve route-id'ler TEK yerden üretilir
    site_config.ts             ← İletişim adresi, sosyal linkler, stüdyo durum metni
    theme_lang.ts / theme_lang_context.tsx  ← Tema/dil state + localStorage
  styles/                     ← Sayfa/bileşen bazlı CSS, snake_case (bkz. CONVENTIONS.md)
public/
  CNAME, .nojekyll
  favicon.ico, favicon.svg, apple_touch_icon.png, icon_192.png, icon_512.png
  site_manifest.json          ← Android "ana ekrana ekle" için isim/ikon — PWA değil, servis worker yok
scripts/
  postbuild.mjs                ← Build sonrası: 404.html kopyalama, CNAME/.nojekyll doğrulama, kullanılmayan dosya temizliği
```

### Yasal Belge URL'leri

Her uygulama `app/data/games.ts`'te bir `slug` ile tanımlanır, yasal sayfaları otomatik olarak şu adreslerde oluşur:

| Uygulama | Gizlilik Politikası | Kullanım Koşulları |
| --- | --- | --- |
| Words & Hammers | `https://neaweforge.com/words_and_hammers/privacy_policy/` | `https://neaweforge.com/words_and_hammers/terms_of_service/` |

### Yeni Bir Oyun Ekleme

1. `app/data/games.ts`'e yeni bir `Game` girdisi eklenir (slug, ad, paket kimliği, açıklama, teknoloji rozetleri, mağaza linkleri, ekran görüntüleri)
2. `app/content/<slug>/privacy_policy.ts` ve `terms_of_service.ts` dosyaları oluşturulur, `app/content/legal_content.ts`'e kaydedilir
3. Bu kadar — route'lar, prerender yolları ve ana sayfadaki oyun kartı otomatik oluşur. `legal_content.ts` bir oyun için eksikse build hata verip durur, sessizce boş sayfa yayınlamaz.

---

## Yerel Çalıştırma

```bash
npm install   # yalnızca ilk seferde
npm run dev   # http://localhost:5173 — sadece localhost'a bağlanır
```

Sıfırdan kurulum (Node.js dahil) için adım adım [KURULUM.md](KURULUM.md).

Diğer komutlar:

```bash
npm run build       # prodüksiyon build'i (build/client/)
npm run typecheck   # React Router tip üretimi + tsc
```

---

## Adlandırma Standardı

Dosya/klasör/URL/CSS sınıfı adlandırması için tek referans [CONVENTIONS.md](CONVENTIONS.md)'dir.

---

## İletişim

📧 [support@neaweforge.com](mailto:support@neaweforge.com)
