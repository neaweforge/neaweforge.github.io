import type { LegalDoc } from "../legal_types";

// Version 2.0, rewritten for the Words & Hammers 1.0.2 legal update. The
// Turkish text governs; English is a translation. lastUpdated is the day the
// text went live on the site, the same day as the app release.
export const privacyPolicy: LegalDoc = {
  version: "2.0",
  developer: "Neawe Forge (Sait KAPLAN)",
  application: "Words & Hammers",
  tr: {
    docTitleLine1: "Aydınlatma",
    docTitleLine2: "Metni",
    headerSub: "Aydınlatma Metni",
    lastUpdated: "28.11.2026",
    sections: [
      {
        number: "01",
        title: "Veri sorumlusu",
        blocks: [
          {
            kind: "paragraph",
            html: "Bu Aydınlatma Metni, Words &amp; Hammers'ın gizlilik politikasıdır."
          },
          {
            kind: "paragraph",
            html: "Words &amp; Hammers'ı Neawe Forge adıyla Sait KAPLAN geliştirir ve yayınlar; bu metinde \"biz\" olarak anılırız. 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca veri sorumlusu Sait KAPLAN'dır. Bize support@neaweforge.com adresinden ulaşabilirsiniz."
          }
        ]
      },
      {
        number: "02",
        title: "Kısaca",
        blocks: [
          {
            kind: "list",
            items: [
              "Oyun internetsiz oynanır; yasal metinleri onaylamadan önce okumak için (oyunun ilk açılışında ve bir güncellemeyle metinler esaslı olarak değiştiğinde) internet gerekir. Oyun verileriniz yalnızca cihazınızda saklanır ve bize gönderilmez.",
              "Hesap, sunucu ve sıralama yoktur.",
              "Reklamlar isteğe bağlıdır. Dükkânda bir ödül için reklam izlemeyi seçmezseniz reklam sistemi hiç başlamaz ve Google'a veri gitmez.",
              "Bölüm değerlendirmelerini yalnızca siz göndermeyi seçerseniz e-postayla alırız.",
              "Ayarlar → Verileri Sıfırla ile cihazdaki bütün oyun verilerinizi anında silebilirsiniz."
            ]
          }
        ]
      },
      {
        number: "03",
        title: "İşlenen veriler, amaçları ve hukuki sebepleri",
        blocks: [
          {
            kind: "table",
            headers: [
              "İşleme faaliyeti",
              "Veriler",
              "Amaç",
              "Hukuki sebep (KVKK md. 5)",
              "Nerede durur, kime gider"
            ],
            rows: [
              [
                "Oyunun cihazda çalışması",
                "Kullanıcı adı, dört haneli etiket, avatar, cihazda üretilen rastgele oyuncu numarası, dil bölgesi, kayıt tarihi; bölüm ilerlemesi (puanlar, yıldızlar, oynayış sayısı, bulunan kelimelerin yolları); zümrüt, Forge Puanı ve çekiçler; ayarlar (ses, titreşim, tema, renk körlüğü modu, konfor seviyesi, satın alma onayı, değerlendirme anketi); oyun içi tanıtımların gösterilip gösterilmediği",
                "Oyunu sunmak",
                "Sözleşmenin kurulması veya ifası (md. 5/2-c)",
                "Yalnızca cihazınızda; bize gönderilmez. Cihaz yedeğiniz açıksa yedeğinize girebilir (aşağıda 08)"
              ],
              [
                "Yaş sorusu",
                "Doğum yılı",
                "Oyunu yaşınıza uygun ayarlarla sunmak (aşağıda 04)",
                "Sözleşmenin kurulması veya ifası (md. 5/2-c)",
                "Yalnızca cihazınızda; doğum yılınız hiçbir yere gönderilmez"
              ],
              [
                "Onay ve sürüm kaydı",
                "Kabul ettiğiniz Kullanım Koşulları'nın ve gösterilen Aydınlatma Metni'nin sürümü ve tarihi, onayın verildiği uygulama sürümü, iki belgenin açıldığı an; her uygulama sürümünün cihazınızda ilk açıldığı an; reklam ve geri bildirim bilgi kartlarının gösterildiği ve seçildiği an",
                "Bilgilendirmenin ve kabulün yapıldığını gösterebilmek",
                "Hukuki yükümlülüğün yerine getirilmesi (md. 5/2-ç) ve bir hakkın tesisi, kullanılması veya korunması (md. 5/2-e)",
                "Yalnızca cihazınızda; bize gönderilmez. Bir uyuşmazlıkta kanıt olarak cihazınızdaki kayda bakılır"
              ],
              [
                "Ödüllü reklam",
                "Google'ın işlediği veriler: IP adresi ve ona dayalı yaklaşık konum, cihaz ve işletim sistemi bilgileri, uygulama bilgileri, reklam etkileşimleri, sıklık sınırı ve kötüye kullanımı önleme için kullanılan tanımlayıcılar, reklam sisteminin hata ve performans verileri. Cihazınızda reklam sayacı (günlük izleme sayısı, art arda izlenen reklam sayısı, son reklamın anı, son bir saatte izlenen reklamların anları)",
                "İstediğiniz ödüllü reklamı göstermek ve ödülü vermek; reklam sıklığını sınırlamak",
                "İstenen reklamı göstermek ve ödülü vermek: sözleşmenin kurulması veya ifası (md. 5/2-c); reklam sıklığını sınırlamak ve kötüye kullanımı önlemek: meşru menfaat (md. 5/2-f)",
                "Google (aşağıda 05 ve 07)"
              ],
              [
                "Bölüm değerlendirmesi",
                "E-postanın içindekiler (aşağıda 06) ve gönderen e-posta adresiniz",
                "Bölümleri ve oyunu geliştirmek; gerekirse size yanıt vermek",
                "Meşru menfaat (md. 5/2-f)",
                "Bize e-postayla; Cloudflare ve Google üzerinden (aşağıda 07)"
              ],
              [
                "Destek ve KVKK başvuruları",
                "E-posta adresiniz, adınız (yazarsanız), talebinizin içeriği",
                "Talebinizi cevaplamak; KVKK başvurusunu sonuçlandırmak",
                "Başvurular: hukuki yükümlülük (md. 5/2-ç). Destek: sözleşmenin ifası ya da meşru menfaat (md. 5/2-c, 5/2-f)",
                "Cloudflare ve Google üzerinden (aşağıda 07)"
              ],
              [
                "Web sitesi (neaweforge.com)",
                "Ziyaretçinin IP adresi ve teknik bağlantı bilgileri",
                "Siteyi sunmak ve güvenliğini sağlamak",
                "Meşru menfaat (md. 5/2-f)",
                "GitHub (barındırma), Cloudflare (alan adı)"
              ]
            ]
          },
          {
            kind: "paragraph",
            html: "Veriler şu yollarla toplanır: oyunu kullanırken uygulama tarafından cihazınızda otomatik olarak; bölüm değerlendirmeleri, destek ve başvurular için sizin gönderdiğiniz e-postayla elektronik ortamda; reklam verileri için Google'ın reklam sistemi tarafından otomatik olarak; web sitesi verileri için siteyi ziyaret ettiğinizde otomatik olarak."
          },
          {
            kind: "paragraph",
            html: "Uygulama başka veri toplamaz; konum, kamera, mikrofon, rehber ya da dosyalarınıza erişmez."
          }
        ]
      },
      {
        number: "04",
        title: "Yaş sorusu",
        blocks: [
          {
            kind: "paragraph",
            html: "Oyun yetişkinler için tasarlanmıştır. İlk açılışta doğum yılınızı sorarız; doğum yılınız yalnızca cihazınızda saklanır, bize ya da Google'a gönderilmez. Doğum yılı sonradan değiştirilemez; yalnızca Verileri Sıfırla ile yeniden sorulur."
          },
          {
            kind: "paragraph",
            html: "Bu yıl ile doğum yılınızın farkı 18 ya da daha azsa 18 yaş altı sayılırsınız. Bu durumda Kullanım Koşulları'nı veliniz ya da vasinizle birlikte okumanızı ve oyunu onların izni ve gözetiminde oynamanızı isteriz. Reklamlar sizin için çocuklara yönelik olarak işaretlenir ve en çok \"G\" (genel izleyici) derecesindeki içerikle sınırlanır; Google'a doğum yılınız değil, yalnızca bu işaret gider. Reklam kimliği hiç kimse için kullanılmaz. Çocukların verisini rızaya dayanarak işlediğimiz bir işlem yoktur."
          }
        ]
      },
      {
        number: "05",
        title: "Reklamlar",
        blocks: [
          {
            kind: "paragraph",
            html: "Dükkândaki isteğe bağlı ödüllü reklamları Google AdMob gösterir; oyunda başka reklam yoktur."
          },
          {
            kind: "list",
            items: [
              "<strong>Ne zaman başlar:</strong> Reklam sistemi oyunun açılışında başlamaz. Dükkânda bir ödül için reklama dokunduğunuzda, \"Reklamı izle\"yi seçene kadar her seferinde kısa bir bilgi kartı gösteririz; bu seçimi yapmadıkça reklam sistemi başlamaz ve Google'a hiçbir veri gitmez. Bu seçimden sonra reklam sistemi dükkâna girdikten kısa bir süre sonra başlar (hemen çıkarsanız başlamaz) ve reklamın hızlı açılması için dükkân ekranında bir reklam önceden yüklenebilir. Yüklenen reklam, dükkândan çıksanız da oyun açık kaldığı sürece saklanabilir ve bir saat içindeki sonraki ziyaretinizde izlemeye hazır bekler; dükkândayken başlamış bir yükleme siz çıktıktan sonra tamamlanabilir, ama dükkân dışında yeni bir reklam isteği gönderilmez.",
              "<strong>Kişiselleştirme yok:</strong> Bütün reklam istekleri kişiselleştirilmemiş olarak gönderilir. Uygulama reklam kimliğine (Android'de reklam kimliği, iOS'ta IDFA) erişmez ve iOS'ta izleme izni (ATT) istemez.",
              "<strong>İçerik sınırı:</strong> Yetişkinler için en çok \"PG\" (ebeveyn rehberliği önerilir), 18 yaş altı için en çok \"G\" derecesindeki reklamlar istenir.",
              "<strong>Sıklık sınırı:</strong> Günde en çok 25 reklam, saatte en çok 10 reklam izlenebilir; ilk iki reklamdan sonra reklamlar arasında 4 dakika beklenir, 10 dakika reklam izlenmezse ilk iki reklam yeniden beklemesizdir.",
              "<strong>Google'ın işlediği veriler:</strong> Reklamı göstermek, ölçmek ve kötüye kullanımı önlemek için Google IP adresinizi, cihaz ve işletim sistemi bilgilerinizi ve reklam etkileşimlerinizi işler. Google bu veriler için bağımsız veri sorumlusudur; kendi gizlilik politikasına göre işler ve saklar.",
              "<strong>Avrupa'da rıza ekranı:</strong> Avrupa Ekonomik Alanı, Birleşik Krallık ve İsviçre'den erişimde Google'ın kendi rıza ekranı gösterilebilir; oyun şu anda yalnızca Türkiye'de dağıtılır."
            ]
          }
        ]
      },
      {
        number: "06",
        title: "Bölüm değerlendirmeleri",
        blocks: [
          {
            kind: "paragraph",
            html: "Bölüm sonunda bölümü değerlendirebilirsiniz; değerlendirmeleriniz önce yalnızca cihazınızda saklanır. Ayarlar'dan göndermeyi seçerseniz cihazınızın e-posta uygulaması açılır ve e-posta support@neaweforge.com adresine gider. İlk gönderimden önce bir bilgi kartı gösteririz. Göndermeden önce e-postayı görebilir, değiştirebilir ya da göndermekten vazgeçebilirsiniz."
          },
          {
            kind: "paragraph",
            html: "E-postada şunlar yer alır: kullanıcı adınız, değerlendirme sayısı ve gönderim tarihi; her bölüm için bölüm numarası ve kimliği, puanınız, bölüm yıldızınız, bölümü bitirdiğiniz an, verdiğiniz beğeni puanı (1-5), zorluk değerlendirmeniz ve en çok 120 karakterlik notunuz. E-posta adresinizi de görürüz."
          },
          {
            kind: "paragraph",
            html: "Bu bilgileri yalnızca bölümleri ve oyunu geliştirmek ve gerekirse size yanıt vermek için kullanırız. E-postaları en çok 3 ay saklarız; içerik, sizi tanıtmayan notlara aktarılabilir. Gönderdiğiniz değerlendirmeler de cihazınızda Verileri Sıfırla'ya ya da uygulamayı kaldırana kadar durur."
          }
        ]
      },
      {
        number: "07",
        title: "Alıcılar ve yurt dışına aktarım",
        blocks: [
          {
            kind: "paragraph",
            html: "Verileri yalnızca aşağıdaki hizmet sağlayıcılarla, yukarıdaki amaçlar için paylaşırız; hiçbir veriyi satmayız."
          },
          {
            kind: "table",
            headers: [
              "Alıcı",
              "Ne için",
              "Ülke"
            ],
            rows: [
              [
                "Google (AdMob)",
                "Ödüllü reklam; Google bağımsız veri sorumlusudur",
                "ABD, İrlanda"
              ],
              [
                "Google (Gmail)",
                "support@neaweforge.com adresine gelen e-postaların tutulduğu hesap",
                "ABD"
              ],
              [
                "Cloudflare",
                "support@neaweforge.com adresinin yönlendirilmesi; alan adı",
                "ABD"
              ],
              [
                "GitHub",
                "neaweforge.com'un barındırılması; ziyaretçi IP adresini güvenlik amacıyla kaydeder",
                "ABD"
              ]
            ]
          },
          {
            kind: "paragraph",
            html: "Bu hizmet sağlayıcıların sunucuları yurt dışında olduğu için verileriniz yurt dışına aktarılır. Aktarım yukarıdaki amaçlarla sınırlıdır; Google'ın reklam için kendi adına işlediği veriler Google'ın kendi kurallarına tabidir (yukarıda 05). Tablodaki ülkeler sağlayıcıların merkezlerinin bulunduğu yerlerdir; sağlayıcılar veriyi başka ülkelerdeki veri merkezlerinde de işleyebilir."
          }
        ]
      },
      {
        number: "08",
        title: "Saklama ve silme",
        blocks: [
          {
            kind: "list",
            items: [
              "<strong>Cihazınızdaki veriler:</strong> Ayarlar → Verileri Sıfırla'ya bastığınızda ya da uygulamayı kaldırdığınızda cihazınızdan anında silinir. Verileri Sıfırla, onay ve sürüm kayıtlarını ve Google'ın cihazda tuttuğu reklam rızası kaydını da siler; sürüm kaydı sıfırlama anından yeniden başlar, yaş sorusu ve onay ekranı yeniden gelir.",
              "<strong>Cihaz yedeği:</strong> Cihazınızın yedekleme özelliği açıksa (Android'de Google hesabınızdaki yedek, iOS'ta iCloud yedeği) oyun verileriniz bu yedeğe girebilir ve yeni cihaza dönebilir. Yedek sizin hesabınızda durur; biz erişemeyiz. Yedekteki veri, yedek hizmetinin kurallarına göre silinir.",
              "<strong>E-postalar:</strong> Bölüm değerlendirmeleri ve destek e-postaları en çok 3 ay saklanır. KVKK başvuru yazışmaları, başvuru sonuçlandıktan sonra olası bir şikâyet ya da uyuşmazlıkta hakkımızı kullanabilmemiz için ilgili zaman aşımı süreleri boyunca saklanır, sonra silinir.",
              "<strong>Google:</strong> Reklam verileri Google'ın saklama politikasına göre saklanır."
            ]
          }
        ]
      },
      {
        number: "09",
        title: "Veri güvenliği",
        blocks: [
          {
            kind: "paragraph",
            html: "Oyun verileriniz işletim sisteminin uygulamaya ayırdığı korumalı alanda saklanır; başka uygulamaların bu verilere ulaşabileceği bir yol açmayız. Uygulama kişisel verilerinizi günlük kayıtlarına yazmaz. Destek e-posta hesabımız iki adımlı doğrulamayla korunur."
          },
          {
            kind: "paragraph",
            html: "Verilerinizin güvenliği cihazınızın güvenliğine de bağlıdır: ekran kilidi kullanmanızı ve cihaz yedeğinizi açık tutmanızı öneririz."
          }
        ]
      },
      {
        number: "10",
        title: "Haklarınız",
        blocks: [
          {
            kind: "paragraph",
            html: "KVKK md. 11 uyarınca:"
          },
          {
            kind: "list",
            items: [
              "Kişisel verilerinizin işlenip işlenmediğini öğrenme,",
              "İşlenmişse buna ilişkin bilgi talep etme,",
              "İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,",
              "Yurt içinde ya da yurt dışında aktarıldığı üçüncü kişileri bilme,",
              "Eksik ya da yanlış işlenmişse düzeltilmesini isteme,",
              "Silinmesini ya da yok edilmesini isteme,",
              "Düzeltme ve silme işlemlerinin, verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,",
              "Yalnızca otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonuç çıkmasına itiraz etme,",
              "Kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini isteme"
            ]
          },
          {
            kind: "paragraph",
            html: "haklarına sahipsiniz."
          },
          {
            kind: "paragraph",
            html: "Başvurunuzu Türkçe olarak support@neaweforge.com adresine gönderebilirsiniz. Başvurunuzu en geç 30 gün içinde ve ücretsiz cevaplarız. Cevabımızı yetersiz bulursanız ya da süresinde cevap vermezsek Kişisel Verileri Koruma Kurulu'na, cevabımızı öğrendiğiniz tarihten itibaren 30 gün ve her hâlde başvuru tarihinizden itibaren 60 gün içinde şikâyette bulunabilirsiniz."
          },
          {
            kind: "paragraph",
            html: "Cihazınızdaki verileri biz göremeyiz: oyunun cihazdaki verilerini görmek ve silmek için en hızlı yol uygulamanın kendisidir (Ayarlar → Verileri Sıfırla)."
          }
        ]
      },
      {
        number: "11",
        title: "Eski sürümü kullananlar için",
        blocks: [
          {
            kind: "paragraph",
            html: "Words &amp; Hammers'ın önceki sürümü (1.0.1) farklı çalışır ve bu metin onu anlatmaz. 1.0.1'de:"
          },
          {
            kind: "list",
            items: [
              "onay ekranında Gizlilik Politikası \"kabul\" ettiriliyordu;",
              "reklam sistemi oyun açılırken (ilk kurulumda onay ekranının hemen ardından) başlıyordu;",
              "reklamlar kişiselleştirilmiş olarak isteniyor ve Android'de reklam kimliği kullanılabiliyordu;",
              "dükkândaki ödüllü reklamın yanında oyun ekranında banner reklam vardı."
            ]
          },
          {
            kind: "paragraph",
            html: "1.0.1 döneminde reklam için işlenen veriler Google'dadır ve Google'ın kendi kurallarına tabidir; bizde o döneme ait kişisel reklam verisi bulunmaz."
          },
          {
            kind: "paragraph",
            html: "Oyunu güncellediğinizde bu metin geçerli olur ve yaş sorusu ile onay ekranı bir kez gösterilir. Güncellemenizi öneririz; reklam kimliğinizi cihazınızın ayarlarından sıfırlayabilir ya da silebilirsiniz."
          }
        ]
      },
      {
        number: "12",
        title: "Değişiklikler",
        blocks: [
          {
            kind: "paragraph",
            html: "Bu metni güncelleyebiliriz. Sürüm numarasının ondalık kısmındaki artış (ör. 2.0 → 2.1) küçük düzeltmeleri, tam sayı kısmındaki artış (ör. 2.x → 3.0) esaslı değişiklikleri gösterir. Esaslı değişikliklerde sizi uygulama içinde yeniden bilgilendiririz ve metni okuduğunuzu belirtmenizi isteriz; bu metin için onay istemeyiz."
          }
        ]
      },
      {
        number: "13",
        title: "Dil",
        blocks: [
          {
            kind: "paragraph",
            html: "Bu metnin iki sürümü arasında fark olursa Türkçe sürüm esastır; İngilizce sürüm yalnızca bilgi amaçlıdır."
          }
        ]
      }
    ]
  },
  en: {
    docTitleLine1: "Privacy",
    docTitleLine2: "Notice",
    headerSub: "Privacy Notice",
    lastUpdated: "28.11.2026",
    sections: [
      {
        number: "01",
        title: "Data controller",
        blocks: [
          {
            kind: "paragraph",
            html: "This Privacy Notice is the privacy policy of Words &amp; Hammers."
          },
          {
            kind: "paragraph",
            html: "Words &amp; Hammers is developed and published by Sait KAPLAN under the name Neawe Forge; in this notice we refer to ourselves as \"we\". Under Turkish Law No. 6698 on the Protection of Personal Data (KVKK), the data controller is Sait KAPLAN. You can reach us at support@neaweforge.com."
          }
        ]
      },
      {
        number: "02",
        title: "In short",
        blocks: [
          {
            kind: "list",
            items: [
              "The game is played offline; you need an internet connection to read the legal texts before you accept them (at the game's first launch, and when an update changes them materially). Your game data is stored only on your device and is not sent to us.",
              "There are no accounts, servers or leaderboards.",
              "Ads are optional. Unless you choose to watch an ad for a reward in the Shop, the ad system never starts and no data goes to Google.",
              "We receive stage feedback by email only if you choose to send it.",
              "Settings → Reset Data deletes all your game data from the device immediately."
            ]
          }
        ]
      },
      {
        number: "03",
        title: "Data we process, purposes and legal grounds",
        blocks: [
          {
            kind: "table",
            headers: [
              "Processing activity",
              "Data",
              "Purpose",
              "Legal ground (KVKK Art. 5)",
              "Where it stays, who receives it"
            ],
            rows: [
              [
                "Running the game on your device",
                "Username, four-digit tag, avatar, a random player number generated on the device, language region, registration date; stage progress (scores, stars, play counts, the paths of found words); emeralds, Forge Points and hammers; settings (sound, vibration, theme, color-blind mode, comfort level, purchase confirmation, feedback survey); whether in-game introductions have been shown",
                "Providing the game",
                "Establishing or performing the contract (Art. 5(2)(c))",
                "Only on your device; not sent to us. If your device backup is on, it may be included in that backup (see 08)"
              ],
              [
                "Age question",
                "Birth year",
                "Providing the game with settings suitable for your age (see 04)",
                "Establishing or performing the contract (Art. 5(2)(c))",
                "Only on your device; your birth year is never sent anywhere"
              ],
              [
                "Consent and version record",
                "The version and date of the Terms of Service you accepted and of the Privacy Notice shown to you, the app version in which you accepted, the moments the two documents were opened; the moment each app version was first opened on your device; the moments the ad and feedback information cards were shown and chosen",
                "Being able to show that information was given and acceptance was obtained",
                "Compliance with a legal obligation (Art. 5(2)(ç)) and the establishment, exercise or protection of a right (Art. 5(2)(e))",
                "Only on your device; not sent to us. In a dispute, the record on your device serves as evidence"
              ],
              [
                "Rewarded ads",
                "Data processed by Google: IP address and approximate location based on it, device and operating system information, app information, ad interactions, identifiers used for frequency capping and abuse prevention, error and performance data of the ad system. On your device: the ad counter (daily count, number of ads watched in a row, time of the last ad, times of the ads watched in the last hour)",
                "Showing the rewarded ad you asked for and giving the reward; limiting ad frequency",
                "Showing the ad you asked for and giving the reward: establishing or performing the contract (Art. 5(2)(c)); limiting ad frequency and preventing abuse: legitimate interest (Art. 5(2)(f))",
                "Google (see 05 and 07)"
              ],
              [
                "Stage feedback",
                "The contents of the email (see 06) and your sender email address",
                "Improving the stages and the game; replying to you if needed",
                "Legitimate interest (Art. 5(2)(f))",
                "To us by email; via Cloudflare and Google (see 07)"
              ],
              [
                "Support and KVKK requests",
                "Your email address, your name (if you write it), the content of your request",
                "Answering your request; completing a KVKK request",
                "Requests: legal obligation (Art. 5(2)(ç)). Support: performance of the contract or legitimate interest (Art. 5(2)(c), 5(2)(f))",
                "Via Cloudflare and Google (see 07)"
              ],
              [
                "Website (neaweforge.com)",
                "The visitor's IP address and technical connection information",
                "Serving the website and keeping it secure",
                "Legitimate interest (Art. 5(2)(f))",
                "GitHub (hosting), Cloudflare (domain)"
              ]
            ]
          },
          {
            kind: "paragraph",
            html: "Data is collected as follows: automatically by the app on your device while you use the game; electronically through the emails you send for stage feedback, support and requests; automatically by Google's ad system for ad data; and automatically when you visit the website for website data."
          },
          {
            kind: "paragraph",
            html: "The app collects no other data; it does not access your location, camera, microphone, contacts or files."
          }
        ]
      },
      {
        number: "04",
        title: "Age question",
        blocks: [
          {
            kind: "paragraph",
            html: "The game is designed for adults. On first launch we ask for your birth year; it is stored only on your device and is not sent to us or to Google. Your birth year cannot be changed later; it is asked again only after Reset Data."
          },
          {
            kind: "paragraph",
            html: "If the difference between this year and your birth year is 18 or less, you are treated as under 18. In that case we ask you to read the Terms of Service together with your parent or legal guardian and to play with their permission and under their supervision. Your ads are marked as directed to children and limited to content rated \"G\" (general audiences) at most; Google receives only this mark, not your birth year. The advertising ID is not used for anyone. We carry out no processing of children's data based on consent."
          }
        ]
      },
      {
        number: "05",
        title: "Ads",
        blocks: [
          {
            kind: "paragraph",
            html: "The optional rewarded ads in the Shop are shown by Google AdMob; there are no other ads in the game."
          },
          {
            kind: "list",
            items: [
              "<strong>When they start:</strong> The ad system does not start when the game opens. When you tap an ad for a reward in the Shop, we show a short information card each time until you choose \"Watch ad\"; unless you make that choice, the ad system does not start and no data goes to Google. After that choice, the ad system starts shortly after you enter the Shop (not if you leave right away), and an ad may be preloaded on the Shop screen so that it opens quickly. A loaded ad may be kept while the game stays open, even after you leave the Shop, and is ready to watch on your next visit within one hour; a load that started in the Shop may finish after you leave, but no new ad request is sent outside the Shop.",
              "<strong>No personalization:</strong> All ad requests are sent as non-personalized. The app does not access the advertising ID (the advertising ID on Android, IDFA on iOS) and does not ask for tracking permission (ATT) on iOS.",
              "<strong>Content limit:</strong> Ads rated \"PG\" (parental guidance suggested) at most are requested for adults, and \"G\" at most for players under 18.",
              "<strong>Frequency limit:</strong> You can watch at most 25 ads a day and at most 10 ads an hour; after the first two ads, you wait 4 minutes between ads, and if you watch no ad for 10 minutes, the first two ads are again without a wait.",
              "<strong>Data processed by Google:</strong> To show and measure ads and to prevent abuse, Google processes your IP address, device and operating system information and ad interactions. Google is an independent data controller for this data and processes and keeps it under its own privacy policy.",
              "<strong>Consent screen in Europe:</strong> When accessed from the European Economic Area, the United Kingdom or Switzerland, Google's own consent screen may be shown; the game is currently distributed only in Türkiye."
            ]
          }
        ]
      },
      {
        number: "06",
        title: "Stage feedback",
        blocks: [
          {
            kind: "paragraph",
            html: "You can rate a stage when you finish it; your ratings are first stored only on your device. If you choose to send them from Settings, your device's email app opens and the email goes to support@neaweforge.com. Before the first sending we show an information card. Before sending, you can see the email, change it or decide not to send it."
          },
          {
            kind: "paragraph",
            html: "The email contains: your username, the number of ratings and the sending date; for each stage, the stage number and ID, your score, your stage stars, the time you finished the stage, the rating you gave (1-5), your difficulty rating and your note of up to 120 characters. We also see your email address."
          },
          {
            kind: "paragraph",
            html: "We use this information only to improve the stages and the game and to reply to you if needed. We keep the emails for at most 3 months; their content may be moved into notes that do not identify you. Ratings you have sent also stay on your device until Reset Data or until you uninstall the app."
          }
        ]
      },
      {
        number: "07",
        title: "Recipients and transfers abroad",
        blocks: [
          {
            kind: "paragraph",
            html: "We share data only with the service providers below, for the purposes above; we never sell any data."
          },
          {
            kind: "table",
            headers: [
              "Recipient",
              "For",
              "Country"
            ],
            rows: [
              [
                "Google (AdMob)",
                "Rewarded ads; Google is an independent data controller",
                "USA, Ireland"
              ],
              [
                "Google (Gmail)",
                "The account that holds emails sent to support@neaweforge.com",
                "USA"
              ],
              [
                "Cloudflare",
                "Forwarding of support@neaweforge.com; domain",
                "USA"
              ],
              [
                "GitHub",
                "Hosting of neaweforge.com; records visitor IP addresses for security",
                "USA"
              ]
            ]
          },
          {
            kind: "paragraph",
            html: "Because these providers' servers are abroad, your data is transferred abroad. The transfer is limited to the purposes above; the data Google processes for ads on its own behalf is subject to Google's own rules (see 05 above). The countries in the table are where the providers are based; the providers may also process the data in data centers in other countries."
          }
        ]
      },
      {
        number: "08",
        title: "Retention and deletion",
        blocks: [
          {
            kind: "list",
            items: [
              "<strong>Data on your device:</strong> deleted from your device immediately when you tap Settings → Reset Data or uninstall the app. Reset Data also deletes the consent and version records and the ad consent record Google keeps on the device; the version record starts again from the moment of the reset, and the age question and the consent screen are shown again.",
              "<strong>Device backup:</strong> if your device's backup feature is on (your Google account backup on Android, iCloud backup on iOS), your game data may be included in that backup and restored on a new device. The backup stays in your account; we cannot access it. Data in the backup is deleted under the rules of the backup service.",
              "<strong>Emails:</strong> stage feedback and support emails are kept for at most 3 months. KVKK request correspondence is kept after the request is closed for the relevant limitation periods, so that we can exercise our rights in a possible complaint or dispute, and is then deleted.",
              "<strong>Google:</strong> ad data is kept under Google's retention policy."
            ]
          }
        ]
      },
      {
        number: "09",
        title: "Data security",
        blocks: [
          {
            kind: "paragraph",
            html: "Your game data is stored in the protected area the operating system assigns to the app; we open no path through which other apps could reach this data. The app does not write your personal data to its logs. Our support email account is protected with two-step verification."
          },
          {
            kind: "paragraph",
            html: "The security of your data also depends on the security of your device: we recommend using a screen lock and keeping your device backup on."
          }
        ]
      },
      {
        number: "10",
        title: "Your rights",
        blocks: [
          {
            kind: "paragraph",
            html: "Under Article 11 of the KVKK, you have the right to:"
          },
          {
            kind: "list",
            items: [
              "learn whether your personal data is processed,",
              "request information if it has been processed,",
              "learn the purpose of processing and whether it is used in line with that purpose,",
              "know the third parties in Türkiye or abroad to whom it is transferred,",
              "request correction if it is incomplete or inaccurate,",
              "request its deletion or destruction,",
              "request that correction and deletion be notified to the third parties to whom the data was transferred,",
              "object to a result against you arising solely from automated analysis,",
              "claim compensation if you suffer damage because of unlawful processing."
            ]
          },
          {
            kind: "paragraph",
            html: "You can send your request in Turkish to support@neaweforge.com. We answer it free of charge within 30 days at the latest. If you find our answer insufficient or we do not answer in time, you can file a complaint with the Personal Data Protection Board (Kişisel Verileri Koruma Kurulu) within 30 days of learning our answer and in any case within 60 days of your request."
          },
          {
            kind: "paragraph",
            html: "We cannot see the data on your device: the quickest way to see and delete the game's data on your device is the app itself (Settings → Reset Data)."
          }
        ]
      },
      {
        number: "11",
        title: "For players on the previous version",
        blocks: [
          {
            kind: "paragraph",
            html: "The previous version of Words &amp; Hammers (1.0.1) works differently and is not described by this notice. In 1.0.1:"
          },
          {
            kind: "list",
            items: [
              "the consent screen asked you to \"accept\" the Privacy Policy;",
              "the ad system started as the game opened (on first install, right after the consent screen);",
              "ads were requested as personalized, and the advertising ID could be used on Android;",
              "besides the rewarded ad in the Shop, there was a banner ad on the game screen."
            ]
          },
          {
            kind: "paragraph",
            html: "Data processed for ads during the 1.0.1 period is held by Google under its own rules; we hold no personal ad data from that period."
          },
          {
            kind: "paragraph",
            html: "When you update the game, this notice applies and the age question and the consent screen are shown once. We recommend updating; you can reset or delete your advertising ID in your device settings."
          }
        ]
      },
      {
        number: "12",
        title: "Changes",
        blocks: [
          {
            kind: "paragraph",
            html: "We may update this notice. An increase in the decimal part of the version number (e.g. 2.0 → 2.1) marks minor corrections; an increase in the whole number (e.g. 2.x → 3.0) marks material changes. With material changes we inform you again in the app and ask you to confirm that you have read the notice; we do not ask for your approval of this notice."
          }
        ]
      },
      {
        number: "13",
        title: "Language",
        blocks: [
          {
            kind: "paragraph",
            html: "In case of any conflict between the two versions of this notice, the Turkish version prevails; the English version is provided for information only."
          }
        ]
      }
    ]
  }
};
