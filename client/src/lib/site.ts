export type Product = {
  slug: "helialoop" | "juriloop" | "eco-report" | "tonsora" | "paletra";
  name: string;
  eyebrow: string;
  category: string;
  summary: string;
  longDescription: string;
  useCase: string;
  tone: "health" | "legal" | "compliance" | "operations";
  externalUrl: string;
  externalLabel: string;
  /** Mağaza bağlantıları. 31 Ağu 2026 — HER BİRİ TEK TEK ÖLÇÜLDÜ.
   *  Olmayan mağaza için alan BOŞ BIRAKILIR; "yakında" yazılmaz.
   *  Sebep: helialoop.com altbilgisi Android'i "Yakında" gösteriyordu ve
   *  uygulama aylardır yayındaydı — hekim siteye bakıp vazgeçiyordu. */
  stores?: { play?: string; appStore?: string };
  principles: { label: string; detail: string }[];
};

export const assets = {
  hero: "/medya/hero.webp",
  systems: "/medya/cozumler.webp",
  aiFabric: "/medya/ai-fabric.webp",
  mark: "/medya/nechh-amblem.png",
};

export const products: Product[] = [
  {
    slug: "helialoop",
    name: "HeliaLoop",
    eyebrow: "01 / Sağlık",
    category: "Profesyonel yönlendirme ağı",
    summary:
      "Doktorlar ve klinisyenler arasındaki yönlendirme sürecini daha görünür ve koordineli hale getiren çalışma alanı.",
    longDescription:
      "HeliaLoop, profesyoneller arasında randevu ve hasta yönlendirme akışlarını daha düzenli yönetmek için tasarlanan bir ağ deneyimidir. Amaç, dağınık iletişim kanallarındaki operasyonel kopuklukları azaltmaktır.",
    useCase: "Klinik yönlendirme ve randevu koordinasyonu",
    tone: "health",
    externalUrl: "https://helialoop.com",
    externalLabel: "HeliaLoop'u incele",
    // Play: HTTP 200 (com.helialoop.app) · App Store: arama 0 sonuc -> yok
    stores: { play: "https://play.google.com/store/apps/details?id=com.helialoop.app" },
    principles: [
      { label: "Koordinasyon", detail: "Yönlendirme adımlarını tek bir çalışma akışında toplama yaklaşımı." },
      { label: "Görünürlük", detail: "Süreçteki sonraki adımı ve sorumluluk bağlamını netleştirme odağı." },
      { label: "Sektör bağlamı", detail: "Sağlık profesyonellerinin iş birliği ritmine göre kurgulanmış deneyim." },
    ],
  },
  {
    slug: "juriloop",
    name: "JuriLoop",
    eyebrow: "02 / Hukuk",
    category: "Mesleki iş birliği ağı",
    summary:
      "Avukatların dava yönlendirme ve mesleki iş birliği süreçlerini düzenleyen odaklı dijital ağ.",
    longDescription:
      "JuriLoop, hukuk profesyonelleri arasındaki dava yönlendirme ve çalışma koordinasyonunu daha izlenebilir biçimde ele almak için tasarlanmıştır. Mesleki iş birliğinde bağlamı koruyan bir çalışma alanı sunar.",
    useCase: "Dava yönlendirme ve mesleki koordinasyon",
    tone: "legal",
    externalUrl: "https://juriloop.com",
    externalLabel: "JuriLoop'u incele",
    // Play: HTTP 200 (com.nechh.juriloop) · App Store: arama 0 sonuc -> yok
    stores: { play: "https://play.google.com/store/apps/details?id=com.nechh.juriloop" },
    principles: [
      { label: "Bağlam", detail: "Her görevin hangi ihtiyaç ve sorumlulukla ilişkili olduğunu koruma yaklaşımı." },
      { label: "İş birliği", detail: "Meslektaşlar arası yönlendirmeyi daha düzenli bir akışta ele alma odağı." },
      { label: "Süreç", detail: "Görüşme, yönlendirme ve takip gibi adımları daha görünür kılma hedefi." },
    ],
  },
  {
    slug: "eco-report",
    name: "Nechh Eco-Report",
    eyebrow: "03 / CBAM",
    category: "Karbon uyum asistanı",
    summary:
      "AB CBAM hazırlığında karbon verisini daha düzenli, kaynaklı ve denetlenebilir bir çalışma yapısına taşıyan asistan.",
    longDescription:
      "Nechh Eco-Report, ihracatçıların CBAM hazırlık sürecinde tesis ve ürün verilerini toplamasına, kontrol etmesine ve kaynaklarıyla birlikte çalışmasına yardımcı olacak şekilde tasarlanmıştır. Akredite doğrulayıcının veya resmî beyanın yerine geçmez.",
    useCase: "CBAM karbon verisi hazırlığı ve iç kontrol",
    tone: "compliance",
    externalUrl: "https://ecoreport.nechhrobotics.com",
    externalLabel: "Eco-Report'u aç",
    principles: [
      { label: "Kaynaklı çalışma", detail: "Hesap ve girdi kaynaklarının görünür tutulmasına odaklanır." },
      { label: "Denetlenebilirlik", detail: "Hazırlık sürecindeki veriyi ve adımları izlenebilir biçimde ele alır." },
      { label: "Sınırların açıklığı", detail: "Resmî doğrulama ve beyan sorumluluklarından açıkça ayrışır." },
    ],
  },
  {
    slug: "tonsora",
    name: "TONSORA",
    eyebrow: "04 / Operasyon",
    category: "Salon randevu yönetimi",
    summary:
      "Berber ve kuaför salonları için müşteri, ekip, hizmet ve randevu ritmini tek yerde düzenleyen uygulama.",
    longDescription:
      "TONSORA, salonların günlük operasyonunu daha düzenli yönetebilmesi için randevu, müşteri, personel ve hizmet bilgisini aynı akışta buluşturur. Kâğıt defter ve karışan saatlere karşı sade bir operasyon yüzeyi hedefler.",
    useCase: "Randevu, müşteri ve ekip operasyonu",
    tone: "operations",
    // ⚠️ Burasi yalnizca App Store'a gidiyordu; Android kullanicisi Apple
    // sayfasina dusuyordu. Artik iki magaza da asagidaki rozetlerde.
    externalUrl: "https://apps.apple.com/tr/app/tonsora/id6796261153",
    externalLabel: "TONSORA'yı indir",
    stores: {
      play: "https://play.google.com/store/apps/details?id=com.nechhrobotics.tonsora",
      appStore: "https://apps.apple.com/tr/app/tonsora/id6796261153",
    },
    principles: [
      { label: "Ritim", detail: "Günün randevu akışını kolay izlenir bir düzende tutmayı hedefler." },
      { label: "Operasyon", detail: "Müşteri, hizmet ve ekip bilgisini aynı çalışma bağlamında toplar." },
      { label: "Sadelik", detail: "Yoğun salon temposunda kolay kavranan bir deneyim sunar." },
    ],
  },
  {
    // 16 Eyl 2026 — mağazaya henüz çıkmadı: `stores` BOŞ (kural yukarıda,
    // "yakında" yazılmaz). Mağazaya girince bağlantılar ölçülüp eklenir.
    slug: "paletra",
    name: "PALETRA",
    eyebrow: "05 / Kiralama",
    category: "Ekipman kiralama yönetimi",
    summary:
      "İş makinesi ve ekipman kiralayan işletmeler için makine, müşteri, sözleşme, iade ve alacağı telefonda tek yerde tutan uygulama.",
    longDescription:
      "PALETRA, hangi makinenin kimde olduğunu, ne zaman döneceğini ve kimden ne kadar alacak kaldığını kâğıt defter ve dağınık telefon notları yerine tek ekranda gösterir. Kiralama başlarken sayaç ve fotoğraf alınır, müşteri telefonda imzalar, sözleşme PDF olarak hazırlanır. İade günü sayaç ve hasar notu girilir, tutar hesaplanır, iade tutanağı çıkar; kalan alacak WhatsApp'tan hatırlatılır. Bakım planı motor saatine veya kilometreye göre uyarır; aylık ciro ve makine başına doluluk raporlanır. Kayıtlar sunucuda değil telefonda durur, tek dosyalık yedekle yeni telefona taşınır. Türkçe, İngilizce ve Arapça kullanılır. PALETRA™, Nechh Robotics şirketinin ticari markasıdır.",
    useCase: "Kiralama sözleşmesi, iade ve tahsilat takibi",
    tone: "operations",
    externalUrl: "/iletisim",
    externalLabel: "PALETRA hakkında bize yazın",
    principles: [
      { label: "Sahada imza", detail: "Müşteri makineyi teslim alırken telefonda imzalar; sözleşme ve iade tutanağı PDF olarak hazırlanır." },
      { label: "Kaçan alacak yok", detail: "Geciken iade ve kalan tutar görünür; hatırlatma WhatsApp'tan tek dokunuşla gider." },
      { label: "Veri sizde", detail: "Hesap açmak gerekmez, kayıtlar telefonda tutulur; yedek tek dosyayla alınıp geri yüklenir." },
    ],
  },
];

