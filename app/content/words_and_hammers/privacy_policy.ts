import type { LegalDoc } from "../legal_types";

// Migrated verbatim from wordsandhammers/privacy-policy.html (old static
// site) on 2026-08-02 — wording is not altered from the source. See the
// Phase 4 report for the one EN/TR asymmetry found during migration
// (§09 Children's Privacy has one extra sentence in EN that TR lacks in
// the original source) — flagged, not silently fixed.
export const privacyPolicy: LegalDoc = {
  version: "1.0",
  developer: "Neawe Forge (Sait KAPLAN)",
  application: "Words & Hammers",
  tr: {
    docTitleLine1: "Gizlilik",
    docTitleLine2: "Politikası",
    headerSub: "Gizlilik Politikası",
    lastUpdated: "12.07.2026",
    sections: [
      {
        number: "01",
        title: "Genel Bakış ve Veri Sorumlusu",
        blocks: [
          {
            kind: "paragraph",
            html: 'Bu Gizlilik Politikası, Neawe Forge (Sait KAPLAN) tarafından geliştirilen "Words &amp; Hammers" mobil uygulamasının kişisel verilerinizi nasıl topladığını, kullandığını, sakladığını ve koruduğunu açıklamaktadır.',
          },
          {
            kind: "table",
            rows: [
              ["Veri Sorumlusu", "Neawe Forge (Sait KAPLAN)"],
              ["İletişim", "support@neaweforge.com"],
              ["Mevzuat", "6698 sayılı KVKK · GDPR (AB kullanıcıları) · Google Play &amp; App Store politikaları"],
            ],
          },
        ],
      },
      {
        number: "02",
        title: "Toplanan Kişisel Veriler",
        blocks: [
          { kind: "subtitle", html: "2.1 Cihaz İçi Veriler (Yerel Depolama)" },
          {
            kind: "paragraph",
            html: "Uygulama şu anda kişisel verilerinizi herhangi bir sunucuya göndermemektedir. Oyun ilerlemeniz, ayarlarınız, dil ve tema tercihiniz yalnızca cihazınızda (<em>shared_preferences</em>) saklanır ve Neawe Forge'a iletilmez.",
          },
          { kind: "subtitle", html: "2.2 Reklam Verileri (Google AdMob)" },
          {
            kind: "paragraph",
            html: "AdMob, kişiselleştirme amacıyla reklam tanımlayıcısı (IDFA/GAID), yaklaşık konum ve uygulama etkileşim verisi toplayabilir. İlk açılışta açık rızanız talep edilir.",
          },
          { kind: "subtitle", html: "2.3 Teknik / Log Verileri" },
          {
            kind: "list",
            items: [
              "IP adresi · Cihaz modeli · İşletim sistemi sürümü",
              "Uygulama hata logları ve çökme raporları",
              "Hizmet kullanım tarihi ve saati",
            ],
          },
          {
            kind: "subtitle",
            html: "2.4 Planlanan Gelecek Özellikler (Bulut Hesabı, Sıralama Tablosu, Forge Point)",
          },
          {
            kind: "paragraph",
            html: 'Neawe Forge, ileride "Words &amp; Hammers" uygulamasına isteğe bağlı bir bulut hesabı, çevrim içi sıralama tablosu ve "Forge Point" adlı oyun içi puan sistemi eklemeyi planlamaktadır. Bu bölümde açıklanan işleme faaliyetleri <strong>henüz aktif değildir</strong>. Etkinleştirildiğinde:',
          },
          {
            kind: "list",
            items: [
              "<strong>E-posta adresi ve kullanıcı adı</strong> — kimlik doğrulama ve hesap tanımlaması için Supabase altyapısında saklanacaktır",
              "<strong>Şifre</strong> — yalnızca bcrypt hash olarak saklanacak; düz metin hiçbir zaman kaydedilmeyecektir",
              "<strong>Kullanıcı adınız ve Forge Point puanınız</strong> — sıralama tablosunda diğer kullanıcılara görünür olacaktır",
              "<strong>Profil avatarınız</strong> — önceden tanımlı bir avatar setinden seçilecektir; serbest fotoğraf yükleme bu aşamada sunulmayacaktır",
            ],
          },
          {
            kind: "paragraph",
            html: "Forge Point'in gerçek para karşılığı bir değeri yoktur; satılamaz, devredilemez ve gerçek paraya çevrilemez. Neawe Forge bu puanları dilediği zaman düzenleyebilir veya sıfırlayabilir.",
          },
          {
            kind: "info",
            html: "Bu özellikler etkinleştirilmeden önce bu Gizlilik Politikası güncellenecek ve uygulama içinde konuya özel, ayrı bir onayınız istenecektir. Onayınız olmadan bu bölümde açıklanan hiçbir veri işlenmeye başlanmayacaktır.",
          },
        ],
      },
      {
        number: "03",
        title: "Üçüncü Taraf Hizmet Sağlayıcılar",
        blocks: [
          {
            kind: "table",
            headers: ["Hizmet", "Amaç", "Politika", "Durum"],
            rows: [
              [
                "Google AdMob",
                "Reklam gösterimi",
                '<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>',
                "Aktif",
              ],
              [
                "Google Play Services",
                "Platform hizmetleri",
                '<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>',
                "Aktif",
              ],
              [
                "Supabase Inc.",
                "Kimlik doğrulama, kullanıcı veritabanı (planlanan bulut hesabı özelliği)",
                '<a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">supabase.com/privacy</a>',
                "Planlanan — henüz aktif değil",
              ],
            ],
          },
          {
            kind: "paragraph",
            html: "shared_preferences, connectivity_plus, flutter_dotenv ve Flame yalnızca cihaz üzerinde çalışır; kişisel veri göndermez.",
          },
        ],
      },
      {
        number: "04",
        title: "Verilerin Kullanım Amaçları",
        blocks: [
          {
            kind: "list",
            items: [
              "Kullanıcı hesabı oluşturma ve kimlik doğrulama <em>(planlanan — §2.4)</em>",
              "Oyun içi sıralama tablosunun yönetimi <em>(planlanan — §2.4)</em>",
              "Kişiselleştirilmiş veya kişiselleştirilmemiş reklam gösterimi",
              "Uygulama hatalarının tespiti ve giderilmesi",
              "Hizmet kalitesinin ölçülmesi",
            ],
          },
        ],
      },
      {
        number: "05",
        title: "Veri Güvenliği ve Sorumluluk Sınırlandırması",
        blocks: [
          {
            kind: "paragraph",
            html: "Bulut hesap sistemi etkinleştirildiğinde verileriniz, SOC 2 Type 2 sertifikalı, AES-256 şifreli Supabase bulut altyapısında saklanacaktır.",
          },
          {
            kind: "warn",
            title: "⚠ Önemli Güvenlik Uyarısı",
            html: "İnternet üzerinden hiçbir veri iletim yöntemi %100 güvenli değildir. Neawe Forge, Supabase Inc. dahil üçüncü taraf altyapı sağlayıcılarında meydana gelen ve makul özen yükümlülüğü kapsamında öngörülemeyen veya önlenemeyen güvenlik olaylarından sorumlu tutulamaz. Bu sınırlama, Neawe Forge'un kendi kastından veya ağır ihmalinden doğan zararlar için uygulanmaz.",
          },
        ],
      },
      {
        number: "06",
        title: "Veri Saklama Süreleri",
        blocks: [
          {
            kind: "table",
            headers: ["Veri Türü", "Saklama Süresi"],
            rows: [
              ["Hesap verileri <em>(planlanan)</em>", "Hesap aktif olduğu sürece"],
              ["Hesap silinmesi sonrası <em>(planlanan)</em>", "En fazla 30 gün"],
              ["Teknik log verileri", "En fazla 90 gün"],
              ["Reklam verileri", "AdMob politikasına tabi"],
            ],
          },
        ],
      },
      {
        number: "07",
        title: "KVKK Kapsamındaki Haklarınız",
        blocks: [
          {
            kind: "table",
            headers: ["Hak", "Nasıl Kullanılır"],
            rows: [
              ["Erişim", "E-posta ile talep gönderin."],
              ["Düzeltme", "Yanlış verilerinizin düzeltilmesini isteyin."],
              [
                "Silme",
                "Ayarlar &gt; Verilerimi Sil (uygulama içi) ile cihazınızdaki tüm oyun verileriniz anında silinir. Bulut hesap sistemi etkinleştirildiğinde: Ayarlar &gt; Hesabı Sil (uygulama içi) veya bu site üzerinde yayınlanacak hesap silme sayfası üzerinden de talep edebilirsiniz.",
              ],
              ["İtiraz", "Belirli amaçlarla işlenmesine itiraz edebilirsiniz."],
              ["Taşınabilirlik", "Verilerinizi makine okunabilir formatta isteyin."],
              ["Kısıtlama", "Belirli koşullarda işlemenin kısıtlanmasını isteyin."],
            ],
          },
          {
            kind: "paragraph",
            html: 'Talep için <strong>support@neaweforge.com</strong> adresine "KVKK Veri Talebi" konusuyla yazın. 30 gün içinde yanıtlanır.',
          },
        ],
      },
      {
        number: "08",
        title: "AB Kullanıcıları için GDPR",
        blocks: [
          {
            kind: "table",
            headers: ["Veri Kategorisi", "Hukuki Dayanak"],
            rows: [
              ["Hesap verileri", "Sözleşmenin ifası (GDPR Madde 6/1-b)"],
              ["Kişiselleştirilmiş reklamlar", "Açık rıza (GDPR Madde 6/1-a)"],
              ["Log verileri", "Meşru menfaat (GDPR Madde 6/1-f)"],
            ],
          },
        ],
      },
      {
        number: "09",
        title: "Çocukların Gizliliği",
        blocks: [
          {
            kind: "paragraph",
            html: "Bu uygulama 13 yaşın altındaki kişilere yönelik değildir. 13 yaşın altındaki çocuklardan bilerek veri toplamıyoruz.",
          },
        ],
      },
      {
        number: "10",
        title: "Uluslararası Veri Transferi",
        blocks: [
          {
            kind: "paragraph",
            html: "Uygulama şu anda herhangi bir kişisel verinizi yurt dışına aktarmamaktadır. Planlanan bulut hesabı özelliği (§2.4) etkinleştirildiğinde, hesap verileriniz Supabase Inc. aracılığıyla Avrupa Birliği ve/veya Amerika Birleşik Devletleri'ndeki sunucularda işlenebilecektir. Bu aktarım; 6698 sayılı Kanun'un 9. maddesi uyarınca Kişisel Verileri Koruma Kurulu'nun yeterlilik kararına, uygun güvencelere (Kurul onaylı standart sözleşme/taahhütname) veya ayrıca ve açıkça alınacak rızanıza dayandırılacaktır. AB kullanıcıları için ayrıca GDPR uyumlu Standard Contractual Clauses uygulanacaktır. Bu aktarım başlamadan önce, konuya özel bir onay ekranı ayrıca sunulacaktır.",
          },
        ],
      },
      {
        number: "11",
        title: "Politika Değişiklikleri ve Sürümleme",
        blocks: [
          {
            kind: "paragraph",
            html: "Bu politika güncellenebilir. Sürüm numarasının ondalık kısmındaki artışlar (ör. 1.0 → 1.1) küçük açıklama veya dil düzeltmelerini; tam sayı kısmındaki artışlar (ör. 1.x → 2.0) ise veri işleme kapsamını genişleten maddi değişiklikleri (örneğin §2.4'te açıklanan özelliklerin etkinleştirilmesi) ifade eder. Maddi bir güncelleme yapıldığında, uygulama güncel politikayı yeniden onaylamanızı isteyecek ve onayınız tarih ve sürüm bilgisiyle birlikte kaydedilecektir. Diğer önemli değişiklikler uygulama içi bildirim ve/veya e-posta ile duyurulur.",
          },
        ],
      },
      {
        number: "12",
        title: "İletişim",
        blocks: [{ kind: "paragraph", html: "Sorularınız için: <strong>support@neaweforge.com</strong>" }],
      },
    ],
  },
  en: {
    docTitleLine1: "Privacy",
    docTitleLine2: "Policy",
    headerSub: "Privacy Policy",
    lastUpdated: "12 July 2026",
    sections: [
      {
        number: "01",
        title: "Overview and Data Controller",
        blocks: [
          {
            kind: "paragraph",
            html: 'This Privacy Policy explains how "Words &amp; Hammers", developed by Neawe Forge (Sait KAPLAN), collects, uses, stores and protects your personal data.',
          },
          {
            kind: "table",
            rows: [
              ["Data Controller", "Neawe Forge (Sait KAPLAN)"],
              ["Contact", "support@neaweforge.com"],
              ["Applicable Law", "Turkish KVKK · GDPR (EU users) · Google Play &amp; App Store policies"],
            ],
          },
        ],
      },
      {
        number: "02",
        title: "Personal Data We Collect",
        blocks: [
          { kind: "subtitle", html: "2.1 On-Device Data (Local Storage)" },
          {
            kind: "paragraph",
            html: "The app does not currently send any personal data to a server. Your game progress, settings, and language/theme preferences are stored only on your device (<em>shared_preferences</em>) and are never transmitted to Neawe Forge.",
          },
          { kind: "subtitle", html: "2.2 Advertising Data (Google AdMob)" },
          {
            kind: "paragraph",
            html: "AdMob may collect advertising identifiers (IDFA/GAID), approximate location, and app interaction data. Explicit consent is requested at first launch.",
          },
          { kind: "subtitle", html: "2.3 Technical / Log Data" },
          {
            kind: "list",
            items: [
              "IP address · Device model · OS version",
              "App error logs and crash reports",
              "Date and time of Service usage",
            ],
          },
          {
            kind: "subtitle",
            html: "2.4 Planned Future Features (Cloud Account, Leaderboard, Forge Points)",
          },
          {
            kind: "paragraph",
            html: 'Neawe Forge plans to add an optional cloud account, an online leaderboard, and an in-game point system called "Forge Points" to Words &amp; Hammers. The processing described in this section is <strong>not yet active</strong>. Once enabled:',
          },
          {
            kind: "list",
            items: [
              "<strong>Email address and username</strong> — will be stored on Supabase infrastructure for authentication and account identification",
              "<strong>Password</strong> — will be stored only as a bcrypt hash; plain text will never be stored",
              "<strong>Username and Forge Points</strong> — will be visible to other users on the in-game leaderboard",
              "<strong>Profile avatar</strong> — will be selected from a preset set of avatars; free-form photo upload will not be offered at this stage",
            ],
          },
          {
            kind: "paragraph",
            html: "Forge Points have no monetary value, cannot be purchased, sold, transferred, or exchanged for real currency or any item of value, and may be adjusted or reset by Neawe Forge at any time.",
          },
          {
            kind: "info",
            html: "This Privacy Policy will be updated before these features are enabled, and you will be asked to give a separate, specific consent within the app. No data described in this section will be processed until you do.",
          },
        ],
      },
      {
        number: "03",
        title: "Third-Party Service Providers",
        blocks: [
          {
            kind: "table",
            headers: ["Service", "Purpose", "Policy", "Status"],
            rows: [
              [
                "Google AdMob",
                "Ad delivery &amp; personalization",
                '<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>',
                "Active",
              ],
              [
                "Google Play Services",
                "App platform services",
                '<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>',
                "Active",
              ],
              [
                "Supabase Inc.",
                "Authentication &amp; user database (planned cloud account feature)",
                '<a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">supabase.com/privacy</a>',
                "Planned — not yet active",
              ],
            ],
          },
          {
            kind: "paragraph",
            html: "shared_preferences, connectivity_plus, flutter_dotenv, and Flame operate entirely on-device and do not send personal data.",
          },
        ],
      },
      {
        number: "04",
        title: "Purposes of Data Processing",
        blocks: [
          {
            kind: "list",
            items: [
              "User account creation and authentication <em>(planned — §2.4)</em>",
              "In-game leaderboard management <em>(planned — §2.4)</em>",
              "Personalized or non-personalized ad delivery",
              "Error detection and resolution",
              "Measuring and improving service quality",
            ],
          },
        ],
      },
      {
        number: "05",
        title: "Data Security and Liability Limitation",
        blocks: [
          {
            kind: "paragraph",
            html: "Once the cloud account system is enabled, your data will be stored on Supabase Inc.'s SOC 2 Type 2 certified, AES-256 encrypted cloud infrastructure.",
          },
          {
            kind: "warn",
            title: "⚠ Important Security Notice",
            html: "No method of transmission over the internet is 100% secure. Neawe Forge cannot be held liable for security incidents on third-party infrastructure, including Supabase Inc., that were not foreseeable or preventable within our duty of reasonable care. This limitation does not apply to damages arising from Neawe Forge's own intentional misconduct or gross negligence.",
          },
        ],
      },
      {
        number: "06",
        title: "Data Retention Periods",
        blocks: [
          {
            kind: "table",
            headers: ["Data Type", "Retention Period"],
            rows: [
              ["Account data <em>(planned)</em>", "While the account is active"],
              ["After deletion <em>(planned)</em>", "Maximum 30 days from request"],
              ["Technical log data", "Maximum 90 days"],
              ["Advertising data", "Subject to AdMob's own policy"],
            ],
          },
        ],
      },
      {
        number: "07",
        title: "Your Rights under KVKK & GDPR",
        blocks: [
          {
            kind: "table",
            headers: ["Right", "How to Exercise"],
            rows: [
              ["Right to Access", "Email us to learn what data is being processed."],
              ["Right to Rectification", "Request correction of inaccurate or incomplete data."],
              [
                "Right to Deletion",
                "Settings &gt; Delete My Data (in-app) instantly deletes all game data stored on your device. Once the cloud account system is enabled: Settings &gt; Delete Account in-app, or via the account-deletion page that will be published on this site.",
              ],
              ["Right to Object", "Object to processing for specific purposes."],
              ["Data Portability", "Request your data in machine-readable format."],
              ["Right to Restriction", "Request restriction under certain conditions."],
            ],
          },
          {
            kind: "paragraph",
            html: 'Email <strong>support@neaweforge.com</strong> with subject "Data Rights Request". Answered within 30 days.',
          },
        ],
      },
      {
        number: "08",
        title: "GDPR Legal Bases (EU Users)",
        blocks: [
          {
            kind: "table",
            headers: ["Data Category", "Legal Basis"],
            rows: [
              ["Account data", "Performance of contract (GDPR Art. 6/1-b)"],
              ["Personalized ads", "Explicit consent (GDPR Art. 6/1-a)"],
              ["Log data", "Legitimate interests (GDPR Art. 6/1-f)"],
            ],
          },
        ],
      },
      {
        number: "09",
        title: "Children's Privacy",
        blocks: [
          {
            kind: "paragraph",
            html: "This Service is not directed at anyone under 13. We do not knowingly collect data from children under 13.",
          },
        ],
      },
      {
        number: "10",
        title: "International Data Transfers",
        blocks: [
          {
            kind: "paragraph",
            html: "The app does not currently transfer any personal data abroad. Once the planned cloud account feature (§2.4) is enabled, your account data may be processed on servers located in the EU and/or US via Supabase Inc. This transfer will rely on an adequacy decision, appropriate safeguards (a Board-approved standard contract or undertaking), or your separately and explicitly obtained consent, as required under Article 9 of Turkish Law No. 6698 (KVKK). GDPR-compliant Standard Contractual Clauses will also apply for EU users. A dedicated consent screen will be presented before this transfer begins.",
          },
        ],
      },
      {
        number: "11",
        title: "Policy Changes and Versioning",
        blocks: [
          {
            kind: "paragraph",
            html: "This policy may be updated. An increase in the decimal part of the version number (e.g. 1.0 → 1.1) reflects minor clarifications or wording fixes; an increase in the whole-number part (e.g. 1.x → 2.0) reflects a material change that expands the scope of data processing (for example, activating the features described in §2.4). For a material update, the app will ask you to re-accept the current policy, and your acceptance will be recorded together with its date and version. Other significant changes will be announced via in-app notification and/or email.",
          },
        ],
      },
      {
        number: "12",
        title: "Contact",
        blocks: [{ kind: "paragraph", html: "For questions: <strong>support@neaweforge.com</strong>" }],
      },
    ],
  },
};
