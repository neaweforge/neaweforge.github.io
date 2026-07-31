# Kurulum ve Yerel Çalıştırma Rehberi

> ⚠️ **Bu doküman eski statik site dönemini anlatıyor.** React + Vite +
> React Router geçişi sürüyor. Tam güncelleme Faz 8'de yapılacak. Güncel
> mimari ve adlandırma standardı için [CONVENTIONS.md](CONVENTIONS.md)'ye
> bakın.

Bu dosya, projenin (neaweforge.github.io) başka bir bilgisayarda sıfırdan kurulup yerel ön izlemenin çalıştırılması için hazırlanmıştır. Adımlar sırasıyla izlenir.

**Not:** Buradaki hiçbir adım canlı siteyi (`https://neaweforge.github.io`) etkilemez. Site GitHub Pages üzerinden düz HTML/CSS/JS olarak yayınlanır, herhangi bir build adımı yoktur. Aşağıdaki kurulum yalnızca **yerel bilgisayarda, değişiklikler commit'lenmeden önce tarayıcıda görülebilmesi** içindir.

---

## 1. Gerekenler

- **Git** — reponun indirilmesi için
- **Node.js ve npm** — yerel önizleme sunucusunun çalıştırılması için

Proje şu sürümlerle test edilmiştir:

| Araç | Test Edilen Sürüm |
| --- | --- |
| Node.js | v22.17.0 |
| npm | 10.9.2 |

Tam olarak bu sürümde olması şart değildir — Node.js'in güncel bir **LTS (uzun süreli destek)** sürümü (18 ve üzeri) yeterlidir. Mevcut sürüm aşağıdaki komutla kontrol edilebilir:

```bash
node -v
npm -v
```

Bu komutlar "command not found" gibi bir hata veriyorsa Node.js kurulu değildir — 2. adıma geçilir.

---

## 2. Node.js / npm Kurulumu (Yoksa)

### macOS / Linux — nvm ile (önerilen)

`nvm` (Node Version Manager), bilgisayarda birden fazla Node sürümünün yönetilmesini sağlayan küçük bir araçtır. Kurulumu:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Kurulumdan sonra terminal kapatılıp yeniden açılır (ya da `source ~/.zshrc` / `source ~/.bashrc` çalıştırılır), ardından:

```bash
nvm install --lts
nvm use --lts
```

### Windows

[nodejs.org](https://nodejs.org) adresinden **LTS** sürümü indirilip kurulur — kurulumla birlikte npm da otomatik gelir.

### Kurulumun Doğrulanması

```bash
node -v
npm -v
```

İkisi de bir sürüm numarası döndürüyorsa kurulum tamamlanmış demektir.

---

## 3. Reponun İndirilmesi (Clone)

```bash
git clone git@github.com:neaweforge/neaweforge.github.io.git
cd neaweforge.github.io
```

(SSH anahtarı kurulu değilse HTTPS ile de indirilebilir: `git clone https://github.com/neaweforge/neaweforge.github.io.git`)

---

## 4. Proje Bağımlılıklarının Kurulması

Proje klasörünün içindeyken:

```bash
npm install
```

Bu komut, `package.json`'da tanımlı tek bağımlılığı (`serve` adında küçük bir statik sunucu paketi) indirir ve `node_modules/` klasörüne kurar. Bu klasör asla git'e commit'lenmez (`.gitignore`'da yer alır), yalnızca ilgili bilgisayarda durur. Yalnızca ilk kurulumda bir kez çalıştırılması yeterlidir.

---

## 5. Sitenin Yerelde Çalıştırılması

```bash
npm run dev
```

Terminalde şöyle bir çıktı görülür:

```text
> dev
> serve . -l 3000

 INFO  Accepting connections at http://localhost:3000
```

Tarayıcıda **`http://localhost:3000`** adresi açılır — site tam canlıdaki gibi (commit'lenmemiş değişiklikler dahil) görüntülenir.

Durdurmak için terminalde **Ctrl+C** kullanılır.

Daha fazla dosya/klasör açıklaması ve genel proje bilgisi için [README.md](README.md) dosyasına bakılabilir.

---

## Olası Sorunlar

**"Port 3000 zaten kullanımda" gibi bir hata alınırsa:**
Bilgisayarda başka bir şey 3000 portunu kullanıyor demektir. İlgili program kapatılabilir, ya da `package.json` içindeki `"dev": "serve . -l 3000"` satırındaki `3000` sayısı başka bir port numarasıyla (ör. `4000`) değiştirilip tekrar denenir.

**`npm install` hata verirse:**
`node_modules/` klasörü ve `package-lock.json` dosyası silinip tekrar `npm install` çalıştırılır:

```bash
rm -rf node_modules package-lock.json
npm install
```

**Bir sayfa 404 veriyorsa:**
Doğru klasörde olunduğundan emin olunmalıdır — `npm run dev` komutu proje kök klasöründe (README.md'nin bulunduğu yerde) çalıştırılmalıdır.
