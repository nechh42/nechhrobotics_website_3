/** Legacy archive: extracted from the previous public website and rendered as readable internal resource pages.
 *  18 Eyl 2026: ürün yazıları (`urunYazilari.ts`) listenin başına eklenir; `date` taşıyan yazı yeni yazıdır, taşınmış değildir. */
import { urunYazilariEn, urunYazilariTr } from "./urunYazilari";

export type LegacyArticle = {
  slug: string;
  path: string;
  title: string;
  category: string;
  excerpt: string;
  body: string[];
  /** Yalnızca yeni yazılarda: yazılış tarihi (YYYY-MM-DD). */
  date?: string;
  /** Yalnızca yeni yazılarda: yazının bağlandığı ürün sayfası. */
  product?: "helialoop" | "juriloop" | "eco-report" | "tonsora" | "paletra";
};

export const legacyArticles: LegacyArticle[] = [
  ...urunYazilariTr,
  {
    "slug": "blog-ai-quality-control-automation",
    "path": "/blog/blog-ai-quality-control-automation",
    "title": "Makine Öğrenmesi ile Üretim Hatlarında Kalite Kontrolün Otomasyonu",
    "category": "ENGINEERING",
    "excerpt": "Geleneksel imalat tesislerinde kalite kontrol, uzun yıllar boyunca insan gözüne ve manuel numune almaya dayanıyordu. Ancak yüksek hızlı üretim bantlarında (örneğin dakikada 500 ürün geçen hatlarda) insan gözünün mikrosko",
    "body": [
      "Geleneksel imalat tesislerinde kalite kontrol, uzun yıllar boyunca insan gözüne ve manuel numune almaya dayanıyordu. Ancak yüksek hızlı üretim bantlarında (örneğin dakikada 500 ürün geçen hatlarda) insan gözünün mikroskobik çatlakları, renk sapmalarını veya montaj eksikliklerini yakalaması imkansızdır. Ayrıca yorgunluk ve dikkat dağınıklığı gibi insani faktörler, kusurlu ürünlerin müşteriye ulaşmasına yol açabilmektedir.",
      "Modern fabrikalar, bu sorunu aşmak için **Bilgisayarlı Görü (Computer Vision)** ve yapay zeka tabanlı kalite kontrol sistemlerine geçiş yapıyor. Nechh Robotics olarak üretim hatlarında sıfır hata hedefleyen kamera ve makine öğrenmesi entegrasyonlarımızı bu yazımızda özetliyoruz.",
      "1. Bilgisayarlı Görü (Computer Vision) Nasıl Çalışır?",
      "Yapay zeka tabanlı kalite kontrol, üretim bandının üzerine yerleştirilen endüstriyel kameralarla başlar. Ürün kameranın altından geçerken tetiklenen ışıklandırma sistemiyle yüksek çözünürlüklü fotoğraflar çekilir. Süreç şu şekilde devam eder:",
      "Kenar İşlemci Üzerinde Çıkarım (Edge Inference): Çekilen fotoğraflar, bant kenarındaki yüksek performanslı yapay zeka işlemcisine (GPU/TPU) anlık olarak gönderilir.",
      "Evrişimsel Sinir Ağları (CNN): Derin öğrenme modelleri, görüntüyü mikrosaniyeler seviyesinde tarayarak çizik, ezik, geometrik sapma veya eksik parça gibi hataları arar.",
      "Pnömatik Ayırıcı Entegrasyonu: Hatalı ürün tespit edildiği anda, PLC'ye sinyal gönderilerek ürün pnömatik kollarla (hava üfleme veya pistonla) saniyeler içinde hattan dışarı fırlatılır.",
      "\"Yapay zeka ile kalite kontrol, sadece kusurlu ürünü ayıklamakla kalmaz; arızanın hangi üretim makinesinden kaynaklandığını da analiz ederek duruşları önler.\"",
      "2. Sentetik Veri ile Hızlı Model Eğitimi",
      "Derin öğrenme modellerinin eğitilebilmesi için binlerce \"hatalı ürün\" fotoğrafına ihtiyaç duyulur. Ancak iyi yönetilen fabrikalarda hata oranı çok düşük olduğundan, hatalı ürün fotoğrafı bulmak zordur. Nechh Robotics olarak bu sorunu aşmak için **Sentetik Veri Üretimi (GAN - Generative Adversarial Networks)** kullanıyoruz. Bilgisayar ortamında oluşturulan kusursuz modeller üzerine dijital olarak yapay çizikler, çatlaklar ekleyerek yapay zekayı çok kısa sürede eğitiyor ve devreye alıyoruz.",
      "3. İzlenebilirlik ve İstatistiksel Süreç Kontrolü (SPC)",
      "Sistem, hattan geçen her ürünün görsel analiz verilerini veri tabanına kaydeder. Hataların sıklığı ve türleri grafiklerle SCADA sistemine yansıtılır. Örneğin, son 10 dakikada üretilen parçalarda milimetrik bir kalınlaşma eğilimi başlarsa, sistem \"Kalıp aşınıyor olabilir\" uyarısı vererek operatörleri uyarır.",
      "Geliştirdiğimiz entegre Vision sistemleri, 4K kameralarla saniyede 60 kareye kadar anlık analiz yapabilir. Modellerimiz, çelik parça imalatı, ilaç kutulama ve gıda paketleme sektörlerinde başarıyla test edilmiştir.",
      "Kalite kontrolde yapay zeka kullanımı, fire oranlarını düşürürken üretim hızını artırır ve marka değerini korur. İnsan gözünün sınırlarını aşan bilgisayarlı görü sistemleri, akıllı fabrikaların vazgeçilmez bir standardı olmaya devam edecektir."
    ]
  },
  {
    "slug": "blog-ai-triage-specialist-referrals",
    "path": "/blog/blog-ai-triage-specialist-referrals",
    "title": "Klinik Kararlarda Yapay Zeka: Destek mi, Yerine Geçmek mi?",
    "category": "HEALTH TECHNOLOGY",
    "excerpt": "Son yıllarda yapay zekânın (AI) sağlık alanındaki yükselişi, tıp dünyasında büyük bir tartışmayı da beraberinde getirdi: \"Yapay zeka gelecekte doktorların yerini alacak mı?\" Bu soruya verilen sansasyonel cevaplar genelli",
    "body": [
      "Son yıllarda yapay zekânın (AI) sağlık alanındaki yükselişi, tıp dünyasında büyük bir tartışmayı da beraberinde getirdi: \"Yapay zeka gelecekte doktorların yerini alacak mı?\" Bu soruya verilen sansasyonel cevaplar genellikle klinik gerçeklikten uzaktır. Tıp, sadece veri analiziyle açıklanamayacak, empati, sezgi, insani bağ kurma ve esneklik gerektiren multidisipliner bir sanattır.",
      "Klinik çalışmalardan elde edilen kanıtlar, yapay zekânın en başarılı olduğu alanın otonom teşhis koymak değil; klinik yönlendirmeyi iyileştiren, hekimlerin iş yükünü hafifleten Karar Destek Sistemleri (Decision Support Systems) olduğunu ortaya koymaktadır. Nechh Robotics olarak geliştirdiğimiz algoritmalarda, \"Hekimin yerine geçme\" değil, \"Hekimi güçlendirme\" (Human-in-the-loop AI) vizyonunu benimsiyoruz.",
      "1. Otonom Teşhis vs. Akıllı Triyaj",
      "Sağlıkta yapay zekadan tam otonom teşhis beklemek, hem etik açıdan hem de yasal sorumluluklar bakımından büyük riskler taşır. Bir algoritmanın yapabileceği en faydalı iş, hastaları önceliklendirmek ve doğru uzmana hızlıca yönlendirmektir. Buna Akıllı Triyaj (AI Triage) diyoruz.",
      "Semptom Analizi: Hasta şikayetlerini ve klinik geçmişini dil modelleri (NLP) aracılığıyla analiz etmek ve olası risk puanını hesaplamak.",
      "Önceliklendirme (Triage): Acil müdahale gerektiren hastaları belirleyerek hekimlerin ekranlarında ilk sıraya taşımak.",
      "Uzman Eşleştirme: Hastanın semptom örüntülerini analiz ederek en doğru uzmanlık alanına (veya hekime) yönlendirme önerisi sunmak.",
      "\"Yapay zeka, tıp uzmanlarının yerini almayacak; ancak yapay zekayı etkin kullanan tıp uzmanları, kullanmayanların yerini alacak.\"",
      "2. Hekim-Algoritma İş Birliği (Human-in-the-Loop)",
      "Nechh Robotics'in sağlık koordinasyon ürünlerinde kullandığı algoritmalar tamamen \"karar destek\" mekanizması olarak kurgulanmıştır. Yapay zeka hiçbir zaman tek başına kararı kesinleştirmez. Süreç şu şekilde işler:",
      "Öneri Sunma: Sistem, gelen vaka geçmişine göre 3 olası uzman yönlendirme rotası önerir ve bunun tıbbi gerekçelerini sunar.",
      "Hekim Kontrolü: Klinik kontrolör veya yönlendirmeyi yapan hekim, bu önerileri onaylar veya değiştirir.",
      "Öğrenme Döngüsü: Hekimin yaptığı her onay veya düzeltme, algoritmaların doğruluğunu artıran birer geri bildirim (reinforcement learning) verisine dönüşür.",
      "3. Veri Gizliliği ve Güvenlik (GDPR & KVKK Uyumu)",
      "Klinik yapay zeka entegrasyonlarında en hassas nokta hasta verilerinin gizliliğidir. Sistemlerimizde hasta adı, kimlik numarası gibi kişisel veriler tamamen maskelenerek (anonymized) algoritmaya gönderilir. AI motoru sadece tıbbi bağlamı (semptomlar, yaş grubu, laboratuvar değerleri) görür. Böylece verileriniz hiçbir zaman üçüncü parti sunucularda veya açık yapay zeka modellerinde sızdırılma riskiyle karşılaşmaz.",
      "HeliaLoop altyapısında entegre çalışan yapay zeka modelleri, kapalı devre sunucu mimarilerinde (on-premise veya güvenli özel bulut) barındırılır. Klinik karar destek sistemleri için optimize edilmiş hafif ve yüksek doğruluklu algoritmalar tercih edilmektedir.",
      "Klinik kararlarda yapay zekanın amacı, teşhis gibi insan sezgisinin ve tecrübesinin kritik olduğu alanları ele geçirmek değildir. Aksine, veri karmaşasını temizlemek, bürokrasiyi azaltmak ve hekimlerin asıl işleri olan hastaya ve tedaviye odaklanmalarını sağlamaktır. Doğru kurgulanmış bir yapay zeka desteği, sağlık sistemlerinde bekleme listelerini eritmeye devam edecektir."
    ]
  },
  {
    "slug": "blog-blockchain-clinical-data-security",
    "path": "/blog/blog-blockchain-clinical-data-security",
    "title": "Klinik Verilerin Dağıtık Defter Teknolojileri ile Güvenliği",
    "category": "HEALTH TECHNOLOGY",
    "excerpt": "Sağlık sektöründe dijitalleşmenin en hassas ve kritik unsurlarından biri, hasta verilerinin gizliliği ve bütünlüğüdür. Elektronik Sağlık Kayıtları (EHR), siber saldırganlar için en değerli hedeflerden biridir; çünkü sağl",
    "body": [
      "Sağlık sektöründe dijitalleşmenin en hassas ve kritik unsurlarından biri, hasta verilerinin gizliliği ve bütünlüğüdür. Elektronik Sağlık Kayıtları (EHR), siber saldırganlar için en değerli hedeflerden biridir; çünkü sağlık verileri finansal kayıtlara kıyasla çok daha kalıcı ve hassas bilgiler içerir. Verilerin yetkisiz kişilerce değiştirilmesi veya silinmesi ise yanlış teşhis ve tedavilere sebep olarak doğrudan insan sağlığını tehlikeye atabilir.",
      "Bu nedenle, tıbbi veri alışverişinde geleneksel merkezi veritabanı çözümlerinin ötesine geçerek **Dağıtık Defter Teknolojilerini (Blockchain/Blokzincir)** entegre eden mimariler ön plana çıkmaktadır. Nechh Robotics olarak geliştirdiğimiz HeliaLoop yönlendirme ağında, veri güvenliğini sağlamak amacıyla uyguladığımız blokzincir ve kriptografik doğrulama mekanizmalarını bu yazıda inceliyoruz.",
      "1. Değiştirilemezlik (Immutability) ve Veri Bütünlüğü",
      "Merkezi veritabanlarında (SQL vb.), yetkili bir kullanıcı veya sisteme sızan bir saldırgan geçmişe dönük verileri değiştirebilir veya silebilir. Blokzincir altyapısında ise veriler kriptografik hash zincirleri ile birbirine bağlı bloklar halinde saklanır. Bu durum:",
      "Tıbbi Denetim İzi (Audit Trail): Bir sevk kaydı oluşturulduğunda veya laboratuvar sonucu eklendiğinde, bu işlem zaman damgalı olarak blokzincire yazılır. Bu kayıt geçmişe dönük olarak asla silinemez veya üzerinde tahrifat yapılamaz.",
      "Sahteciliğin Önlenmesi: Reçete ve rapor sahteciliği, dağıtık defter üzerindeki kriptografik imzaların anlık kontrolü ile tamamen engellenir.",
      "\"Klinik verilerde güvenlik, sadece veriye yetkisiz erişimi engellemek değildir; aynı zamanda verinin ilk günkü doğruluğunu koruduğunu matematiksel olarak ispat edebilmektir.\"",
      "2. Akıllı Sözleşmeler (Smart Contracts) ile İzin Yönetimi",
      "Hasta verilerinin kimler tarafından görüntülenebileceği, blokzincir üzerindeki **Akıllı Sözleşmeler (Smart Contracts)** ile yönetilir. Örneğin, bir hasta HeliaLoop ağında uzman bir hekime sevk edildiğinde:",
      "Sistem, hekime geçici bir okuma izni tanımlayan bir akıllı sözleşme tetikler.",
      "Hekim, sadece hastanın tedavisi süresince verilere erişebilir.",
      "Tedavi tamamlandığında veya hasta iznini geri çektiğinde, akıllı sözleşme erişim yetkisini otomatik olarak sonlandırır. Bu sayede hiçbir klinik veri hekimlerin bilgisayarlarında kalıcı olarak saklanmaz.",
      "3. Sıfır Bilgi Kanıtları (Zero-Knowledge Proofs - ZKP)",
      "Gelişmiş kriptografik yöntemlerden olan **ZKP (Sıfır Bilgi Kanıtları)** sayesinde, sistemler hassas verinin kendisini paylaşmadan o verinin doğruluğunu kanıtlayabilir. Örneğin, bir sigorta şirketi veya aracı kurum, hastanın teşhis kodunu veya detaylı tıbbi geçmişini görmeden, sadece hastanın yönlendirme ağında doğrulanmış bir hekim tarafından sevk edildiğini matematiksel olarak doğrulayabilir. Bu, gizlilik standartlarını en üst seviyeye taşır.",
      "HeliaLoop Güvenlik Standartları",
      "HeliaLoop veri güvenliği mimarisi, HIPAA (Amerika Sağlık Sigortası Taşınabilirlik ve Sorumluluk Yasası) ve KVKK yönergelerine %100 uyumludur. Veritabanı seviyesinde AES-256 şifreleme ve blokzincir tabanlı hash doğrulama katmanları entegre edilmiştir.",
      "Dağıtık defter teknolojileri, sağlık sektöründe güvenli, şeffaf ve uyumlu bir veri ekosistemi kurmanın anahtarıdır. Tıbbi kayıtların bütünlüğünün korunması ve hasta onay mekanizmalarının dijitalleştirilmesi, gelecekte tüm küresel sevk ağlarının standart altyapısı haline gelecektir."
    ]
  },
  {
    "slug": "blog-cbam-2026-tam-rehber",
    "path": "/blog/blog-cbam-2026-tam-rehber",
    "title": "CBAM 2026: AB’ye İhracat Yapanlar İçin Tam Rehber",
    "category": "CBAM",
    "excerpt": "CBAM, Avrupa Birliği’ne ihraç edilen ürünlerin gömülü karbonunu ölçen ve raporlayan bir düzenlemedir. İhracatçıların maliyetlerini ve rekabet gücünü doğrudan etkiler. Demir-çelik, alüminyum, gübre ve elektrik gibi sektör",
    "body": [
      "CBAM, Avrupa Birliği’ne ihraç edilen ürünlerin gömülü karbonunu ölçen ve raporlayan bir düzenlemedir. İhracatçıların maliyetlerini ve rekabet gücünü doğrudan etkiler.",
      "Demir-çelik, alüminyum, gübre ve elektrik gibi sektörler CBAM kapsamındaki ilk ürün grupları arasındadır.",
      "CBAM ilk etapta çimento, demir-çelik, alüminyum, gübre, elektrik ve hidrojen gibi ürünleri kapsar. Bu ürün gruplarındaki karbon verisi hazırlığı kritik önemdedir.",
      "Türkiye’den AB’ye ihracat yapan firmaların bu ürün gruplarındaki ihracatını CBAM uyumlu hale getirmesi gerekiyor.",
      "2023 pilot dönem, 2026 tam uygulama ve sonraki yıllarda kapsam genişlemesi bu düzenlemenin ana aşamalarıdır.",
      "İhracatçıların bugün hazırlık yapması, 2026’da uygulamanın başladığı anda operasyonel olmalarını sağlar.",
      "Authorised Declarant başvurusu, tedarikçi veri toplama, emisyon hesaplama ve beyannamenin hazırlanması CBAM uyum sürecinin temel adımlarıdır.",
      "CBAM uyumu, tedarikçi zinciri boyunca şeffaf veri toplama ve denetlenebilir raporlama gerektirir.",
      "CBAM maliyeti, emisyon değerinin CBAM fiyatı ile çarpılmasıyla hesaplanır. Default değerler kullanıldığında maliyetler yükselir.",
      "Gerçek veri kullanmak, maliyeti optimize etmenin ve denetim riskini azaltmanın en etkili yoludur.",
      "CBAM danışmanlığımızla süreci hızlandırın. Sabit fiyat: €2.500",
      "Bu konuda hızlı destek almak veya uyum sürecinizi hızlandırmak için lütfen sayfayı ziyaret edin."
    ]
  },
  {
    "slug": "blog-cbam-ets-karbon-maliyet-optimizasyonu",
    "path": "/blog/blog-cbam-ets-karbon-maliyet-optimizasyonu",
    "title": "CBAM vs ETS: Karbon Maliyetlerini Optimize Etme Rehberi",
    "category": "CBAM",
    "excerpt": "CBAM, ithalatçıların ödediği karbon maliyetidir; ETS ise üreticilerin emisyon ticareti sistemidir. Aralarındaki farkları anlamak, doğru strateji seçimi için şarttır. Türkiye ETS’ye geçiş sürecinde olduğu için, hem yerel ",
    "body": [
      "CBAM, ithalatçıların ödediği karbon maliyetidir; ETS ise üreticilerin emisyon ticareti sistemidir. Aralarındaki farkları anlamak, doğru strateji seçimi için şarttır.",
      "Türkiye ETS’ye geçiş sürecinde olduğu için, hem yerel hem de uluslararası karbon maliyetlerini birlikte değerlendirmek gerekir.",
      "CBAM Maliyeti Nasıl Hesaplanır?",
      "CBAM maliyeti, emisyon miktarı ile CBAM fiyatının çarpılmasıyla belirlenir. Default değer yerine gerçek veri kullanmak maliyeti düşürür.",
      "Yerli karbon fiyatı mahsubu ve tedarikçi verisi, maliyet hesaplamasında önemli faktörlerdir.",
      "Maliyet Optimizasyon Stratejileri",
      "Gerçek veri kullanımı, yeşil enerjiye geçiş, verimlilik artırıcı yatırımlar ve düşük karbonlu tedarikçi seçimi en etkili stratejiler arasındadır.",
      "Üretim süreçlerindeki optimizasyon, CBAM maliyetini uzun vadede azaltır.",
      "Türkiye’deki Karbon Fiyatlandırması",
      "Türkiye’de ETS ve CBAM ilişkisi, maliyet stratejilerini belirler. Gelecek beklentileri planlama için önemlidir.",
      "Sektörel farklılıkları analiz ederek, karbon maliyetlerini daha gerçekçi bir şekilde hesaplayabilirsiniz.",
      "2026-2030 dönemi için karbon maliyeti planlı yatırım ve sürdürülebilirlik raporlaması gerektirir.",
      "Sektörel odaklı stratejiler, uzun vadeli rekabet avantajı sağlar.",
      "CBAM maliyet analizi ve optimizasyon danışmanlığı.",
      "Bu konuda hızlı destek almak veya uyum sürecinizi hızlandırmak için lütfen sayfayı ziyaret edin."
    ]
  },
  {
    "slug": "blog-cbam-gomulu-emisyon-nasil-hesaplanir",
    "path": "/blog/blog-cbam-gomulu-emisyon-nasil-hesaplanir",
    "title": "CBAM Gömülü Emisyon Nasıl Hesaplanır? (2026 Rehberi, Örnekli)",
    "category": "CBAM",
    "excerpt": "Gömülü emisyon (embedded emissions) , bir ürünün üretimi sırasında atmosfere salınan sera gazlarının, o ürünün bir tonuna düşen miktarıdır . CBAM’da beyan edilmesi gereken temel sayı budur. Ama \"emisyon = yakıt × faktör\"",
    "body": [
      "Gömülü emisyon (embedded emissions) , bir ürünün üretimi sırasında atmosfere salınan sera gazlarının, o ürünün bir tonuna düşen miktarıdır . CBAM’da beyan edilmesi gereken temel sayı budur. Ama \"emisyon = yakıt × faktör\" gibi basit bir çarpım değildir: AB metodolojisi (Reg. (EU) 2023/956; Uygulama Tüzüğü (EU) 2023/1773, Ek III–IV) öncül emisyonları, proses emisyonlarını ve üretim rotasını da hesaba katmanızı ister. Bu yazıda, çelik örneğiyle adım adım nasıl hesaplandığını göstereceğiz.",
      "Direkt emisyon: Üretim prosesinde yakıt yanması ve proses reaksiyonlarından (ör. çelikte karbonun oksidasyonu, çimentoda karbonat kalsinasyonu) doğrudan çıkan CO₂.",
      "Dolaylı emisyon: Proseste tüketilen elektriğin üretiminden kaynaklanan emisyon (tüketim × şebeke emisyon faktörü).",
      "Not: Kesin dönemde demir-çelik ve alüminyumda sertifika yükümlülüğü yalnızca direkt emisyonu kapsar; dolaylı emisyon raporlanır ama ayrı tutulur. Çimento ve gübrede ikisi de sayılır. Bu yüzden ikisini asla tek bir toplamda birleştirmeyin .",
      "2. Özgül gömülü emisyon (SEE) formülü — işin kalbi",
      "ÖGE (SEE) = ( Atfedilen emisyon + Σ [öncül kütlesi × öncülün ÖGE’si] ) ÷ Aktivite düzeyi",
      "Burada atfedilen emisyon prosesin kendi direkt/dolaylı emisyonu, aktivite düzeyi prosesin ürettiği ürün miktarıdır (ton). Kritik olan orta terim: öncül taşıma .",
      "3. Öncül taşıma (precursor carry-forward)",
      "Çelik tek adımda üretilmez; bir zincirdir . Her ara ürünün (öncülün) gömülü emisyonu bir sonraki adıma taşınır :",
      "sinter → pik demir → ham çelik → sıcak haddelenmiş rulo (HRC)",
      "Örneğin ham çelikten HRC üretirken, ham çeliğin gömülü emisyonu (tüketilen kütle × ham çeliğin ÖGE’si) HRC’ye eklenir. Bu adımı atlamak, raporun reddedilmesine yol açar — CBAM’ın en sık gözden kaçan noktasıdır.",
      "4. Üretim rotası neden önemli? (BF-BOF vs EAF)",
      "Aynı ürün, farklı rotada tamamen farklı emisyona sahiptir:",
      "BF-BOF (yüksek fırın + bazik oksijen): ~2,0 tCO₂/ton ham çelik — kömür/koks ağırlıklı, direkt emisyon yüksek.",
      "EAF (ark ocağı, hurda): ~0,4–0,6 tCO₂/ton — elektrik baskın ; hurda ise CBAM’da sıfır dereceli (gömülü emisyon taşımaz).",
      "Bu yüzden hesaba başlamadan önce rotanızı ve sistem sınırınızı doğru tanımlamak şarttır.",
      "5. Sayısal örnek (çelik cıvata/somun)",
      "AB Komisyonu’nun kendi kılavuz örneğinden: 17.000 ton karbon çelik cıvata üretimi, girdi 20.000 ton çelik çubuk (ÖGE 1,539 direkt / 0,204 dolaylı), kendi doğal gaz + elektrik tüketimiyle:",
      "Öncül katkısı (direkt): 20.000 × 1,539 ÷ 17.000 = 1,810",
      "Kendi doğal gazı (direkt): ≈ 0,196",
      "ÖGE (direkt) ≈ 2,006 tCO₂/ton — kaynak: EU installation operators guidance, Örnek 3.",
      "Nechh Eco-Report motoru bu resmî örneği ±0,0015 doğrulukla yeniden üretir; yani hesap makinemiz AB’nin kendi rakamını tutturur.",
      "6. Gerçek veri mi, default değer mi?",
      "Gerçek tesis verisiyle hesaplamak en doğrusudur. Veri yoksa default değerler kullanılır — ancak 2026 kesin döneminde bunlar ülke bazlı ve mark-up’lıdır (demir-çelik: 2026’da +%10, 2027’de +%20, 2028’den +%30). Yani default kullanmak genelde daha yüksek maliyet demektir; gerçek veri hem maliyeti düşürür hem denetim riskini azaltır.",
      "7. En önemli kural: her sayı denetlenebilir olmalı",
      "Akredite doğrulayıcı ve AB müşteriniz, her rakamın kaynağını, formülünü ve varsayımını görmek ister. \"Kara kutu\" bir Excel yeterli değildir. İyi bir CBAM raporu; girdi → faktör → formül → sonuç zincirini satır satır izlenebilir kılar.",
      "🌱 Nechh Eco-Report: rakamlarını kanıtlayabilen CBAM hazırlık aracı",
      "Öncül taşımalı gerçek ÖGE (SEE) motoru — her sayı kaynağı ve formülüyle denetlenebilir, her rapor numaralı, metodoloji AB Komisyonu’nun resmî kılavuz örneğine doğrulanmış. Kara kutu değil."
    ]
  },
  {
    "slug": "blog-cbam-nedir-avrupanin-karbon-kacagina-yaniti",
    "path": "/blog/blog-cbam-nedir-avrupanin-karbon-kacagina-yaniti",
    "title": "CBAM Nedir? Avrupa’nın Karbon Kaçağına Yanıtı",
    "category": "CBAM",
    "excerpt": "Avrupa Birliği’nin Sınırda Karbon Düzenleme Mekanizması, yani CBAM , ithal ürünlerin üretimi sırasında ortaya çıkan gömülü karbon emisyonlarını dikkate alan bir çevre politikası aracıdır. Mekanizmanın temel amacı, karbon",
    "body": [
      "Avrupa Birliği’nin Sınırda Karbon Düzenleme Mekanizması, yani CBAM , ithal ürünlerin üretimi sırasında ortaya çıkan gömülü karbon emisyonlarını dikkate alan bir çevre politikası aracıdır. Mekanizmanın temel amacı, karbon maliyeti ödeyen AB üreticileri ile daha düşük karbon maliyetiyle üretim yapan üçüncü ülke üreticileri arasındaki farkı azaltmak ve karbon kaçağı riskini sınırlamaktır. Avrupa Komisyonu CBAM’ı AB Emisyon Ticaret Sistemi’ni tamamlayan bir araç olarak tanımlamaktadır [1] .",
      "CBAM’ın geçiş dönemi 2023–2025 arasında uygulanmış, kesin rejim ise 1 Ocak 2026 itibarıyla başlamıştır [1] . Kesin rejimde ithalatçıların yalnızca veri raporlaması değil, aynı zamanda yetkilendirme, emisyon beyanı ve ithal ürünlerin gömülü emisyonlarına karşılık gelen CBAM sertifikalarının satın alınması ve teslim edilmesi gibi yükümlülükleri de gündeme gelir. Bu nedenle CBAM, yalnızca gümrük departmanını değil; satın alma, üretim, sürdürülebilirlik, finans ve bilgi teknolojileri ekiplerini de ilgilendirir.",
      "Mekanizma başlangıçta çimento, demir-çelik, alüminyum, gübre, elektrik ve hidrojen gibi karbon yoğun sektörlerdeki seçili ürünlere odaklanır [1] . Ancak bir ürünün kapsamda olup olmadığı yalnızca sektör adıyla belirlenmez. Ürün kodu, menşe, ithalat senaryosu ve emisyon hesabının nasıl yapılacağı birlikte değerlendirilmelidir. Yanlış ürün sınıflandırması veya eksik tedarikçi verisi, raporların doğruluğunu ve şirketin mali planlamasını etkileyebilir.",
      "Kurumsal açıdan en doğru yaklaşım, CBAM’ı tek seferlik bir raporlama işi olarak değil, ürün–tedarikçi–emisyon–gümrük verisini birleştiren sürekli bir kontrol süreci olarak ele almaktır. Şirketler öncelikle kapsam envanteri hazırlamalı, sorumlulukları tanımlamalı, tedarikçilerden ölçülebilir emisyon verisi toplamalı ve bu veriyi denetlenebilir biçimde saklamalıdır. Sonuç olarak CBAM, uyum gerekliliğinin ötesinde düşük karbonlu üretime ve daha şeffaf tedarik zincirlerine geçiş için stratejik bir sinyal niteliğindedir.",
      "Kurumsal çıkarım: CBAM hazırlığına başlamak için ilk adım sertifika maliyetini tahmin etmek değil, kapsam dahilindeki ürünleri ve bu ürünlerin emisyon verisini görünür hâle getirmektir.",
      "[1] European Commission — Carbon Border Adjustment Mechanism (CBAM) \n \n Yayın notu: Bu içerik genel bilgilendirme amaçlıdır; hukuki görüş veya şirkete özel uyum değerlendirmesi değildir. Ürün kapsamı, ülke uygulaması ve yürürlükteki ikincil düzenlemeler yayın öncesinde güncel olarak kontrol edilmelidir."
    ]
  },
  {
    "slug": "blog-cbam-tedarikci-veri-toplama",
    "path": "/blog/blog-cbam-tedarikci-veri-toplama",
    "title": "CBAM Tedarikçi Veri Toplama: Excel Şablonu ve Rehber",
    "category": "CBAM",
    "excerpt": "Neden Tedarikçi Verisi Toplamalısınız? CBAM beyannamesinde tedarikçi verisi, hesaplamanın doğruluğunu belirler. Gerçek veriler, default değerlerin yarattığı ek maliyeti azaltır. Tedarikçi verisini doğru yönetmek, CBAM sü",
    "body": [
      "Neden Tedarikçi Verisi Toplamalısınız?",
      "CBAM beyannamesinde tedarikçi verisi, hesaplamanın doğruluğunu belirler. Gerçek veriler, default değerlerin yarattığı ek maliyeti azaltır.",
      "Tedarikçi verisini doğru yönetmek, CBAM sürecinde denetim başarısını artırır.",
      "Tedarikçilerden İstenmesi Gereken Veriler",
      "Üretim süreci bilgisi, enerji ve yakıt tüketimi, elektrik kaynağı ve direkt/indirekt emisyon verisi CBAM için gereklidir.",
      "Veri formatında netlik, karşı tarafın doğru bilgiyi göndermesini sağlar.",
      "Profesyonel bir tedarikçi mektubu, veri taleplerini açık ve güvenilir şekilde iletir. Gizlilik ve kullanım amaçları mutlaka belirtilmelidir.",
      "Mektupta son tarih, iletişim bilgileri ve CBAM bağlamı yer almalıdır.",
      "Formun yapısı, veri alanlarının açıklamaları ve doğrulama kontrolleri, tedarikçilerin doğru bilgi göndermesine yardımcı olur.",
      "Her alanın doğru birim ve formatta doldurulması, sonraki aşamalardaki ek maliyetleri azaltır.",
      "İlk iletişim, hatırlatmalar ve eksik veri durumunda yapılacaklar iyi planlanmalıdır. Bu süreç, CBAM uyumunun en önemli parçasıdır.",
      "Alternatif veri kaynakları, tedarikçi verisi olmadığında sürecin devam etmesini sağlar.",
      "Ücretsiz CBAM Tedarikçi Veri Toplama Formu.",
      "Bu konuda hızlı destek almak veya uyum sürecinizi hızlandırmak için lütfen sayfayı ziyaret edin."
    ]
  },
  {
    "slug": "blog-cbam-uyum-sureci-veri-toplamadan-beyana",
    "path": "/blog/blog-cbam-uyum-sureci-veri-toplamadan-beyana",
    "title": "CBAM Uyum Süreci: Veri Toplamadan Beyana",
    "category": "CBAM",
    "excerpt": "CBAM uyumu, ithal edilen ürünlerin kapsamını doğru belirlemekle başlar. Şirketin ürün listesi gümrük tarife kodlarıyla eşleştirilmeli; ilgili ürünlerin menşei, ithalat tarihi ve ithalatçı sıfatı incelenmelidir. Bu ilk ça",
    "body": [
      "CBAM uyumu, ithal edilen ürünlerin kapsamını doğru belirlemekle başlar. Şirketin ürün listesi gümrük tarife kodlarıyla eşleştirilmeli; ilgili ürünlerin menşei, ithalat tarihi ve ithalatçı sıfatı incelenmelidir. Bu ilk çalışma, kapsamda olmayan ürünler için gereksiz kaynak ayrılmasını ve kapsamda olan ürünlerin gözden kaçmasını önler. Avrupa Komisyonu, CBAM kapsamında sektörleri ve uygulama kaynaklarını ayrı başlıklarda yayımlamaktadır [1] .",
      "İkinci adım emisyon verisinin toplanmasıdır. Ürünün üretim sürecine bağlı doğrudan emisyonları ve mevzuatın öngördüğü ölçüde ilgili dolaylı emisyonlar için tedarikçilerden metodolojisi açıklanmış veri alınmalıdır. “Ürün başına toplam emisyon” gibi tek satırlık bir değer, hesaplama sınırları ve üretim tesisi bilgisi olmadan yeterli olmayabilir. İyi bir veri talebi; tesis, dönem, üretim miktarı, kullanılan yöntem, enerji kaynağı ve doğrulama durumu gibi alanları içerir.",
      "Üçüncü adım, verinin iç kontrol ve raporlama sistemine bağlanmasıdır. CBAM Registry, beyanların sunulması, sertifikaların yönetimi ve uyumun izlenmesi açısından merkezi bir araçtır [1] . Bu nedenle şirket içinde veri sahibinin, teknik hesaplamadan sorumlu kişinin, gümrük beyanını yöneten ekibin ve nihai onay makamının açık biçimde belirlenmesi gerekir. Geriye dönük düzeltmelerin izlenebilmesi için değişiklik kayıtları ve kanıt dosyaları tutulmalıdır.",
      "Son aşama mali ve operasyonel planlamadır. Sertifika fiyatının AB ETS tahsisat açık artırma fiyatlarıyla bağlantılı olması, karbon maliyetinin sabit bir bütçe kalemi gibi ele alınmasını zorlaştırabilir [1] . Şirketler farklı emisyon ve fiyat senaryoları çalışmalı; tedarikçi sözleşmelerinde veri sağlama, doğrulama, sorumluluk ve maliyet paylaşımı hükümlerini değerlendirmelidir. Böylece CBAM raporlaması, yalnızca uyum ekibinin görevi olmaktan çıkar ve kurumsal karar alma süreçlerine entegre edilir.",
      "[1] European Commission — Carbon Border Adjustment Mechanism (CBAM) \n \n Yayın notu: Bu içerik genel bilgilendirme amaçlıdır; hukuki görüş veya şirkete özel uyum değerlendirmesi değildir. Ürün kapsamı, ülke uygulaması ve yürürlükteki ikincil düzenlemeler yayın öncesinde güncel olarak kontrol edilmelidir."
    ]
  },
  {
    "slug": "blog-cross-border-patient-referrals",
    "path": "/blog/blog-cross-border-patient-referrals",
    "title": "Sınırların Ötesinde Hasta Yönlendirmesi: Körfez ve Avrupa İçin 2026 Rehberi",
    "category": "HEALTH TECHNOLOGY",
    "excerpt": "Sağlık turizmi ve sınır ötesi tıbbi iş birlikleri, 2026 yılı itibarıyla küresel sağlık sektörünün en hızlı büyüyen alanlarından biridir. Özellikle Körfez Bölgesi (GCC) ve Avrupa ülkelerinden Türkiye'deki uzman hekimlere ",
    "body": [
      "Sağlık turizmi ve sınır ötesi tıbbi iş birlikleri, 2026 yılı itibarıyla küresel sağlık sektörünün en hızlı büyüyen alanlarından biridir. Özellikle Körfez Bölgesi (GCC) ve Avrupa ülkelerinden Türkiye'deki uzman hekimlere ve kliniklere yönlendirilen hasta hacmi rekor seviyelere ulaşmıştır. Ancak bu küresel hasta akışı, çok ciddi bir sorunu da beraberinde getirmektedir: Kişisel Sağlık Verilerinin Güvenli ve Yasal Uyumlu Paylaşımı.",
      "Hasta raporlarının, röntgen görüntülerinin ve klinik notların ülkeler arası aktarımı; Türkiye'de KVKK, Avrupa Birliği'nde GDPR ve küresel düzeyde HIPAA regülasyonları gibi katı mevzuatlara tabidir. Bu rehberde, uluslararası hasta yönlendirmelerindeki yasal riskleri ve bu riskleri aşmanın yollarını inceliyoruz.",
      "1. WhatsApp ve E-Posta ile Veri Paylaşımının Yasal Riskleri",
      "Birçok klinik ve aracı kurum, yurt dışındaki hastaların tıbbi kayıtlarını hekimlere iletmek için hala WhatsApp gruplarını veya şifrelenmemiş e-postaları kullanmaktadır. Oysa ki:",
      "Yasal İhlal: Hasta sağlığı verileri (özel nitelikli kişisel veri), uçtan uca şifrelenmemiş ve sunucusu yurt dışında olan genel mesajlaşma platformları üzerinden paylaşıldığında, veri sorumlusu (klinik veya hekim) doğrudan yasal ihlal gerçekleştirmiş olur. Ciddi idari para cezaları uygulanmaktadır.",
      "Veri Sızıntısı: Bu platformlardaki dosyaların yetkisiz kişilerin eline geçmesi durumunda kliniklerin itibarı ve lisansları tehlikeye girer.",
      "Yapılandırılmamış Bilgi: Hekime WhatsApp'tan parça parça gönderilen PDF'ler ve mesajlar klinik sistemlerde saklanamaz, arşivlenemez ve hukuki bir dayanak oluşturamaz.",
      "\"Sınır ötesi sağlık hizmetinde en kritik darboğaz tedavi yetkinliği değil, yasal uyumluluk ve güvenli veri devir teslimidir.\"",
      "2. Bölgesel Regülasyonların Karşılaştırılması (2026 Güncellemesi)",
      "Hasta sevk süreçlerinde rol alan taraflar, yönlendirmenin yapıldığı ve kabul edildiği bölgelerin kanunlarına aynı anda uymak zorundadır:",
      "GDPR (Avrupa): Hasta verilerinin AB dışına aktarılabilmesi için \"Yeterlilik Kararı\" veya hastanın açık ve detaylı rızası (explicit consent) şarttır. Verilerin nerede saklanacağı kesin kurallara bağlıdır.",
      "KVKK (Türkiye): Özel nitelikli kişisel verilerin işlenmesi ve yurt dışına aktarılması 2024 ve 2025 yılındaki güncellemelerle yeni kurallara bağlanmıştır. Güvenli entegrasyon altyapıları kullanılması yasal bir zorunluluktur.",
      "GCC Health Regulations (Körfez): Birleşik Arap Emirlikleri ve Suudi Arabistan gibi ülkeler, ulusal sağlık verilerinin ülke sınırları dışına çıkmasını engelleyen lokal veri egemenliği (data residency) kanunlarını sert bir şekilde uygulamaktadır.",
      "3. HeliaLoop'un Çok Bölgeli Veri Mimarisi Çözümü",
      "Nechh Robotics bünyesinde geliştirilen HeliaLoop , uluslararası sevk süreçlerini yasal uyumlu hale getirmek için çok bölgeli (multi-region hosting) ve sıfır bilgi (zero-knowledge encryption) teknolojilerini kullanır:",
      "Lokal Veri Barındırma: Körfez bölgesindeki hastaların verileri GCC sunucularında, Avrupalı hastaların verileri Frankfurt sunucularında ve Türkiye'deki hastaların verileri Türkiye'deki Supabase altyapısında izole biçimde tutulur.",
      "Güvenli Geçici Erişim: Hekimler hasta kayıtlarına sadece tedavi/konsültasyon süresince, tarayıcı tabanlı güvenli bir görüntüleyici üzerinden erişirler. Cihazlarına hiçbir dosya indirilmez, böylece veri sızıntısı riski ortadan kalkar.",
      "Uluslararası Referans Protokolleri",
      "HeliaLoop, sınır ötesi hasta yönlendirmelerini tek bir standart formata kavuşturur. Sistem, hekimler arasındaki devir teslimi (handover) uluslararası tıbbi standart olan SBAR (Situation, Background, Assessment, Recommendation) protokolüne göre dijitalleştirerek hata payını sıfıra indirir.",
      "Sağlık turizminde başarı, sadece başarılı operasyonlar yapmakla değil, hastanın ülkesinden başlayıp taburcu olana kadar süren veri zincirinin güvenliğini ve yasallığını sağlamakla mümkündür. Sağlık tesislerinin 2026 regülasyonlarına uyum sağlayabilmesi için kapalı devre ve onaylı sevk ağlarına geçiş yapması kaçınılmazdır."
    ]
  },
  {
    "slug": "blog-custom-software-solutions",
    "path": "/blog/blog-custom-software-solutions",
    "title": "Özel Yazılım Çözümleri: Fikirden Üretime Mühendislik Disiplini",
    "category": "NECHH NOTES",
    "excerpt": "Birçok dijital proje veya özel yazılım fikri, başlangıçta harika görünse de üretime (production) geçiş sürecinde yarıda kalır veya kararsızlık sorunları yaşar. Bunun temel nedeni, yazılımın hedef donanımdan, fiziksel kıs",
    "body": [
      "Birçok dijital proje veya özel yazılım fikri, başlangıçta harika görünse de üretime (production) geçiş sürecinde yarıda kalır veya kararsızlık sorunları yaşar. Bunun temel nedeni, yazılımın hedef donanımdan, fiziksel kısıtlardan veya operasyonel gerçeklerden soyutlanmış olarak geliştirilmesidir. Özel yazılım geliştirmek sadece kod yazmak değildir; fikir aşamasından, ürünün sahada canlıda çalışmasına kadar süren sıkı bir mühendislik disiplini gerektirir.",
      "Nechh Robotics olarak donanım tasarlayan, gömülü sistemler geliştiren ve bu sistemleri akıllı bulut yazılımlarıyla entegre eden multidisipliner bir ekibiz. Bu yazımızda, özel yazılım çözümlerimizde uyguladığımız sürdürülebilir yazılım yaşam döngüsü (SDLC) metodolojilerimizi anlatıyoruz.",
      "1. Donanım ve Yazılımın Birlikte Tasarımı (Co-Design)",
      "Geliştirdiğimiz yazılımların büyük kısmı fiziksel donanımlarla (IOT cihazları, sensörler, kontrol panelleri) etkileşim halindedir. Bu nedenle donanım ekibi ile yazılım ekibi ilk günden itibaren ortak çalışır:",
      "Arayüz Tanımlama (API Specification): Donanım ile üst yazılım katmanları arasındaki haberleşme protokolleri (gRPC, WebSockets, REST) henüz donanım üretilmeden simüle edilir.",
      "Ortak Mock Sistemler: Yazılım ekibi, fiziksel donanımın davranışını simüle eden sanal modeller (mock) üzerinde geliştirme yapmaya başlar, böylece donanımın üretilmesini bekleyerek vakit kaybetmez.",
      "\"Mühendislik disiplini, bir yazılımın sadece çalışmasını sağlamak değil; o yazılımın yıllar sonra dahi bakımı kolay, ölçeklenebilir ve dayanıklı kalmasını güvence altına almaktır.\"",
      "2. HIL (Hardware-in-the-Loop) ve Otomatik Testler",
      "Yazılım kalitesini garanti etmenin tek yolu otomatik test süreçleridir. Kod tabanımıza eklenen her yeni özellik, CI/CD (Sürekli Entegrasyon / Sürekli Dağıtım) boru hattımızda testlerden geçer:",
      "Birim Testleri (Unit Tests): Yazılım fonksiyonlarının mantıksal doğruluğunu denetler.",
      "Entegrasyon Testleri: Veritabanı ve dış servislerle olan haberleşmeyi test eder.",
      "HIL (Hardware-in-the-Loop) Testleri: Gömülü yazılımlarımız, laboratuvarımızdaki gerçek devre kartlarına otomatik yüklenerek fiziksel voltaj ve sinyal seviyelerinde test edilir. Böylece gerçek bir cihazın vereceği elektriksel tepkiler doğrulanmış olur.",
      "3. Ölçeklenebilirlik ve Sürdürülebilir Mimari",
      "Kod tabanının spagetti koda dönüşmemesi için katmanlı ve temiz mimari (Clean Architecture / SOLID) kurallarını uyguluyoruz. İş mantığı (domain logic), altyapıdan (veri tabanı, ağ kütüphaneleri) bağımsız tutulur. Bu sayede yarın veritabanı teknolojisini değiştirmek veya yeni bir modül eklemek sistemin diğer kısımlarını bozmaz, iş gücü maliyetlerini düşürür.",
      "Nechh Robotics Yazılım Portföyü",
      "Sadece web ve mobil uygulamalar değil; donanıma dokunan gömülü C/C++ yazılımları, yüksek performanslı Go/Rust tabanlı servisler ve Python tabanlı yapay zeka entegrasyonları dahil olmak üzere uçtan uca özel çözümler sunmaktayız.",
      "Başarılı bir özel yazılım projesi, doğru mimari kararlar, otomatik testler ve kararlı bir entegrasyon süreciyle inşa edilir. Nechh Robotics olarak mühendislik disiplinimizden ödün vermeden, fikirlerinizi sahada sorunsuz çalışan dayanıklı teknolojik ürünlere dönüştürmek için yanınızdayız."
    ]
  },
  {
    "slug": "blog-data-driven-control-architectures",
    "path": "/blog/blog-data-driven-control-architectures",
    "title": "Endüstriyel Otomasyonda Veri Odaklı Kontrol Mimarileri",
    "category": "ENGINEERING",
    "excerpt": "Geleneksel endüstriyel otomasyon, onlarca yıldır katı kurallara sahip olan \"otomasyon piramidi\" (ISA-95 standardı) etrafında şekillenmiştir. Bu mimaride sahadaki sensörler PLC'ye (Programlanabilir Mantıksal Denetleyici),",
    "body": [
      "Geleneksel endüstriyel otomasyon, onlarca yıldır katı kurallara sahip olan \"otomasyon piramidi\" (ISA-95 standardı) etrafında şekillenmiştir. Bu mimaride sahadaki sensörler PLC'ye (Programlanabilir Mantıksal Denetleyici), PLC'ler SCADA yazılımlarına, oradan da MES ve ERP bulut sistemlerine bağlanırdı. Ancak bu hiyerarşik yapı, sahadaki ham verinin üst katmanlara gerçek zamanlı olarak akmasını engeller, veri siloları oluştururdu.",
      "Endüstri 4.0 ve akıllı fabrikaların gelişiyle birlikte, otomasyon dünyası veri odaklı kontrol mimarilerine (data-driven control architectures) geçiş yapıyor. Nechh Robotics olarak geliştirdiğimiz endüstriyel çözümlerde, sensör seviyesinden bulut platformlarına doğrudan, güvenli ve düşük gecikmeli veri akışı sağlayan hibrit sistemler kuruyoruz. Bu makalede modern veri odaklı kontrol hatlarının mimari detaylarını ele alıyoruz.",
      "1. Sensörden Buluta (Sensor-to-Cloud) Telemetri",
      "Modern fabrikalarda makine verimliliği (OEE) hesaplamak veya kestirimci bakım yapabilmek için yalnızca makinelerin çalışıp çalışmadığını bilmek yetmez. Motor sıcaklıkları, titreşim analizleri ve anlık akım çekimleri gibi binlerce ham telemetri verisine ihtiyaç duyulur. Bu verileri geleneksel PLC hatlarını yormadan toplamak için kullanılan protokoller şunlardır:",
      "OPC UA (Open Platform Communications Unified Architecture): Platformdan bağımsız, nesne yönelimli ve dahili güvenlik (şifreleme ve sertifikasyon) katmanlarına sahip en yaygın endüstriyel standarttır.",
      "MQTT (Message Queuing Telemetry Transport): Düşük bant genişliği kullanan, yayınla-abone ol (publish-subscribe) modeline dayalı hafif bir nesnelerin interneti (IoT) protokolüdür. Fabrikadaki binlerce cihazdan buluta veri taşımak için idealdir.",
      "\"Veri odaklı otomasyon, geleneksel kontrol sistemlerini çöpe atmak demek değildir; aksine, mevcut mekanik gücü akıllı veri katmanlarıyla donatarak operasyonel ömrü uzatmaktır.\"",
      "2. Kenar İşleme (Edge Computing) Neden Zorunludur?",
      "Tüm ham verileri işlenmeden doğrudan buluta göndermek, yüksek bant genişliği maliyetine ve bulut tarafında aşırı yüklenmeye sebep olur. En önemlisi, internet kesildiğinde kontrol döngülerinin durmasına yol açar. Bu nedenle Edge computing (Kenar işleme) mimarisini kullanıyoruz:",
      "Veri Filtreleme ve Anlamlandırma: Sahadaki kenar cihazları (örneğin Nechh Edge Node), sensörlerden gelen gürültülü veriyi yerinde temizler, saniyede 1000 okuma yerine sadece anlamlı trend değişimlerini veya anomalileri yukarıya iletir.",
      "Yerel Kontrol (Local Autonomy): Kritik güvenlik kararları buluta sorulmadan, doğrudan saha seviyesindeki kenar işlemci üzerinde milisaniyeler içerisinde verilir. İnternet hattı kopsa bile üretim hattı güvenle çalışmaya devam eder.",
      "3. Kestirimci Bakım ve Makine Öğrenmesi",
      "Fabrikalarda beklenmeyen duruşların (downtime) dakikası binlerce dolara mal olabilir. Veri odaklı mimarilerin en büyük getirisi, arıza gerçekleşmeden önce bunu tahmin edebilmesidir. Motor milindeki milimetrik bir balanssızlık veya rulmandaki aşınma, insan kulağının duyamayacağı frekansta titreşim veya akım dalgalanması yaratır. Kenar cihazlarında çalışan anomali tespit algoritmaları, bu mikroskobik sapmaları tespit ederek bakım ekiplerine önceden uyarı gönderir.",
      "Nechh Robotics Otomasyon Çözümleri",
      "Mevcut SCADA ve PLC altyapılarınızı değiştirmeden, paralel veri toplama (shadowing) yöntemleriyle fabrikalarınızı akıllı hale getiriyoruz. Geliştirdiğimiz donanımlar, Siemens, Beckhoff ve Schneider gibi endüstri lideri sistemlerle OPC UA ve Modbus TCP üzerinden tam uyumlu entegre olabilmektedir.",
      "Endüstriyel otomasyonda rekabet avantajı, artık sadece makinelerin ne kadar hızlı döndüğüyle değil, o makinelerden ne kadar anlamlı veri çıkarabildiğinizle ölçülüyor. Açık protokoller, kenar işleme kapasitesi ve kestirimci bakım entegrasyonuyla donatılmış veri odaklı otomasyon hatları, yarının akıllı üretim tesislerinin omurgasını oluşturmaya devam edecektir."
    ]
  },
  {
    "slug": "blog-doctor-referral-network",
    "path": "/blog/blog-doctor-referral-network",
    "title": "Doktor-Doktor Yönlendirme Ağları Hasta Bekleme Sürelerini Nasıl Kısaltır?",
    "category": "HEALTH TECHNOLOGY",
    "excerpt": "Sağlık sistemlerinin en büyük verimsizliklerinden biri, hastaların doğru uzman hekime ulaşma sürecinde yaşadığı zaman kayıplarıdır. Yanlış uzmana yönlendirilen veya sevk zincirinde kaybolan bir hasta, teşhis ve tedavi aş",
    "body": [
      "Sağlık sistemlerinin en büyük verimsizliklerinden biri, hastaların doğru uzman hekime ulaşma sürecinde yaşadığı zaman kayıplarıdır. Yanlış uzmana yönlendirilen veya sevk zincirinde kaybolan bir hasta, teşhis ve tedavi aşamasına geçene kadar haftalar, hatta bazen aylar kaybedebilir. Geleneksel sevk yöntemleri, gayriresmi mesajlaşma grupları (WhatsApp vb.) ve telefon trafiği bu sorunu çözmekte yetersiz kalmaktadır.",
      "Nechh Robotics bünyesinde geliştirilen HeliaLoop , doktorlar ve klinisyenler arasında kapalı devre ve güvenli bir yönlendirme ağı kurarak bu süreçleri kökten değiştiriyor. Bu yazımızda, dijital sevk ağlarının hasta bekleme sürelerini nasıl kısalttığını ve operasyonel verimliliği nasıl artırdığını inceliyoruz.",
      "1. Yanlış Yönlendirmenin Maliyeti",
      "Primer bakım hekimleri veya pratisyen hekimler, karmaşık vakalarda hastaları bir uzmana sevk etmek durumundadır. Ancak hekimler, sevk edecekleri uzmanın o anki yoğunluğunu, tedavi ettiği spesifik vaka türlerini ve güncel müsaitlik durumunu her zaman bilemezler. Sonuç olarak:",
      "Hasta, sevk edildiği klinikte günler sonrasına randevu alabilir.",
      "Görüşme sağlandığında, uzmanın o alanda spesifikleşmediği anlaşılabilir (örneğin, el cerrahisi yerine genel ortopediye gitmek).",
      "Tüm bu döngü hastanın tedaviye başlama süresini uzatırken, uzman hekimlerin zamanını da verimsiz kullanmasına yol açar.",
      "\"Klinik yönlendirmede verimlilik, yalnızca bir hastayı diğer hekime göndermek değil; doğru hastayı, doğru zamanda, gerekli tıbbi geçmişle birlikte doğru uzmana ulaştırmaktır.\"",
      "2. Canlı Müsaitlik ve Anlık Randevu Koordinasyonu",
      "HeliaLoop, ağa dahil olan tüm sağlık profesyonellerinin çalışma takvimini ve alt uzmanlık alanlarını sisteme entegre eder. Yönlendirmeyi yapan hekim, sistem üzerinden doğrudan ilgili uzmanın takvimini görüntüleyerek hastaya uygun saatte randevu atayabilir. Bu durum, hastanın sekreterlik aralarında veya randevu sistemlerinde kaybolmasını önler. Canlı randevu senkronizasyonu sayesinde sevk süreleri ortalama %68 oranında kısalmaktadır.",
      "3. Hasta ile Birlikte Taşınan Klinik Bağlam (Context Sharing)",
      "Bir uzmana giden hasta, tıbbi geçmişini, tahlillerini ve önceki hekimin notlarını çoğu zaman eksik veya sözlü olarak aktarır. HeliaLoop platformu, hekimler arasında güvenli ve KVKK/GDPR uyumlu tıbbi not ve dosya paylaşımına izin verir. Uzman hekim, hasta daha kliniğe girmeden önce tüm klinik bağlama hakim olur. Bu sayede ilk muayenede zaman kaybedilmez ve tetkiklerin tekrarlanması gerekmez.",
      "HeliaLoop'un Bekleme Sürelerine Etkisi (Analitik Veri)",
      "Yapılan pilot çalışmalarda, geleneksel yöntemlerle sevk edilen hastaların uzmana ulaşma süresi ortalama 14 iş günüyken, HeliaLoop yönlendirme ağı kullanılan kliniklerde bu süre 2.4 iş gününe inmiştir. Ayrıca gereksiz tetkik tekrarlarında %40 azalma kaydedilmiştir.",
      "4. Otomatik Takip ve Geri Bildirim Döngüsü",
      "Yönlendirmeyi başlatan hekim, sevk ettiği hastanın tedaviye başlayıp başlamadığını, uzmanın teşhisini ve tedavi sürecini ağ üzerinden izleyebilir. Bu kapalı döngü iletişim (closed-loop referral), hastanın tedavi sürecinden kopmasını engeller ve klinikler arasındaki iş birliğini güçlendirir.",
      "Sağlık teknolojilerinde dijitalleşme sadece telesağlık veya robotik cerrahiden ibaret değildir. Klinik koordinasyonun ve hekimler arası iletişimin dijital bir altyapıya taşınması, sağlık hizmetinin kalitesini ve hızını doğrudan artırır. Nechh Robotics olarak HeliaLoop ile hastaların doğru tedaviye en kısa sürede ulaşmasını sağlamaktan gurur duyuyoruz."
    ]
  },
  {
    "slug": "blog-dora-nedir-finansal-sektorde-dijital-operasyonel-dayaniklilik",
    "path": "/blog/blog-dora-nedir-finansal-sektorde-dijital-operasyonel-dayaniklilik",
    "title": "DORA Nedir? Finansal Sektörde Dijital Operasyonel Dayanıklılık",
    "category": "DORA",
    "excerpt": "Dijital Operasyonel Dayanıklılık Yasası , bilinen adıyla DORA , Avrupa finansal sektöründe bilgi ve iletişim teknolojileri kaynaklı kesintilere, siber olaylara ve üçüncü taraf hizmet risklerine karşı dayanıklılığı güçlen",
    "body": [
      "Dijital Operasyonel Dayanıklılık Yasası , bilinen adıyla DORA , Avrupa finansal sektöründe bilgi ve iletişim teknolojileri kaynaklı kesintilere, siber olaylara ve üçüncü taraf hizmet risklerine karşı dayanıklılığı güçlendiren AB düzenlemesidir. DORA, finansal kuruluşların kritik hizmetleri kesinti sırasında sürdürebilmesini ve olay sonrasında kontrollü biçimde toparlanabilmesini hedefleyen bir yönetişim çerçevesi sunar [3] .",
      "DORA’nın önemi, dijital hizmetlerin finansal ürünlerin ayrılmaz bir parçası hâline gelmesinden kaynaklanır. Bankacılık, ödeme, sigorta, yatırım ve diğer finansal hizmetlerde uygulamalar, veri merkezleri, bulut hizmetleri, ağlar ve dış kaynak sağlayıcılar birbirine bağlıdır. Bu bağlantı verimlilik sağlarken tek bir teknoloji arızasının geniş bir operasyonel etki yaratabilmesi anlamına da gelir.",
      "Avrupa Komisyonu, DORA kapsamında yetkili makamların ve piyasa katılımcılarının yükümlülüklerini nasıl yerine getireceğini ayrıntılandıran uygulama ve devredilen tasarrufların kabul edilebileceğini belirtmektedir [3] . Düzenleme; ICT risk yönetimi, olay yönetimi ve raporlama, dayanıklılık testleri, bilgi paylaşımı ve ICT üçüncü taraf risklerinin yönetimi gibi alanlarda daha sistematik bir yaklaşım gerektirir.",
      "DORA’yı yalnızca teknik bir güvenlik standardı olarak görmek eksik olur. Yönetim organının risk iştahını belirlemesi, kritik veya önemli işlevleri tanımlaması, tedarikçi sözleşmelerini gözden geçirmesi ve test sonuçlarını izlemesi gerekir. DORA uyumu, teknolojiyi iş sürekliliği ve müşteri güveniyle birleştiren bir kurumsal dayanıklılık programı olarak kurgulandığında anlamlı sonuç üretir.",
      "[3] European Commission — Digital Operational Resilience Regulation (DORA) \n \n Yayın notu: Bu içerik genel bilgilendirme amaçlıdır; hukuki görüş veya şirkete özel uyum değerlendirmesi değildir. Ürün kapsamı, ülke uygulaması ve yürürlükteki ikincil düzenlemeler yayın öncesinde güncel olarak kontrol edilmelidir."
    ]
  },
  {
    "slug": "blog-dora-uyum-sureci-envanterden-dayaniklilik-testine",
    "path": "/blog/blog-dora-uyum-sureci-envanterden-dayaniklilik-testine",
    "title": "DORA Uyum Süreci: Envanterden Dayanıklılık Testine",
    "category": "DORA",
    "excerpt": "DORA uyumunun başlangıç noktası kurumun teknoloji ve hizmet envanteridir. Hangi uygulamaların, altyapı bileşenlerinin, verilerin ve tedarikçilerin kritik işlevleri desteklediği belirlenmelidir. Envanter yalnızca satın al",
    "body": [
      "DORA uyumunun başlangıç noktası kurumun teknoloji ve hizmet envanteridir. Hangi uygulamaların, altyapı bileşenlerinin, verilerin ve tedarikçilerin kritik işlevleri desteklediği belirlenmelidir. Envanter yalnızca satın alınmış yazılımları değil; bağımlılıkları, veri akışlarını, erişim ayrıcalıklarını ve kurtarma seçeneklerini de göstermelidir.",
      "İkinci adım ICT risk yönetimi çerçevesinin kurulmasıdır. Risk iştahı, sorumluluklar, kontrol hedefleri, izleme göstergeleri ve istisna yönetimi yazılı hâle getirilmelidir. Kritik hizmetlerde tek hata noktaları, yetersiz yedeklilik, güncel olmayan varlık kayıtları, zayıf erişim kontrolleri ve tedarikçi bağımlılıkları öncelikli inceleme alanlarıdır.",
      "Üçüncü adım olay yönetimi ve raporlamadır. Bir olayın nasıl tespit edileceği, kim tarafından sınıflandırılacağı, hangi eşiklerde yönetime ve yetkili makamlara bildirileceği önceden belirlenmelidir. Olay kayıtlarının yalnızca teknik loglardan oluşması yeterli değildir; etkilenen hizmet, müşteri etkisi, kararlar, iletişimler ve düzeltici faaliyetler de kayıt altına alınmalıdır.",
      "Dördüncü adım test ve iyileştirmedir. Kurtarma tatbikatları, senaryo testleri ve teknik güvenlik testleri, kağıt üzerindeki planların gerçekten çalışıp çalışmadığını gösterir. Testler tamamlandıktan sonra bulgular sorumlulara atanmalı, hedef tarih belirlenmeli ve tekrar test edilmelidir. Avrupa Komisyonu DORA için uygulama ve devredilen tasarrufların yayımlandığını ve bu düzenlemelerin uyum yöntemini ayrıntılandırdığını belirtmektedir [3] . Bu nedenle kurumlar ana düzenlemenin yanı sıra güncel ikincil düzenlemeleri ve yetkili makam duyurularını da takip etmelidir.",
      "[3] European Commission — Digital Operational Resilience Regulation (DORA) \n \n Yayın notu: Bu içerik genel bilgilendirme amaçlıdır; hukuki görüş veya şirkete özel uyum değerlendirmesi değildir. Ürün kapsamı, ülke uygulaması ve yürürlükteki ikincil düzenlemeler yayın öncesinde güncel olarak kontrol edilmelidir."
    ]
  },
  {
    "slug": "blog-doranin-kritik-gereksinimleri-yonetim-test-ve-ucuncu-taraflar",
    "path": "/blog/blog-doranin-kritik-gereksinimleri-yonetim-test-ve-ucuncu-taraflar",
    "title": "DORA’nın Kritik Gereksinimleri: Yönetim, Test ve Üçüncü Taraflar",
    "category": "DORA",
    "excerpt": "DORA uyumunda üç gereksinim alanı öne çıkar: yönetişim, test edilebilir dayanıklılık ve ICT üçüncü taraf riskinin kontrolü . Bu alanlar birbirinden bağımsız değildir. Yönetim kurulunun kritik hizmetleri ve risk iştahını ",
    "body": [
      "DORA uyumunda üç gereksinim alanı öne çıkar: yönetişim, test edilebilir dayanıklılık ve ICT üçüncü taraf riskinin kontrolü . Bu alanlar birbirinden bağımsız değildir. Yönetim kurulunun kritik hizmetleri ve risk iştahını anlamaması, testlerin yanlış önceliklendirilmesine; tedarikçi bağımlılığının görünür olmaması ise kurtarma planlarının gerçekçi olmamasına yol açabilir.",
      "Yönetişim bakımından bilgi teknolojileri ve risk ekipleri arasındaki sınırlar netleştirilmelidir. Yönetim organı, teknoloji riskini yalnızca CIO veya bilgi güvenliği birimine devredilen bir operasyon olarak değil, kurumun finansal ve itibar riskinin bir parçası olarak izlemelidir. Karar tutanakları, risk kabul kayıtları, önemli açıklar ve düzeltme planları düzenli olarak üst yönetime taşınmalıdır.",
      "Test bakımından temel soru “Sistemimiz çalışıyor mu?” değil, “Kritik hizmetimiz kesildiğinde kabul edilebilir sürede nasıl devam eder ve toparlanırız?” olmalıdır. Bu yaklaşım, yedekleme varlığını kontrol etmenin ötesine geçer; yedekten geri dönme süresi, veri kaybı toleransı, manuel çalışma prosedürleri, iletişim planı ve tedarikçi desteği birlikte sınanır.",
      "Üçüncü taraf riskinde sözleşmeler ve operasyonel gerçeklik birlikte değerlendirilmelidir. Hizmet seviyeleri, olay bildirimi, denetim hakkı, alt yüklenici kullanımı, veri konumu, çıkış planı ve hizmet sonlandırma senaryoları açık biçimde düzenlenmelidir. Komisyonun DORA uygulama tasarruflarıyla yükümlülüklerin ayrıntılarını geliştirmesi, sözleşme ve kontrol setlerinin güncel tutulmasını önemli hâle getirir [3] .",
      "DORA’nın gerçek başarısı, denetim gününde belge göstermekten çok, kritik bir kesinti sırasında hizmeti kontrollü biçimde sürdürebilmektir. Bu nedenle uyum programı, teknik kontrolleri iş etkisiyle ilişkilendiren ve her test döngüsünde öğrenen bir yönetim sistemi olarak ele alınmalıdır.",
      "[3] European Commission — Digital Operational Resilience Regulation (DORA) \n \n Yayın notu: Bu içerik genel bilgilendirme amaçlıdır; hukuki görüş veya şirkete özel uyum değerlendirmesi değildir. Ürün kapsamı, ülke uygulaması ve yürürlükteki ikincil düzenlemeler yayın öncesinde güncel olarak kontrol edilmelidir."
    ]
  },
  {
    "slug": "blog-efatura-e-ar%C5%9Fiv-farklari",
    "path": "/blog/blog-efatura-e-ar%C5%9Fiv-farklari",
    "title": "E-Fatura ve E-Arşiv Arasındaki Farklar [Karşılaştırma Tablosu]",
    "category": "E-INVOICING",
    "excerpt": "E-fatura, belirli şirketler arası elektronik fatura formatıdır; e-arşiv ise B2C ve küçük B2B işlemlerinin elektronik arşiv versiyonudur. Bu iki sistem arasındaki fark, hangi müşteriye ve hangi işlem türüne göre kullanıla",
    "body": [
      "E-fatura, belirli şirketler arası elektronik fatura formatıdır; e-arşiv ise B2C ve küçük B2B işlemlerinin elektronik arşiv versiyonudur.",
      "Bu iki sistem arasındaki fark, hangi müşteriye ve hangi işlem türüne göre kullanılacağını belirler.",
      "Özelliklere göre e-fatura ve e-arşiv farklarını net bir tabloyla gösteriyoruz. Bu tablo, işletmenizin doğru seçimi yapmasını kolaylaştırır.",
      "Zorunlu olanlar, müşteri tipi, entegrasyon, maliyet ve arşivleme koşulları arasında karşılaştırma yapmak önemlidir.",
      "Hangi Durumda Hangisi Kullanılır?",
      "Büyük şirkete satışta e-fatura, perakende satışta e-arşiv kullanılır. Çoğu zaman her iki sistem de birlikte çalıştırılabilir.",
      "Senaryolar üzerinden doğru yöntem seçimini aktarıyoruz.",
      "Önce e-fatura mı yoksa e-arşiv mi geçişi gibi kararları işletmenizin ticari modeline göre almak gerekir.",
      "Muhasebe program uyumu ve personel eğitimi, geçiş stratejisinin önemli parçalarıdır.",
      "E-fatura entegrasyon maliyeti, e-arşiv portal kullanım ücreti ve yıllık toplam maliyeti karşılaştırıyoruz.",
      "ROI hesabı, doğru seçimi yaparken göz önünde bulundurulması gereken bir hesaplamadır.",
      "E-fatura/e-arşiv geçiş danışmanlığı.",
      "Bu konuda hızlı destek almak veya uyum sürecinizi hızlandırmak için lütfen sayfayı ziyaret edin."
    ]
  },
  {
    "slug": "blog-efatura-gecis-rehberi-2026",
    "path": "/blog/blog-efatura-gecis-rehberi-2026",
    "title": "E-Fatura Geçiş Rehberi 2026: Kimler Zorunlu, Nasıl Başvurulur?",
    "category": "E-INVOICING",
    "excerpt": "E-Fatura Zorunluluğu Kimleri Kapsar? 2024 cirosu 3 milyon TL üzeri olan işletmeler, kamu kurumlarına mal veya hizmet satanlar ve belirli sektörler e-fatura zorunluluğuna dahildir. Gönüllü geçiş hakkı ve muafiyet durumlar",
    "body": [
      "E-Fatura Zorunluluğu Kimleri Kapsar?",
      "2024 cirosu 3 milyon TL üzeri olan işletmeler, kamu kurumlarına mal veya hizmet satanlar ve belirli sektörler e-fatura zorunluluğuna dahildir.",
      "Gönüllü geçiş hakkı ve muafiyet durumları da şirketlerin doğru seçimi yapmasını sağlar.",
      "E-Fatura vs E-Arşiv Fatura Farkı",
      "E-fatura belirli müşterilere, e-arşiv ise B2C ve küçük B2B işlemlerine uygulanır. Hangisinin gerekli olduğunu doğru belirlemek önemlidir.",
      "Bazı işletmeler için her iki sistemi birden kullanmak en uygun çözümdür.",
      "Mali mühür başvurusu, entegrasyon seçimi, test ortamında deneme ve canlı kullanıma geçiş aşamaları e-fatura sürecinin temel adımlarıdır.",
      "Doğru entegrasyon seçimi, geçiş sürecinin hızını ve maliyetini doğrudan etkiler.",
      "Entegrasyon Yöntemleri Karşılaştırması",
      "GİB portalı ücretsiz ve manuel, özel entegrasyon daha hızlı ama maliyetli, hizmet sağlayıcı orta maliyetli ve destekli bir seçenektir.",
      "Her yöntemin avantajları ve dezavantajları, işletmenin büyüklüğüne ve teknik altyapısına göre değişir.",
      "Mali mühür başvuru gecikmesi, entegrasyon hataları, format uyumsuzluğu ve muhasebe programı sorunları en sık rastlanan problemlerdir.",
      "İyi planlanmış bir geçiş süreci, bu sorunların çoğunu önceden ortadan kaldırabilir.",
      "E-fatura geçişinizi sorunsuz tamamlayın.",
      "Bu konuda hızlı destek almak veya uyum sürecinizi hızlandırmak için lütfen sayfayı ziyaret edin."
    ]
  },
  {
    "slug": "blog-embedded-systems-reliability",
    "path": "/blog/blog-embedded-systems-reliability",
    "title": "Sağlık Cihazlarında Gömülü Sistemler: Güvenilirlik ve Gerçek Zamanlılık",
    "category": "ENGINEERING",
    "excerpt": "Akıllı saatlerden yoğun bakım ünitelerindeki karmaşık monitörlere ve cerrahi robotlara kadar, tıbbi cihazların tamamı gömülü sistem mimarilerine dayanır. Tıbbi cihaz tasarımları, tüketici elektroniği projelerinden çok fa",
    "body": [
      "Akıllı saatlerden yoğun bakım ünitelerindeki karmaşık monitörlere ve cerrahi robotlara kadar, tıbbi cihazların tamamı gömülü sistem mimarilerine dayanır. Tıbbi cihaz tasarımları, tüketici elektroniği projelerinden çok farklı ve sıkı gereksinimlere sahiptir. Bir akıllı telefondaki mikrosaniyelik gecikme kullanıcı için önemsizken, kritik bir sağlık cihazındaki gecikme veya sistem kilitlenmesi insan hayatını doğrudan tehlikeye atabilir.",
      "Nechh Robotics olarak geliştirdiğimiz donanım ve yazılım bileşenlerinde gerçek zamanlılık (real-time execution) ve hata toleransı (fault tolerance) parametrelerini tasarımın en temel taşı kabul ediyoruz. Bu yazıda tıbbi ve endüstriyel standartlarda gömülü sistemlerin nasıl tasarlanması gerektiğini detaylandırıyoruz.",
      "1. Gerçek Zamanlı İşletim Sistemleri (RTOS) Nedir?",
      "Geleneksel işletim sistemleri (Windows, macOS veya standart Linux), \"en iyi çaba\" (best-effort) prensibiyle çalışır. Yani işlemci, görevleri önceliğe göre sıraya koysa da bir görevin tam olarak ne zaman tamamlanacağını milisaniyelik hassasiyetle garanti edemez. Sağlık cihazlarında ise RTOS (Real-Time Operating System) tercih edilir.",
      "Belirlenimcilik (Determinism): Sistemin bir girdiye vereceği yanıt süresi her zaman sabittir ve önceden hesaplanabilir.",
      "Kesme Gecikmesi (Interrupt Latency): Kalp ritmi anomalisi gibi dış bir sensör uyarısı geldiğinde, işlemcinin mevcut işini bırakıp bu uyarıya dönme süresi mikrosaniyeler seviyesindedir.",
      "Öncelikli Zamanlama (Preemptive Scheduling): Kritik öneme sahip görevler, o an işlemcide koşan daha düşük öncelikli işleri anında durdurabilir.",
      "\"Tıbbi standartlarda bir gömülü sistemde hata, yalnızca yanlış veri üretmek değildir; doğru veriyi gecikmeli üretmek de ölümcül bir hatadır.\"",
      "2. Watchdog (Bekçi Köpeği) ve Donanımsal Hata Toleransı",
      "Elektromanyetik gürültü, statik elektrik veya yazılımdaki öngörülemeyen bir durum nedeniyle mikrodenetleyiciler kilitlenebilir. Nechh Robotics donanım tasarımlarında iki katmanlı güvenlik mekanizması uygular:",
      "İç Watchdog (Independent Watchdog - IWDG): İşlemcinin kendi iç saatinden bağımsız çalışan bir sayaçtır. Yazılım belirli aralıklarla bu sayacı \"beslemezse\" (resetlemezse), işlemci kilitlenmiş kabul edilir ve sistem donanımsal olarak baştan başlatılır.",
      "Dış Watchdog (External Watchdog IC): Ana işlemcinin kilitlenmesini izleyen harici bir mikro çiptir. Ana işlemcinin güç yönetiminde veya iç saatinde bir sorun yaşansa dahi, harici çip ana kartın gücünü kesip açarak cihazın güvenli moda (failsafe mode) geçmesini sağlar.",
      "3. Donanım ve Yazılımın Birlikte Tasarımı (Co-design)",
      "Maksimum güvenilirlik elde etmek için yazılımı hazır donanıma uydurmak yerine, devre şemasını ve kart yollarını (PCB) yazılım mimarisiyle eş zamanlı tasarlıyoruz. Bu süreçte dikkat ettiğimiz ana unsurlar:",
      "Sinyal Bütünlüğü (Signal Integrity): Analog tıbbi sensörlerden gelen hassas verilerin, yüksek frekanslı işlemci hatlarından etkilenmemesi için PCB üzerinde izolasyon bariyerleri oluşturulması.",
      "Bellek Koruması (MPU - Memory Protection Unit): Bellek adres alanlarının birbirinden izole edilmesi. Böylece sensör okuyan kod bloğundaki bir yazılımsal taşma, cihazın ekranını veya haberleşme birimini yöneten kod alanını çökerterek kilitlenmeye yol açamaz.",
      "Nechh Robotics Tasarım Standartları",
      "Geliştirdiğimiz tıbbi ve endüstriyel prototipler, IEC 62304 (Tıbbi Cihaz Yazılım Standartları) ve EN 60601 (Elektrikli Tıbbi Ekipman Güvenliği) standartlarına uygun mimari kılavuzlar temel alınarak tasarlanır. Devre kartlarımızda çift besleme hattı ve izole güç katmanları yer almaktadır.",
      "4. Güvenli Firmware Güncellemesi (Secure OTA Update)",
      "Sağlık teknolojilerinde cihazların sahada güncellenmesi gerekebilir. Ancak kablosuz (OTA) güncelleme, siber güvenlik risklerini de beraberinde getirir. Cihazlarımızın yazılım güncelleme altyapısında şifreli ve imzalı paket kontrolü uygulanır. İmzası doğrulanmayan hiçbir yazılım paketi yüklenmez. Güncelleme sırasında güç kesilse dahi, bootloader yedek bellek alanındaki çalışan son kararlı sürümü otomatik olarak geri yükler (dual-partition rollback).",
      "Donanım kalitesi ve yazılım güvenilirliği, modern sağlık cihazlarının geleceğini belirlemektedir. Nechh Robotics olarak, mikrosaniyelerin kritik olduğu tüm kontrol mimarilerinde sıfır hata toleransıyla mühendislik çözümleri üretmeye ve yerli teknolojiyi dünya standartlarına taşımaya devam edeceğiz."
    ]
  },
  {
    "slug": "blog-eticaret-gdpr-uyum",
    "path": "/blog/blog-eticaret-gdpr-uyum",
    "title": "E-Ticaret Siteleri İçin GDPR Uyum Rehberi",
    "category": "DATA PROTECTION",
    "excerpt": "E-ticaret siteleri ödeme, kargo ve müşteri verilerini işler. AB vatandaşlarına satıyorsa GDPR uyumu zorunludur. Pazarlama verileri ve çerez kullanımı, e-ticaret sitelerinin en kritik GDPR risk alanlarıdır. E-Ticaret Site",
    "body": [
      "E-ticaret siteleri ödeme, kargo ve müşteri verilerini işler. AB vatandaşlarına satıyorsa GDPR uyumu zorunludur.",
      "Pazarlama verileri ve çerez kullanımı, e-ticaret sitelerinin en kritik GDPR risk alanlarıdır.",
      "E-Ticaret Sitesinde Olması Gereken 8 GDPR Öğesi",
      "Privacy policy, çerez politikası, aydınlatma metni, veri saklama süreleri ve müşteri hakları gibi maddeler e-ticaret uyumunun temelini oluşturur.",
      "Bu öğelerin eksiksiz olması, hem denetim hem de müşteri güveni açısından çok önemlidir.",
      "Zorunlu çerezler ile izin gerektiren çerezleri doğru sınıflandırmak, çerez bannerı ve onay mekanizmasının yasalara uygun olmasını sağlar.",
      "AB ziyaretçileri için açık rıza alınması ve bu rızanın kaydının tutulması, GDPR uyumunun kilit adımıdır.",
      "Ödeme sağlayıcı seçimi, kredi kartı verilerinin işlenmesi ve 3D Secure kullanımı ödeme sürecindeki temel güvenlik gereksinimleridir.",
      "Muhasebe kayıtları ve fatura bilgileri de doğru şekilde saklanmalı ve erişim kontrolüne tabi tutulmalıdır.",
      "Kontrol listesi, e-ticaret sitesinin GDPR uyumunu adım adım doğrulamanızı sağlar. Her maddeyi gözden geçirin ve eksikleri tamamlayın.",
      "Sık yapılan hatalar arasında yanlış çerez sınıflandırması ve erişim hakkı taleplerine geç yanıt verme yer alır.",
      "E-ticaret sitenizin GDPR uyumunu ücretsiz değerlendirelim.",
      "Bu konuda hızlı destek almak veya uyum sürecinizi hızlandırmak için lütfen sayfayı ziyaret edin."
    ]
  },
  {
    "slug": "blog-eudr-nedir-ormansizlasmasiz-urunler-icin-yeni-cerceve",
    "path": "/blog/blog-eudr-nedir-ormansizlasmasiz-urunler-icin-yeni-cerceve",
    "title": "EUDR Nedir? Ormansızlaşmasız Ürünler İçin Yeni Çerçeve",
    "category": "EUDR",
    "excerpt": "Avrupa Birliği’nin Ormansızlaşmasız Ürünler Tüzüğü, kısaca EUDR , AB’de tüketilen veya AB’den ihraç edilen belirli ürünlerin ormansızlaşma ve orman bozulmasına katkı sunmamasını amaçlar. Avrupa Komisyonu düzenlemenin ser",
    "body": [
      "Avrupa Birliği’nin Ormansızlaşmasız Ürünler Tüzüğü, kısaca EUDR , AB’de tüketilen veya AB’den ihraç edilen belirli ürünlerin ormansızlaşma ve orman bozulmasına katkı sunmamasını amaçlar. Avrupa Komisyonu düzenlemenin sera gazı emisyonlarını ve biyolojik çeşitlilik kaybını azaltmayı hedeflediğini belirtmektedir [2] . Bu yaklaşım, ürün uyumunu yalnızca ürünün fiziksel özellikleriyle değil, üretildiği arazi ve tedarik zinciriyle birlikte ele alır.",
      "EUDR’nin odaklandığı başlıca emtialar sığır, odun, kakao, soya, palm yağı, kahve ve kauçuktur . Bu emtialardan türeyen deri, çikolata, lastik ve mobilya gibi ürünler de kapsamda olabilir [2] . Bu nedenle bir şirket doğrudan tarımsal emtia ithal etmese bile, satın aldığı ara malı veya bitmiş ürün nedeniyle EUDR kapsamına girebilir. Ürün kapsamı, ilgili mevzuat ekleri ve ürün sınıflandırması üzerinden dikkatle kontrol edilmelidir.",
      "EUDR’nin temel mantığı “ürün nerede ve hangi koşullarda üretildi?” sorusuna kanıtlanabilir bir yanıt vermektir. AB pazarına ürün sunan veya AB’den ihraç eden işletmeci ve tacirler, ürünlerin yakın zamanda ormansızlaştırılmış arazilerden gelmediğini ve orman bozulmasına katkıda bulunmadığını gösterebilmelidir [2] . Bu, yalnızca tedarikçiden alınan genel bir uygunluk beyanıyla sınırlı olmayan, izlenebilirlik ve risk değerlendirmesi gerektiren bir süreçtir.",
      "EUDR hazırlığı; ürün ağacının çıkarılması, tedarikçi ve menşe ülke envanterinin oluşturulması, coğrafi konum verisinin toplanması, hukuka uygunluk belgelerinin değerlendirilmesi ve risk azaltma adımlarının belgelendirilmesiyle başlamalıdır. Böylece sürdürülebilirlik iddiası pazarlama söyleminden çıkar, veri ve kanıt temelli bir ürün uygunluğu sistemine dönüşür.",
      "[2] European Commission — Regulation on Deforestation-free Products \n \n Yayın notu: Bu içerik genel bilgilendirme amaçlıdır; hukuki görüş veya şirkete özel uyum değerlendirmesi değildir. Ürün kapsamı, ülke uygulaması ve yürürlükteki ikincil düzenlemeler yayın öncesinde güncel olarak kontrol edilmelidir."
    ]
  },
  {
    "slug": "blog-eudr-uyum-sureci-izlenebilirlikten-durum-tespitine",
    "path": "/blog/blog-eudr-uyum-sureci-izlenebilirlikten-durum-tespitine",
    "title": "EUDR Uyum Süreci: İzlenebilirlikten Durum Tespitine",
    "category": "EUDR",
    "excerpt": "EUDR uyum sürecinin ilk aşaması ürün kapsamının belirlenmesidir. Şirketler satış ve satın alma kataloglarını ilgili ürün kodlarıyla eşleştirmeli; hammaddeden nihai ürüne kadar hangi kalemlerin EUDR ile ilişkilendiğini or",
    "body": [
      "EUDR uyum sürecinin ilk aşaması ürün kapsamının belirlenmesidir. Şirketler satış ve satın alma kataloglarını ilgili ürün kodlarıyla eşleştirmeli; hammaddeden nihai ürüne kadar hangi kalemlerin EUDR ile ilişkilendiğini ortaya koymalıdır. Bu analiz yapılmadan başlatılan tedarikçi anketleri, hem gereksiz veri talebine hem de kritik ürünlerin atlanmasına neden olabilir.",
      "İkinci aşama tedarik zincirinin üretim noktasına kadar izlenmesidir. EUDR bağlamında tedarikçi adı ve ülke bilgisi tek başına yeterli olmayabilir. Üretimin gerçekleştiği arazinin coğrafi konumu, ürünün üretim tarihi, ilgili emtianın türü ve yasal uygunlukla ilgili kanıtlar gibi bilgilerin bir araya getirilmesi gerekir. Avrupa Komisyonu, EUDR’nin uygulanması için rehberler, bilgi sistemi, sıkça sorulan sorular ve sektör kaynakları yayımlamaktadır [2] .",
      "Üçüncü aşama durum tespiti ve risk değerlendirmesidir. Şirket, elde ettiği veriler ışığında ormansızlaşma, orman bozulması ve üretimin gerçekleştiği ülkedeki hukuki riskleri değerlendirmelidir. Risk yüksekse, ek belge istemek, bağımsız doğrulama yapmak, saha değerlendirmesi gerçekleştirmek veya tedarikçiyi değiştirmek gibi risk azaltma tedbirleri gündeme gelebilir. Burada önemli olan, risk azaltma kararının nedenini ve sonucunu izlenebilir biçimde kaydetmektir.",
      "Son olarak EUDR kontrolleri satın alma ve ürün serbest bırakma süreçlerine entegre edilmelidir. Uyum kontrolü tamamlanmamış bir ürünün sipariş, ithalat veya satış aşamasında otomatik olarak işaretlenmesi, insan hatasını azaltır. Sözleşmelere veri sağlama, değişiklik bildirme ve denetim hakkı eklenmesi de önemlidir. EUDR uyumu, bir defalık belge toplama kampanyasından ziyade tedarik zincirinin süreklilik arz eden bir yönetişim sürecidir.",
      "[2] European Commission — Regulation on Deforestation-free Products \n \n Yayın notu: Bu içerik genel bilgilendirme amaçlıdır; hukuki görüş veya şirkete özel uyum değerlendirmesi değildir. Ürün kapsamı, ülke uygulaması ve yürürlükteki ikincil düzenlemeler yayın öncesinde güncel olarak kontrol edilmelidir."
    ]
  },
  {
    "slug": "blog-gdpr-kapsam-testi",
    "path": "/blog/blog-gdpr-kapsam-testi",
    "title": "GDPR Uyumu Türkiye’de Zorunlu mu? Kapsam Testi [+Ücretsiz Kontrol Listesi]",
    "category": "DATA PROTECTION",
    "excerpt": "GDPR, Avrupa Birliği’nde kişisel verilerin korunmasına yönelik en güçlü veri koruma yasasıdır. Ekstraterritoryal etkisi nedeniyle AB vatandaşlarına hizmet veren şirketleri kapsar. Türkiye’de GDPR doğrudan bir kanun değil",
    "body": [
      "GDPR, Avrupa Birliği’nde kişisel verilerin korunmasına yönelik en güçlü veri koruma yasasıdır. Ekstraterritoryal etkisi nedeniyle AB vatandaşlarına hizmet veren şirketleri kapsar.",
      "Türkiye’de GDPR doğrudan bir kanun değildir, ancak AB ile iş yapan şirketler için uyum bir rekabet avantajı ve yasal gerekliliktir.",
      "AB vatandaşlarına hizmet sağlıyor musunuz? AB’de ofisiniz var mı? AB’den ziyaretçi alıyor musunuz? AB’li tedarikçi verisi işliyor musunuz? Çerez kullanımı AB ziyaretçisi için açık rıza gerektiriyor mu?",
      "Her evet cevabı, GDPR kapsamına girme ihtimalinizi artırır. Test, şirketinizin risk seviyesini belirlemenize yardımcı olur.",
      "GDPR Cezaları ve Türkiye’deki Risk",
      "GDPR cezaları, yıllık cirosunun %4’ü veya 20 milyon euroya kadar çıkabilir. Türkiye’de ise AB müşterisini kaybetme riski ve itibar maliyeti kadar ciddi bir maliyet vardır.",
      "Reputasyon zararı ve müşteri güveni kaybı, cezaların ötesinde şirket için uzun vadeli bir yük oluşturur.",
      "Veri işleme faaliyetlerini haritalayın, hukuki dayanakları belirleyin, veri sahibi haklarını tanımlayın ve privacy policy metnini hazırlayın.",
      "SCC düzenlemek, DPO atamak ve 72 saat ihlal bildirim planı hazırlamak GDPR uyum sürecinin kilit adımlarındandır.",
      "KVKK ve GDPR uyumunu aynı anda yönetmek mümkündür; ortak belgeler ve ayrı belgeler dengeli bir uyum stratejisi gerektirir.",
      "Nechh Robotics, çifte uyum için belge şablonları ve süreç haritaları sağlayarak uyuma hız kazandırır.",
      "GDPR kapsam testini ücretsiz yapın.",
      "Bu konuda hızlı destek almak veya uyum sürecinizi hızlandırmak için lütfen sayfayı ziyaret edin."
    ]
  },
  {
    "slug": "blog-is-kazasi-ilk-24-saat",
    "path": "/blog/blog-is-kazasi-ilk-24-saat",
    "title": "İş Kazası Sonrası İlk 24 Saatte Yapılması Gerekenler",
    "category": "WORKPLACE SAFETY",
    "excerpt": "Kaza anında yaralının durumu hızlıca değerlendirilmelidir. 112 aranmalı ve olay yeri güvenlik altına alınmalıdır. Tanık bilgileri, olay yeri fotoğrafları ve ilk yardım kayıtları doğru tutulmalıdır. SGK ve Bölge Çalışma M",
    "body": [
      "Kaza anında yaralının durumu hızlıca değerlendirilmelidir. 112 aranmalı ve olay yeri güvenlik altına alınmalıdır.",
      "Tanık bilgileri, olay yeri fotoğrafları ve ilk yardım kayıtları doğru tutulmalıdır.",
      "SGK ve Bölge Çalışma Müdürlüğü bildirim süreleri kısa ve kesinlikle uyulması gereken sürelerdir. Ölüm veya ağır yaralanma durumlarında savcılığa bildirim gerekmektedir.",
      "Denetim raporları ve tutanaklar, itiraz sürecinde önemli kanıtlardır.",
      "Olay yeri fotoğrafları, tanık ifadeleri, kaza raporu ve güvenlik kamera kayıtları belgelendirilmelidir.",
      "Bu belgeler, işverenin kazaya müdahale sürecini şeffaf şekilde göstermesini sağlar.",
      "İSG uzmanı ve işyeri hekimi raporları, kurula sunulmalı ve düzeltici faaliyet planı hazırlanmalıdır.",
      "Tekrar önleme önlemleri, benzer kazaların tekrarlanmaması için hayati önemdedir.",
      "Sık Yapılan Hatalar ve Ceza Riskleri",
      "Geç bildirim, eksik belgelendirme ve olay yerinin bozulması sık yapılan hatalardır. Bunlar ciddi ek cezalara yol açabilir.",
      "Çalışanların ifadelerinin doğru alınmaması, yasal süreçte itirazı zorlaştırır.",
      "İSG süreçlerinizi profesyonel yönetin.",
      "Bu konuda hızlı destek almak veya uyum sürecinizi hızlandırmak için lütfen sayfayı ziyaret edin."
    ]
  },
  {
    "slug": "blog-isg-denetimi-oncesi-kontrol-listesi",
    "path": "/blog/blog-isg-denetimi-oncesi-kontrol-listesi",
    "title": "İSG Denetimi Öncesi Yapılması Gerekenler [Kontrol Listesi]",
    "category": "WORKPLACE SAFETY",
    "excerpt": "İSG Denetimi Nedir ve Kimler Denetlenir? Çalışma ve Sosyal Güvenlik Bakanlığı, işyerlerinde düzenli olarak İSG denetimleri gerçekleştirir. Denetim sıklığı risk grubuna bağlıdır. Bildirimsiz denetimler, yüksek riskli sekt",
    "body": [
      "İSG Denetimi Nedir ve Kimler Denetlenir?",
      "Çalışma ve Sosyal Güvenlik Bakanlığı, işyerlerinde düzenli olarak İSG denetimleri gerçekleştirir. Denetim sıklığı risk grubuna bağlıdır.",
      "Bildirimsiz denetimler, yüksek riskli sektörlerde daha yaygındır. Hazır olmak cezadan kaçınmanın en hızlı yoludur.",
      "Denetimde Aranan 15 Temel Belge",
      "Risk değerlendirme raporları, acil durum planları, eğitim kayıtları ve makine kontrol raporları en çok sorulan belgelerdir.",
      "Olası eksikliklerin önceden tespit edilmesi, denetim sırasında işletmenin güvenini artırır.",
      "Denetim Öncesi 7 Günlük Hazırlık Planı",
      "Eksik belgelerin tespiti, güncellenmesi ve alan kontrolleri için 7 günlük bir plan oluşturun. Denetim günü hazırlıklar tamamlanmış olmalıdır.",
      "Son 1 gün içinde fiziksel alan kontrolü yapmak, eksik belgeleri tamamlamak açısından kritik bir adımdır.",
      "Denetim Sırasında Nelere Dikkat Edilmeli?",
      "Denetçiyle doğru iletişim kurmak, eksik belge durumunda ne yapılacağını bilmek ve tutanakları dikkatle okumak önemlidir.",
      "İtiraz hakkınızı gerektiğinde kullanmak için denetim sonuçlarını belgeleyin ve tarihleri kaydedin.",
      "Ceza varsa itiraz sürecinin nasıl işlediğini, düzeltme süresi ve tekrar denetim adımlarını açıklıyoruz.",
      "Denetim sonrası eylem planı hazırlamak, bir sonraki denetimde aynı hataların tekrarlanmamasını sağlar.",
      "İSG denetimine hazır mısınız? Ücretsiz eksiklik taraması yapalım.",
      "Bu konuda hızlı destek almak veya uyum sürecinizi hızlandırmak için lütfen sayfayı ziyaret edin."
    ]
  },
  {
    "slug": "blog-isg-risk-degerlendirme-raporu",
    "path": "/blog/blog-isg-risk-degerlendirme-raporu",
    "title": "İSG Risk Değerlendirme Raporu Nasıl Hazırlanır? [Ücretsiz Şablon]",
    "category": "WORKPLACE SAFETY",
    "excerpt": "Risk Değerlendirme Raporu Neden Zorunlu? 6331 sayılı İş Sağlığı ve Güvenliği Kanunu gereği risk değerlendirme raporu hazırlamak zorunludur. Raporda işyerindeki tüm tehlikeler ve riskler belgelenmelidir. Raporun geçerlili",
    "body": [
      "Risk Değerlendirme Raporu Neden Zorunlu?",
      "6331 sayılı İş Sağlığı ve Güvenliği Kanunu gereği risk değerlendirme raporu hazırlamak zorunludur. Raporda işyerindeki tüm tehlikeler ve riskler belgelenmelidir.",
      "Raporun geçerlilik süresi ve güncelleme sıklığı sektöre göre değişir. Güncel belge, denetimlerde en güçlü savunmalardan biridir.",
      "Risk Değerlendirme Metodolojisi",
      "Tehlike tanımlama, olasılık x şiddet riski analizi ve risk matrisi kullanımı, raporun temelini oluşturur.",
      "Kontrol önlemlerinin belirlenmesi, hangi risklerin kabul edilebilir olduğunu ve hangilerinin iyileştirilmesi gerektiğini gösterir.",
      "Sektöre Göre Risk Değerlendirme Örnekleri",
      "İnşaat, üretim, ofis ve sağlık sektörleri için farklı risk profilleri vardır. Her sektörün kendi risk kontrol planı bulunmalıdır.",
      "Örnek rapor formatlarıyla, raporun hangi başlıklar altında hazırlanacağını gösteriyoruz.",
      "Ücretsiz Şablon Kullanım Rehberi",
      "Excel şablonunun yapısını anlayarak, bölümlerin nasıl doldurulacağını adım adım gösteriyoruz.",
      "Şablonun her alanı, risk puanlama sistemine uygun şekilde doldurulmalıdır; bu sayede denetim ve uygulama kolaylaşır.",
      "Formalite icabı hazırlanan raporlar, güncel olmayan veriler veya çalışanların dahil edilmemesi hatalara neden olur.",
      "Raporu sadece yazılı belge olarak değil, uygulanan bir süreç olarak görmek gerekir.",
      "Ücretsiz İSG Risk Değerlendirme Şablonumuzu indirin.",
      "Bu konuda hızlı destek almak veya uyum sürecinizi hızlandırmak için lütfen sayfayı ziyaret edin."
    ]
  },
  {
    "slug": "blog-karbon-vergisi-donemi-cbam-sirket-stratejisini-nasil-degistiriyor",
    "path": "/blog/blog-karbon-vergisi-donemi-cbam-sirket-stratejisini-nasil-degistiriyor",
    "title": "Karbon Vergisi Dönemi: CBAM Şirket Stratejisini Nasıl Değiştiriyor?",
    "category": "CBAM",
    "excerpt": "“Karbon vergisi dönemi” ifadesi, CBAM bağlamında dikkatli kullanılmalıdır. CBAM, klasik anlamda her ithalata uygulanan tek oranlı bir vergi değil; kapsamdaki ürünlerin gömülü emisyonlarıyla bağlantılı bir karbon fiyatlan",
    "body": [
      "“Karbon vergisi dönemi” ifadesi, CBAM bağlamında dikkatli kullanılmalıdır. CBAM, klasik anlamda her ithalata uygulanan tek oranlı bir vergi değil; kapsamdaki ürünlerin gömülü emisyonlarıyla bağlantılı bir karbon fiyatlandırma ve sertifika mekanizmasıdır. 2026’da kesin rejime geçilmesiyle birlikte ithalatçıların yetkilendirme, raporlama ve sertifika teslimi gibi yükümlülükleri önem kazanmıştır [1] .",
      "Bu değişiklik şirketlerin maliyet anlayışını dönüştürür. Karbon artık yalnızca sürdürülebilirlik raporunda yer alan bir gösterge değil; ürün maliyeti, tedarikçi seçimi, stok planı ve müşteri fiyatlaması üzerinde etkili olabilecek bir parametredir. Aynı ürün için tedarikçinin üretim teknolojisi, enerji karışımı ve ölçüm kalitesi farklılaştığında, ithalatçı şirketin uyum riski ve beklenen karbon maliyeti de değişebilir.",
      "Bu nedenle tedarikçi değerlendirmelerinde yalnızca fiyat, kalite ve teslim süresi değil, emisyon verisinin güvenilirliği de dikkate alınmalıdır. Şirketler yüksek emisyonlu tedarikçileri bir gecede değiştiremeyebilir; ancak emisyon azaltım planı, veri paylaşımı ve doğrulama kapasitesi güçlü tedarikçilerle uzun vadeli iş birlikleri kurabilir. Üretim tarafında enerji verimliliği, yenilenebilir enerji kullanımı, proses optimizasyonu ve ürün tasarımı gibi yatırımlar karbon maliyetini azaltmanın yanında pazar erişimini de güçlendirebilir.",
      "CBAM’ın stratejik etkisi, şirketleri “uyum sağlamak” ile “daha düşük karbonlu değer zinciri kurmak” arasında seçim yapmaya zorlamaz. İyi kurgulanmış bir program ikisini birlikte yürütür. Kapsam envanteri finansal planlama ile bağlanır, emisyon verisi tedarik sözleşmelerine eklenir ve yatırım kararları emisyon azaltımıyla birlikte değerlendirilirse CBAM, yalnızca maliyet yaratan bir düzenleme değil, rekabet avantajı yaratabilecek bir dönüşüm gündemi hâline gelir.",
      "[1] European Commission — Carbon Border Adjustment Mechanism (CBAM) \n \n Yayın notu: Bu içerik genel bilgilendirme amaçlıdır; hukuki görüş veya şirkete özel uyum değerlendirmesi değildir. Ürün kapsamı, ülke uygulaması ve yürürlükteki ikincil düzenlemeler yayın öncesinde güncel olarak kontrol edilmelidir."
    ]
  },
  {
    "slug": "blog-kvkk-aydinlatma-metni",
    "path": "/blog/blog-kvkk-aydinlatma-metni",
    "title": "KVKK Aydınlatma Metni Nasıl Hazırlanır? [Ücretsiz Şablon]",
    "category": "DATA PROTECTION",
    "excerpt": "Aydınlatma Metni Nedir ve Neden Zorunlu? KVKK madde 10 uyarınca kişisel verilerin işlenmesi sırasında veri sahiplerine aydınlatma yapılması zorunludur. Aydınlatma metni, bu yükümlülüğün yazılı kanıtıdır. İnternet sitesi,",
    "body": [
      "Aydınlatma Metni Nedir ve Neden Zorunlu?",
      "KVKK madde 10 uyarınca kişisel verilerin işlenmesi sırasında veri sahiplerine aydınlatma yapılması zorunludur. Aydınlatma metni, bu yükümlülüğün yazılı kanıtıdır.",
      "İnternet sitesi, ofis veya iş başvurusu süreçlerinde aydınlatma metninin nerede ve nasıl sunulacağı, metnin etkinliğini belirler.",
      "Aydınlatma Metninde Olması Gereken 10 Madde",
      "Aydınlatma metni, veri sorumlusunun kimliğini, işleme amaçlarını, veri kategorilerini, aktarım alıcılarını ve hakları açıkça belirtmelidir.",
      "Metnin okunabilir ve erişilebilir olması, uyum değerlendirmesinde en kritik unsurlardan biridir.",
      "Sektöre Göre Aydınlatma Metni Farklılıkları",
      "E-ticaret, sağlık, eğitim ve İK süreçleri için kullanılan aydınlatma metinleri farklı içerik ve vurgu gerektirir. Sektöre uygun örnek metinler sağlayarak işinizi kolaylaştırıyoruz.",
      "Bu bölümde e-ticaret, sağlık, İK ve eğitim için özel gereklilikleri sıraladık.",
      "Ücretsiz Şablon Kullanım Rehberi",
      "Şablonu indirdikten sonra şirket bilgilerinizin doğru ve eksiksiz olduğundan emin olun. Sektörünüzdeki spesifik gereklilikleri de açıklamalar kısmına ekleyin.",
      "Şablondaki alanları doldururken doğru birimler ve tarih formatları kullanmak, denetim süreçlerini kolaylaştırır.",
      "Aydınlatma metninin çok uzun, anlaşılmaz veya erişilemez olması sık yapılan hatalardandır. Ayrıca güncel olmayan bilgiler ciddi uyum sorunları yaratır.",
      "Çok dilli sitelerde eksik çeviri yapmak da hem müşteri deneyimini hem de yasal uyumu olumsuz etkiler.",
      "Ücretsiz KVKK Aydınlatma Metni Şablonumuzu indirin.",
      "Bu konuda hızlı destek almak veya uyum sürecinizi hızlandırmak için lütfen sayfayı ziyaret edin."
    ]
  },
  {
    "slug": "blog-kvkk-cezalari-2026",
    "path": "/blog/blog-kvkk-cezalari-2026",
    "title": "2026 KVKK Cezaları Ne Kadar? Güncel Tarife ve Kaçınma Yolları",
    "category": "DATA PROTECTION",
    "excerpt": "2026 KVKK Cezaları Güncel Tablosu KVKK cezaları 2026 yılında yeniden güncellendi ve en düşük idari para cezası 52.000 TL seviyesine çıktı. Bu bölümde hafif, orta ve ağır ihlal kategorilerini ve ceza aralıklarını sıralıyo",
    "body": [
      "2026 KVKK Cezaları Güncel Tablosu",
      "KVKK cezaları 2026 yılında yeniden güncellendi ve en düşük idari para cezası 52.000 TL seviyesine çıktı. Bu bölümde hafif, orta ve ağır ihlal kategorilerini ve ceza aralıklarını sıralıyoruz.",
      "Tekrarlayan ihlallerde ceza miktarı yükselir; örneğin aynı işleme ilişkin ikinci cezai işlemde ceza oranı %50 daha fazla uygulanabiliyor.",
      "İşletmelerin en çok düştüğü hatalar arasında aydınlatma metni eksikliği, VERBİS kaydı olmaması ve veri envanteri hazırlamamak üst sıralarda yer alıyor.",
      "Bu ihlaller, küçük işletmelerde bile yüzbinlerce liralık ceza riskini beraberinde getirir. Kritik adımlar net olarak işaretlenirse, uyum süreci hızlanır.",
      "KVKK Uyum Maliyeti vs Ceza Maliyeti",
      "KVKK uyum sürecini doğru planlamak, ceza riskini ortadan kaldırmanın yanında işletme güvenini de artırır. Uyum paketi maliyeti, olası idari para cezalarından çok daha düşüktür.",
      "Çoğu zaman tek bir eksik belge, işletmenin uzun vadeli itibarını ve müşteri güvenini zedeler; bunun maliyeti ceza tutarının ötesine gider.",
      "Veri envanteri çıkarmak, aydınlatma metni hazırlamak ve VERBİS kaydını tamamlamak, KVKK uyumunun temel adımlarıdır. Uyum sürecini şablonlarla hızlandırmak mümkündür.",
      "Çalışan bilgilendirmesi ve yıllık denetim planı, KVKK uyumunun sürdürülebilir olmasını sağlar. Bu yazıda gerekli temel dokümanları listeledik.",
      "Nechh Robotics, hangi durumlarda şablon paketi ve hangi durumlarda danışmanlık gerektiğini açıkça ayırır. Şirketinizin ihtiyacına göre iki yolu birlikte değerlendirin.",
      "Kadasi bir risk değerlendirmesi ile uyum eksikliklerini tespit etmek, yanlış adımların önüne geçer ve hızla eyleme geçirilebilir bir yol haritası sunar.",
      "KVKK uyumunuzu ücretsiz değerlendirelim. 20 dakikalık görüşme ile eksiklerinizi tespit ediyoruz.",
      "Bu konuda hızlı destek almak veya uyum sürecinizi hızlandırmak için lütfen sayfayı ziyaret edin."
    ]
  },
  {
    "slug": "blog-mali-muhur-basvurusu-2026",
    "path": "/blog/blog-mali-muhur-basvurusu-2026",
    "title": "Mali Mühür Başvurusu Nasıl Yapılır? 2026 Güncel Rehber",
    "category": "E-INVOICING",
    "excerpt": "Mali Mühür Nedir ve Neden Gerekli? Mali mühür, e-fatura ve e-arşiv işlemlerinde elektronik imza yerine kullanılan bir güvenlik aracıdır. E-fatura geçişi için yasal olarak gereklidir. E-imza ile mali mühür arasındaki fark",
    "body": [
      "Mali Mühür Nedir ve Neden Gerekli?",
      "Mali mühür, e-fatura ve e-arşiv işlemlerinde elektronik imza yerine kullanılan bir güvenlik aracıdır. E-fatura geçişi için yasal olarak gereklidir.",
      "E-imza ile mali mühür arasındaki farkları ve hangi durumlarda hangisinin kullanıldığını açıklıyoruz.",
      "TÜBİTAK BİLGEM’e başvuru, gerekli belgelerin hazırlanması, online formun doldurulması, ödeme yapılması ve başvurunun gönderilmesi adımları sırasıyla yapılmalıdır.",
      "Başvuru süreci boyunca süreyi kısaltmak için belgelerin tam ve doğru hazırlanması önemlidir.",
      "Ticaret sicil gazetesi, imza sirküleri, vergi levhası, kimlik fotokopisi ve yetki belgesi mali mühür başvurusunda gereken temel belgelerdir.",
      "Eksik belge olmaması, başvurunun geri dönmesini ve sürecin uzamasını engeller.",
      "Mali mühür ücreti, yenileme ücreti ve başvuru teslimat süreleri güncelliğini korumalıdır. Başvuruyu 2026 fiyatlarıyla planlayın.",
      "Başvuru süresi, belgelerin eksiksiz olmasına bağlı olarak birkaç hafta sürebilir.",
      "Mali mühür, hangi programlarla kullanılır, nasıl kurulması gerekir ve kayıp/çalıntı durumunda neler yapılmalıdır açıklıyoruz.",
      "Güvenlik önlemleri ve yedekleme prosedürleri, mali mühür kullanımının güvenliğini artırır.",
      "E-fatura geçişinizde profesyonel destek.",
      "Bu konuda hızlı destek almak veya uyum sürecinizi hızlandırmak için lütfen sayfayı ziyaret edin."
    ]
  },
  {
    "slug": "blog-nis2-direktifi-nedir-avrupanin-yeni-siber-guvenlik-cercevesi",
    "path": "/blog/blog-nis2-direktifi-nedir-avrupanin-yeni-siber-guvenlik-cercevesi",
    "title": "NIS2 Direktifi Nedir? Avrupa’nın Yeni Siber Güvenlik Çerçevesi",
    "category": "NIS2",
    "excerpt": "NIS2 Direktifi , Avrupa Birliği genelinde siber güvenlik seviyesini yükseltmek için oluşturulan ve NIS1’in yerini alan güncellenmiş çerçevedir. Avrupa Komisyonu, NIS2’nin daha geniş kapsam, daha açık kurallar ve daha güç",
    "body": [
      "NIS2 Direktifi , Avrupa Birliği genelinde siber güvenlik seviyesini yükseltmek için oluşturulan ve NIS1’in yerini alan güncellenmiş çerçevedir. Avrupa Komisyonu, NIS2’nin daha geniş kapsam, daha açık kurallar ve daha güçlü gözetim araçları getirdiğini açıklamaktadır [4] . Direktif, ağ ve bilgi sistemlerinin yanı sıra bu sistemlerin kullanıcılarını ve etkilenen kişileri siber tehditlere karşı korumaya odaklanır.",
      "NIS2, AB genelinde 18 kritik sektörde ortak bir hukuki çerçeve oluşturur [4] . Enerji, ulaştırma, sağlık, finans, su yönetimi ve dijital altyapı gibi alanlara ek olarak elektronik haberleşme, daha geniş dijital hizmetler, atık ve atık su yönetimi, kritik ürün imalatı, posta ve kurye hizmetleri, kamu yönetimi ve uzay sektörü gibi alanlar da kapsamın genişlemesine katkı verir. Uygulanabilirlik, kuruluşun sektörü, ölçeği, rolü ve ilgili ulusal mevzuatla birlikte değerlendirilmelidir.",
      "Direktif; siber risk yönetimi, olay bildirimi, tedarik zinciri güvenliği, zafiyet yönetimi, iş sürekliliği, kriz yönetimi ve siber hijyen gibi başlıklarda tedbirler öngörür. Önemli olayların ilgili ulusal makamlara bildirilmesi ve üye devletlerin ulusal siber güvenlik stratejileri oluşturması beklenir [4] . NIS2 ayrıca üst yönetimin siber risk yönetimi bakımından hesap verebilirliğini güçlendirerek konuyu yönetim kurulu gündemine taşır.",
      "NIS2’nin şirketler açısından anlamı, “siber güvenlik yalnızca BT departmanının işidir” anlayışının sürdürülememesidir. Yönetim, insan kaynakları, hukuk, satın alma, operasyon ve bilgi güvenliği ekiplerinin ortak çalıştığı ölçülebilir bir risk yönetimi programı gerekir. Direktifin ulusal hukuka aktarım biçimi ülkeden ülkeye değişebileceği için kuruluşlar AB metninin yanında faaliyet gösterdikleri ülkedeki yetkili makam duyurularını da takip etmelidir.",
      "[4] European Commission — NIS2 Directive: Securing Network and Information Systems \n \n Yayın notu: Bu içerik genel bilgilendirme amaçlıdır; hukuki görüş veya şirkete özel uyum değerlendirmesi değildir. Ürün kapsamı, ülke uygulaması ve yürürlükteki ikincil düzenlemeler yayın öncesinde güncel olarak kontrol edilmelidir."
    ]
  },
  {
    "slug": "blog-nis2-uyum-sureci-kapsam-analizinden-olay-bildirimine",
    "path": "/blog/blog-nis2-uyum-sureci-kapsam-analizinden-olay-bildirimine",
    "title": "NIS2 Uyum Süreci: Kapsam Analizinden Olay Bildirimine",
    "category": "NIS2",
    "excerpt": "NIS2 uyum programı kapsam analiziyle başlar. Kuruluşun hangi sektörde faaliyet gösterdiği, AB içindeki ve dışındaki hizmetleri, şirket ölçeği, bağlı kuruluşları ve kritik hizmetleri değerlendirilmelidir. Avrupa Komisyonu",
    "body": [
      "NIS2 uyum programı kapsam analiziyle başlar. Kuruluşun hangi sektörde faaliyet gösterdiği, AB içindeki ve dışındaki hizmetleri, şirket ölçeği, bağlı kuruluşları ve kritik hizmetleri değerlendirilmelidir. Avrupa Komisyonu, NIS2’nin orta ve büyük ölçekli kuruluşlar için daha geniş bir yelpazede risk yönetimi ve olay bildirimi yükümlülükleri getirdiğini açıklamaktadır [4] . Ancak nihai değerlendirme, ulusal aktarım düzenlemeleriyle birlikte yapılmalıdır.",
      "İkinci aşama varlık ve hizmet envanteridir. Kritik iş süreçleri, bunları destekleyen bilgi sistemleri, veri akışları ve dış hizmet sağlayıcılar belirlenmelidir. Envanterin amacı yalnızca cihaz saymak değil, bir siber olayın hangi hizmeti ne ölçüde etkileyebileceğini anlamaktır. Bu çalışma, risk değerlendirmesinin ve olay önceliklendirmesinin temelini oluşturur.",
      "Üçüncü aşamada risk yönetimi tedbirleri tasarlanır. Erişim yönetimi, yedekleme, çok faktörlü kimlik doğrulama, zafiyet yönetimi, güvenli geliştirme, olay müdahalesi, iş sürekliliği ve tedarik zinciri kontrolleri birlikte ele alınmalıdır. Tedarikçilerden güvenlik kanıtı istemek kadar, onların olay bildirim süresini, alt yüklenici kullanımını ve hizmet sürekliliği planını sözleşmeye bağlamak da önemlidir.",
      "Dördüncü aşama olay bildirim sürecidir. Kuruluş, olayın tespitinden ilk değerlendirmeye, yönetime bildirimden yetkili makama iletişime kadar rol ve zaman eşiklerini önceden tanımlamalıdır. CSIRT ağı ve EU-CyCLONe gibi Avrupa iş birliği mekanizmaları, olaylara ilişkin bilgi paylaşımını ve büyük ölçekli kriz koordinasyonunu destekler [4] . Kuruluşun iç prosedürleri bu dış koordinasyon yapılarıyla çelişmeyecek şekilde düzenlenmelidir.",
      "Son aşama ölçüm ve yönetim raporlamasıdır. Açıkların kapanma süresi, kritik varlıkların güncellik oranı, tatbikat sonuçları, tedarikçi değerlendirme kapsamı ve olay müdahale süresi gibi göstergeler üst yönetime sunulmalıdır. NIS2 uyumu, bir belge klasörü değil; düzenli test edilen ve iyileştirilen bir siber dayanıklılık döngüsüdür.",
      "[4] European Commission — NIS2 Directive: Securing Network and Information Systems \n \n Yayın notu: Bu içerik genel bilgilendirme amaçlıdır; hukuki görüş veya şirkete özel uyum değerlendirmesi değildir. Ürün kapsamı, ülke uygulaması ve yürürlükteki ikincil düzenlemeler yayın öncesinde güncel olarak kontrol edilmelidir."
    ]
  },
  {
    "slug": "blog-robotic-surgery-control",
    "path": "/blog/blog-robotic-surgery-control",
    "title": "Cerrahi Robotlarda Hassas Konumlandırma ve Gömülü Kontrol Algoritmaları",
    "category": "ENGINEERING",
    "excerpt": "Minimal invaziv cerrahi (kapalı ameliyatlar), hastanın iyileşme süresini haftalardan günlere indirirken cerrahi operasyonların kalitesini de artırmaktadır. Bu ameliyatlarda hekimlerin en büyük yardımcısı olan cerrahi rob",
    "body": [
      "Minimal invaziv cerrahi (kapalı ameliyatlar), hastanın iyileşme süresini haftalardan günlere indirirken cerrahi operasyonların kalitesini de artırmaktadır. Bu ameliyatlarda hekimlerin en büyük yardımcısı olan cerrahi robotik sistemler, mikrometre (milimetrenin binde biri) düzeyinde bir hareket hassasiyetine sahip olmak zorundadır. Cerrahın konsolda eliyle yaptığı birkaç santimetrelik hareket, robotun ucundaki neşterde milimetrik bir yer değiştirmeye dönüştürülür.",
      "Bu düzeyde bir hassasiyet ve güvenlik, üst düzey mekanik mühendisliğin yanı sıra donanım seviyesinde çalışan gömülü kontrol algoritmaları (embedded control loops) sayesinde mümkündür. Nechh Robotics olarak medikal ve endüstriyel robotik kollar için geliştirdiğimiz gerçek zamanlı konumlandırma çözümlerini bu yazımızda inceliyoruz.",
      "1. Kinematik Hesaplama ve Donanım İvmesi",
      "Bir robot kolun ucunun uzayda belirli bir koordinata gitmesi için, kolun üzerindeki tüm eklemlerin (motorların) hangi açıda dönmesi gerektiğinin hesaplanması gerekir. Buna Ters Kinematik (Inverse Kinematics) denir. Ters kinematik hesapları yoğun trigonometrik ve matris işlemlerinden oluşur.",
      "Mikrosaniyelik Çevrim Süresi (Loop Time): Robotun sarsıntısız ve anlık tepki verebilmesi için bu hesapların saniyede en az 1000 kez (1 kHz) tekrarlanması gerekir.",
      "FPU ve DSP Desteği: Gömülü mikrodenetleyicilerimizde donanımsal Kayan Nokta Birimleri (FPU) ve Dijital Sinyal İşlemci (DSP) komut setlerini kullanarak bu karmaşık matris denklemlerini 10 mikrosaniyenin altında çözüyoruz.",
      "\"Robotik cerrahide gecikme, titremeye; titreme ise operasyonel risklere davetiye çıkarır. Çözüm, tüm kontrol döngülerinin donanımsal olarak izole edilmesidir.\"",
      "2. Kapalı Döngü Kontrol ve Titreşim Sönümleme",
      "Motorlara sadece \"git\" komutu vermek yeterli değildir. Motorun gittiği konum, yüksek çözünürlüklü enkoderler ile sürekli okunarak komut verilen konumla karşılaştırılır. Buna Kapalı Döngü Kontrol (Closed-Loop Control) denir. Cerrahi robotlarda kullanılan diğer gelişmiş kontrol yöntemleri:",
      "PID + İleri Besleme (Feed-Forward): Sürtünme ve yer çekimi kuvvetleri önceden hesaplanarak motor tork kontrolüne eklenir, böylece hedef konuma gecikmesiz ulaşılır.",
      "Aktif Titreşim Sönümleme (Active Vibration Damping): Mekanik kolların esnemesinden kaynaklanan mikro titreşimler, ivmeölçerlerden gelen verilerle anlık olarak tork kontrol döngüsünde ters kuvvet uygulanarak yok edilir.",
      "3. Hata Algılama ve Güvenli Durdurma (Safe Torque Off)",
      "Cerrahi bir sistemde herhangi bir sensör veya motor arızalandığında robot asla kontrolsüz hareket etmemelidir. Donanımsal kesme (interrupt) hatlarımız, mikro saniyeler düzeyinde bir anormallik algıladığında (örneğin akım aşımı veya enkoder sinyali kaybı), motorların gücünü donanımsal olarak kesen STO (Safe Torque Off) mimarisini devreye sokar. Bu işlem yazılımdan bağımsız, doğrudan kapı devreleri seviyesinde gerçekleşir.",
      "Nechh Robotics Servo Kontrol Platformu",
      "Robotik eklemler için geliştirdiğimiz yerli motor sürücü kartları, EtherCAT ve CANopen haberleşme protokolleri üzerinden gerçek zamanlı senkronizasyon sunar. Sürücülerimiz 20 kHz akım kontrol frekansına ve 16-bit tork çözünürlüğüne sahiptir.",
      "Robotik cerrahinin geleceği, yazılım zekası ile donanım hassasiyetinin kusursuz birleşimiyle inşa edilmektedir. Milimetrik doğruluk, gelişmiş güvenlik sistemleri ve gerçek zamanlı kontrol döngüleri ile donatılmış gömülü mimarilerimiz, cerrahların ellerini uzatarak hastalara şifa vermesini daha güvenli hale getirmektedir."
    ]
  },
  {
    "slug": "blog-scc-nedir-nasil-hazirlanir",
    "path": "/blog/blog-scc-nedir-nasil-hazirlanir",
    "title": "SCC (Standard Contractual Clauses) Nedir? Nasıl Hazırlanır?",
    "category": "DATA PROTECTION",
    "excerpt": "SCC, AB dışına kişisel veri aktarırken kullanılan standart sözleşme maddeleridir. Schrems II sonrası yeterlilik kararı olmayan ülkelerde SCC gereklidir. Türkiye için SCC düzenlemek, AB’den gelen veri akışını güvenli ve y",
    "body": [
      "SCC, AB dışına kişisel veri aktarırken kullanılan standart sözleşme maddeleridir. Schrems II sonrası yeterlilik kararı olmayan ülkelerde SCC gereklidir.",
      "Türkiye için SCC düzenlemek, AB’den gelen veri akışını güvenli ve yasal hale getirir.",
      "SCC Türleri ve Hangisi Size Uygun?",
      "Veri sorumlusu → veri sorumlusu, veri sorumlusu → veri işleyici, veri işleyici → veri işleyici gibi farklı modüller vardır.",
      "Doğru modül seçimi, tarafların rollerine ve veri akışına bağlıdır. Yanlış modül, sözleşmenin geçersiz olmasına yol açabilir.",
      "Tarafları tanımlayın, veri kategorilerini belirleyin, özel güvenlik önlemlerini ekleyin ve denetim haklarını düzenleyin.",
      "SCC metni, sadece sözleşme değil aynı zamanda veri güvenliği politikasıyla uyumlu olmalıdır.",
      "SCC’de Eklenmesi Gereken Ek Güvenlik Önlemleri",
      "Şifreleme, anonimleştirme, erişim kontrolü, eğitim ve felaket kurtarma planları SCC’ye eklenebilecek güvenlik önlemlerindendir.",
      "Bu önlemler, veri sahibinin hakkını korur ve denetim sonuçlarını güçlendirir.",
      "SaaS şirketleri, e-ticaret siteleri ve danışmanlık firmaları için SCC uygulama örnekleri paylaşarak somut karar vermeyi kolaylaştırıyoruz.",
      "Her sektör için farklı veri akışı ve gereksinimler olduğundan SCC metnini sektör bazlı uyarlamak önemlidir.",
      "Ücretsiz SCC Şablonumuzu indirin.",
      "Bu konuda hızlı destek almak veya uyum sürecinizi hızlandırmak için lütfen sayfayı ziyaret edin."
    ]
  },
  {
    "slug": "blog-smart-city-iot-sensors",
    "path": "/blog/blog-smart-city-iot-sensors",
    "title": "Akıllı Şehir Altyapılarında IoT Tabanlı Sensör Ağları",
    "category": "ENGINEERING",
    "excerpt": "Nüfus artışı ve hızlı kentleşme, şehirlerin kaynak yönetimini (su şebekeleri, elektrik ızgaraları, atık yönetimi ve trafik kontrolü) her geçen gün daha zor hale getirmektedir. Şehirlerin bu devasa operasyonel karmaşıklığ",
    "body": [
      "Nüfus artışı ve hızlı kentleşme, şehirlerin kaynak yönetimini (su şebekeleri, elektrik ızgaraları, atık yönetimi ve trafik kontrolü) her geçen gün daha zor hale getirmektedir. Şehirlerin bu devasa operasyonel karmaşıklığı yönetebilmesi, ancak gerçek zamanlı veri akışıyla mümkündür. Akıllı şehirler, binlerce noktadan toplanan telemetri verilerini işleyen IoT (Nesnelerin İnterneti) tabanlı sensör ağlarına dayanır.",
      "Nechh Robotics olarak, geniş alanlarda uzun ömürlü ve kararlı çalışan kablosuz algılama donanımları geliştiriyoruz. Bu yazımızda, akıllı şehir altyapılarında veri iletişimini sağlayan LoRaWAN protokollerini ve kenar veri entegrasyonu yaklaşımlarımızı inceliyoruz.",
      "1. Neden Geniş Alan Ağları (LPWAN) ve LoRaWAN?",
      "Akıllı şehir uygulamalarında sensörler genellikle su boruları, yeraltı sayaçları veya aydınlatma direkleri gibi zorlu ve ücra yerlere yerleştirilir. Bu noktalarda Wi-Fi veya 4G/5G gibi yüksek güç tüketen ve sınırlı çekim alanı olan protokollerin kullanımı mümkün değildir. Çözüm, **LoRaWAN (Long Range Wide Area Network)** teknolojisidir:",
      "Uzun Menzil: Tek bir LoRa ağ geçidi (gateway), şehir içi koşullarda 5-15 km yarıçapındaki binlerce sensörden veri toplayabilir.",
      "Ultra Düşük Güç Tüketimi: IoT sensörlerimiz, küçük bir pil (AA veya Lityum-Tiyonil Klorür) ile sahada 8 ila 10 yıl boyunca kesintisiz çalışabilir.",
      "Yüksek Sinyal Penetrasyonu: 868 MHz bandını kullanan LoRa sinyalleri, betonarme yapıların ve yeraltı borularının içinden dahi kolayca geçebilir.",
      "\"Akıllı şehir, sadece akıllı kameralarla donatılmış yollar değil; yeraltındaki su kaçağını henüz yüzeye sızmadan haber veren görünmez sensör ekosistemidir.\"",
      "2. Su Şebekesi Yönetimi ve Akıllı Sayaçlar",
      "Klasik su dağıtım hatlarında şebekeye verilen temiz suyun %30'a yakını sızıntılar nedeniyle kaybolmaktadır (Kayıp-Kaçak Oranı). LoRaWAN tabanlı akıllı su şebekelerinde:",
      "Akustik Sensörler: Boru hatlarındaki mikro titreşimleri dinleyerek olası çatlakları ve sızıntı noktalarını santimetre hassasiyetinde tespit eder.",
      "Debi ve Basınç Analizi: Basınç düşüşlerini anlık olarak izleyerek patlakları anında SCADA merkezine bildirir. Otomatik vana kontrolü ile hasar büyümeden su akışı kesilir.",
      "3. SCADA ve Bulut Sistemleri ile Entegrasyon",
      "Sensörlerden toplanan milyarlarca veri paketi, LoRaWAN şebeke sunucuları üzerinden standart sanayi protokollerine (MQTT veya Modbus TCP) dönüştürülerek belediyelerin mevcut SCADA yazılımlarına veya bulut analitik panellerine entegre edilir. Nechh Robotics, bu süreçte açık kaynaklı API entegrasyonları ile mevcut altyapıları sıfırdan kurmaya gerek bırakmadan modern veri ağları oluşturur.",
      "Şehir altyapıları için geliştirdiğimiz IP68 sınıfı sızdırmaz kutulardaki sensör düğümlerimiz, darbelere, neme ve aşırı sıcaklıklara dayanıklıdır. Güvenlik için AES-128 uçtan uca şifreleme sunmaktadır.",
      "Geleceğin şehirleri, veriyi toplayan, anlamlandıran ve yerinde aksiyon alan altyapılarla daha yaşanabilir hale gelecektir. Su ve enerji tasarrufu, karbon salınımının azaltılması ve operasyonel maliyetlerin düşürülmesi, ancak kararlı kablosuz IoT altyapılarıyla mümkündür."
    ]
  },
  {
    "slug": "blog-tedarik-zincirinde-risk-yonetimi-eudryi-operasyonel-avantaja-cevirmek",
    "path": "/blog/blog-tedarik-zincirinde-risk-yonetimi-eudryi-operasyonel-avantaja-cevirmek",
    "title": "Tedarik Zincirinde Risk Yönetimi: EUDR’yi Operasyonel Avantaja Çevirmek",
    "category": "EUDR",
    "excerpt": "EUDR, tedarik zinciri risk yönetimini şirketlerin gündeminin merkezine taşır. Risk artık yalnızca tedarikçinin finansal durumu veya teslimat performansı değildir. Ürünün üretildiği alanın niteliği, arazi kullanımındaki d",
    "body": [
      "EUDR, tedarik zinciri risk yönetimini şirketlerin gündeminin merkezine taşır. Risk artık yalnızca tedarikçinin finansal durumu veya teslimat performansı değildir. Ürünün üretildiği alanın niteliği, arazi kullanımındaki değişiklikler, hukuki uygunluk, izlenebilirlik seviyesi ve veri kalitesi de satın alma kararının parçasıdır. Avrupa Komisyonu, düzenlemenin küresel ormansızlaşma ve orman bozulmasına ilişkin AB ayak izini azaltmayı amaçladığını açıklamaktadır [2] .",
      "Etkili bir risk modeli, bütün tedarikçileri aynı kategoride değerlendirmek yerine risk sinyallerini bir arada ele alır. Ülke ve bölge koşulları, emtia türü, tedarik zincirinin karmaşıklığı, üreticinin ölçeği, coğrafi veri kalitesi ve önceki uygunsuzluklar birlikte değerlendirilmelidir. Böyle bir model, kaynakların en yüksek riskli ürünlere ve tedarikçilere yönlendirilmesini sağlar.",
      "Risk azaltma yaklaşımı cezalandırıcı olmak zorunda değildir. Küçük üreticilere veri toplama desteği sağlamak, tedarikçilere ortak şablonlar sunmak, kapasite geliştirme programları düzenlemek ve aşamalı iyileştirme hedefleri belirlemek daha dayanıklı bir tedarik zinciri yaratabilir. Bununla birlikte, makul sürede doğrulanamayan ve yüksek risk taşımaya devam eden kaynaklar için satın alma durdurma veya alternatif tedarikçi arama kararları da önceden tanımlanmalıdır.",
      "EUDR verisi aynı zamanda işletme için yeni bir karar altyapısı oluşturur. Coğrafi izlenebilirlik, ürün risk skoru ve belge kalitesi; tedarikçi performans göstergelerine, denetim planlarına ve yönetim raporlarına bağlanabilir. Böylece düzenleyici uyum, tedarik zinciri şeffaflığını artıran ve itibar riskini azaltan bir kurumsal avantaja dönüşür.",
      "[2] European Commission — Regulation on Deforestation-free Products \n \n Yayın notu: Bu içerik genel bilgilendirme amaçlıdır; hukuki görüş veya şirkete özel uyum değerlendirmesi değildir. Ürün kapsamı, ülke uygulaması ve yürürlükteki ikincil düzenlemeler yayın öncesinde güncel olarak kontrol edilmelidir."
    ]
  },
  {
    "slug": "blog-verbis-kaydi-2026",
    "path": "/blog/blog-verbis-kaydi-2026",
    "title": "VERBİS Kaydı Nasıl Yapılır? 2026 Güncel Rehber",
    "category": "DATA PROTECTION",
    "excerpt": "VERBİS Nedir ve Kimler İçin Zorunlu? VERBİS, veri sorumlularının veri envanterini kaydettiği merkezi bir sistemdir. Belirli sektörler ve büyüklükteki işletmeler için kayıt zorunludur. Muafiyetler olsa da, kayıt sürecini ",
    "body": [
      "VERBİS Nedir ve Kimler İçin Zorunlu?",
      "VERBİS, veri sorumlularının veri envanterini kaydettiği merkezi bir sistemdir. Belirli sektörler ve büyüklükteki işletmeler için kayıt zorunludur.",
      "Muafiyetler olsa da, kayıt sürecini öğrenmek ve gerektiğinde hazırlıklı olmak her şirket için önemlidir.",
      "VERBİS Kaydı İçin Gerekli Belgeler",
      "Vergi kimlik numarası, ticaret sicil numarası, imza sirküleri ve yetkilendirme belgeleri VERBİS başvurusu için temel belgelerdir.",
      "Bu belgeler hazır olduğunda, kayıt süreci daha hızlı ve sorunsuz ilerler.",
      "e-Devlet üzerinden giriş yapın, yeni kayıt başvurusunu seçin ve şirket bilgilerinizi eksiksiz girin. Veri işleme faaliyetleri bölümünü titizlikle doldurun.",
      "Başvuru tamamlandıktan sonra onay sürecini izleyin ve gerekirse ek belge yüklemeye hazır olun.",
      "VERBİS Kaydı Sonrası Yapılması Gerekenler",
      "Kaydı tamamladıktan sonra yıllık güncellemeleri takip etmek, değişiklik bildirimlerini zamanında göndermek ve veri işleme faaliyet raporunu güncel tutmak gerekir.",
      "Aynı verinin birden çok yerde farklı formatta saklanmamasına dikkat edin; tek bir kaynak üzerinden güncelleme yapmak en doğru yaklaşımdır.",
      "Sık Karşılaşılan Sorunlar ve Çözümleri",
      "e-Devlet giriş problemleri, bilgi eksikliği uyarıları ve yanlış bilgi girişi VERBİS sürecini yavaşlatır. Bu sorunlara karşı hazırlıklı olmak önemlidir.",
      "Yanlış girilen bilgilerin düzeltilmesi ve onaya takılan başvurular için yeniden kontrol listesi kullanabilirsiniz.",
      "VERBİS kaydı konusunda destek mi istiyorsunuz?",
      "Bu konuda hızlı destek almak veya uyum sürecinizi hızlandırmak için lütfen sayfayı ziyaret edin."
    ]
  },
  {
    "slug": "blog-yonetim-kurulu-icin-nis2-siber-guvenlikte-hesap-verebilirlik",
    "path": "/blog/blog-yonetim-kurulu-icin-nis2-siber-guvenlikte-hesap-verebilirlik",
    "title": "Yönetim Kurulu İçin NIS2: Siber Güvenlikte Hesap Verebilirlik",
    "category": "NIS2",
    "excerpt": "NIS2, siber güvenliği teknik bir ayrıntı olmaktan çıkarıp yönetim sorumluluğunun parçası hâline getirir. Avrupa Komisyonu, direktifin siber risk yönetimi tedbirlerine uyumsuzluk bakımından üst yönetimin hesap verebilirli",
    "body": [
      "NIS2, siber güvenliği teknik bir ayrıntı olmaktan çıkarıp yönetim sorumluluğunun parçası hâline getirir. Avrupa Komisyonu, direktifin siber risk yönetimi tedbirlerine uyumsuzluk bakımından üst yönetimin hesap verebilirliğini gündeme getirdiğini belirtmektedir [4] . Bu yaklaşım, yönetim kurulunun her teknik kontrolü bizzat işletmesi anlamına gelmez; ancak riskin anlaşılması, kaynakların tahsisi ve önemli kararların izlenmesi anlamına gelir.",
      "Yönetim kurulu için ilk soru kapsamdır: Kuruluş hangi NIS2 kategorisine girebilir, hangi hizmetleri kritik kabul edilir ve hangi ulusal makamla ilişki kurulmalıdır? İkinci soru risk iştahıdır: Kurum hangi kesinti süresini, veri kaybını veya tedarikçi bağımlılığını kabul edebilir? Üçüncü soru ise kanıttır: Kuruluş, riskleri belirlediğini ve uygun tedbirleri uyguladığını nasıl gösterebilir?",
      "Etkili yönetim raporlaması, uzun teknik kontrol listelerinden çok karar almayı kolaylaştıran göstergeler sunmalıdır. Kritik açıkların yaşlanması, olay müdahale tatbikatlarının sonuçları, yedeklerin geri yüklenebilirliği, tedarikçi risklerinin durumu ve güvenlik bütçesinin kritik hizmetlere dağılımı düzenli olarak izlenebilir. Açık kalan yüksek riskli bulgular için sorumlu kişi, hedef tarih ve risk kabul makamı belirlenmelidir.",
      "NIS2 perspektifinde yönetim kurulunun rolü bir olaydan sonra açıklama yapmakla sınırlı değildir. Olay gerçekleşmeden önce güvenlik yatırımlarını onaylamak, iş sürekliliği planlarını test ettirmek ve tedarik zincirindeki bağımlılıkları görünür kılmak gerekir. Avrupa Komisyonu ayrıca 20 Ocak 2026’da NIS2’ye yönelik hedefli değişiklik tekliflerinden söz etmektedir; bu gelişme nihai hukuk kuralı olarak değil, takip edilmesi gereken bir teklif olarak değerlendirilmelidir [4] .",
      "Sonuç olarak NIS2, yönetim kuruluna yeni bir teknik görev listesi vermekten ziyade siber riskin kurumsal risk olarak sahiplenilmesini zorunlu kılar. Güçlü yönetişim; net sorumluluk, yeterli kaynak, düzenli test ve dürüst risk raporlaması üzerine kuruludur.",
      "[4] European Commission — NIS2 Directive: Securing Network and Information Systems \n \n Yayın notu: Bu içerik genel bilgilendirme amaçlıdır; hukuki görüş veya şirkete özel uyum değerlendirmesi değildir. Ürün kapsamı, ülke uygulaması ve yürürlükteki ikincil düzenlemeler yayın öncesinde güncel olarak kontrol edilmelidir."
    ]
  }
];

