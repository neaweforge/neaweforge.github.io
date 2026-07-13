# neaweforge.github.io

**Neawe Forge** için resmi web sitesi — bağımsız bir mobil oyun stüdyosu.

🌐 **Canlı site:** [https://neaweforge.github.io](https://neaweforge.github.io)

---

## Sitede Neler Var

Site, **GitHub Pages** üzerinden yayınlanan tek sayfalık bir stüdyo web sitesidir. İçeriği:

- **Stüdyo tanıtımı** — Neawe Forge kim, ne inşa ediyor
- **Oyunlar** — Yayınlanan ve geliştirilmekte olan oyunların ekran görüntüleriyle vitrini
- **Kurucu** — Sait Kaplan hakkında (kurucu, geliştirici)
- **Yasal Merkez** — Yayınlanan uygulamalar için gizlilik politikaları ve kullanım koşulları

**İngilizce / Türkçe** dil değişimini ve **koyu / açık / otomatik** tema seçimini destekler.

---

## Yapı

```text
index.html                        ← Ana stüdyo web sitesi (tek sayfa)
wordsandhammers/
  index.html                      ← privacy-policy.html'e yönlendirir (/wordsandhammers/ URL'sini çalışır tutar)
  privacy-policy.html             ← Words & Hammers için Gizlilik Politikası
  terms-of-service.html           ← Words & Hammers için Kullanım Koşulları
assets/
  css/
    tokens.css                    ← Koyu/açık/otomatik tema değişkenleri (renkler, fontlar) — tüm sayfalarda ortak
    base.css                      ← Reset, temel tipografi, EN/TR görünürlük yardımcı sınıfları — tüm sayfalarda ortak
    nav.css                       ← Yapışkan üst nav + tema/dil değiştirme kontrolleri — tüm sayfalarda ortak
    home.css                      ← Yalnızca ana sayfaya özgü stiller (hero, oyunlar, kurucu, zaman çizelgesi, footer)
    legal.css                     ← Yalnızca yasal belge sayfalarına özgü stiller (header, doküman sekmeleri, bölümler, tablolar, kutular)
  js/
    theme-lang.js                 ← Tüm sayfalarca kullanılan ortak tema/dil değiştirme mantığı
  img/
    wordsandhammers/               ← Oyun ekran görüntüleri
```

Her sayfa (`index.html` ve her uygulamanın `privacy-policy.html` / `terms-of-service.html` dosyaları) `tokens.css` + `base.css` + `nav.css`'i, ardından kendi sayfaya özgü stil dosyasını (`home.css` veya `legal.css`) ve tek ortak `theme-lang.js`'i bağlar. Nav ve footer HTML'i her sayfada hâlâ küçük, elle kopyalanmış bir yapı olarak duruyor (build adımı yok, istemci taraflı include yok — bu her sayfayı hızlı tutar ve bir uygulamanın uygulama içi webview'ında bile tam işlevsel kalmasını sağlar), ama bunların arkasındaki hiçbir CSS/JS artık tekrarlanmıyor.

### Yasal Belge URL'leri

Her uygulamanın kendine özel sayfalara sahip bir alt klasörü var. Bunlar Google Play / App Store'a gizlilik politikası / kullanım koşulları linki olarak gönderilen URL'lerdir.

| Uygulama | Gizlilik Politikası | Kullanım Koşulları |
| --- | --- | --- |
| Words & Hammers | `https://neaweforge.github.io/wordsandhammers/privacy-policy.html` | `https://neaweforge.github.io/wordsandhammers/terms-of-service.html` |

### Yeni Bir Uygulama Ekleme

1. `wordsandhammers/` klasörünü kopyala, alt çizgisiz yeniden adlandır (ör. `mynewgame/`)
2. Yeni klasördeki `privacy-policy.html` ve `terms-of-service.html` dosyalarını uygulamanın içeriğiyle güncelle (zaten paylaşılan `assets/css/{tokens,base,nav,legal}.css` ve `assets/js/theme-lang.js`'e bağlılar)
3. Dosya adı farklıysa yeni klasördeki `index.html`'in yönlendirme hedefini güncelle
4. Ana `index.html`'e bir oyun kartı ekle
5. `privacy-policy.html` URL'sini mağazaya gizlilik politikası linki olarak gönder

---

## Teknoloji

Saf HTML/CSS/JS — framework yok, build adımı yok. `main` branch'ine her push'ta GitHub Pages üzerinden otomatik olarak yayınlanır.

## Yerel Önizleme

`package.json`, değişiklikleri commit'lemeden önce tarayıcıda kontrol edebilmek için yerel bir statik sunucu çalıştırmaya yarar — yayınlanan sitede hiçbir etkisi yoktur (GitHub Pages dosyaları olduğu gibi sunar, build adımı yoktur).

```bash
npm install   # yalnızca ilk seferde
npm run dev   # siteyi http://localhost:3000 adresinde sunar
```

Node.js/npm hiç kurulu değilse veya sıfırdan (örn. başka bir bilgisayarda) kurulum yapman gerekiyorsa, adım adım anlatan [KURULUM.md](KURULUM.md) dosyasına bak.

---

## İletişim

📧 [neaweforge.support@gmail.com](mailto:neaweforge.support@gmail.com)
