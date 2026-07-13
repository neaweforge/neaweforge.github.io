# Kurulum ve Yerel Çalıştırma Rehberi

Bu dosya, bu projeyi (neaweforge.github.io) başka bir bilgisayarda sıfırdan kurup yerel önizlemeyi çalıştırmak isteyen herkes için hazırlandı — ister Sait, ister projede yardım eden başka biri olsun. Adımları sırayla takip etmen yeterli.

**Not:** Buradaki hiçbir adım canlı siteyi (`https://neaweforge.github.io`) etkilemez. Site GitHub Pages üzerinden düz HTML/CSS/JS olarak yayınlanıyor, hiçbir build adımı yok. Aşağıdaki kurulum yalnızca **yerel bilgisayarda değişiklikleri commit'lemeden tarayıcıda görebilmek** içindir.

---

## 1. Gerekenler

- **Git** — repoyu indirmek için
- **Node.js ve npm** — yerel önizleme sunucusunu çalıştırmak için

Bu proje şu sürümlerle test edildi:

| Araç | Test Edilen Sürüm |
| --- | --- |
| Node.js | v22.17.0 |
| npm | 10.9.2 |

Tam olarak bu sürümde olması şart değil — Node.js'in güncel bir **LTS (uzun süreli destek)** sürümü (18 ve üzeri) yeterlidir. Aşağıdaki komutla mevcut sürümünü kontrol edebilirsin:

```bash
node -v
npm -v
```

Eğer bu komutlar "command not found" gibi bir hata veriyorsa, Node.js kurulu değil demektir — 2. adıma geç.

---

## 2. Node.js / npm kurulumu (yoksa)

### macOS / Linux — nvm ile (önerilen)

`nvm` (Node Version Manager), bilgisayarında birden fazla Node sürümünü yönetmeni sağlayan küçük bir araç. Kurulumu:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Kurulumdan sonra terminali kapatıp yeniden aç (ya da `source ~/.zshrc` / `source ~/.bashrc` çalıştır), sonra:

```bash
nvm install --lts
nvm use --lts
```

### Windows

[nodejs.org](https://nodejs.org) adresinden **LTS** sürümünü indirip kurman yeterli — kurulumla birlikte npm da otomatik gelir.

### Kurulumu doğrula

```bash
node -v
npm -v
```

İkisi de bir sürüm numarası döndürüyorsa kurulum tamam demektir.

---

## 3. Repoyu indir (clone)

```bash
git clone git@github.com:neaweforge/neaweforge.github.io.git
cd neaweforge.github.io
```

(SSH anahtarın kurulu değilse HTTPS ile de indirebilirsin: `git clone https://github.com/neaweforge/neaweforge.github.io.git`)

---

## 4. Proje bağımlılıklarını kur

Proje klasörünün içindeyken:

```bash
npm install
```

Bu komut `package.json`'da tanımlı tek bağımlılığı (`serve` adında küçük bir statik sunucu paketi) indirir ve `node_modules/` klasörüne kurar. Bu klasör asla git'e commit'lenmez (`.gitignore`'da), yalnızca senin bilgisayarında durur. Yalnızca ilk kurulumda bir kere çalıştırman yeterli.

---

## 5. Siteyi yerelde çalıştır

```bash
npm run dev
```

Terminalde şöyle bir çıktı göreceksin:

```text
> dev
> serve . -l 3000

 INFO  Accepting connections at http://localhost:3000
```

Tarayıcında **`http://localhost:3000`** adresini aç — site tam canlıdaki gibi (commit'lenmemiş değişiklikler dahil) karşına çıkacak.

Durdurmak istediğinde terminalde **Ctrl+C**'ye bas.

Daha fazla dosya/klasör açıklaması ve genel proje bilgisi için [README.md](README.md)'ye bakabilirsin.

---

## Olası Sorunlar

**"Port 3000 zaten kullanımda" gibi bir hata alırsan:**
Bilgisayarında başka bir şey 3000 portunu kullanıyor demektir. Diğer programı kapat, ya da `package.json` içindeki `"dev": "serve . -l 3000"` satırındaki `3000` sayısını başka bir port numarasıyla (ör. `4000`) değiştirip tekrar dene.

**`npm install` hata veriyorsa:**
`node_modules/` klasörünü ve `package-lock.json` dosyasını silip tekrar `npm install` dene:

```bash
rm -rf node_modules package-lock.json
npm install
```

**Bir sayfa 404 veriyorsa:**
Doğru klasörde olduğundan emin ol — `npm run dev` komutunu proje kök klasöründe (README.md'nin bulunduğu yerde) çalıştırman gerekiyor.