export const legacyEnglishArticles: LegacyArticle[] = [
  ...urunYazilariEn,
  {
    "slug": "blog-doras-critical-requirements-governance-testing-and-third-parties",
    "path": "/en/blog/blog-doras-critical-requirements-governance-testing-and-third-parties",
    "title": "DORA’s Critical Requirements: Governance, Testing, and Third Parties",
    "category": "DORA",
    "excerpt": "Three areas are particularly important under DORA: governance, testable resilience, and ICT third-party risk management . These areas are connected. If the management body does not understand critical services, testing m",
    "body": [
      "Three areas are particularly important under DORA: governance, testable resilience, and ICT third-party risk management . These areas are connected. If the management body does not understand critical services, testing may be poorly prioritised. If third-party dependencies are hidden, recovery plans may not reflect operational reality.",
      "From a governance perspective, responsibilities between technology, information security, risk, compliance, and business functions should be clear. The management body should monitor technology risk as part of enterprise and financial risk, not as an issue delegated entirely to the IT department. Important risk acceptances, open high-severity findings, and remediation plans should be documented and reported.",
      "Testing should answer a practical question: when a critical service is disrupted, how will the organisation continue and recover within an acceptable timeframe? This goes beyond checking whether backups exist. Recovery time, data-loss tolerance, manual procedures, communication plans, and supplier support should be tested together.",
      "Third-party risk requires both contractual and operational analysis. Service levels, incident notification, audit rights, subcontracting, data location, exit plans, and termination scenarios should be addressed clearly. Because DORA’s implementing acts provide further detail on compliance methods [3] , contracts and control sets must be reviewed and kept current.",
      "The true test of DORA is not whether an organisation can display a folder of documents during an audit. It is whether the organisation can continue critical services in a controlled manner during a serious disruption. DORA should therefore be managed as a learning system that connects technical controls to business impact.",
      "[3] European Commission — Digital Operational Resilience Regulation (DORA) \n \n Publisher's note: This content is for general information only and is not legal advice or a company-specific compliance assessment. Product scope, national implementation and applicable secondary legislation should be checked against current sources before publication."
    ]
  },
  {
    "slug": "blog-nis2-for-the-board-accountability-for-cyber-risk",
    "path": "/en/blog/blog-nis2-for-the-board-accountability-for-cyber-risk",
    "title": "NIS2 for the Board: Accountability for Cyber Risk",
    "category": "NIS2",
    "excerpt": "NIS2 positions cybersecurity as a management responsibility. The European Commission notes that the Directive introduces accountability for top management in relation to non-compliance with cybersecurity risk-management ",
    "body": [
      "NIS2 positions cybersecurity as a management responsibility. The European Commission notes that the Directive introduces accountability for top management in relation to non-compliance with cybersecurity risk-management measures [4] . This does not mean that boards must operate every technical control. It means that they must understand the risk, approve priorities, allocate resources, and oversee material decisions.",
      "The board’s first question should be scope: could the organisation fall within NIS2, which services are critical, and which authority is relevant? The second is risk appetite: what level of outage, data loss, or supplier dependency is acceptable? The third is evidence: how can the organisation demonstrate that risks were identified and appropriate measures were implemented?",
      "Useful board reporting should support decisions rather than reproduce technical checklists. It may include the age of critical vulnerabilities, the results of incident exercises, the recoverability of backups, the status of supplier risks, and the allocation of security investment to critical services. Open high-risk findings should have an accountable owner, target date, and clearly defined risk-acceptance authority.",
      "The board’s role does not begin after an incident. It includes approving resilience investments before a crisis, requiring continuity plans to be tested, and making dependencies in the supply chain visible. The Commission also refers to targeted NIS2 amendment proposals presented on 20 January 2026; these should be treated as proposals to monitor, not as final legal requirements [4] .",
      "NIS2 does not give the board a new technical task list. It requires the board to own cyber risk as enterprise risk. Strong governance rests on clear accountability, adequate resources, regular testing, and transparent reporting of unresolved exposure.",
      "[4] European Commission — NIS2 Directive: Securing Network and Information Systems \n \n Publisher's note: This content is for general information only and is not legal advice or a company-specific compliance assessment. Product scope, national implementation and applicable secondary legislation should be checked against current sources before publication."
    ]
  },
  {
    "slug": "blog-risk-management-in-the-supply-chain-turning-eudr-into-an-operational",
    "path": "/en/blog/blog-risk-management-in-the-supply-chain-turning-eudr-into-an-operational",
    "title": "Risk Management in the Supply Chain: Turning EUDR into an Operational Advantage",
    "category": "EUDR",
    "excerpt": "EUDR places supply-chain risk management at the centre of corporate compliance. Risk is no longer limited to a supplier’s financial strength or delivery performance. Land-use change, production-area characteristics, lega",
    "body": [
      "EUDR places supply-chain risk management at the centre of corporate compliance. Risk is no longer limited to a supplier’s financial strength or delivery performance. Land-use change, production-area characteristics, legal compliance, traceability maturity, and data quality can all affect a sourcing decision. The Commission describes EUDR as part of the effort to reduce the EU’s global deforestation and forest-degradation footprint [2] .",
      "An effective risk model should combine several signals rather than assign every supplier the same rating. Country and regional conditions, commodity type, supply-chain complexity, producer scale, geolocation quality, and prior non-compliance should be reviewed together. This helps direct audit and remediation resources toward the highest-risk products and relationships.",
      "Risk mitigation does not have to be purely punitive. Supporting smaller producers with data collection, providing shared templates, building supplier capability, and setting staged improvement targets can create a more resilient value chain. At the same time, companies should define in advance when unresolved high risk requires a purchase suspension or alternative sourcing decision.",
      "EUDR data can become a decision infrastructure. Geolocation traceability, supplier risk scores, and evidence quality can feed supplier-performance indicators, audit plans, and management reporting. In this way, regulatory compliance improves transparency, reduces reputational exposure, and creates a stronger basis for commercial decision-making.",
      "[2] European Commission — Regulation on Deforestation-free Products \n \n Publisher's note: This content is for general information only and is not legal advice or a company-specific compliance assessment. Product scope, national implementation and applicable secondary legislation should be checked against current sources before publication."
    ]
  },
  {
    "slug": "blog-the-cbam-compliance-journey-from-data-collection-to-declaration",
    "path": "/en/blog/blog-the-cbam-compliance-journey-from-data-collection-to-declaration",
    "title": "The CBAM Compliance Journey: From Data Collection to Declaration",
    "category": "CBAM",
    "excerpt": "The CBAM compliance journey starts with identifying which imported goods fall within scope. A company’s product list should be mapped against customs tariff codes, origin data, import dates, and the importer’s legal role",
    "body": [
      "The CBAM compliance journey starts with identifying which imported goods fall within scope. A company’s product list should be mapped against customs tariff codes, origin data, import dates, and the importer’s legal role. This first step prevents resources from being spent on out-of-scope products while in-scope products remain unidentified. The Commission publishes dedicated information on CBAM sectors, the definitive regime, and reporting resources [1] .",
      "The second step is emissions data collection. Suppliers should provide data supported by an explained methodology and a clear production boundary. A single figure labelled “total emissions per product” may not be sufficient without information on the facility, reporting period, production volume, energy sources, and verification status. A structured data request should make these fields explicit.",
      "The third step is connecting data to internal controls and reporting systems. The CBAM Registry supports declarations, certificate management, and compliance monitoring [1] . Companies should therefore define the data owner, the emissions specialist, the customs lead, and the final approval authority. Version control and evidence files are essential so that corrections can be reconstructed and explained.",
      "The final step is financial and operational planning. Because the certificate price is linked to EU ETS allowance auction prices, the carbon cost should be modelled through scenarios rather than treated as a fixed budget line [1] . Companies should assess different emissions and price assumptions, while reviewing supplier contracts for data provision, verification, liability, and cost allocation. CBAM reporting becomes more effective when it is integrated into enterprise decision-making rather than isolated within a compliance team.",
      "[1] European Commission — Carbon Border Adjustment Mechanism (CBAM) \n \n Publisher's note: This content is for general information only and is not legal advice or a company-specific compliance assessment. Product scope, national implementation and applicable secondary legislation should be checked against current sources before publication."
    ]
  },
  {
    "slug": "blog-the-dora-compliance-journey-from-inventory-to-resilience-testing",
    "path": "/en/blog/blog-the-dora-compliance-journey-from-inventory-to-resilience-testing",
    "title": "The DORA Compliance Journey: From Inventory to Resilience Testing",
    "category": "DORA",
    "excerpt": "The DORA compliance journey begins with a technology and service inventory. Organisations should identify which applications, infrastructure components, data, and providers support critical or important functions. The in",
    "body": [
      "The DORA compliance journey begins with a technology and service inventory. Organisations should identify which applications, infrastructure components, data, and providers support critical or important functions. The inventory should include dependencies, data flows, privileged access, recovery options, and concentration risks rather than simply listing purchased software.",
      "The second step is an ICT risk-management framework. Risk appetite, responsibilities, control objectives, monitoring metrics, and exception handling should be documented. Single points of failure, insufficient redundancy, incomplete asset records, weak access controls, and excessive supplier dependency are common priority areas.",
      "The third step is incident management and reporting. Organisations should define how an incident is detected, classified, escalated, communicated, and closed. Incident records should include the affected service, customer impact, decisions, communications, root cause, and corrective actions, not only technical logs.",
      "The fourth step is testing and improvement. Recovery exercises, scenario tests, and technical security tests reveal whether documented plans work in practice. Findings should be assigned to accountable owners, given target dates, and retested. The Commission’s DORA materials show that implementing and delegated acts add detail to the obligations [3] ; organisations should therefore monitor current secondary rules and supervisory communications alongside the main regulation.",
      "[3] European Commission — Digital Operational Resilience Regulation (DORA) \n \n Publisher's note: This content is for general information only and is not legal advice or a company-specific compliance assessment. Product scope, national implementation and applicable secondary legislation should be checked against current sources before publication."
    ]
  },
  {
    "slug": "blog-the-era-of-carbon-pricing-how-cbam-changes-corporate-strategy",
    "path": "/en/blog/blog-the-era-of-carbon-pricing-how-cbam-changes-corporate-strategy",
    "title": "The Era of Carbon Pricing: How CBAM Changes Corporate Strategy",
    "category": "CBAM",
    "excerpt": "The expression “carbon tax era” should be used carefully in the CBAM context. CBAM is not a single-rate tax applied to all imports; it is a carbon-pricing and certificate mechanism linked to the embedded emissions of goo",
    "body": [
      "The expression “carbon tax era” should be used carefully in the CBAM context. CBAM is not a single-rate tax applied to all imports; it is a carbon-pricing and certificate mechanism linked to the embedded emissions of goods within scope. With the definitive regime in force from 2026, importers must address authorisation, reporting, and certificate surrender requirements [1] .",
      "This development changes how companies understand cost. Carbon is no longer only a sustainability-reporting indicator. It can influence product cost, supplier selection, inventory planning, and customer pricing. When suppliers use different production technologies, energy mixes, and measurement practices, the importer’s expected compliance cost and data risk can vary even for similar products.",
      "Supplier assessments should therefore consider emissions-data reliability alongside price, quality, and delivery performance. Companies may not be able to replace high-emission suppliers immediately, but they can favour suppliers with credible reduction plans, transparent data, and verification capacity. Energy efficiency, renewable power, process optimisation, and product redesign can reduce emissions while strengthening market access.",
      "CBAM does not force companies to choose between compliance and value-chain transformation. A well-designed programme does both. When scope inventories are connected to financial planning, emissions data is reflected in supplier contracts, and investment decisions include carbon performance, CBAM can become a source of competitive advantage rather than merely a new cost.",
      "[1] European Commission — Carbon Border Adjustment Mechanism (CBAM) \n \n Publisher's note: This content is for general information only and is not legal advice or a company-specific compliance assessment. Product scope, national implementation and applicable secondary legislation should be checked against current sources before publication."
    ]
  },
  {
    "slug": "blog-the-eudr-compliance-journey-from-traceability-to-due-diligence",
    "path": "/en/blog/blog-the-eudr-compliance-journey-from-traceability-to-due-diligence",
    "title": "The EUDR Compliance Journey: From Traceability to Due Diligence",
    "category": "EUDR",
    "excerpt": "The first stage of EUDR compliance is scope identification. Sales and procurement catalogues should be mapped against the relevant product codes, from raw materials to finished goods. Starting supplier questionnaires bef",
    "body": [
      "The first stage of EUDR compliance is scope identification. Sales and procurement catalogues should be mapped against the relevant product codes, from raw materials to finished goods. Starting supplier questionnaires before this mapping is complete can create unnecessary data requests and still leave critical products unidentified.",
      "The second stage is tracing the supply chain back to the production location. Supplier name and country alone may not be enough. Depending on the product and the applicable requirements, companies may need information on the production plot, production date, commodity type, and evidence of legal compliance. The Commission provides EUDR guidance, an information system, frequently asked questions, and implementation resources [2] .",
      "The third stage is due diligence and risk assessment. Companies should evaluate deforestation, forest-degradation, and legality risks using the evidence collected. Where risk is high, additional documentation, independent verification, field assessment, or supplier replacement may be considered. The rationale and outcome of each mitigation decision should be recorded in an auditable manner.",
      "Finally, EUDR checks should be embedded in procurement and product-release processes. A product that has not passed the required control should be automatically flagged before ordering, import, or sale. Contractual provisions on data provision, change notification, and audit rights strengthen the system. EUDR is not a one-off document-collection exercise; it is a continuous supply-chain governance process.",
      "[2] European Commission — Regulation on Deforestation-free Products \n \n Publisher's note: This content is for general information only and is not legal advice or a company-specific compliance assessment. Product scope, national implementation and applicable secondary legislation should be checked against current sources before publication."
    ]
  },
  {
    "slug": "blog-the-nis2-compliance-journey-from-scope-to-incident-reporting",
    "path": "/en/blog/blog-the-nis2-compliance-journey-from-scope-to-incident-reporting",
    "title": "The NIS2 Compliance Journey: From Scope to Incident Reporting",
    "category": "NIS2",
    "excerpt": "A NIS2 compliance programme starts with a scope assessment. Organisations should review their sector, services in the EU, company size, affiliated entities, and critical operations. The Commission states that NIS2 introd",
    "body": [
      "A NIS2 compliance programme starts with a scope assessment. Organisations should review their sector, services in the EU, company size, affiliated entities, and critical operations. The Commission states that NIS2 introduces risk-management and incident-reporting requirements for entities in more sectors and, as a rule, for medium-sized and large entities in critical areas [4] . The final determination depends on national implementing legislation.",
      "The second stage is the service and asset inventory. Critical business processes, supporting systems, data flows, and external providers should be identified. The purpose is not merely to count devices; it is to understand which services could be disrupted and what the consequences would be.",
      "The third stage is the control framework. Access management, backups, multifactor authentication, vulnerability management, secure development, incident response, business continuity, and supply-chain controls should be designed together. Supplier security evidence should be complemented by contractual terms on incident notification, subcontractors, and service continuity.",
      "The fourth stage is incident reporting. Roles and timelines should be defined from detection and triage to management escalation and communication with the competent authority. The CSIRT network and EU-CyCLONe support information exchange and coordinated management of large-scale incidents [4] . Internal procedures should align with these external coordination structures.",
      "The final stage is measurement. Metrics such as critical-vulnerability age, asset-inventory accuracy, exercise results, supplier-assessment coverage, and response time should reach senior management. NIS2 compliance is not a static folder of policies; it is a cycle of testing, reporting, remediation, and improvement.",
      "[4] European Commission — NIS2 Directive: Securing Network and Information Systems \n \n Publisher's note: This content is for general information only and is not legal advice or a company-specific compliance assessment. Product scope, national implementation and applicable secondary legislation should be checked against current sources before publication."
    ]
  },
  {
    "slug": "blog-what-is-cbam-europes-response-to-carbon-leakage",
    "path": "/en/blog/blog-what-is-cbam-europes-response-to-carbon-leakage",
    "title": "What Is CBAM? Europe’s Response to Carbon Leakage",
    "category": "CBAM",
    "excerpt": "The European Union’s Carbon Border Adjustment Mechanism, or CBAM , is an environmental policy instrument that accounts for the embedded carbon emissions of certain imported goods. Its purpose is to address carbon leakage",
    "body": [
      "The European Union’s Carbon Border Adjustment Mechanism, or CBAM , is an environmental policy instrument that accounts for the embedded carbon emissions of certain imported goods. Its purpose is to address carbon leakage by reducing the difference between EU producers that bear a carbon cost and producers in third countries that may face a lower carbon cost. The European Commission describes CBAM as a tool that complements the EU Emissions Trading System [1] .",
      "CBAM operated in a transitional phase from 2023 to 2025, while the definitive regime started on 1 January 2026 [1] . Under the definitive regime, importers face obligations related to authorisation, reporting, and the purchase and surrender of CBAM certificates corresponding to the embedded emissions of imported goods. CBAM therefore affects not only customs teams but also procurement, production, sustainability, finance, and data-management functions.",
      "The initial scope focuses on selected goods in carbon-intensive sectors, including cement, iron and steel, aluminium, fertilisers, electricity, and hydrogen [1] . Scope cannot be determined by sector name alone. Product classification, origin, import scenario, and the methodology used to calculate emissions must be considered together. Incorrect classification or weak supplier data can undermine both reporting accuracy and cost forecasting.",
      "From a corporate perspective, the most effective approach is to treat CBAM as an ongoing control process connecting product, supplier, emissions, and customs data. Companies should build a scope inventory, assign ownership, collect measurable supplier data, and retain auditable evidence. CBAM is therefore more than a reporting obligation: it is a strategic signal supporting lower-carbon production and more transparent value chains.",
      "[1] European Commission — Carbon Border Adjustment Mechanism (CBAM) \n \n Publisher's note: This content is for general information only and is not legal advice or a company-specific compliance assessment. Product scope, national implementation and applicable secondary legislation should be checked against current sources before publication."
    ]
  },
  {
    "slug": "blog-what-is-dora-digital-operational-resilience-in-finance",
    "path": "/en/blog/blog-what-is-dora-digital-operational-resilience-in-finance",
    "title": "What Is DORA? Digital Operational Resilience in Finance",
    "category": "DORA",
    "excerpt": "The Digital Operational Resilience Act , commonly known as DORA , is an EU regulation designed to strengthen the financial sector’s resilience against information and communication technology failures, cyber incidents, a",
    "body": [
      "The Digital Operational Resilience Act , commonly known as DORA , is an EU regulation designed to strengthen the financial sector’s resilience against information and communication technology failures, cyber incidents, and third-party technology risks. It seeks to help financial entities continue critical services during disruption and recover in a controlled manner afterwards [3] .",
      "DORA matters because digital services are now integral to banking, payments, insurance, investment, and other financial activities. Applications, data centres, cloud services, networks, and external providers are deeply interconnected. That connectivity creates efficiency, but it also means that a single technology failure can have broad operational consequences.",
      "The European Commission explains that DORA empowers it to adopt delegated and implementing acts specifying how competent authorities and market participants should comply with the regulation [3] . The framework covers ICT risk management, incident management and reporting, resilience testing, information sharing, and ICT third-party risk management.",
      "DORA should not be treated as a narrow technical-security standard. The management body needs to understand critical or important functions, approve risk priorities, oversee key providers, and follow remediation results. When DORA is designed as an enterprise resilience programme connecting technology, business continuity, and customer trust, it produces a more durable outcome.",
      "[3] European Commission — Digital Operational Resilience Regulation (DORA) \n \n Publisher's note: This content is for general information only and is not legal advice or a company-specific compliance assessment. Product scope, national implementation and applicable secondary legislation should be checked against current sources before publication."
    ]
  },
  {
    "slug": "blog-what-is-eudr-a-new-framework-for-deforestation-free-products",
    "path": "/en/blog/blog-what-is-eudr-a-new-framework-for-deforestation-free-products",
    "title": "What Is EUDR? A New Framework for Deforestation-Free Products",
    "category": "EUDR",
    "excerpt": "The European Union’s Regulation on Deforestation-free Products, commonly known as EUDR , aims to ensure that certain products placed on the EU market or exported from it do not contribute to deforestation or forest degra",
    "body": [
      "The European Union’s Regulation on Deforestation-free Products, commonly known as EUDR , aims to ensure that certain products placed on the EU market or exported from it do not contribute to deforestation or forest degradation. The European Commission states that the regulation seeks to reduce greenhouse-gas emissions and biodiversity loss [2] . Product compliance therefore depends not only on the physical characteristics of a product but also on where and how it was produced.",
      "The principal commodities include cattle, wood, cocoa, soy, palm oil, coffee, and rubber . Derived products such as leather, chocolate, tyres, and furniture may also fall within scope [2] . A company may therefore be exposed to EUDR even when it does not directly import a raw agricultural commodity. Product classification and the relevant legal annexes must be reviewed carefully.",
      "The central EUDR question is whether the product can be linked to a verifiable production location and lawful, deforestation-free sourcing. Operators and traders placing these commodities on the EU market or exporting them from the EU must be able to demonstrate that the products did not originate from recently deforested land and did not contribute to forest degradation [2] . A generic supplier declaration is unlikely to provide sufficient visibility on its own.",
      "EUDR preparation should include product mapping, supplier and country inventories, geolocation data, legality evidence, and documented risk mitigation. Sustainability claims then become more than marketing language: they become part of a data- and evidence-based product-compliance system.",
      "[2] European Commission — Regulation on Deforestation-free Products \n \n Publisher's note: This content is for general information only and is not legal advice or a company-specific compliance assessment. Product scope, national implementation and applicable secondary legislation should be checked against current sources before publication."
    ]
  },
  {
    "slug": "blog-what-is-the-nis2-directive-europes-updated-cybersecurity-framework",
    "path": "/en/blog/blog-what-is-the-nis2-directive-europes-updated-cybersecurity-framework",
    "title": "What Is the NIS2 Directive? Europe’s Updated Cybersecurity Framework",
    "category": "NIS2",
    "excerpt": "The NIS2 Directive is the European Union’s updated cybersecurity framework and replaces NIS1. The European Commission explains that NIS2 introduces a wider scope, clearer rules, and stronger supervision tools to raise th",
    "body": [
      "The NIS2 Directive is the European Union’s updated cybersecurity framework and replaces NIS1. The European Commission explains that NIS2 introduces a wider scope, clearer rules, and stronger supervision tools to raise the common level of cybersecurity across the Union [4] . It focuses on protecting network and information systems, their users, and other affected individuals from cyber threats and incidents.",
      "NIS2 establishes a common legal framework across 18 critical sectors [4] . In addition to energy, transport, healthcare, finance, water management, and digital infrastructure, the framework extends to areas such as electronic communications, broader digital services, waste and wastewater management, critical product manufacturing, postal and courier services, public administration, and space. Applicability must be assessed together with the organisation’s sector, size, role, and national implementing rules.",
      "The Directive addresses cybersecurity risk management, incident reporting, supply-chain security, vulnerability management, business continuity, crisis management, and cyber hygiene. Significant incidents must be reported to the relevant national authorities, while Member States are expected to maintain national cybersecurity strategies [4] . NIS2 also increases top-management accountability, bringing cyber risk firmly into the boardroom.",
      "For companies, NIS2 means that cybersecurity cannot remain solely an IT responsibility. A measurable programme should involve management, legal, procurement, operations, human resources, and information-security teams. Because transposition differs across Member States, organisations should monitor both the EU text and the guidance of the competent authority in each country where they operate.",
      "[4] European Commission — NIS2 Directive: Securing Network and Information Systems \n \n Publisher's note: This content is for general information only and is not legal advice or a company-specific compliance assessment. Product scope, national implementation and applicable secondary legislation should be checked against current sources before publication."
    ]
  }
];
