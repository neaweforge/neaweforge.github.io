# neaweforge.github.io

> ⚠️ **Bu doküman eski statik site dönemini anlatıyor.** React + Vite +
> React Router geçişi sürüyor. Tam güncelleme Faz 8'de yapılacak. Güncel
> mimari ve adlandırma standardı için [CONVENTIONS.md](CONVENTIONS.md)'ye
> bakın.

**Neawe Forge** için resmi web sitesidir — bağımsız bir mobil oyun stüdyosunun sitesidir.

🌐 **Canlı site:** [https://neaweforge.github.io](https://neaweforge.github.io)

---

## Sitede Neler Var

Site, **GitHub Pages** üzerinden yayınlanan tek sayfalık bir stüdyo web sitesidir. İçeriği:

- **Stüdyo tanıtımı** — Neawe Forge'un kim olduğu ve ne inşa ettiği
- **Oyunlar** — Yayınlanan ve geliştirilmekte olan oyunların ekran görüntüleriyle vitrini
- **Kurucu** — Sait Kaplan hakkında bilgi (kurucu, geliştirici)
- **Yasal Merkez** — Yayınlanan uygulamalar için gizlilik politikaları ve kullanım koşulları

**İngilizce / Türkçe** dil değişimi ve **koyu / açık / otomatik** tema seçimi desteklenmektedir.

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

Her sayfa (`index.html` ve her uygulamanın `privacy-policy.html` / `terms-of-service.html` dosyaları) `tokens.css` + `base.css` + `nav.css`'i, ardından kendi sayfaya özgü stil dosyasını (`home.css` veya `legal.css`) ve tek ortak `theme-lang.js`'i bağlar. Nav ve footer HTML'i her sayfada hâlâ küçük, elle kopyalanmış bir yapı olarak yer alır (build adımı yok, istemci taraflı include yok — bu her sayfanın hızlı kalmasını ve bir uygulamanın uygulama içi webview'ında bile tam işlevsel olmasını sağlar); bunların arkasındaki CSS/JS ise hiçbir yerde tekrarlanmaz.

### Yasal Belge URL'leri

Her uygulamanın kendine özel sayfalara sahip bir alt klasörü bulunur. Bunlar Google Play / App Store'a gizlilik politikası / kullanım koşulları linki olarak gönderilen URL'lerdir.

| Uygulama | Gizlilik Politikası | Kullanım Koşulları |
| --- | --- | --- |
| Words & Hammers | `https://neaweforge.github.io/wordsandhammers/privacy-policy.html` | `https://neaweforge.github.io/wordsandhammers/terms-of-service.html` |

### Yeni Bir Uygulama Ekleme

Yeni bir uygulama eklemek için aşağıdaki adımlar izlenir:

1. `wordsandhammers/` klasörü kopyalanır, alt çizgisiz olacak şekilde yeniden adlandırılır (ör. `mynewgame/`)
2. Yeni klasördeki `privacy-policy.html` ve `terms-of-service.html` dosyaları uygulamanın içeriğiyle güncellenir (paylaşılan `assets/css/{tokens,base,nav,legal}.css` ve `assets/js/theme-lang.js` dosyalarına zaten bağlıdır)
3. Dosya adı farklıysa yeni klasördeki `index.html`'in yönlendirme hedefi güncellenir
4. Ana `index.html`'e bir oyun kartı eklenir
5. `privacy-policy.html` URL'si mağazaya gizlilik politikası linki olarak gönderilir

---

## Teknoloji

Saf HTML/CSS/JS kullanılır — framework ya da build adımı yoktur. `main` branch'ine yapılan her push'ta GitHub Pages üzerinden otomatik olarak yayınlanır.

## Yerel Önizleme

`package.json`, değişiklikler commit'lenmeden önce tarayıcıda kontrol edilebilmesi için yerel bir statik sunucu çalıştırmaya yarar — yayınlanan sitede hiçbir etkisi yoktur (GitHub Pages dosyaları olduğu gibi sunar, build adımı yoktur).

```bash
npm install   # yalnızca ilk seferde gereklidir
npm run dev   # site http://localhost:3000 adresinde sunulur
```

Node.js/npm kurulu değilse veya sıfırdan kurulum yapılması gerekiyorsa, adım adım anlatan [KURULUM.md](KURULUM.md) dosyası kullanılabilir.

---

## İletişim

📧 [support@neaweforge.com](mailto:support@neaweforge.com)
