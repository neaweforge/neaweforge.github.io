import type { LegalDoc } from "../legal_types";

// Version 2.0, rewritten for the Words & Hammers 1.0.2 legal update. The
// Turkish text governs; English is a translation. lastUpdated is the day the
// text went live on the site, the same day as the app release.
export const termsOfService: LegalDoc = {
  version: "2.0",
  developer: "Neawe Forge (Sait KAPLAN)",
  application: "Words & Hammers",
  tr: {
    docTitleLine1: "Kullanım",
    docTitleLine2: "Koşulları",
    headerSub: "Kullanım Koşulları",
    lastUpdated: "28.11.2026",
    sections: [
      {
        number: "01",
        title: "Taraflar ve kabul",
        blocks: [
          {
            kind: "paragraph",
            html: "Bu Kullanım Koşulları, Words &amp; Hammers'ı Neawe Forge adıyla geliştiren ve yayınlayan Sait KAPLAN (\"biz\") ile oyunu kullanan sizin aranızdaki sözleşmeyi oluşturur ve ilişkiyi düzenler. Koşullar, ilk açılıştaki onay ekranında kabul ettiğinizde geçerli olur; kabul ettiğiniz sürüm ve tarih cihazınızda kaydedilir. Kabul etmezseniz oyunu oynayamazsınız."
          }
        ]
      },
      {
        number: "02",
        title: "Oyun",
        blocks: [
          {
            kind: "paragraph",
            html: "Words &amp; Hammers ücretsiz bir kelime bulmaca oyunudur. Oyun internetsiz oynanır; hesap, sunucu ve sıralama yoktur, oyun verileriniz yalnızca cihazınızda saklanır. İnternet yalnızca şunlar için gerekir: yasal metinleri onaylamadan önce okumak (oyunun ilk açılışında ve bir güncellemeyle metinler esaslı olarak değiştiğinde), isteğe bağlı ödüllü reklam, bölüm değerlendirmesi göndermek ve bağlantıları açmak."
          }
        ]
      },
      {
        number: "03",
        title: "Yaş",
        blocks: [
          {
            kind: "paragraph",
            html: "Oyun yetişkinler için tasarlanmıştır. İlk açılışta doğum yılınızı doğru bildirmeniz gerekir. 18 yaşından küçükseniz bu Koşulları veliniz ya da vasinizle birlikte okumalısınız; oyunu ancak onların izniyle ve gözetiminde oynayabilirsiniz."
          }
        ]
      },
      {
        number: "04",
        title: "Oyun içi öğeler",
        blocks: [
          {
            kind: "paragraph",
            html: "Zümrüt, Forge Puanı ve çekiçler yalnızca oyun içinde geçerlidir; gerçek para değerleri yoktur, paraya çevrilemez, satılamaz ve başkasına devredilemez. Bunlar gerçek parayla satılmaz: zümrüt bölümleri oynayarak ve dükkândaki sandıktan, Forge Puanı bölümleri oynayarak kazanılır; çekiçler sandıktan çıkar ya da zümrütle alınır."
          }
        ]
      },
      {
        number: "05",
        title: "Reklamlar",
        blocks: [
          {
            kind: "paragraph",
            html: "Oyun reklamla desteklenir. Dükkânda bazı ödüller için isteğe bağlı ödüllü reklam izleyebilirsiniz; oyunda başka reklam yoktur. Reklamlar kişiselleştirilmez; 18 yaşından küçük oyuncular için çocuklara uygun içerikle sınırlanır. Günde en çok 25, saatte en çok 10 reklam izlenebilir; ilk iki reklamdan sonra reklamlar arasında 4 dakika beklenir, 10 dakika reklam izlenmezse ilk iki reklam yeniden beklemesizdir. Ödül, Google reklamın tamamlandığını bildirdiğinde verilir; reklam yüklenemezse ya da yarıda bırakılırsa ödül verilmez. Reklamları Google AdMob gösterir; işlenen veriler Aydınlatma Metni'ndedir."
          }
        ]
      },
      {
        number: "06",
        title: "Kullanım kuralları",
        blocks: [
          {
            kind: "paragraph",
            html: "Oyunu kullanırken:"
          },
          {
            kind: "list",
            items: [
              "oyunu değiştirmeyin, değiştirilmiş sürümünü dağıtmayın, oyuna tersine mühendislik uygulamayın ve kodunu çözmeye çalışmayın (kanunun açıkça izin verdiği hâller saklıdır);",
              "reklam ödüllerini otomasyon araçlarıyla ya da başka bir hileyle elde etmeye çalışmayın;",
              "kullanıcı adınızda hakaret içeren, başkasının haklarını ihlal eden ya da yasalara aykırı ifadeler kullanmayın;",
              "oyunu yürürlükteki yasalara aykırı biçimde kullanmayın."
            ]
          }
        ]
      },
      {
        number: "07",
        title: "İçerik hakları",
        blocks: [
          {
            kind: "paragraph",
            html: "Oyunun bölümleri, kelime tanımları, sözlüğün derlemesi, görselleri, adı ve logosu üzerindeki haklar, mevzuatın tanıdığı ölçüde bize aittir; bazı görseller yapay zekâ araçlarıyla üretilmiştir (oyunda Ayarlar → Hakkında → Yapay zekâ kullanımı). Size oyunu kişisel ve ticari olmayan amaçla kullanmanız için sınırlı, münhasır olmayan ve devredilemez bir kullanım hakkı veririz. Bu içerikler iznimiz olmadan kopyalanamaz, çoğaltılamaz ya da dağıtılamaz."
          }
        ]
      },
      {
        number: "08",
        title: "Güncellemeler ve veri kaybı",
        blocks: [
          {
            kind: "paragraph",
            html: "Oyun geliştirme aşamasındadır. Oyunu iyileştirmek için yapılan güncellemelerde sistem değişebilir; bu nedenle oyun içi ilerleme ve öğeler sıfırlanabilir, cihazınızdaki veriler silinebilir ya da yeni sürümde kullanılamaz hâle gelebilir. Bunu önceden uygulama içinde duyururuz."
          }
        ]
      },
      {
        number: "09",
        title: "Cihaz güvenliği ve yerel kayıt",
        blocks: [
          {
            kind: "paragraph",
            html: "Oyun verileriniz yalnızca cihazınızda saklanır; yedeğiniz yoksa cihaz kaybında ya da silmede geri getirilemez. Verilerinizin güvenliği cihazınızın güvenliğine de bağlıdır. Cihazınızın kaybolması, çalınması, başkalarının erişimine açık bırakılması ya da cihazınızdaki başka yazılımlar yoluyla verilerinize erişilmesi nedeniyle oluşan zararlardan, kusurumuz olmadıkça sorumlu değiliz."
          },
          {
            kind: "paragraph",
            html: "Oyun içindeki Ayarlar → Verileri Sıfırla bütün oyun verilerinizi cihazınızdan kalıcı olarak siler; bu işlem geri alınamaz."
          }
        ]
      },
      {
        number: "10",
        title: "Sorumluluk",
        blocks: [
          {
            kind: "paragraph",
            html: "Oyunu ücretsiz ve olduğu gibi sunarız; her cihazda kesintisiz ve hatasız çalışacağını garanti edemeyiz. Kanunun izin verdiği ölçüde, oyunun kullanılmasından ya da kullanılamamasından doğan dolaylı zararlardan sorumlu değiliz. Bu sınırlama, kastımızla ya da ağır kusurumuzla verdiğimiz zararları ve kanunun sınırlanmasına izin vermediği sorumluluklarımızı kapsamaz."
          }
        ]
      },
      {
        number: "11",
        title: "Oyunun değişmesi ve sona ermesi",
        blocks: [
          {
            kind: "paragraph",
            html: "Oyunu geliştirebilir, özelliklerini değiştirebilir ya da kaldırabiliriz. Oyunu mağazalardan kaldırmaya ve geliştirmeyi bırakmaya karar verirsek bunu en az 30 gün önce uygulama içinde ya da neaweforge.com'da duyururuz. Oyun internetsiz çalıştığı için cihazınızdaki oyun bundan sonra da çalışabilir; ancak yeniden indirilemez ve güncelleme almaz."
          }
        ]
      },
      {
        number: "12",
        title: "Koşulların değişmesi",
        blocks: [
          {
            kind: "paragraph",
            html: "Bu Koşulları güncelleyebiliriz. Sürüm numarasının ondalık kısmındaki artış (ör. 2.0 → 2.1) küçük açıklama ya da dil düzeltmelerini, tam sayı kısmındaki artış (ör. 2.x → 3.0) haklarınızı ya da yükümlülüklerinizi etkileyen esaslı değişiklikleri gösterir. Esaslı değişiklikler, oyunun yeni sürümünü ilk açtığınızda gösterilir; yeni Koşulları kabul edene kadar oyuna devam edemezsiniz, cihazınızdaki oyun verileriniz ise silinmez. Kabul ettiğiniz sürüm ve tarih cihazınızda kaydedilir."
          }
        ]
      },
      {
        number: "13",
        title: "Uygulanacak hukuk ve uyuşmazlıklar",
        blocks: [
          {
            kind: "paragraph",
            html: "Bu Koşullara Türk hukuku uygulanır. Tüketici uyuşmazlıklarında, kanundaki parasal sınırlar içinde tüketici hakem heyetleri, bu sınırların üzerinde tüketici mahkemeleri yetkilidir."
          }
        ]
      },
      {
        number: "14",
        title: "Dil",
        blocks: [
          {
            kind: "paragraph",
            html: "Bu Koşulların iki sürümü arasında fark olursa Türkçe sürüm esastır; İngilizce sürüm yalnızca bilgi amaçlıdır."
          }
        ]
      },
      {
        number: "15",
        title: "İletişim",
        blocks: [
          {
            kind: "paragraph",
            html: "Sorularınız için: support@neaweforge.com"
          }
        ]
      }
    ]
  },
  en: {
    docTitleLine1: "Terms of",
    docTitleLine2: "Service",
    headerSub: "Terms of Service",
    lastUpdated: "28.11.2026",
    sections: [
      {
        number: "01",
        title: "Parties and acceptance",
        blocks: [
          {
            kind: "paragraph",
            html: "These Terms of Service form an agreement and govern the relationship between you, the user of the game, and Sait KAPLAN, who develops and publishes Words &amp; Hammers under the name Neawe Forge (\"we\"). The Terms apply once you accept them on the consent screen at first launch; the version and date you accepted are recorded on your device. If you do not accept them, you cannot play the game."
          }
        ]
      },
      {
        number: "02",
        title: "The game",
        blocks: [
          {
            kind: "paragraph",
            html: "Words &amp; Hammers is a free word puzzle game. The game is played offline; there are no accounts, servers or leaderboards, and your game data is stored only on your device. An internet connection is needed only to read the legal texts before you accept them (at the game's first launch, and when an update changes them materially), for optional rewarded ads, for sending stage feedback and for opening links."
          }
        ]
      },
      {
        number: "03",
        title: "Age",
        blocks: [
          {
            kind: "paragraph",
            html: "The game is designed for adults. You must give your correct birth year at first launch. If you are under 18, you must read these Terms together with your parent or legal guardian, and you may play the game only with their permission and under their supervision."
          }
        ]
      },
      {
        number: "04",
        title: "In-game items",
        blocks: [
          {
            kind: "paragraph",
            html: "Emeralds, Forge Points and hammers are valid only within the game; they have no real-money value and cannot be exchanged for money, sold or transferred to anyone else. They are not sold for real money: emeralds are earned by playing stages and from the chest in the Shop, Forge Points by playing stages; hammers come from the chest or are bought with emeralds."
          }
        ]
      },
      {
        number: "05",
        title: "Ads",
        blocks: [
          {
            kind: "paragraph",
            html: "The game is supported by ads. In the Shop you can watch optional rewarded ads for some rewards; there are no other ads in the game. Ads are not personalized; for players under 18 they are limited to content suitable for children. You can watch at most 25 ads a day and at most 10 ads an hour; after the first two ads, you wait 4 minutes between ads, and if you watch no ad for 10 minutes, the first two ads are again without a wait. The reward is given when Google reports that the ad has been completed; if an ad fails to load or is left unfinished, no reward is given. Ads are shown by Google AdMob; the data processed is described in the Privacy Notice."
          }
        ]
      },
      {
        number: "06",
        title: "Rules of use",
        blocks: [
          {
            kind: "paragraph",
            html: "When using the game:"
          },
          {
            kind: "list",
            items: [
              "do not modify the game, distribute modified versions of it, or reverse engineer it or try to decompile its code, except where the law expressly allows;",
              "do not try to obtain ad rewards with automation tools or any other cheat;",
              "do not use insulting, unlawful expressions or expressions that infringe others' rights in your username;",
              "do not use the game in breach of applicable law."
            ]
          }
        ]
      },
      {
        number: "07",
        title: "Content rights",
        blocks: [
          {
            kind: "paragraph",
            html: "The rights in the game's stages, word definitions, the compilation of its dictionary, images, name and logo belong to us to the extent the law recognizes them; some images were created with AI tools (in the game: Settings → About → Use of AI). We grant you a limited, non-exclusive, non-transferable right to use the game for personal, non-commercial purposes. This content may not be copied, reproduced or distributed without our permission."
          }
        ]
      },
      {
        number: "08",
        title: "Updates and loss of data",
        blocks: [
          {
            kind: "paragraph",
            html: "The game is in development. Updates made to improve the game may change the system; as a result, in-game progress and items may be reset, data on your device may be deleted or may become unusable in the new version. We announce this in the app in advance."
          }
        ]
      },
      {
        number: "09",
        title: "Device security and local storage",
        blocks: [
          {
            kind: "paragraph",
            html: "Your game data is stored only on your device; without a backup, it cannot be recovered if the device is lost or the data is deleted. The security of your data also depends on the security of your device. Unless we are at fault, we are not liable for damage arising from your device being lost, stolen or left accessible to others, or from your data being accessed through other software on your device."
          },
          {
            kind: "paragraph",
            html: "Settings → Reset Data in the game permanently deletes all your game data from your device; this cannot be undone."
          }
        ]
      },
      {
        number: "10",
        title: "Liability",
        blocks: [
          {
            kind: "paragraph",
            html: "We provide the game free of charge and as is; we cannot guarantee that it will work without interruption or errors on every device. To the extent permitted by law, we are not liable for indirect damage arising from the use of, or inability to use, the game. This limitation does not cover damage we cause intentionally or through gross negligence, or any liability that the law does not allow to be limited."
          }
        ]
      },
      {
        number: "11",
        title: "Changes to and end of the game",
        blocks: [
          {
            kind: "paragraph",
            html: "We may develop the game and change or remove its features. If we decide to remove the game from the stores and stop developing it, we will announce it at least 30 days in advance in the app or on neaweforge.com. Because the game works offline, the game on your device may keep working after that; however, it can no longer be downloaded again and will not receive updates."
          }
        ]
      },
      {
        number: "12",
        title: "Changes to these Terms",
        blocks: [
          {
            kind: "paragraph",
            html: "We may update these Terms. An increase in the decimal part of the version number (e.g. 2.0 → 2.1) marks minor clarifications or language corrections; an increase in the whole number (e.g. 2.x → 3.0) marks material changes that affect your rights or obligations. Material changes are shown when you first open a new version of the game; you cannot continue playing until you accept the new Terms, but your game data on your device is not deleted. The version and date you accepted are recorded on your device."
          }
        ]
      },
      {
        number: "13",
        title: "Governing law and disputes",
        blocks: [
          {
            kind: "paragraph",
            html: "These Terms are governed by Turkish law. In consumer disputes, consumer arbitration committees have jurisdiction within the monetary limits set by law, and consumer courts above those limits."
          }
        ]
      },
      {
        number: "14",
        title: "Language",
        blocks: [
          {
            kind: "paragraph",
            html: "In case of any conflict between the two versions of these Terms, the Turkish version prevails; the English version is provided for information only."
          }
        ]
      },
      {
        number: "15",
        title: "Contact",
        blocks: [
          {
            kind: "paragraph",
            html: "For questions: support@neaweforge.com"
          }
        ]
      }
    ]
  }
};
