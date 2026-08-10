# Kurulum ve Yerel Çalıştırma Rehberi

Bu dosya, projenin (`neaweforge.com`) başka bir bilgisayarda sıfırdan kurulup yerel ön izlemesinin çalıştırılması için hazırlanmıştır. Adımlar sırasıyla izlenir.

**Not:** Buradaki hiçbir adım canlı siteyi (`https://neaweforge.com`) etkilemez. Site React + Vite + React Router ile inşa edilir, build çıktısı statik dosyalardır; canlıya çıkış yalnızca `main` dalına yapılan push ile GitHub Actions üzerinden olur. Aşağıdaki kurulum yalnızca **yerel bilgisayarda, değişiklikler commit'lenmeden önce tarayıcıda görülebilmesi** içindir.

---

## 1. Gerekenler

- **Git** — reponun indirilmesi için
- **Node.js ve npm** — bağımlılıkların kurulması ve yerel sunucunun çalıştırılması için

```bash
node -v
npm -v
```

Bu komutlar "command not found" gibi bir hata veriyorsa Node.js kurulu değildir — 2. adıma geçilir.

**Sürüm şartı:** `react-router@8.3.0`, Node.js `>=22.22.0` gerektirir. Daha eski bir 22.x sürümü (ör. 22.17.0) kuruluysa `npm run dev`/`build`/`typecheck` çalışır ama her seferinde bir sürüm uyarısı basar — zararsızdır ama gidermek için Node güncellenmelidir. GitHub Actions üzerindeki build bu sürüme (`22.22.0`) sabitlenmiştir, canlı yayını bu uyarı etkilemez.

---

## 2. Node.js / npm Kurulumu (Yoksa)

### macOS / Linux — nvm ile (önerilen)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Kurulumdan sonra terminal kapatılıp yeniden açılır (ya da `source ~/.zshrc` / `source ~/.bashrc` çalıştırılır), ardından:

```bash
nvm install 22.22.0
nvm use 22.22.0
```

### Windows

[nodejs.org](https://nodejs.org) adresinden Node.js **22.22.0 veya üzeri** indirilip kurulur — kurulumla birlikte npm da otomatik gelir.

### Kurulumun Doğrulanması

```bash
node -v
npm -v
```

---

## 3. Reponun İndirilmesi (Clone)

```bash
git clone git@github.com:neaweforge/neaweforge.github.io.git
cd neaweforge.github.io
```

(SSH anahtarı kurulu değilse HTTPS ile de indirilebilir: `git clone https://github.com/neaweforge/neaweforge.github.io.git`)

---

## 4. Proje Bağımlılıklarının Kurulması

```bash
npm install
```

React, React Router, Vite, TypeScript ve geliştirme araçlarının tamamını `node_modules/` klasörüne kurar. Bu klasör asla git'e commit'lenmez (`.gitignore`'da yer alır). Yalnızca ilk kurulumda ve `package.json`/`package-lock.json` değiştiğinde çalıştırılması yeterlidir.

---

## 5. Sitenin Yerelde Çalıştırılması

```bash
npm run dev
```

Terminalde şöyle bir çıktı görülür:

```text
➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

Tarayıcıda **`http://localhost:5173`** adresi açılır — dosya kaydedildikçe sayfa otomatik güncellenir. `--host` **kullanılmaz**: bayrak eklenmediği sürece sunucu yalnızca bu bilgisayara (localhost) bağlanır, ağdaki başka bir cihazdan erişilemez.

Durdurmak için terminalde **Ctrl+C** kullanılır.

### Prodüksiyon Build'ini Yerelde Görmek

`npm run dev` geliştirme sunucusudur; canlıda çalışacak gerçek statik dosyaları görmek için:

```bash
npm run build
npx serve build/client -l tcp://127.0.0.1:3000
```

`-l tcp://127.0.0.1:3000` önemlidir: `serve` paketi bayraksız çalıştırıldığında (`-l 3000` gibi salt port verilse bile) tüm ağ arayüzlerinde dinlemeye başlayabiliyor — adres açıkça `127.0.0.1` verilmezse başka bir cihazdan bu bilgisayara erişilebilir hale gelebilir.

### Diğer Komutlar

```bash
npm run typecheck   # React Router tip üretimi + tsc, hata varsa listeler
```

Daha fazla dosya/klasör açıklaması için [README.md](README.md) dosyasına bakılabilir.

---

## Olası Sorunlar

**"Port zaten kullanımda" gibi bir hata alınırsa:**
Bilgisayarda başka bir şey ilgili portu kullanıyor demektir. O programı kapatmak ya da `npm run dev -- --port 5174` gibi farklı bir port belirtmek çözer.

**`npm install` hata verirse:**

```bash
rm -rf node_modules package-lock.json
npm install
```

**Node sürüm uyarısı çıkıyorsa ama her şey çalışıyorsa:**
Zararsızdır (bkz. madde 1) — ama gidermek isteniyorsa Node `22.22.0` veya üzerine güncellenir.

**Bir sayfa 404 veriyorsa:**
Doğru klasörde olunduğundan emin olunmalıdır — `npm run dev` komutu proje kök klasöründe (`package.json`'ın bulunduğu yerde) çalıştırılmalıdır.