export function getProduct(slug?: string) {
  const aliases: Record<string, Product["slug"]> = {
    "cbam-assistant": "eco-report",
    "eco-report": "eco-report",
    helialoop: "helialoop",
    juriloop: "juriloop",
    tonsora: "tonsora",
    paletra: "paletra",
  };
  return products.find((product) => product.slug === aliases[slug ?? ""]);
}

export const navItems = [
  { label: "Çözümler", href: "/cozumler" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Mağaza", href: "/magaza" },
  { label: "AI-Fabric", href: "/ai-fabric" },
  { label: "Blog Yazıları", href: "/blog" },
  { label: "Galeri", href: "/galeri" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

export const englishNavItems = [
  { label: "Solutions", href: "/en/solutions" },
  { label: "Services", href: "/en/services" },
  { label: "Store", href: "/en/store" },
  { label: "AI-Fabric", href: "/en/ai-fabric" },
  { label: "Blog", href: "/en/blog" },
  { label: "Gallery", href: "/en/gallery" },
  { label: "About", href: "/en/about" },
  { label: "Contact", href: "/en/contact" },
];

export const englishProducts: Product[] = [
  {
    slug: "helialoop",
    name: "HeliaLoop",
    eyebrow: "01 / Health",
    category: "Professional referral network",
    summary: "A focused workspace for clinicians to make referral coordination more visible and organized.",
    longDescription: "HeliaLoop is designed to bring appointment and patient referral work between professionals into a more structured operating context. The aim is to reduce operational friction across fragmented communication channels.",
    useCase: "Clinical referral and appointment coordination",
    tone: "health",
    externalUrl: "https://helialoop.com",
    externalLabel: "Explore HeliaLoop",
    principles: [
      { label: "Coordination", detail: "An approach to gathering referral steps within one working flow." },
      { label: "Visibility", detail: "A focus on making the next step and responsibility context clearer." },
      { label: "Clinical context", detail: "An experience designed around the collaboration rhythm of health professionals." },
    ],
  },
  {
    slug: "juriloop",
    name: "JuriLoop",
    eyebrow: "02 / Legal",
    category: "Professional collaboration network",
    summary: "A focused digital network for lawyers to organize case referrals and professional collaboration.",
    longDescription: "JuriLoop is designed to help legal professionals handle case referrals and working coordination in a more traceable manner, while preserving the context of professional collaboration.",
    useCase: "Case referral and professional coordination",
    tone: "legal",
    externalUrl: "https://juriloop.com",
    externalLabel: "Explore JuriLoop",
    principles: [
      { label: "Context", detail: "An approach to preserving why a task exists and how responsibility relates to it." },
      { label: "Collaboration", detail: "A clearer working flow for professional referrals among peers." },
      { label: "Process", detail: "A focus on making conversation, referral and follow-up steps more visible." },
    ],
  },
  {
    slug: "eco-report",
    name: "Nechh Eco-Report",
    eyebrow: "03 / CBAM",
    category: "Carbon compliance assistant",
    summary: "A structured working environment for preparing auditable CBAM carbon data with visible sources.",
    longDescription: "Nechh Eco-Report is designed to support exporters as they collect, review and work with facility and product data for CBAM preparation. It does not replace accredited verification or an official declaration.",
    useCase: "CBAM carbon-data preparation and internal review",
    tone: "compliance",
    externalUrl: "https://ecoreport.nechhrobotics.com",
    externalLabel: "Open Eco-Report",
    principles: [
      { label: "Source-aware work", detail: "A focus on keeping calculations and their input sources visible." },
      { label: "Auditability", detail: "A way to handle preparation data and process steps in a traceable form." },
      { label: "Clear boundaries", detail: "An explicit distinction from official verification and declaration responsibilities." },
    ],
  },
  {
    slug: "tonsora",
    name: "TONSORA",
    eyebrow: "04 / Operations",
    category: "Salon appointment management",
    summary: "An app that brings appointments, customers, teams and services into one salon operations flow.",
    longDescription: "TONSORA brings appointment, customer, staff and service information into the same working flow so salons can manage daily operations with greater clarity.",
    useCase: "Appointments, customers and team operations",
    tone: "operations",
    externalUrl: "https://apps.apple.com/tr/app/tonsora/id6796261153",
    externalLabel: "Download TONSORA",
    principles: [
      { label: "Rhythm", detail: "A clear view of the appointment flow across a working day." },
      { label: "Operations", detail: "Customer, service and team information in one operating context." },
      { label: "Simplicity", detail: "An experience designed to remain legible during busy salon hours." },
    ],
  },
  {
    slug: "paletra",
    name: "PALETRA",
    eyebrow: "05 / Rental",
    category: "Equipment rental management",
    summary:
      "An app for construction machinery and equipment rental businesses that keeps machines, customers, contracts, returns and receivables in one place on the phone.",
    longDescription:
      "PALETRA shows which machine is with whom, when it is due back and how much each customer still owes — on one screen instead of a paper ledger. When a rental starts, the meter reading and photos are recorded, the customer signs on the phone and a contract PDF is prepared. On return, the meter and a damage note are entered, the amount is calculated and a return report is issued; the outstanding balance can be sent as a WhatsApp reminder. Maintenance plans alert by engine hours or kilometres, and monthly revenue and per-machine utilisation are reported. Records stay on the phone rather than a server and move to a new phone with a single backup file. Available in Turkish, English and Arabic. PALETRA™ is a trademark of Nechh Robotics.",
    useCase: "Rental contracts, returns and collections",
    tone: "operations",
    externalUrl: "/en/contact",
    externalLabel: "Ask us about PALETRA",
    principles: [
      { label: "Signed on site", detail: "The customer signs on the phone at hand-over; contract and return report are produced as PDFs." },
      { label: "No missed receivables", detail: "Late returns and open balances stay visible; a WhatsApp reminder is one tap away." },
      { label: "Your data", detail: "No account needed; records live on the phone and are backed up and restored with a single file." },
    ],
  },
];

export function getEnglishProduct(slug?: string) {
  const aliases: Record<string, Product["slug"]> = {
    "cbam-assistant": "eco-report",
    "eco-report": "eco-report",
    helialoop: "helialoop",
    juriloop: "juriloop",
    tonsora: "tonsora",
    paletra: "paletra",
  };
  return englishProducts.find((product) => product.slug === aliases[slug ?? ""]);
}

export type Service = {
  index: string;
  eyebrow: string;
  title: string;
  summary: string;
  note: string;
  href: string;
};

export const services: Service[] = [
  { index: "01", eyebrow: "CBAM / AUTHORISED DECLARANT", title: "CBAM başvuru hazırlığı", summary: "Authorised Declarant süreci için kapsam değerlendirmesi, belge hazırlığı ve süreç koordinasyonu.", note: "Hizmet; hukuki danışmanlık, akredite doğrulama veya resmî beyanın yerine geçmez.", href: "/iletisim" },
  { index: "02", eyebrow: "UYUM / SÜREÇ TASARIMI", title: "Uyum çalışma alanı", summary: "CBAM, KVKK, GDPR, İSG ve benzeri süreçlerde veri, doküman ve kontrol akışını netleştirmeye yönelik başlangıç çalışması.", note: "Kapsam baştan yazılı olarak netleştirilir; sürpriz kalem çıkmaz.", href: "/iletisim" },
  { index: "03", eyebrow: "KAYNAK / DİJİTAL PAKET", title: "Kendi ekibinizle başlamak", summary: "Kurum içi hazırlık için rehber, kontrol listesi ve düzenlenebilir çalışma şablonlarından oluşan kaynak yaklaşımı.", note: "Çevrimiçi ödeme şu an etkin değildir; teslimat ve lisanslama e-posta üzerinden netleştirilir.", href: "/iletisim" },
];

export const englishServices: Service[] = [
  { index: "01", eyebrow: "CBAM / AUTHORISED DECLARANT", title: "CBAM application preparation", summary: "Scoping, document preparation and process coordination for the Authorised Declarant journey.", note: "This service does not replace legal advice, accredited verification or an official declaration.", href: "/en/contact" },
  { index: "02", eyebrow: "COMPLIANCE / PROCESS DESIGN", title: "Compliance working context", summary: "An initial working approach for structuring data, documents and controls across CBAM, data protection and similar processes.", note: "Scope is clarified in writing after an initial needs conversation.", href: "/en/contact" },
  { index: "03", eyebrow: "RESOURCES / DIGITAL PACKS", title: "Start with your own team", summary: "A resource approach with guides, checklists and editable work templates for internal preparation.", note: "Online payment is not currently active; delivery and licensing are clarified by email.", href: "/en/contact" },
];

export type YazilimIsi = {
  slug: string;
  aile: string;
  ad: string;
  ozet: string;
  kapsam: string[];
  fiyat?: string;
  fiyatNot?: string;
  sure: string;
  kanit: string;
};

/** Yazilim ve uygulama gelistirme hizmetleri.
 *  Fiyat karari IS-ALIMI/FIYATLANDIRMA.md dosyasindadir; burada o dosyanin
 *  Sureler o dosyanin "tahminini 1,4 ile carp" kuraliyla genisletilmistir.
 *
 *  FIYAT NEREDEN GELIYOR (12 Eylul 2026 duzeltmesi):
 *  Ilk surumde TL fiyatlar piyasa kuruyla euroya cevrilmisti. Yanlisti:
 *  o TL rakamlari YURT ICI pazar icin belirlenmisti, euro olarak yazildiginda
 *  uluslararasi fiyat gibi okunuyor ve "ucuz tasseron" sinyali veriyordu.
 *
 *  Dogru cipa FIYATLANDIRMA.md §1'de zaten vardi: yurt disi EUR35-70/saat.
 *  Turetme, tamami o dosyanin kendi rakamlarindan:
 *      saat yuku = §2'deki TL ust siniri / TL1.500 (§1 yurt ici saat tabani)
 *      site fiyati = saat yuku x EUR35  (bandin TABANI, ilk isler icin)
 *  Ornek: panelli web uygulamasi TL280.000 / 1.500 = 187 saat x 35 = EUR6.533
 *         -> temiz rakam EUR6.600.
 *  EUR70 ust bandi dogrudan musteri ve referans sonrasi icin saklidir.
 *  Rakam degisecekse once FIYATLANDIRMA.md guncellenir, sonra burasi. */
export const yazilimIsleri: YazilimIsi[] = [
  {
    slug: "magazaya-cikarma",
    aile: "MAĞAZA YAYINI",
    ad: "Uygulamanızı mağazaya çıkarma",
    ozet:
      "Kodu hazır olan uygulamayı App Store ve Google Play’e biz çıkarırız. Ret gelirse düzeltme ve yeniden gönderim bize aittir.",
    kapsam: [
      "İmzalama, sürüm ve derleme yapılandırması",
      "Mağaza künyesi, ekran görüntüleri, gizlilik formları",
      "Ret gelirse düzeltme ve yeniden gönderim",
    ],
    fiyat: "€1.100",
    fiyatNot: "’den başlayan · 2–4 hafta",
    sure: "2–4 hafta",
    kanit: "3 uygulama, 4 mağaza yayını",
  },
  {
    slug: "tanitim-sitesi",
    aile: "WEB · TEK DİL",
    ad: "Tanıtım sitesi",
    ozet:
      "Tek dilli, mobil uyumlu, arama motoru altyapısı kurulmuş tanıtım sitesi. İletişim formu dahil.",
    kapsam: [
      "Mobil uyumlu sayfa düzeni",
      "Site haritası, canonical ve meta altyapısı",
      "İletişim formu ve e-posta yönlendirmesi",
    ],
    fiyat: "€1.300",
    fiyatNot: "’den başlayan · 2–3 hafta",
    sure: "2–3 hafta",
    kanit: "nechhrobotics.com",
  },
  {
    slug: "kurumsal-site",
    aile: "WEB · İKİ DİLLİ",
    ad: "Kurumsal site · iki dilli, blog’lu",
    ozet:
      "İki dilli kurumsal site; blog altyapısı, arama motoru yapılandırması ve ölçülebilir indeksleme.",
    kapsam: [
      "İki dil ve hreflang yapılandırması",
      "Blog / kaynak arşivi ve arşiv içi arama",
      "Site haritası bildirimi ve indeksleme ölçümü",
    ],
    fiyat: "€2.100",
    fiyatNot: "’den başlayan · 3–4 hafta",
    sure: "3–4 hafta",
    kanit: "nechhrobotics.com · 90 sayfa TR/EN",
  },
  {
    slug: "hesaplama-motoru",
    aile: "HESAPLAMA · RAPOR",
    ad: "Hesaplama motoru + PDF rapor",
    ozet:
      "Girdiden sonuca kadar her sayının kaynağı ve formülüyle denetlenebildiği hesaplama motoru ve PDF çıktısı.",
    kapsam: [
      "Formül katmanı ve katsayı tablolarının ayrılması",
      "Her sonucun kaynağını gösteren denetim izi",
      "Yazdırmaya hazır PDF rapor çıktısı",
    ],
    fiyat: "€4.700",
    fiyatNot: "’den başlayan · 4–8 hafta",
    sure: "4–8 hafta",
    kanit: "Eco-Report · CBAM gömülü emisyon",
  },
  {
    slug: "mobil-tek-magaza",
    aile: "MOBİL · TEK MAĞAZA",
    ad: "Mobil uygulama · tek mağaza",
    ozet:
      "Tek mağazaya çıkan mobil uygulama; arka uç, veritabanı ve yönetim tarafı dahil.",
    kapsam: [
      "Uygulama, arka uç ve veritabanı",
      "Kullanıcı girişi ve yetki katmanı",
      "Mağaza yayını ve sürüm akışı",
    ],
    fiyat: "€5.900",
    fiyatNot: "’den başlayan · 8–14 hafta",
    sure: "8–14 hafta",
    kanit: "TONSORA · Google Play",
  },
  {
    slug: "panelli-web-uygulamasi",
    aile: "WEB UYGULAMASI",
    ad: "Panelli web uygulaması",
    ozet:
      "Üyelik, rol ayrımı ve yönetici panosu olan web uygulaması. İş mantığı sunucuda tutulur.",
    kapsam: [
      "Üyelik, rol ve satır düzeyinde yetki",
      "Yönetici panosu ve kayıt izleme",
      "İş mantığının sunucu tarafında tek yerde tutulması",
    ],
    fiyat: "€6.600",
    fiyatNot: "’den başlayan · 7–11 hafta",
    sure: "7–11 hafta",
    kanit: "JuriLoop",
  },
  {
    slug: "mobil-iki-magaza",
    aile: "MOBİL · İKİ MAĞAZA",
    ad: "Mobil uygulama · iki mağaza, tek kod tabanı",
    ozet:
      "iOS ve Android’e tek kod tabanından çıkan uygulama. Her iki mağazanın inceleme süreci de bize aittir.",
    kapsam: [
      "Tek kod tabanı, iki mağaza yayını",
      "Mağaza içi satın alma altyapısı",
      "Çok dilli metin altyapısı",
    ],
    fiyat: "€10.500",
    fiyatNot: "’den başlayan · 11–20 hafta",
    sure: "11–20 hafta",
    kanit: "TONSORA · App Store + Google Play",
  },
  {
    slug: "abonelikli-platform",
    aile: "SAAS · ABONELİK",
    ad: "Abonelikli platform · çok kullanıcılı",
    ozet:
      "Abonelik, ödeme ve çok kullanıcılı kurum hesabı olan platform. Ölçeklenebilir veri mimarisi.",
    kapsam: [
      "Abonelik katmanı ve ödeme akışı",
      "Kurum hesabı ve kullanıcı davet yönetimi",
      "Plan bazlı özellik sınırlaması",
    ],
    fiyat: "€9.400",
    fiyatNot: "’den başlayan · 11–17 hafta",
    sure: "11–17 hafta",
    kanit: "HeliaLoop",
  },
  {
    slug: "bakim-destek",
    aile: "SÜREKLİ · AYLIK",
    ad: "Bakım ve destek",
    ozet:
      "Teslimden sonra güncelleme, izleme ve destek. Aylık sabit bedel; proje bedelinin yüzdesi değildir.",
    kapsam: [
      "Bağımlılık ve güvenlik güncellemeleri",
      "Hata giderme ve mağaza sürüm bakımı",
      "Küçük düzenlemeler için ayrılmış süre",
    ],
    fiyat: "€950",
    fiyatNot: "/ay’dan başlayan · süresiz",
    sure: "aylık, süresiz",
    kanit: "6 ürün, sürekli bakımda",
  },
];

export const englishYazilimIsleri: YazilimIsi[] = [
  {
    slug: "magazaya-cikarma",
    fiyat: "€1.100",
    fiyatNot: " and up · 2–4 weeks",
    aile: "STORE RELEASE",
    ad: "Getting your app into the stores",
    ozet:
      "Your code is ready; we ship it to the App Store and Google Play. If it is rejected, the fix and resubmission are on us.",
    kapsam: [
      "Signing, versioning and build configuration",
      "Store listing, screenshots and privacy forms",
      "Rejection handling and resubmission",
    ],
    sure: "2–4 weeks",
    kanit: "3 apps, 4 store releases",
  },
  {
    slug: "tanitim-sitesi",
    fiyat: "€1.300",
    fiyatNot: " and up · 2–3 weeks",
    aile: "WEB · SINGLE LANGUAGE",
    ad: "Marketing site",
    ozet:
      "A single-language, mobile-first marketing site with search infrastructure in place and a working contact route.",
    kapsam: [
      "Mobile-first layout",
      "Sitemap, canonical and meta infrastructure",
      "Contact form and email routing",
    ],
    sure: "2–3 weeks",
    kanit: "nechhrobotics.com",
  },
  {
    slug: "kurumsal-site",
    fiyat: "€2.100",
    fiyatNot: " and up · 3–4 weeks",
    aile: "WEB · BILINGUAL",
    ad: "Corporate site · bilingual, with a blog",
    ozet:
      "A bilingual corporate site with a blog, search configuration and indexing you can actually measure.",
    kapsam: [
      "Two locales with hreflang configuration",
      "Blog / resource archive with in-archive search",
      "Sitemap submission and indexing measurement",
    ],
    sure: "3–4 weeks",
    kanit: "nechhrobotics.com · 90 pages EN/TR",
  },
  {
    slug: "hesaplama-motoru",
    fiyat: "€4.700",
    fiyatNot: " and up · 4–8 weeks",
    aile: "CALCULATION · REPORTING",
    ad: "Calculation engine + PDF report",
    ozet:
      "A calculation engine where every number can be traced to its source and formula, with a print-ready PDF output.",
    kapsam: [
      "Formula layer separated from coefficient tables",
      "Audit trail showing the source of every result",
      "Print-ready PDF report output",
    ],
    sure: "4–8 weeks",
    kanit: "Eco-Report · CBAM embedded emissions",
  },
  {
    slug: "mobil-tek-magaza",
    fiyat: "€5.900",
    fiyatNot: " and up · 8–14 weeks",
    aile: "MOBILE · ONE STORE",
    ad: "Mobile app · one store",
    ozet:
      "A mobile app shipped to a single store, including the backend, database and administration side.",
    kapsam: [
      "App, backend and database",
      "Authentication and permission layer",
      "Store release and versioning flow",
    ],
    sure: "8–14 weeks",
    kanit: "TONSORA · Google Play",
  },
  {
    slug: "panelli-web-uygulamasi",
    fiyat: "€6.600",
    fiyatNot: " and up · 7–11 weeks",
    aile: "WEB APPLICATION",
    ad: "Web application with an admin panel",
    ozet:
      "A web application with membership, role separation and an admin console. Business logic stays on the server.",
    kapsam: [
      "Membership, roles and row-level permissions",
      "Admin console and activity records",
      "Business logic kept in one place, server-side",
    ],
    sure: "7–11 weeks",
    kanit: "JuriLoop",
  },
  {
    slug: "mobil-iki-magaza",
    fiyat: "€10.500",
    fiyatNot: " and up · 11–20 weeks",
    aile: "MOBILE · TWO STORES",
    ad: "Mobile app · two stores, one codebase",
    ozet:
      "One codebase shipped to both iOS and Android. The review process for both stores is ours to carry.",
    kapsam: [
      "One codebase, two store releases",
      "In-app purchase infrastructure",
      "Multi-language text infrastructure",
    ],
    sure: "11–20 weeks",
    kanit: "TONSORA · App Store + Google Play",
  },
  {
    slug: "abonelikli-platform",
    fiyat: "€9.400",
    fiyatNot: " and up · 11–17 weeks",
    aile: "SAAS · SUBSCRIPTION",
    ad: "Subscription platform · multi-user",
    ozet:
      "A platform with subscriptions, payments and multi-user organisation accounts on a scalable data architecture.",
    kapsam: [
      "Subscription layer and payment flow",
      "Organisation accounts and user invitations",
      "Plan-based feature gating",
    ],
    sure: "11–17 weeks",
    kanit: "HeliaLoop",
  },
  {
    slug: "bakim-destek",
    fiyat: "€950",
    fiyatNot: "/month and up · open-ended",
    aile: "ONGOING · MONTHLY",
    ad: "Maintenance and support",
    ozet:
      "Updates, monitoring and support after delivery. A flat monthly fee, not a percentage of the project.",
    kapsam: [
      "Dependency and security updates",
      "Bug fixes and store release upkeep",
      "Reserved time for small adjustments",
    ],
    sure: "monthly, open-ended",
    kanit: "6 products, continuously maintained",
  },
];

/** Calisma duzeni: odeme asamalari ve kapsam disi kalemler.
 *  Kaynak: IS-ALIMI/FIYATLANDIRMA.md bolum 4 ve 5. */
export const yazilimCalismaDuzeni = {
  odeme: [
    { oran: "%40", an: "Başlangıçta", not: "Bu ödeme alınmadan geliştirme başlamaz." },
    { oran: "%30", an: "Ara teslimde", not: "Çalışan sürüm size gösterildiğinde." },
    { oran: "%30", an: "Teslimde", not: "Canlıya alma veya mağazaya gönderim anında." },
  ],
  kapsamDisi: [
    "Logo, marka ve grafik tasarım",
    "İçerik/metin yazımı ve çeviri",
    "Alan adı, sunucu ve mağaza geliştirici hesabı ücretleri",
    "Teslimden sonraki yeni özellikler — yeni teklif olarak fiyatlanır",
    "Müşteri kaynaklı 3’ten fazla tasarım revizyonu",
  ],
  sinir:
    "Süreler tek kişilik çalışma ve zamanında geri dönüş varsayımıyla verilir. Mağaza inceleme süresi Apple ve Google’a aittir, taahhüt edilemez. İçerik, logo veya hesap erişiminin geciktiği her gün teslim tarihini bir gün öteler. Yukarıdaki süreler teslim penceresidir, o süre boyunca yalnızca sizin işinize ayrılmış tam zamanlı çalışma anlamına gelmez; tam zamanlı ve size özel çalışma gerekiyorsa gün ücretinden fiyatlanır.",
  englishOdeme: [
    { oran: "40%", an: "Up front", not: "Development does not start before this payment." },
    { oran: "30%", an: "At mid-delivery", not: "When a working version is shown to you." },
    { oran: "30%", an: "On delivery", not: "At go-live or store submission." },
  ],
  englishKapsamDisi: [
    "Logo, branding and graphic design",
    "Copywriting and translation",
    "Domain, hosting and store developer account fees",
    "New features after delivery — quoted separately",
    "More than 3 client-driven design revisions",
  ],
  englishSinir:
    "Timelines assume a single developer and timely feedback. Store review time belongs to Apple and Google and cannot be committed to. Every day of delay in content, logo or account access moves delivery by one day. The windows above are delivery windows, not exclusive full-time work reserved for you throughout; dedicated full-time work is quoted at the day rate.",
};

export type ResourceHighlight = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  path: string;
};

export const resourceHighlights: ResourceHighlight[] = [
  { slug: "cbam-2026", category: "CBAM", title: "CBAM 2026: AB’ye İhracat Yapanlar İçin Tam Rehber", excerpt: "Kapsam, zaman çizelgesi, veri hazırlığı ve iç kontrol için temel başlangıç noktaları.", path: "/blog/blog-cbam-2026-tam-rehber" },
  { slug: "cbam-journey", category: "CBAM", title: "CBAM Uyum Süreci: Veri Toplamadan Beyana", excerpt: "Kapsam analizi, emisyon verisi, tedarikçi yönetimi ve raporlama akışı.", path: "/blog/blog-cbam-uyum-sureci-veri-toplamadan-beyana" },
  { slug: "eudr-intro", category: "EUDR", title: "EUDR Nedir? Ormansızlaşmasız Ürünler İçin Yeni Çerçeve", excerpt: "Ürün kapsamı, tedarik zinciri izlenebilirliği ve durum tespiti üzerine giriş.", path: "/blog/blog-eudr-nedir-ormansizlasmasiz-urunler-icin-yeni-cerceve" },
  { slug: "dora-intro", category: "DORA", title: "DORA Nedir? Dijital Operasyonel Dayanıklılık", excerpt: "Finansal kuruluşlarda dijital operasyonel dayanıklılığa giriş çerçevesi.", path: "/blog/blog-dora-nedir-finansal-sektorde-dijital-operasyonel-dayaniklilik" },
  { slug: "nis2-intro", category: "NIS2", title: "NIS2 Direktifi Nedir? Yeni Siber Güvenlik Çerçevesi", excerpt: "Kapsam, risk yönetimi ve olay bildirimi için temel çalışma notları.", path: "/blog/blog-nis2-direktifi-nedir-avrupanin-yeni-siber-guvenlik-cercevesi" },
  { slug: "referral-network", category: "HEALTH TECHNOLOGY", title: "Doktor-Doktor Yönlendirme Ağları", excerpt: "Doğru uzmana yönlendirme sürecinde görünürlük ve iş birliği üzerine bir analiz.", path: "/blog/blog-doctor-referral-network" },
  { slug: "ai-triage", category: "AI", title: "Klinik Kararlarda Yapay Zekâ", excerpt: "Yapay zekânın teşhis yerine destek, yönlendirme ve önceliklendirmedeki rolü.", path: "/blog/blog-ai-triage-specialist-referrals" },
  { slug: "embedded-reliability", category: "EMBEDDED SYSTEMS", title: "Sağlık Cihazlarında Gömülü Sistemler", excerpt: "Güvenilirlik, gerçek zamanlılık ve hata toleransına odaklanan teknik bakış.", path: "/blog/blog-embedded-systems-reliability" },
];

/** PARA BIRIMI: EURO (12 Eylul 2026 karari).
 *  Urunlerin hepsi AB mevzuati (CBAM, GDPR, EUDR) ve musteri AB'ye satan
 *  sanayici; sektor zaten euro ile calisiyor. Fiyat euro yazilir, ODEME
 *  aninda gunun kuru uzerinden TL olarak alinir.
 *
 *  Neden TL rakami YAZILMIYOR: onceki surumde hem TL hem dolar yaziliydi ve
 *  dolar notlari TL38,5/$ kuruna gore hesaplanmisti. Gercek kur TL48,60/$
 *  oldugu icin yurt disi aliciya %26 fazla fiyat gosteriliyordu. Sitede tek
 *  para birimi tutmak bu hatanin tekrarlamasini imkansiz kilar: sabit kur
 *  yok, eskiyecek rakam yok.
 *
 *  Euro fiyatlar 11 Eylul 2026'da olculen TL56,33/EUR kurundan turetildi
 *  (kaynak: frankfurter.dev 56,3329 + open.er-api.com 56,39). Bu kur artik
 *  sitede tutulmuyor; euro fiyat asil fiyattir. */


export type Paket = {
  slug: string;
  aile: string;
  ad: string;
  ozet: string;
  icerik: string[];
  fiyat: string;
  fiyatNot: string;
  // 13 Eyl 2026: `dosya` alani KALDIRILDI. Ucretli kit ZIP'leri sitenin acik
  // klasorunden ve herkese acik GitHub deposundan odemesiz indiriliyordu.
  // Kit artik Eco-Report tarafinda, alici firmanin adiyla uretilip e-postayla gider.
  sinir: string;
};

/** CBAM maliyet argumani — Eco-Report'un kendi motorundan OLCULDU.
 *
 * Resmi beyani AB'deki ithalatci yapar; ureticiden veri alamazsa resmi
 * VARSAYILAN degeri kullanir ve o deger bilerek cezalidir. Fark, ithalatcinin
 * cebinden cikar ve ureticinin fiyatina yansir.
 *
 * 🔴 Bu sayilar TEK BIR ornege aittir (CN 7208 51 20, Turkiye, 1.000 ton).
 * Sayfada da oyle yaziyor: baska urun ve miktarda sonuc degisir. Genel
 * gecermis gibi sunmak yanlis beyan olurdu.
 */
export const cbamMaliyet = {
  baslik: "Veriyi siz vermezseniz, farkını siz ödersiniz.",
  altBaslik:
    "Resmî beyanı AB'deki ithalatçı yapar. Ama sizden veri alamazsa resmî varsayılan " +
    "değeri kullanmak zorunda — ve o değer bilerek cezalıdır.",
  ornek: "CN 7208 51 20 · Türkiye · 1.000 tonluk tek sevkiyat",
  yillar: [
    { yil: "2026", ceza: "+%10", tutar: "€18.278" },
    { yil: "2027", ceza: "+%20", tutar: "€36.556" },
    { yil: "2028", ceza: "+%30", tutar: "€54.834" },
  ],
  dipnot:
    "Sertifika fiyatı €75,28 (AB ETS, 2026 2. çeyrek) alınarak hesaplandı. " +
    "Ceza oranları: Reg. (EU) 2025/2621. Başka ürün, ülke ve miktarda sonuç değişir; " +
    "kendi rakamınızı uygulamada kendi CN kodunuzla görebilirsiniz.",
  kapanis: "Satılan şey belge değil: gerçek veriyle beyan edilen ton ile varsayılan değerle beyan edilen ton arasındaki fark.",
};

/** Fiyatlar eski siteden birebir taşındı (22 Ağu 2026). Tek kaynak burasıdır. */
export const paketler: Paket[] = [
  {
    slug: "cbam-girisimci-kiti",
    aile: "CBAM · AB Karbon Düzenlemesi",
    ad: "CBAM Girişimci Kiti",
    ozet:
      "Authorised Declarant başvurusunu kendiniz yapın. Her sayı kaynağı ve formülüyle denetlenebilir; kara kutu değil.",
    icerik: [
      "Adım adım başvuru rehberi",
      "Gerçek Türk çelik ithalatçısı simülasyonu",
      "Tedarikçi veri şablonu",
      "Belge kontrol listesi",
    ],
    fiyat: "€299",
    fiyatNot: "tek seferlik · + KDV",
    sinir: "Hazırlık materyalidir; akredite doğrulama veya resmî beyan değildir.",
  },
  {
    slug: "dora-tedarikci-hazirlik-kiti",
    aile: "DORA · AB Finans Sektörü",
    ad: "DORA Tedarikçi Hazırlık Kiti",
    ozet:
      "AB bankalarına ve sigortacılarına yazılım veya BT hizmeti veriyorsanız: bankanın DORA gereği sözleşmede isteyeceği maddelere ve soru formlarına hazırlanın.",
    icerik: [
      "DORA madde 30 sözleşme kontrol listesi (resmî metinden)",
      "Olay bildirimi ve destek prosedürü şablonu",
      "Çıkış ve geçiş planı şablonu",
      "Banka soru formu cevap kütüphanesi",
      "Alt yüklenici ve veri konumu listesi",
    ],
    fiyat: "€499",
    fiyatNot: "tek seferlik · + KDV",
    sinir: "Hazırlık ve şablon setidir; hukuki danışmanlık, sözleşme incelemesi veya uyum sertifikası değildir.",
  },
  {
    slug: "kvkk-sablon-paketi",
    aile: "KVKK · 6698 sayılı Kanun",
    ad: "KVKK Şablon Paketi",
    ozet: "Aydınlatma, envanter ve VERBİS adımlarını kendi ekibinizle yürütün.",
    icerik: [
      "Aydınlatma metni şablonu (Word)",
      "Veri envanteri (Excel · dayanak, saklama, risk kolonlu)",
      "VERBİS ve uyum adımları rehberi (PDF)",
      "Eylem planı",
    ],
    fiyat: "€44",
    fiyatNot: "tek seferlik",
    sinir: "Şablon paketidir; hukuki danışmanlık yerine geçmez.",
  },
  {
    slug: "isg-sablon-paketi",
    aile: "İSG · 6331 sayılı Kanun",
    ad: "İSG Şablon Paketi",
    ozet: "Risk değerlendirmesi ve acil durum planı için hazır çalışma dosyaları.",
    icerik: [
      "Risk değerlendirme rapor şablonu (5×5 matris)",
      "Acil durum eylem planı (6 senaryo)",
      "Eğitim kayıt defteri (Excel)",
      "8 kategorili yükümlülük kontrol listesi",
    ],
    fiyat: "€44",
    fiyatNot: "tek seferlik",
    sinir: "Şablon paketidir; İSG uzmanı hizmetinin yerine geçmez.",
  },
  {
    slug: "gdpr-baslangic-paketi",
    aile: "GDPR · AB Veri Koruma",
    ad: "GDPR Başlangıç Paketi",
    ozet: "AB'ye satış yapanlar için İngilizce metinler ve aktarım kontrolü.",
    icerik: [
      "Privacy Policy şablonu (EN · Word)",
      "GDPR–KVKK fark ve yol haritası rehberi",
      "Veri aktarımı (SCC) kontrol listesi",
    ],
    fiyat: "€53",
    fiyatNot: "tek seferlik",
    sinir: "Şablon paketidir; hukuki danışmanlık yerine geçmez.",
  },
  {
    slug: "efatura-gecis-paketi",
    aile: "e-Fatura · GİB",
    ad: "E-Fatura Geçiş Paketi",
    ozet:
      "7 gün kuralına takılmadan, entegratöre para vermeden geçişi kendiniz yapın.",
    icerik: [
      "Kapsam tespiti",
      "Ücretsiz GİB e-Arşiv Portal adımları",
      "Geçiş kontrol listesi",
      "Muhasebeciye sorulacak 10 soru",
    ],
    fiyat: "€26",
    fiyatNot: "tek seferlik",
    sinir: "Rehber materyalidir; mali müşavir hizmetinin yerine geçmez.",
  },
  {
    slug: "yz-is-promptu-paketi",
    aile: "Yapay Zekâ · Verimlilik",
    ad: "YZ İş Promptu Paketi",
    ozet: "KOBİ için hazır iş promptları. Kopyala, doldur, kullan.",
    icerik: [
      "50 hazır iş promptu (yönetim, satış, pazarlama, operasyon, İK)",
      "Güvenli yapay zekâ kullanım rehberi",
      "ChatGPT, Claude ve Gemini ile çalışır",
    ],
    fiyat: "€35",
    fiyatNot: "tek seferlik",
    sinir: "Verimlilik materyalidir; sektörel danışmanlık içermez.",
  },
];

export type Hizmet = {
  slug: string;
  aile: string;
  ad: string;
  ozet: string;
  fiyat: string;
  fiyatNot: string;
  sinir: string;
};

export const ucretliHizmetler: Hizmet[] = [
  {
    slug: "cbam-basvuru-danismanligi",
    aile: "CBAM · Profesyonel Hizmet",
    ad: "CBAM Başvuru Danışmanlığı",
    ozet:
      "Başvuruyu bize bırakın: belge hazırlığı, CBAM Registry (AMM) başvurusu, otoriteden gelen ek bilgi taleplerinin (RFI) yönetimi ve onaya kadar takip.",
    fiyat: "€2.500",
    fiyatNot: "sabit fiyat · sürpriz yok",
    sinir: "Hazırlayan ve süreci yürüten taraftır; akredite doğrulayıcı değildir.",
  },
  {
    slug: "cbam-profesyonel-paket",
    aile: "CBAM · Karma",
    ad: "CBAM Profesyonel Paketi",
    ozet: "Girişimci Kiti + 1 saat birebir danışmanlık.",
    fiyat: "€749",
    fiyatNot: "tek seferlik · + KDV",
    sinir: "Hazırlık ve yönlendirme hizmetidir; resmî beyan yerine geçmez.",
  },
];

/** Ödeme: 18 Ağu 2026 kararı — kart/iyzico yok, yalnızca banka havalesi.
 *  IBAN ortam değişkeninden gelir; boşsa sayfa "hazırlanıyor" der. */
export const odeme = {
  sahip: import.meta.env.VITE_IBAN_SAHIBI ?? "",
  iban: import.meta.env.VITE_IBAN_NO ?? "",
  eposta: "nechhlab.global@gmail.com",
  paraBirimiNotu:
    "Fiyatlar euro cinsindendir. Ödeme, ödeme günündeki Merkez Bankası "
    + "efektif satış kuru üzerinden Türk lirası olarak alınır.",
};

export type YolHaritasiKalemi = {
  kod: string;
  ad: string;
  bolge: "TR" | "AB" | "Global";
  faz: string;
  durum: "hazirlik" | "planli";
  aciklama: string;
};

/** Kaynak: NECHH CORE -ÇALIŞMALARI/nechh_nis_rehber.md → 15. Karar Matrisi.
 *  Sıralama oradaki faz kararına birebir uyar. Hiçbiri "canlı" değildir;
 *  sayfada da öyle yazar — vaat edilmez, çalışma alanı olarak anlatılır. */
export const yolHaritasi: YolHaritasiKalemi[] = [
  { kod: "01", ad: "EUDR Uyum Asistanı", bolge: "AB", faz: "Faz 1", durum: "hazirlik",
    aciklama: "Ormansızlaşmasız ürün beyanı: Ek I kapsam taraması, ülke kıyaslaması ve coğrafi konum doğrulaması." },
  { kod: "02", ad: "YMM Tasdik Raporu", bolge: "TR", faz: "Faz 1", durum: "hazirlik",
    aciklama: "Tasdik raporu hazırlığında belge toplama ve kontrol adımlarının tek akışta toplanması." },
  { kod: "03", ad: "Atık Yönetim Planı", bolge: "TR", faz: "Faz 2", durum: "planli",
    aciklama: "Atık envanteri, plan hazırlığı ve yükümlülük takibi için çalışma alanı." },
  { kod: "04", ad: "NIS2 Uyum Takibi", bolge: "AB", faz: "Faz 2", durum: "planli",
    aciklama: "Kapsam belirleme, risk yönetimi kayıtları ve olay bildirimi hazırlığı." },
  { kod: "05", ad: "DORA Uyum Takibi", bolge: "AB", faz: "Faz 2", durum: "planli",
    aciklama: "Dijital operasyonel dayanıklılık kayıtlarının derlenmesi ve gözden geçirilmesi." },
  { kod: "06", ad: "EKB Dijital Platformu", bolge: "TR", faz: "Faz 2", durum: "planli",
    aciklama: "Enerji kimlik belgesi süreçlerinin dijital takibi." },
  { kod: "07", ad: "TISAX Hazırlık", bolge: "Global", faz: "Faz 3", durum: "planli",
    aciklama: "Otomotiv tedarik zincirinde bilgi güvenliği öz değerlendirme hazırlığı." },
  { kod: "08", ad: "Dijital Ürün Pasaportu", bolge: "AB", faz: "Faz 4", durum: "planli",
    aciklama: "Ürün yaşam döngüsü ve malzeme verisinin derlenmesi. Pazar henüz açılmadı." },
];

export const kurumsalVideo = {
  dosya: "/medya/video/nechhrobotics-tanitim.mp4",
  kapak: "/medya/video-kapak.jpg",
};

export const galeriVideolar = [
  { dosya: "/medya/video/nechhrobotics-tanitim.mp4", kapak: "/medya/video-kapak.jpg", baslik: "Nechh Robotics tanıtımı", urun: "Kurumsal" },
  { dosya: "/medya/video/tonsora-tanitim.mp4", kapak: "/medya/tanitim/tonsora-afis.png", baslik: "TONSORA tanıtımı", urun: "Salon randevu yönetimi" },
  { dosya: "/medya/video/helialoop-tanitim.mp4", kapak: "/medya/tanitim/helialoop-afis.png", baslik: "HeliaLoop tanıtımı", urun: "Hekimler arası yönlendirme ağı" },
  { dosya: "/medya/video/juriloop-tanitim.mp4", kapak: "/medya/tanitim/juriloop-afis.png", baslik: "JuriLoop tanıtımı", urun: "Hukukçular arası ağ" },
  { dosya: "/medya/video/helialoop-doktorun-gunu.mp4", kapak: "/medya/helialoop-16x9.jpg", baslik: "Bir doktorun günü", urun: "HeliaLoop kullanım anlatımı" },
  { dosya: "/medya/video/helialoop-teaser.mp4", kapak: "/medya/helialoop-16x9.jpg", baslik: "HeliaLoop teaser", urun: "Kısa tanıtım" },
  // 18 Eyl 2026 — TANITIM-MATERYALLERI'nden eklendi, web için sıkıştırıldı (95 MB → 13 MB).
  // Sahte haber kurgulu iki video (CNN logolu, "Bakanlar Kurulu kararı") bilerek EKLENMEDİ.
  { dosya: "/medya/video/eco-report-tanitim.mp4", kapak: "/medya/video/eco-report-tanitim-kapak.jpg", baslik: "Nechh Eco-Report · TR / EN / AR", urun: "CBAM karbon verisi hazırlığı" },
  { dosya: "/medya/video/helialoop-fragman.mp4", kapak: "/medya/video/helialoop-fragman-kapak.jpg", baslik: "HeliaLoop fragmanı", urun: "Reklam filmi · kurgu" },
  { dosya: "/medya/video/helialoop-park-hikayesi.mp4", kapak: "/medya/video/helialoop-park-hikayesi-kapak.jpg", baslik: "Parkta bir sohbet", urun: "HeliaLoop reklam filmi · kurgu" },
  { dosya: "/medya/video/juriloop-fragman.mp4", kapak: "/medya/video/juriloop-fragman-kapak.jpg", baslik: "JuriLoop fragmanı", urun: "Reklam filmi · kurgu" },
  { dosya: "/medya/video/nechh-dikey-yapay-zeka.mp4", kapak: "/medya/video/nechh-dikey-yapay-zeka-kapak.jpg", baslik: "Vertical AI systems", urun: "Kurumsal · English" },
];

/** Uygulamalardan alınmış GERÇEK ekran görüntüleri. Temsilî/üretilmiş ekran buraya girmez. */
export const galeriEkranlar = [
  { dosya: "/medya/paletra/bugun.jpg", baslik: "PALETRA · Bugün ekranı" },
  { dosya: "/medya/paletra/makineler.jpg", baslik: "PALETRA · Makineler" },
  { dosya: "/medya/paletra/imza.jpg", baslik: "PALETRA · Müşteri imzası" },
  { dosya: "/medya/paletra/sozlesme-pdf.jpg", baslik: "PALETRA · PDF sözleşme" },
  { dosya: "/medya/paletra/kiralama-detay.jpg", baslik: "PALETRA · Kiralama ve alacak" },
  { dosya: "/medya/paletra/bakim.jpg", baslik: "PALETRA · Bakım planı" },
  { dosya: "/medya/paletra/raporlar.jpg", baslik: "PALETRA · Raporlar" },
  { dosya: "/medya/paletra/yedekleme.jpg", baslik: "PALETRA · Yedekleme" },
];

export const galeriTanitimlar = [
  { dosya: "/medya/tanitim/nechh-yazilim-afis-tr.jpg", baslik: "Özel yazılım ve mobil uygulama geliştirme" },
  { dosya: "/medya/tanitim/nechh-yazilim-afis-en.jpg", baslik: "Custom software and mobile app development" },
  { dosya: "/medya/tanitim/helialoop-afis.png", baslik: "HeliaLoop · hekimler arası iş birliği" },
  { dosya: "/medya/tanitim/juriloop-afis.png", baslik: "JuriLoop · hukukçular arası ağ" },
  { dosya: "/medya/tanitim/tonsora-afis.png", baslik: "TONSORA · salon randevu yönetimi" },
  { dosya: "/medya/tanitim/paletra-tr.jpg", baslik: "PALETRA · ekipman kiralama, telefonda" },
  { dosya: "/medya/tanitim/paletra-en.jpg", baslik: "PALETRA · equipment rental on your phone" },
  { dosya: "/medya/tanitim/cbam-en.jpg", baslik: "CBAM · English" },
  { dosya: "/medya/tanitim/eudr-tr.jpg", baslik: "EUDR · Türkçe" },
  { dosya: "/medya/tanitim/eudr-en.jpg", baslik: "EUDR · English" },
  { dosya: "/medya/helialoop-hekimler.png", baslik: "HeliaLoop · güvenli sevk ağı" },
  { dosya: "/medya/juriloop-hero.png", baslik: "JuriLoop · mesleki iş birliği" },
  { dosya: "/medya/Ekran Görüntüsü (803).png", baslik: "CBAM raporu nasıl hazırlanır" },
];
