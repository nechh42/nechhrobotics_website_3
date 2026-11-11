# Nechh Robotics — Tasarım Keşfi

## Üç Stil Yaklaşımı

### 1. Evidence Grid

**Çok Kısa Tanıtım:** Regülasyon ve teknik ürün hissini; kanıt, kontrol ve netlik üzerinden anlatan editoryal bir kurumsal yaklaşım. Beyaz alanlar, teknik çizgiler ve canlı ama ölçülü vurgularla güven üretir.

**Olasılık:** 0.07

### 2. Human Systems

**Çok Kısa Tanıtım:** Sağlık ve hukuk gibi insan merkezli sektörleri daha yumuşak, sakin ve insani bir görsel dille anlatır. Organik biçimler ve sıcak tonlarla teknoloji mesafesini azaltır.

**Olasılık:** 0.03

### 3. Industrial Horizon

**Çok Kısa Tanıtım:** Robotik vizyonu ve mühendislik kültürünü koyu zeminler, mekanik ritimler ve sinematik ürün görselleriyle öne çıkaran cesur bir yön.

**Olasılık:** 0.09

---

# Seçilen Yaklaşım: Evidence Grid

## Tasarım Hareketi

**Swiss International Typographic Style** ile çağdaş teknik rapor tasarımının birleşimi. Nechh Robotics'in uzmanlık, denetlenebilirlik ve sektörel odağını; dekorasyondan önce bilgi hiyerarşisiyle hissettirir.

## Temel İlkeler

1. **Kanıt önceliği:** Her bölüm somut bir iddia, açık açıklama ve ilgili ürün yönlendirmesi içerir.
2. **Bilinçli asimetri:** Sayfalar klasik ortalanmış kutular yerine sol bilgi rayı, geniş çalışma alanı ve kontrollü boşlukla kurulur.
3. **Sektörel ciddiyet:** Parlak teknoloji klişeleri yerine mat yüzeyler, teknik çizgiler, ölçüm işaretleri ve sakin hareket kullanılır.
4. **Yol gösteren navigasyon:** Kullanıcı, ürün sayfası ve iletişim çağrıları arasında her zaman anlaşılır bir sonraki adıma sahiptir.

## Renk Felsefesi

Ana zemin **mineral beyazı**dır: mevzuat ve profesyonel dokümanların açıklığını çağrıştırır, içeriği yormaz. **Gece mürekkebi**, kurumun teknik yetkinliğini ve metin okunurluğunu taşır. Nechh'in sahiplenilebilir imzası olan **denetim mavisi**, yönlendirme, link ve aktif durumlar için kullanılır. Sınırlı **sinyal kırmızısı** ise risk, kritik vurgu ve sayfa etiketi için ayrılır; hiçbir zaman dekoratif gürültü yaratmaz.

## Düzen Paradigması

Geniş ekranlarda sayfalar, sol tarafta bölüm numarası veya sayfa bağlamını taşıyan dar bir **referans rayı** ve sağda akan içerik alanı ile tasarlanır. Ana sayfadaki kahraman alanı, tam ortalanmış bir blok değil; metnin soldan yükseldiği, görsel/mimari diyagramın sağda dengelendiği çift eksenli bir kompozisyondur. Mobilde ray, başlık üstüne yatay bir meta şeride dönüşür.

## İmza Öğeleri

1. **Referans rayı:** Sayfa numarası, bölüm etiketi ve kısa yön göstergesi taşıyan ince dikey çizgi sistemi.
2. **Denetim noktaları:** Ürün veya güven iddialarını işaretleyen küçük mavi-kırmızı yuvarlaklar ve bağlanan çizgiler.
3. **Veri pencereleri:** Şeffaf çerçeveli, köşeleri düşük yarıçaplı kartlar; istatistik değil, ilke veya ürün özelliği anlatmak için kullanılır.

## Etkileşim Felsefesi

Etkileşimler dikkat istemez, yön verir. Navigasyon öğeleri ince bir çizgiyle belirir; kartlar hover durumunda yalnızca gölgeyi ve referans çizgisini değiştirir. Ürünlere giden CTA'lar hızlı ve belirgin tepki verir; sayfa içi gezinme, kullanıcıyı şaşırtmadan hedef bölüme taşır.

## Animasyon

Görünürlük animasyonları yalnızca `opacity` ve `transform` kullanır; metinler 18–24 piksel aşağıdan 220–300 ms içinde yerleşir. Referans rayındaki çizgiler, bölüm görünür olduğunda kısa bir ilerleme hareketi yapar. Hover geçişleri 160–200 ms ve güçlü ease-out eğrisiyle ilerler. `prefers-reduced-motion` tercihinde tüm dekoratif geçişler kapanır.

## Tipografi Sistemi

Başlıklarda **Space Grotesk**: teknik, güçlü, darbe etkisi yüksek. Gövde metninde **Manrope**: Türkçe karakter desteği güçlü, sakin ve yüksek okunurluklu. Başlıklar 700/600 ağırlıkla, üst etiketler küçük harf geniş aralıklı 700 ağırlıkla kullanılır. Gövde metni 16–18 piksel arasında kalır; gereksiz büyük puntolardan kaçınılır.

## Marka Özü

**Konumlandırma:** Nechh Robotics, regülasyona tabi sektörler için veriyi kurumda tutan ve iş akışlarını denetlenebilir hale getiren dikey yapay zekâ ürünleri geliştirir.

**Kişilik:** Analitik, dürüst, ileri görüşlü.

## Marka Sesi

Başlıklar kısa, iddialı ancak ölçülü olur; CTA'lar eylemi ve sonraki adımı açıkça belirtir. Mikro kopya teknik iddiaları sadeleştirir, süslü vaatlerden kaçınır.

> “Regülasyonun yükünü, iş akışınızdan ayırın.”

> “Ürününüzü inceleyin; kullanım senaryonuzu birlikte netleştirelim.”

## Wordmark ve Logo

Kelime işareti; harf aralıkları bilinçli ayarlanmış, `NECHH / ROBOTICS` iki satırlı teknik bir logotip olarak kullanılır. Sembol; merkezi kırmızı bir denetim noktasını çevreleyen iki açık devre izi ve kısmi bir halka içerir. Bu sembol, hem robotik kontrol döngüsünü hem de izlenebilir iş akışını temsil eder; metin içermez ve favicon olarak da okunur.

## İmza Marka Rengi

**Denetim Mavisi — #1155CC.** Soğuk değil kararlı, kurumsal değil sıradan; sayfa boyunca yalnızca odak ve yönlendirme için kullanılır.

## Style Decisions

- **Palet disiplini:** Denetim Mavisi, tekrar eden tek eylem ve odak rengidir. Signal Red yalnızca kontrol noktaları ve kritik referans etiketleri için kullanılır; sektör renkleri ana kimliğin önüne geçmez.
- **Ürün dosyası yaklaşımı:** Her ürün kartı; ürün numarası, sektör bağlamı, somut iş akışı tanımı ve görünür denetim işareti taşıyan kompakt bir teknik dosya olarak tasarlanır.
- **Marka kilidi:** NECHH / ROBOTICS iki satırlı teknik kelime işareti; başlıkta, alt bilgide ve iletişim bağlamlarında mühendislik hissi veren tutarlı aralık ve hiyerarşiyle kullanılır.
