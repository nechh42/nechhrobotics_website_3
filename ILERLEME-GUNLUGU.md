# 🌐 NECHHROBOTICS.COM — YENİ SİTE · İLERLEME GÜNLÜĞÜ

> **22 Ağustos 2026'da açıldı.** Bu defter **sadece yeni siteye** aittir.
> Eski canlı site → `Nechh_Robotics_Website/ILERLEME-GUNLUGU.md`
> Defter tablosu → `KONULAR/GUNLUK-DUZENI.md`

---

## 🔗 GITHUB REPOSU (Hasan açtı, 22 Ağu)

```
https://github.com/nechh42/Nechh_Robotics_Website-YEN-LENM-.git
```

**İlk kurulum komutları (Hasan'ın verdiği):**
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/nechh42/Nechh_Robotics_Website-YEN-LENM-.git
git push -u origin main
```

⚠️ **Not:** repo adındaki `YEN-LENM-`, GitHub'ın Türkçe karakterleri
(`YENİLENMİŞ`) bozmasından geliyor. Sorun değil, ama yerel klasör adı
bilerek **ASCII** seçildi: `Nechh_Robotics_Website-YENI`.
*(Türkçe karakterli klasör adı bugün bir kez taşıma hatası verdi.)*

⚠️ **Push edilmeden önce:** `git status` ile `node_modules` ve `dist`in
listede olmadığı doğrulanacak. `.gitignore` ikisini de kapsıyor.

---

## 📍 KARAR — NEDEN YENİ SİTE

Eski site 120 düz HTML dosyası. *"Statik olması iyi değil, ileride
değiştirelim"* kararı daha önce alınmıştı (Hasan, 22 Ağu'da hatırlattı).
Manus ile 3 tasarım sürümü üretildi.

**Temel sürüm seçildi: `nechhrobotics-redesign-3`**
Gerekçe: `redesign2` ile arasında sadece 5 dosya fark var (blog arama +
kategori filtresi eklenmiş). İlk `redesign` ise 8 sayfalık eski deneme,
blog arşivi yok. Yani 3 = 2 + ekstra, kayıp yok.

---

## ✅ A ADIMI — TEMİZ KOPYA + SUNUCU SÖKÜMÜ (22 Ağu, BİTTİ)

### 🟢 Sökümden önceki bulgu — korkulan sorun yokmuş
Manus çıktısında Express + tRPC + MySQL(drizzle) + AWS S3 + OAuth + LLM
yığını vardı. Açıldı: **hiçbiri kullanılmıyordu.** `server/routers.ts`
içinde sadece `// TODO: add feature routers here` yazıyordu, tek bir sayfa
bile sunucudan veri çekmiyordu. İletişim formu da e-posta göndermiyor,
kullanıcının kendi posta uygulamasını açıyor.

→ Site **tamamen ön yüz.** Veritabanı yok, sunucu yok, aylık maliyet yok.

### Silinenler (hiçbiri kullanılmıyordu)
`server/` · `drizzle/` + `drizzle.config.ts` · `dist/` · `vitest.config.ts`
· `shared/` · `client/public/__manus__/` · `client/src/lib/trpc.ts` ·
`client/src/const.ts` (Manus OAuth) · `AIChatBox.tsx` · `Map.tsx` ·
`DashboardLayout.tsx` · `ComponentShowcase.tsx` · `template.json` ·
`patches/wouter@3.7.1.patch` (Manus önizleme aracı) · `pnpm-lock.yaml`

### Sadeleştirilenler
| Dosya | Ne yapıldı |
|---|---|
| `main.tsx` | 80 satır tRPC/OAuth sarmalayıcı → **5 satır** |
| `vite.config.ts` | 170 satır Manus log toplayıcı → **25 satır** |
| `package.json` | **28 paket silindi** · pnpm yaması kaldırıldı → düz `npm` |
| `tsconfig.json` | `server`/`shared` yolları temizlendi |
| `client/index.html` | Bozuk umami analytics satırı silindi |

### 🔬 ÖLÇÜM (varsayım değil, çalıştırıldı)
```
npm install    → 228 paket, hata yok
npx tsc --noEmit → çıkış kodu 0, tip hatası yok
npm run build  → ✓ built in 4.80s
                 dist/index.html   1.02 kB
                 dist/assets/*.css  138.74 kB (gzip 23.65 kB)
                 dist/assets/*.js   482.22 kB (gzip 147.63 kB)
```

---

## 🔴 AÇIK RİSK — SEO (yayına almadan ÖNCE çözülecek)

Eski site 120 gerçek HTML dosyası, Google hepsini okuyabiliyor.
Yeni site **React SPA** — sunucu boş HTML gönderiyor, içeriği tarayıcı
çiziyor. Bu haliyle yayına alınırsa **38 TR + 12 EN blog yazısı dizinden
düşebilir.**

**Çözüm (C adımı):** derleme sırasında her rota için gerçek HTML üretmek
(prerender) + eski adresleri yeni adreslere yönlendirmek
(`/blog/xxx.html` → `/kaynaklar/xxx`).

⚠️ Bu tuzağa daha önce bir kez düşüldü (canonical olayı).
🔗 `KONULAR/SEO-VE-INDEKSLEME.md`

---

## 📋 EKSİK İÇERİKLER (B adımı — eski siteden taşınacak)

| Ne | Eski sitedeki yeri |
|---|---|
| 3 tanıtım videosu (TONSORA, HeliaLoop ×2) | `assets/gallery/video/` |
| 11 ürün görseli + galeri | `assets/gallery/`, `assets/slides/` |
| Fiyatlandırma | `products/fiyatlandirma.html` · `pricing.html` |
| Mağaza | `products/magaza.html` |
| SSS | `faq.html` |
| 🔴 KVKK / gizlilik / iade / risk metinleri | `legal/` — satış için zorunlu |
| 2 basın bülteni | `press/` |

⚠️ **Ek bulgu:** `client/index.html` içindeki favicon
`/manus-storage/nechh-mark-symbol_b5045379.png` adresini gösteriyor —
**Manus'un sunucusu, bizde kırık gelecek.** B adımında gerçek logoyla
değiştirilecek (`Nechh_Robotics_Website/assets/ANA LOGO.png`).

---

## 🧭 SIRA

```
A. Temiz kopya + sunucu sökümü          ✅ BİTTİ (22 Ağu, ölçüldü)
B. Eksik içerikleri taşı                 ⏭️ SIRADAKİ
C. Prerender + eski adres yönlendirmesi  ⏸️
D. GitHub'a ilk push + Vercel'e bağla    ⏸️
E. Yayına al (DNS)                       ⏸️
```

⚠️ **Eski site canlıda ve dokunulmadı.** Yeni site yayına alınana kadar
öyle kalacak.

---

## 📝 DÜŞEN İŞ
- ~~Eski sitedeki iyzico metinlerini temizle~~ → **iptal.** Hasan (22 Ağu):
  *"Yeni siteye geçeceksen iyzico zaten olmayacak, 2 kere çalışmak
  mantıksız."* Doğru — o sayfalar geçişle birlikte ölecek.


---

## 🔄 B ADIMI — İÇERİK TAŞIMA (22 Ağu, kısmen bitti)

### ✅ Taşınanlar — 33,2 MB, `client/public/` altına
| Klasör | İçerik |
|---|---|
| `medya/` | 13 görsel + logolar + og-image |
| `medya/video/` | 3 tanıtım videosu (TONSORA 18 MB, HeliaLoop ×2) |
| `medya/tonsora/` | 🟢 **5 gerçek App Store ekran görüntüsü** + TONSORA logosu |
| `urunler/` | 6 satılabilir ürün paketi (.zip) |
| `basin/` | 4 basın bülteni PDF'i |

🔴 **Yeni bulgu — listeye sonradan eklendi:** `assets/urunler/` altında **6 satılabilir
ürün paketi** varmış (CBAM girişimci kiti, KVKK/İSG/GDPR şablonları, e-fatura
paketi, YZ iş promptu). Bunlar **gelir kalemi** — ilk envanterde gözden kaçmıştı.

### ✅ LOGO KARARI (Hasan, 22 Ağu) — *"logo koyu dediler"*
Eski sitede **üç ayrı logo kimliği** bulundu:
1. `logo_mark.png` — siyah zeminli NR (şikâyet edilen "koyu" logo)
2. **Brand kit** — beyaz zeminli NECHH ROBOTICS + *Intelligence in Motion*
3. `logo_modern.png` — lacivert NR (tamamen farklı renk dünyası)

**✅ Seçilen: brand kit (açık zeminli).** Resmî palet tanımlı:
`#111111` · `#E60012` · `#FFFFFF` · **Montserrat**.
Kartvizit/antetli kâğıt uygulamaları da hazır → `LOGO ÇALIŞMLARI/`

**Uygulandı:**
- `client/public/medya/nechh-logo.png` — tam kilit (lockup)
- `client/public/medya/nechh-amblem.png` — 512×512 kare amblem
  *(brand kit'ten otomatik sınır bulma ile kırpıldı, elle göz kararı değil)*
- `site.ts` → `mark` ve `index.html` → favicon bu amblemi gösteriyor
- ✅ `npm run build` yeniden çalıştırıldı, hata yok

### 🔴 AÇIK — 3 BÜYÜK GÖRSEL HÂLÂ KIRIK
`hero` · `systems` · `aiFabric` — üçü de Manus sunucusunda, bizde yok.

**Hasan "gerçek ürün ekranları kullanılsın" dedi. Envanter çıkarıldı ve
gerçek şu:**

| Elimizdeki | Değerlendirme |
|---|---|
| TONSORA App Store ekranları (5 adet) | 🟢 **Gerçek ürün ekranı.** Taşındı, ürün sayfasında kullanılabilir |
| `helialoop-hekimler.png`, `juriloop-*.png` | ❌ **Ekran görüntüsü değil, tanıtım afişi** — kendi başlığı, footer'ı, "www.helialoop.com" düğmesi var. Sayfa içine afiş konmaz |
| `juriloop-hukuk-agi.png` | ❌ Ayrıca **yazıları bozuk** ("E-Discovent", "Riak Assessment") |
| `Ekran Görüntüsü (750/751/803).png` | ❌ Sosyal medya kartı (kare, yeşil) — marka rengiyle de uyumsuz |
| `promos/img/software_showcase.png` | ❌ **Bizim ürünümüz değil** — "MediCare" adlı uydurma bir panel. Kurumsal siteye konulamaz |
| Eco-Report / SEHNA | Hiç görsel yok |

**Sonuç:** bu üç yuva **soyut kurumsal görsel** istiyor (kod içindeki alt
metinler de öyle diyor: *"soyut denetim ağı"*, *"soyut modüler üretim
hattı"*). Elimizde bu tarife uyan gerçek ürün ekranı **yok**.

**Öneri:** bu üç yuva için fotoğraf yerine **tipografik/geometrik tasarım**
(marka renkleriyle CSS ile çizilir) → kırık görsel riski sıfır, sayfa hızlı,
marka bütünlüğü korunur. Gerçek ekran görüntüleri **ürün sayfalarında**
kullanılır (TONSORA'nınki hazır).

⏸️ **Hasan'ın onayı bekleniyor.**

---

## ✅ MAĞAZA SAYFASI YAZILDI (22 Ağu)

> Gerekçe (Hasan): *"Boş bir site kimsenin ilgisini çekmez."* Vitrin eski
> sitedeki gibi olacak — yeni ürün eklenmiyor, var olan görünür kılınıyor.

### Eski siteden birebir taşınan katalog — 6 paket + 2 hizmet
| Paket | Fiyat |
|---|---|
| CBAM Girişimci Kiti | ₺5.000 *(tek seferlik · $130 · +KDV)* |
| KVKK Şablon Paketi | ₺2.490 *($69)* |
| İSG Şablon Paketi | ₺2.490 *($69)* |
| GDPR Başlangıç Paketi | ₺2.990 *($79)* |
| E-Fatura Geçiş Paketi | ₺1.490 *($39)* |
| YZ İş Promptu Paketi | ₺1.990 *($49)* |
| **CBAM Başvuru Danışmanlığı** | **€2.500** *(sabit fiyat)* |
| **CBAM Profesyonel Paketi** | **₺7.900** *(kit + 1 saat danışmanlık)* |

🔴 **Fiyatların tek kaynağı artık `client/src/lib/site.ts` → `paketler`.**
Fiyat değişirse yalnızca orası düzenlenir.

### 🔴 ESKİ SİTEDE BULUNAN TUTARSIZLIK — DÜZELTİLDİ
Eski `magaza.html`'de düğmeler **"Kartla Satın Al"** diyordu, ama aynı
sayfanın altında **"Kredi kartı ile online ödeme alınmamaktadır"** yazıyordu.
Müşteriye iki farklı şey söyleyen bir sayfa.

**Yeni sayfada tek bir şey söyleniyor: banka havalesi / EFT.**
18 Ağu ödeme kararıyla da uyumlu *(iyzico/kart tamamen silinmişti)*.

### Yazılanlar
| Dosya | Ne |
|---|---|
| `client/src/lib/site.ts` | `paketler`, `ucretliHizmetler`, `odeme` veri kaynağı + menüye "Mağaza" |
| `client/src/pages/Store.tsx` | TR mağaza + EN `EnglishStore` |
| `client/src/App.tsx` | `/magaza`, `/products/magaza` *(eski adres)*, `/en/store` |
| `client/src/index.css` | paket kartı, hizmet şeridi, havale kutusu + mobil |

### 💳 IBAN — ortam değişkeninden
`VITE_IBAN_SAHIBI` ve `VITE_IBAN_NO`. **Boşken sayfa "hazırlanıyor" diyor**,
uydurma IBAN göstermiyor. *(18 Ağu kararının aynısı.)*
⚠️ Vercel'e bu iki değişken girilmeden yayına alınmamalı.

### 🔬 ÖLÇÜM
```
npx tsc --noEmit → çıkış kodu 0
npm run build    → ✓ 4.12s · CSS 142.68 kB (gzip 24.26) · JS 492.28 kB (gzip 150.43)
```
⚠️ **Tarayıcıda görsel olarak DOĞRULANMADI.** Derleniyor ≠ doğru görünüyor.
Yayına almadan önce `npm run dev` ile gözle bakılacak.

### 🎨 NOT — marka rengi çelişkisi
Brand kit paleti **kırmızı** (`#E60012`), sitenin mevcut teması **mavi**
(`#1155cc`). Logo açık zeminliye çevrildi ama tema rengi değişmedi.
Karar gerekiyor: tema kırmızıya mı çekilsin, yoksa mavi mi kalsın?
*(Şimdilik mavi bırakıldı — tek iş kuralı.)*

---

## 🔁 22 AĞU — HASAN'IN GERİ BİLDİRİMİ ÜZERİNE DÜZELTMELER

> *"Önceki sade tasarımı daha çok sevdim. Vitrinde hemen paketlerden
> bahsediliyor, fiyatlar var. Oysa merak eden ya da satın alacak olan ilgili
> yere girsin, orada baksın. Fiyatlar da incelemeye gidilen sayfada olacak."*

### ✅ 1 · Mağaza sadeleştirildi — fiyatlar vitrinden kaldırıldı
- `/magaza` artık **fiyat göstermiyor**: paket adı + kapsam özeti +
  *"İnceleyin"* bağlantısı. Arşiv kartlarıyla aynı sade dil kullanıldı.
- **Yeni sayfa:** `/magaza/:slug` → `client/src/pages/PaketDetay.tsx`
  Fiyat, paket içeriği, sınır metni ve ödeme adımları **burada**.
- 8 kalemin hepsi (6 paket + 2 hizmet) kendi detay sayfasına sahip.

### ✅ 2 · "Mail yazıyor, ne için belli değil" → düzeltildi
Eski halde e-posta adresi ortada duruyor, ne işe yaradığı yazmıyordu.
Artık **numaralı 3 adım** var: (1) havale açıklamasına paket adını yaz,
(2) dekontu şu adrese gönder — *"bu adres siparişinizi ulaştırmanız içindir,
başka bir işlem gerekmez"*, (3) paket aynı gün lisanslı olarak gelir.
E-posta bağlantısı **konu satırını otomatik dolduruyor**.

### ✅ 3 · Eski siteden unutulanlar eklendi
| Ne | Nereye |
|---|---|
| **Google AdSense** `ca-pub-7812184746705631` | `client/index.html` `<head>` |
| `ads.txt` | `client/public/ads.txt` (eski siteden birebir) |
| **Tawk.to canlı destek** (sağ alt köşe) | `client/public/canli-destek.js` + index.html |

*(Not: sağ alttaki widget yapay zekâ değil, **Tawk.to canlı destek**.
Property `68ecb86033a03a194942cfa4`, Widget `1j7eb0f2h`.)*

### 🔴 4 · "Neden görselleri kaldırdın?" — KALDIRILMADI, HİÇ GELMEDİLER
Bu bir yanlış anlaşılma değil, **gerçek bir kayıp** ve sebebi net:

- Kodda adresleri `/manus-storage/nechh-hero-...jpg` diye geçiyor.
- `server/_core/storageProxy.ts` bu dosyaları **Manus'un Forge API'sinden**
  anahtarla çekiyordu → `forgeApiUrl` + `forgeApiKey`. **O anahtar bizde yok.**
- Arandı: 3 zip'in içinde **yok**, `dist/` içinde **yok**, hiçbir klasörde yok.

👉 Hasan onları **Manus önizlemesinde** görmüştü; indirilen kodda hiç olmadılar.

**Çözüm yolu (tek yol):** Manus önizlemesi açıkken görsellere sağ tık →
"Resmi farklı kaydet". Klasör ve adlandırma talimatı hazır:
`GORSEL-BEKLEYEN/OKU-BENI.md`

### 🔬 ÖLÇÜM
```
npx tsc --noEmit → 0
npm run build    → ✓ CSS 146.56 kB · JS 493.29 kB
```
⏸️ Tarayıcıda göz kontrolü Hasan'da.

### ⏭️ SIRADAKİ
- [ ] Ana sayfaya **"yapacaklarımız"** bölümü *(Hasan: çalışan projeler güzel,
      yapılacaklar da ayrıca belirtilsin)*
- [ ] SSS, KVKK/gizlilik/iade metinleri, basın bültenleri
- [ ] 3 görsel (Hasan indirince)

### ✅ 5 · Ana sayfaya "SIRADAKİ ÇALIŞMALAR" bölümü eklendi
> Hasan: *"Burada şu an çalışan projeleri koymuşsun, bu güzel!
> Yapacaklarımızı da ayrıca belirt."*

Çalışan 4 ürünün (HeliaLoop, JuriLoop, Eco-Report, TONSORA) altına,
AI-Fabric bölümünden **önce** yerleştirildi.

**8 kalem, kaynağı `nechh_nis_rehber.md` → 15. Karar Matrisi:**
| # | Çalışma | Bölge | Faz |
|---|---|---|---|
| 01 | EUDR Uyum Asistanı | AB | Faz 1 · hazırlık |
| 02 | YMM Tasdik Raporu | TR | Faz 1 · hazırlık |
| 03 | Atık Yönetim Planı | TR | Faz 2 |
| 04 | NIS2 Uyum Takibi | AB | Faz 2 |
| 05 | DORA Uyum Takibi | AB | Faz 2 |
| 06 | EKB Dijital Platformu | TR | Faz 2 |
| 07 | TISAX Hazırlık | Global | Faz 3 |
| 08 | Dijital Ürün Pasaportu | AB | Faz 4 |

🔴 **Dürüstlük kilidi — bölümün başında kırmızı çizgili uyarı var:**
*"Aşağıdakiler yayında olan ürünler değildir. Kanuni zemini, kapsamı ve veri
ihtiyacı çıkarılmış; hazırlık ve geliştirme sırası budur. Bir tarih taahhüdü
vermiyoruz."*

Rehberin kendi kuralına uygun: *"Bakanlık entegrasyonu vaat etmeyin",
"akredite doğrulayıcıyız demeyin"*. Vitrin zenginleşiyor ama **vaat
verilmiyor** — hazırlık aşamasındakiler ayrıca işaretli.

### 🔬 ÖLÇÜM
```
npx tsc --noEmit → 0
npm run build    → ✓ 4.16s · CSS 148.32 kB · JS 495.75 kB
```

---

## ⏸️ MÜŞTERİ KAYDI (C3) — ASKIDA, TETİKLEYİCİSİ YAZILI

> Hasan (22 Ağu): *"Anlaşıldı, müşteri kaydı bekleyecek. Hatırladım —
> 2027'ye daha var ve müşteri yok diye askıya almıştık. Günlüğü yaz yine de,
> unutmayalım."*

### 📍 BUGÜNKÜ DURUM — ölçüldü, tahmin değil
| Ne | Nasıl çalışıyor | Kayıt |
|---|---|---|
| İletişim formu | `mailto:` — ziyaretçinin kendi posta uygulamasını açar | ❌ hiçbir yere yazılmıyor |
| Sipariş | Havale + dekont e-postası | ❌ yalnızca Gmail + banka ekstresi |
| Ziyaretçi/üyelik | — | ❌ veritabanı yok (sunucu söküldü) |

**Yani kim, ne zaman, hangi paketi aldı — hiçbir yerde listelenmiyor.**

### 🔴 NEDEN ER YA DA GEÇ GEREKLİ
Sıralı fatura numarası (`NCH2026000000001…`) **kalıcı kayıt** ister.
Veritabanı yokken iki eş zamanlı satış **aynı numarayı** alabilir — vergi
tarafında düzeltmesi zor bir hata. Eco-Report'taki `_efatura.js` bunu zaten
biliyor: Supabase yoksa fatura kesmeyi **reddediyor** (fail-closed).

### ✅ KARAR — ŞİMDİ YAPILMAYACAK
Bugün satış **sıfır**. Sıfır sipariş için veritabanı kurmak, henüz var
olmayan bir sorunu çözmektir. Havale + dekont ilk 5-10 müşteriye kadar elle
taşınabilir; muhasebeci zaten ekstreden görüyor.

### 🔔 TETİKLEYİCİ — bu satır silinmez
> **İLK ÖDEYEN MÜŞTERİ ÇIKTIĞI GÜN C3 KURULACAK.**
> Reklam değil, tıklama değil — **hesaba para geçtiği gün.**

**Hazır olanlar (yeniden yazılmayacak):**
- SQL: `Nechh_Robotics_Website/docs/orders-tablosu.sql`
- Eklenecek alanlar: `invoice_number`, `invoice_issued_at`, `invoice_pdf_url`
- Gereken env: `SUPABASE_URL`, `SUPABASE_SERVICE_KEY`

Tahmini süre: **~1 saat** (SQL hazır olduğu için).

---

## ✅ MENÜ DÜZENİ + GALERİ (22 Ağu)

### 1 · Menü Hasan'ın istediği sıraya getirildi
**Yeni sıra:** Çözümler · Hizmetler · Mağaza · AI-Fabric · **Blog Yazıları** ·
**Galeri** · **Hakkımızda** · **İletişim**

- `Kaynaklar` → **`Blog Yazıları`** olarak yeniden adlandırıldı, `/blog`'a bağlandı
  *(eski `/kaynaklar` adresi rota olarak duruyor — gelen bağlantılar kırılmasın)*
- **Hakkımızda ve İletişim en sona** alındı
- **Galeri** menüye eklendi *(unutulmuştu)*

### 2 · 🔴 "Görüşme talep edin" düğmesi KALDIRILDI
> Hasan: *"Görüşme talebi falan yok. Eğer bunu açarsak fiyat kırmak için
> ararlar. Burası Türkiye, fiyatlar sabit!"*

- Üst sağdaki `contact-chip` düğmesi silindi
- Mobil menüdeki *"Bir konuşma başlatın"* bağlantısı silindi
- İletişim sayfası duruyor, ama **menüden erişilen normal bir sayfa** olarak —
  pazarlığa davet eden bir düğme değil

### 3 · Galeri sayfası yazıldı — `/galeri`
Yalnızca **gerçek malzeme**; temsilî görsel yok.

| Bölüm | İçerik |
|---|---|
| Tanıtım videoları | 3 video (TONSORA, HeliaLoop teaser, Doktorun günü) — kapak görselli, `preload="metadata"` |
| **Uygulama ekranları** | 🟢 **5 gerçek TONSORA App Store ekranı** — koyu zeminde, büyütülebilir |
| Tanıtım görselleri | 6 ürün anlatım görseli |

- Görsele tıklayınca **büyüteç** açılıyor (dışına tıkla veya × ile kapanır)
- `loading="lazy"` — 33 MB medya sayfa açılışını yavaşlatmıyor
- Ekran görüntülerinin altında not: *"App Store'a gönderilen sürümden
  alınmıştır; düzenleme yapılmamıştır."*

### 🔬 ÖLÇÜM — sadece derleme değil, sunucudan çekildi
```
npx tsc --noEmit → 0
npm run build    → ✓ 4.16s · CSS 151.26 kB · JS 499.49 kB

curl testleri (http://127.0.0.1:5174):
  /                                → 200
  /galeri                          → 200
  /magaza                          → 200
  /blog                            → 200
  /hakkimizda                      → 200
  /iletisim                        → 200
  /medya/video/tonsora-tanitim.mp4 → 200
  /medya/tonsora/1-takvim.png      → 200
```

⚠️ **Not:** dev sunucu `localhost` yerine **`127.0.0.1:5174`** üzerinden
açılıyor — vite yalnızca IPv6'ya (`[::1]`) bağlandığı için tarayıcı
"site açılmadı" veriyordu. `--host 127.0.0.1` ile çözüldü.

---

## 🎬 KURUMSAL TANITIM VİDEOSU + GALERİ DÜZELTMESİ (22 Ağu)

### ❌ Geri alınan: gerçek TONSORA ekran görüntüleri
> Hasan: *"Galeriye gerçek TONSORA görüntüleri koymuşsun, kaldır, gerek yok!"*

`client/public/medya/tonsora/` klasörü **tamamen silindi** (5 App Store ekranı).
Galeri sayfasındaki "Uygulama ekranları" bölümü de kaldırıldı.
*(Diskte ve `dist/` içinde kontrol edildi — ikisinde de yok.)*

### ✅ Ana sayfaya kurumsal video şeridi
🟢 **Kurumsal tanıtım videosu varmış:** `nechhrobotics-video.mp4` (25,9 MB).

**Nereye konuldu — web'deki standart yerleşim:**
Kurumsal/B2B sitelerde tanıtım videosu neredeyse her zaman **hero'nun hemen
altında, tam genişlikte, tıklayınca oynayan 16:9 panel** olarak durur.
Hero'nun içine gömülmez (başlığı boğar), sayfa sonuna atılmaz (kimse görmez).
Aynısı uygulandı: koyu şerit, solda kısa metin, sağda çerçeveli oynatıcı.

⚡ **`preload="none"`** — 25,9 MB dosya sayfa açılışında **indirilmiyor**,
yalnızca tıklanınca yükleniyor. Kapak görseli hemen görünüyor.

🖼️ **Kapak karesi üretildi:** `video-kapak.jpg` (1600×900) — ffmpeg olmadığı
için videodan kare çıkarılamadı; marka amblemi koyu zemine yerleştirilerek
kurumsal bir kapak üretildi.

### ✅ Galeri yenilendi — yeni kaynaklardan
Hasan'ın gösterdiği 3 klasörden alındı:
`Pictures\TANITIMLAR` · `muhasebe PROJESİ görsel çalışmalar` ·
`-x---cbam tanıtım ve reklam`

| Bölüm | İçerik |
|---|---|
| Videolar | **6 video** — Nechh kurumsal, TONSORA, HeliaLoop, JuriLoop, Doktorun günü, teaser |
| Tanıtım görselleri | **9 afiş** — HeliaLoop, JuriLoop, TONSORA, CBAM (EN), EUDR (TR+EN) |

### 🔬 ÖLÇÜM
```
npx tsc --noEmit → 0
npm run build    → ✓ 4.90s · CSS 152.22 kB · JS 499.87 kB
curl: / · /galeri · nechhrobotics-tanitim.mp4 · video-kapak.jpg
      · tanitim/helialoop-afis.png → hepsi 200
```

### ⚠️ YENİ AÇIK — medya klasörü 69 MB
`client/public/medya/` artık **69 MB** (7 video + 20 görsel).
- Vercel için sorun değil.
- **Git için düşünmek gerek:** her video sürümü depoda kalıcı yer kaplar.
  Seçenek: videoları depoya koymayıp Vercel'e ayrı yüklemek, ya da Git LFS.
- 📌 D adımında (repo açılışı) karara bağlanacak — **push etmeden önce.**

---

## 🎥 VİDEO OTOMATİK OYNATMA + 📦 GIT KARARI (22 Ağu)

### ✅ Video otomatik oynuyor ve döngüde
`client/src/components/KurumsalVideo.tsx` yazıldı.
- `autoPlay` + `loop` + `muted` + `playsInline`
- **IntersectionObserver:** video ekrana girince başlar, çıkınca durur —
  arka planda boşuna oynayıp bant genişliği ve pil harcamaz
- `prefers-reduced-motion: reduce` seçili kullanıcıda otomatik başlamaz
- Altında not: *"Ses kapalı başlar — açmak için hoparlöre dokunun."*

⚠️ **Tarayıcı kuralı:** sesli otomatik oynatma Chrome/Safari/Firefox'ta
engellidir. Sessiz başlatmak zorunlu. *(Hasan: "biliyorum, sıkıntı yok.")*

### 🔴 VİDEO İÇERİĞİ SİTEYLE UYUMSUZ — 7 HATA BULUNDU
Sunum (`Nechh_Robotics_Tanitim_v2.pptx`) okundu, siteyle karşılaştırıldı.

| # | Sorun | Durum |
|---|---|---|
| 1 | **JuriLoop "UYAP & e-Devlet uyumlu"** | 🔴 Kaynak kodda `uyap` geçen **tek dosya yok** — doğrulandı. Asılsız iddia |
| 2 | "Dört ürün canlı" | HeliaLoop incelemede, canlı değil |
| 3 | "Veri içeride kalır" koşulsuz | Yalnızca kurumsal kurulumda geçerli |
| 4 | "Türkiye · 2024" | Şahıs işletmesi Ağu 2026'da kapatıldı |
| 5 | MDR sayılıyor | Üzerinde çalışma yok → EUDR ile değişti |
| 6 | Yol haritası siteyle farklı | Site ile birebir aynı hale getirildi |
| 7 | "2030+ robotik sistemler" | 4 yıllık taahhüt gibi → çıkarıldı |

**Düzeltilmiş metin (TR + EN) hazır:**
`Nechh_Robotics_Website-YENİLENMİŞ/TANITIM-VIDEO-METNI-DUZELTILMIS.md`
Hasan yeni videoyu bu metinle çekecek.

### 📦 GIT KARARI — videolar depoda kalıyor
**Ölçüm:** 157 dosya · 69,8 MB · en büyük dosya 26 MB.
- GitHub uyarı eşiği 50 MB/dosya, blok 100 MB → **sorun yok**
- Git LFS **kullanılmayacak**: Vercel'de LFS desteği güvenilmez, ek sürtünme
- Videoları depo dışında tutmak Vercel dağıtımını bozar (Vercel git'ten yayınlar)

⚠️ **Kalıcı kural:** bir videonun **her yeni sürümü depoya tam boyutuyla
kalıcı eklenir**. Ara kesitler commit edilmez — yalnızca **son hâli**.

### ✅ İLK COMMIT ATILDI (henüz push edilmedi)
```
bef1a17  Nechh Robotics yeni site — ilk sürüm
branch: main · .git 60 MB
node_modules ve dist commit'te YOK (doğrulandı)
```

🔴 **Kurumsal video BİLEREK commit edilmedi:**
`nechhrobotics-tanitim.mp4` içinde **asılsız UYAP iddiası** var. Yanlış bilgi
içeren bir video yayınlanmaz. Yeni video çekilince aynı adla konur ve commit
edilir.

⏸️ **Push için Hasan'ın onayı bekleniyor** —
`https://github.com/nechh42/Nechh_Robotics_Website-YEN-LENM-.git`

---

## ✅ ESKİ SİTEDEN KALAN HER ŞEY TAŞINDI (22 Ağu)

> Hasan: *"Eski sitede ne varsa taşıyalım. Biz siteyi statik durumdan
> kurtarmaya çalışıyoruz, sadece bu."*
> ⚠️ Claude her adımda onay sormayı bıraktı — kapsam belli, iş yapılıyor.

### 💳 IBAN girildi
`.env` → `VITE_IBAN_SAHIBI` + `VITE_IBAN_NO`
`TR62 0006 4000 0014 5100 2493 37` · Hasan Hüseyin Bayrak
*(`.env` `.gitignore`'da — IBAN depoya yazılmadı, Vercel paneline elle girilecek.)*

### ⚖️ Hukuki metinler — 4 sayfa
`/kvkk` · `/gizlilik` · `/iade` · `/sorumluluk`
Eski siteden **126 içerik bloğu** çıkarıldı (KVKK 33, gizlilik 47, iade 23,
sorumluluk 23). Ortak `HukukiSayfa.tsx` bileşeni; yan sütunda diğer metinlere
geçiş.

🔧 **Bir çelişki düzeltildi:** gizlilik metni *"ödeme işlemleri üçüncü taraf
sağlayıcılar aracılığıyla"* diyordu — 18 Ağu'da kart tamamen kaldırılmıştı.
Yeni hali: *"Ödemeler banka havalesi/EFT ile alınır; kart bilgisi toplanmaz
ve saklanmaz."*

### ❓ SSS — `/sss`
3 kategori, 5 soru taşındı.
⚠️ **İçerik eski:** sorular mikrodenetleyici/açık kaynak donanım üzerine,
bugünkü işle (CBAM, KVKK, uyum yazılımı) ilgisi yok. **Güncellenmeli** —
taşındı ama yazılması gereken yeni sorular var.

### 📰 Basın — `/basin`
2 bülten (HeliaLoop + JuriLoop), 54 blok. PDF sürümleri de indirilebilir.

### 🔗 Alt bilgiye "Yasal" sütunu eklendi
KVKK · Gizlilik · İade · Sorumluluk · SSS — ayrıca Mağaza ve Galeri bağlantısı.

### 🔴 SEO KURTARMA
**1 · Canonical rota başına üretiliyor**
```
https://www.nechhrobotics.com + window.location.pathname
```
⚠️ 12 Ağu dersi uygulandı: kökte sabit `/` canonical **tüm siteyi dizinden
düşürüyor.** Artık her sayfa kendi adresini gösteriyor. `lang` da yerele göre.

**2 · `vercel.json` — 28 kalıcı (301) yönlendirme**
Eski sitemap'teki **101 adres** tarandı, kırılacak olanların hepsi eşlendi:
`/privacy → /gizlilik` · `/refund-policy → /iade` · `/risk-disclosure →
/sorumluluk` · `/legal/* → ilgili sayfa` · `/faq → /sss` · `/about →
/hakkimizda` · `/contact → /iletisim` · `/services/* → /hizmetler` ·
`/press/* → /basin` · `/products/* → ilgili ürün veya mağaza` ·
`/tonsora/* → /cozumler/tonsora` · `/odeme → /magaza`

Ayrıca SPA fallback rewrite (medya/ürün/PDF dosyaları hariç tutuldu) ve
medya için 1 yıllık önbellek başlığı.

**3 · Yeni `sitemap.xml` — 89 adres**
Gerçek rotalardan üretildi: 15 sabit TR + 4 ürün + 8 paket + 8 EN +
**50 blog yazısı** (38 TR + 12 EN). `robots.txt` sitemap'i gösteriyor.

### 🔬 ÖLÇÜM — 12 adres sunucudan çekildi
```
/sss /kvkk /gizlilik /iade /sorumluluk /basin /magaza /galeri
/sitemap.xml /robots.txt /basin/basin-bulteni-1.pdf
/urunler/kvkk-sablon-paketi.zip     → HEPSİ 200

npx tsc --noEmit → 0
npm run build    → ✓ 6.54s · 1643 modül
```

### ⏭️ YAYIN ÖNCESİ KALAN
- [ ] Vercel'e `VITE_IBAN_SAHIBI` + `VITE_IBAN_NO` girilecek *(`.env` depoda yok)*
- [ ] SSS içeriği güncellenecek (eski donanım soruları)
- [ ] Prerender: SPA'da içerik tarayıcıda çiziliyor. Canonical + yönlendirme +
      sitemap riski büyük ölçüde kapattı; **tam güvence için prerender
      (her rotaya gerçek HTML) hâlâ önerilir.** Headless tarayıcı bağımlılığı
      gerektirir — ayrı iş olarak duruyor.

---

## 🚀 22 AĞUSTOS — SİTE CANLIYA ALINDI

**Adres:** https://nechhroboticswebsite-3.vercel.app
**Proje:** Vercel · `nechh/nechh_robotics_website-3` · dal `main`
**Depo:** `github.com/nechh42/nechhrobotics_website_3`
*(GitHub'da yeniden adlandırıldı; eski `Nechh_Robotics_Website-YEN-LENM-` adresi yönleniyor.)*

### 🔴 YAŞANAN ARIZA — `cleanUrls` SPA'yı kırdı
İlk dağıtımda **ana sayfa 200, diğer tüm sayfalar 404** verdi.

**Teşhis (tahminle değil, ölçümle):**
1. `/privacy`, `/faq`, `/about` → 308 çalışıyordu ⇒ `vercel.json` **okunuyor**
2. GitHub'daki `vercel.json` doğruydu, dağıtım "Ready" idi ⇒ **kod sorunu değil**
3. Karar veren ölçüm: **`/index.html` isteği 308 döndü**

👉 **Sebep:** `cleanUrls: true`, `.html` uzantısını kesip yönlendiriyor.
SPA rewrite'ının **hedefi** `/index.html` olduğu için hedef çözülemiyor ve
Vercel `NOT_FOUND` veriyor. Yani ayar kendi kuralımızı sabote ediyordu.

**Çözüm:** `cleanUrls` ve `trailingSlash` kaldırıldı → `124814a` sonrası
dağıtımda tüm rotalar 200.

⚠️ **Kalıcı kural:** Vercel'de SPA yayınlarken `cleanUrls: true`
**kullanılmaz** — `rewrites` hedefiyle çakışır.

*(Ayrıca ilk denemede `rewrites` içinde negatif lookahead
`/((?!medya|urunler|...).*)`  kullanılmıştı; Vercel'in path-to-regexp
sözdiziminde sessizce eşleşmiyor. Vercel sırası zaten
redirects → filesystem → rewrites olduğu için statik dosyaları hariç
tutmaya gerek yok.)*

### 🔬 CANLI ÖLÇÜM — hepsi geçti
```
SAYFALAR (20)   : / cozumler hizmetler magaza magaza/:slug ai-fabric blog
                  galeri hakkimizda iletisim sss basin kvkk gizlilik iade
                  sorumluluk en en/store en/blog cozumler/tonsora → HEPSİ 200

MEDYA (10)      : hero/cozumler/ai-fabric.webp, amblem, kurumsal video,
                  tanıtım afişi, ürün ZIP, basın PDF, ads.txt,
                  canli-destek.js → HEPSİ 200

YÖNLENDİRME (8) : /privacy→/gizlilik  /faq→/sss  /about→/hakkimizda
                  /contact→/iletisim  /products/pricing→/magaza
                  /legal/kvkk→/kvkk  /press/*→/basin  /odeme→/magaza
                  → HEPSİ 308

IBAN            : ✅ üretim paketinde var (Vercel değişkenleri doğru girilmiş)
sitemap.xml     : ✅ 89 adres
robots.txt      : ✅ sitemap'i gösteriyor
```

### ⏭️ KALAN
- [ ] **Alan adı taşıma** (`nechhrobotics.com` → bu proje) — DNS işi, ayrı adım
- [ ] SSS içeriği güncellenecek (eski donanım soruları)
- [ ] Prerender (SEO tam güvence)
- [ ] Mağaza metinlerinde UYAP ibaresi (App Store / Play — elle)

⚠️ `robots.txt` içindeki sitemap adresi `www.nechhrobotics.com` yazıyor —
alan adı taşınana kadar bu **bilerek** böyle; taşındığında doğru olacak.

---

## 🎉 22 AĞUSTOS — ALAN ADI TAŞINDI, YENİ SİTE ARTIK ASIL SİTE

**https://www.nechhrobotics.com** → yeni site yayında.

### Taşıma neden kolay oldu
Ölçüm: `nslookup` → `216.198.79.65` (Vercel IP), başlık → `Server: Vercel`.
Alan adı **zaten Vercel'deydi**, sadece proje değiştirdi.
👉 **DNS'e, kayıt firmasına, name server'lara hiç dokunulmadı.**

### Yapılandırma
| Adres | Durum |
|---|---|
| `www.nechhrobotics.com` | **Üretim** — ana adres |
| `nechhrobotics.com` | **308 → www** |
| `nechhroboticswebsite-3.vercel.app` | Üretim — yedek kontrol adresi (silinmedi) |

`www` bilerek ana adres seçildi: canonical etiketleri ve sitemap zaten
`www.nechhrobotics.com` üretiyor.

### 🔬 CANLI DOĞRULAMA — www.nechhrobotics.com üzerinden
```
Yayındaki site : yeni sürüm (assets/index-DDVNNeZh.js)
Sayfalar       : /magaza /galeri /sss /basin /kvkk /cozumler /blog → 200
Köksüz adres   : nechhrobotics.com → 308 → www ✅
Eski adresler  : /privacy /faq /about /contact /products/pricing
                 /legal/kvkk /odeme → hepsi 200 (yönlenip açılıyor) ✅
Medya          : hero.webp, kurumsal video, ürün ZIP → 200
SEO            : sitemap.xml (89 adres), robots.txt, ads.txt → 200
```

🟢 **Eski sitenin dizinlenmiş adreslerinin hiçbiri kırılmadı.**

### ⏭️ WEB SİTESİ İŞİ KAPANDI — kalan küçük maddeler
- [ ] SSS içeriği eski (donanım/açık kaynak soruları) — yenilenmeli
- [ ] Prerender (SEO tam güvence) — SPA içeriği tarayıcıda çiziliyor
- [ ] App Store / Play mağaza metinlerindeki UYAP ibaresi — elle düzeltilecek
- [ ] Google Search Console'a yeni sitemap bildirilecek

⚠️ Eski site deposu (`Nechh_Robotics_Website/`) **silinmedi** — arşiv olarak
duruyor. Bir süre bekletilip sonra arşive alınabilir.

---

## ✅ 22 AĞUSTOS — KALAN MADDELER KAPATILDI

### 1 · SSS içeriği yenilendi
Eski 5 soru (mikrodenetleyici, açık kaynak donanım) **bugünkü işle ilgisizdi**
— tamamen değiştirildi. Yeni hâli **4 kategori, 13 soru**:
- **Genel** — ne yapıyoruz, satın alınabilir mi, danışmanlık vs şablon farkı
- **Ödeme ve Teslimat** — havale, sipariş akışı, **"fiyatlar sabittir, pazarlık yok"**, lisans kapsamı
- **Uyum ve Sınırlar** — *"CBAM beyanını sizin adınıza veremeyiz"*, sayıların denetlenebilirliği, **devlet sistemine otomatik bağlantı olmadığı**, verinin nerede durduğu
- **İş Birliği** — yeni sektör talebi, iletişim

🔴 Sınır cümleleri bilerek konuldu: akredite doğrulayıcı olmadığımız ve
otomatik kurum entegrasyonu bulunmadığı açıkça yazıyor. UYAP olayının
tekrarlanmaması için.

### 2 · PRERENDER KURULDU — SEO riski kapandı
Site artık **her rota için gerçek HTML** üretiyor. JavaScript çalışmadan da
içerik görünüyor.

**Nasıl çalışıyor:**
| Dosya | İş |
|---|---|
| `client/src/lib/ssrMeta.ts` | Render sırasında başlık/açıklamayı toplar |
| `client/src/entry-server.tsx` | `renderToString` + wouter `<Router ssrPath>` |
| `scripts/prerender.mjs` | sitemap'teki her yolu render edip `dist/<yol>/index.html` yazar |

`package.json` → `build` artık üç adım: `build:client` → `build:ssr` → `prerender`.
**Vercel her dağıtımda otomatik çalıştıracak.**

**Ölçüm:** `prerender: 89 sayfa yazıldı, 0 hata`
Örnek `/magaza/index.html`: doğru `<title>`, doğru `description`,
doğru `canonical`, **2.066 karakter gerçek metin** (boş `<div id="root">` değil).
Blog yazılarında makale gövdesinin tamamı basılıyor (kontrol edildi).

⚠️ İki Windows tuzağı yaşandı, ikisi de çözüldü:
- vite `root: client` olduğu için SSR girişi `src/entry-server.tsx` (göreli) olmalı
- Node ESM Windows'ta mutlak yolu kabul etmiyor → `pathToFileURL()`

### 3 · Makale "geri" bağlantısı düzeltildi
`/kaynaklar` → `/blog`. Yönlendirme sıçraması kalktı, etiket de
"BLOG YAZILARI" oldu.

### 🔬 ÖLÇÜM
```
npx tsc --noEmit → 0
npm run build    → client ✓ · ssr ✓ · prerender 89/89 ✓
```

---

# 🏁 WEB SİTESİ İŞİ KAPANDI — 22 AĞUSTOS 2026

**https://www.nechhrobotics.com** yeni site yayında ve tamamlandı.

## Bugün sıfırdan yapılanlar
| # | İş |
|---|---|
| A | Manus çıktısı temizlendi, sunucu katmanı söküldü, bağımsız hale getirildi |
| B | Eski siteden **her şey** taşındı: hukuki metinler, SSS, basın, medya, ürün paketleri |
| C | SEO kurtarma: canonical, 28 kalıcı yönlendirme, 89 adresli sitemap, **prerender** |
| D | GitHub deposu + Vercel dağıtımı |
| E | Alan adı taşındı; `.com.tr` ve `.net` de bağlandı |

## Eklenen yeni sayfalar
`/magaza` + 8 paket detay sayfası · `/galeri` · `/sss` · `/basin` ·
`/kvkk` `/gizlilik` `/iade` `/sorumluluk` · ana sayfada **kurumsal video**
ve **Sıradaki Çalışmalar** bölümü

## Düzeltilen yanlış beyanlar
1. 🔴 **UYAP "uyumlu altyapı/takip"** → *"portallara hızlı erişim"* (4 dosya, 3 dil)
2. Gizlilik metnindeki *"üçüncü taraf ödeme sağlayıcısı"* → **banka havalesi**
3. Mağazadaki *"Kartla Satın Al"* düğmeleri ↔ *"kart alınmıyor"* çelişkisi
4. Tanıtım videosundaki 7 hata → yeni video düzeltilmiş metinle çekildi

## Son ölçüm (canlı)
```
20 sayfa · 10 medya/dosya · 8 yönlendirme → hepsi doğru
prerender: 89/89 sayfa, 0 hata
Google botunun gördüğü: ana sayfa 5.523 · SSS 4.881 · mağaza 2.253 karakter
```

## ⏭️ BU PROJEDE KALAN (acil değil)
- [ ] Google Search Console'a sitemap bildirimi *(Hasan yapacak)*
- [ ] Marka rengi kararı: brand kit kırmızı (#E60012) ↔ tema mavi (#1155cc)
- [ ] Eski site klasörü (`Nechh_Robotics_Website/`) bir süre sonra arşive

> 🔒 **Bu defter kapandı.** Yeni site ile ilgili bir iş çıkarsa buraya
> yazılmaya devam edilir, ama günlük çalışma buradan taşındı.

## 8 EYLÜL 2026 — SEO: SORUN YOK (ölçüldü)
Hasan Search Console'da "34 sayfa dizine eklenmedi" gördü. Ölçüm yapıldı:
sitemap'teki **90 adresin 90'ı** doğru canonical veriyor, hiçbirinde
`noindex` yok, hepsi 200 dönüyor, hiçbiri yönlendirmiyor.

34'ün tamamı tasarım gereği (21 sitemap dışı yönlendirme, 10 kasıtlı
noindex, 2 hreflang alternatifi, 1 kopya). **Yapılacak iş yok.**
Döküm ve kural: `KONULAR/SEO-VE-INDEKSLEME.md` → 8 Eylül başlığı.

## 12 EYLÜL 2026 — HİZMETLER SAYFASINA YAZILIM GELİŞTİRME EKLENDİ

**Neden:** Dışarıdan bir "2026 Fiyatlandırma Kılavuzu" geldi, siteye konması
istendi. Önce ölçüm yapıldı: `grep` ile tüm kaynak tarandı — sitede yazılım
geliştirme hizmeti **hiç yoktu**. Hizmetler sayfasının 3 kartı da CBAM/uyum
üzerineydi; "Özel Yazılım" ifadesi yalnızca eski blog yazılarında geçiyordu.
Boşluk gerçekti.

**Ama gelen fiyatlar kullanılmadı.** `IS-ALIMI/FIYATLANDIRMA.md` ile
karşılaştırıldı, her kalemi o dosyanın altındaydı. En ağırı: mağazaya çıkarma
₺8.000 önerilmişti, karar dosyasında ₺20–45 bin — 3–5 kat düşük, üstelik o dosya
bu kalemi "en kolay satılacak hizmet" ilan ediyor. Gerekçeli ret kaydı:
`IS-ALIMI/FIYATLANDIRMA.md` §8.

**Yapılanlar:**
1. `client/src/lib/site.ts` — `yazilimIsleri` (9 kalem, TR),
   `englishYazilimIsleri` (9 kalem, EN) ve `yazilimCalismaDuzeni` eklendi.
   Fiyatlar `FIYATLANDIRMA.md`'nin **alt sınırı**, "…'den başlayan" biçiminde;
   süreler aynı dosyanın "1,4 ile çarp" kuralıyla genişletildi.
2. `client/src/pages/Services.tsx` — TR ve EN sayfalarına üç bölüm eklendi:
   giriş, 9 kartlık fiyat ızgarası, koyu "çalışma düzeni" şeridi
   (ödeme aşamaları + kapsam dışı kalemler + süre sınırı).
3. `client/src/index.css` — `.yazilim-giris`, `.yazilim-kanit`,
   `.yazilim-duzen`, `.yazilim-sinir`. Kart ve şerit stilleri mağazadan
   yeniden kullanıldı (`.paket-karti`, `.hizmet-serit`), yeni kart stili yazılmadı.

**Kasıtlı kararlar:**
- **Aralık değil alt sınır yayınlandı.** Müşteri aralığın hep alt ucunu okur;
  tam aralık "fiyatı değil kapsamı küçült" kozunu elden alır.
- **Mağazaya çıkarma en üstte** — kanıtı en güçlü kalem (3 uygulama, 4 yayın).
- **Her kartta KANIT satırı var:** JuriLoop, HeliaLoop, TONSORA, Eco-Report,
  nechhrobotics.com. Uydurma referans yok.
- **"MVP" kelimesi kullanılmadı.**
- **EN sayfasında proje bazlı euro rakamı YOK.** `FIYATLANDIRMA.md`'de yurt dışı
  için sadece saat bandı kararı var (€35–70/saat); sabit kur uydurup TL'yi
  çevirmek eskiyen ikinci bir fiyat kaynağı yaratırdı. EN sayfası kapsam +
  süre + kanıt gösterir, "from €35/hour · fixed project quote" der.

**Ölçüm (tahmin değil):**
```
tsc --noEmit          → exit 0
npm run build         → exit 0, prerender 90 sayfa / 0 hata
dist/hizmetler/       → 9 fiyatın 9'u basılı (₺20.000 … ₺250.000), 9 KANIT satırı,
                        "Fiyata dahil değildir" bloğu var · 30.305 bayt
dist/en/services/     → 9 EVIDENCE satırı, "from €35/hour" var,
                        uydurma euro fiyatı YOK · 29.776 bayt
```

### Aynı gün bulunan 3 hata — düzeltildi

1. **"KANIT: JuriLoop" yanlış anlaşılırdı.** Alıcı bunu referans müşteri sanar;
   oysa kendi ürünümüz. Etiket **"BU İŞİ YAPTIĞIM ÜRÜN"** oldu, girişe
   *"müşteri referansı değil, yapabildiğimizin kanıtı"* cümlesi eklendi.
2. **Fiyatlar kendi saat tabanını kırıyordu.** ₺150.000 / 7 hafta = 210 saat =
   **₺714/saat**, oysa `FIYATLANDIRMA.md` §1 "₺1.500/saat altına inilmez" diyor.
   Dokuz kalemin hepsi öyleydi. Fiyat artırılmadı; süre **"teslim penceresi"**
   olarak etiketlendi ve *"tam zamanlı özel çalışma gün ücretinden fiyatlanır"*
   cümlesi eklendi. Kayıt: `FIYATLANDIRMA.md` §8.
3. **"Ekibimizle konuşun"** (Hakkımızda) → **"Doğrudan bizimle konuşun".**
   Tek kişilik operasyon; sitede tek "ekip" iddiası buydu, kalktı.
   (`site.ts`'teki "ekip" geçişleri TONSORA'nın salon personeli, onlar doğru.)

Yapıya dokunulmadı — kanıt: `git diff` 410 ekleme, **0 gerçek silme**;
değişen 4 satır 2 import + sonuna ekleme yapılan 2 uzun JSX satırı.
Prerender yine 90 sayfa / 0 hata.

**Kalan (Hasan onayı bekliyor):**
- [ ] Mağazadaki uyum paketlerinde sabit kurlu `$` notu var (₺5.000 · $130 →
      ₺38,5/$). Kur eskidi, sayfa yanlış fiyat gösteriyor. Yayında satıştaki
      ürünler olduğu için tek taraflı değiştirilmedi.
- [ ] Tanıtım görsellerinde "Uzman Ekibimizle / Expert Team" yazıyor. Sitedeki
      metin düzeltildi ama **görseller Hasan'da** (PNG, kodda değil).
      Yerine: "Tek elden, doğrudan geliştiriciyle" / "Straight to the developer".
- [ ] Görseldeki telefon uydurma bir panel gösteriyor; TONSORA/HeliaLoop'un
      gerçek ekranları var, onlar kullanılmalı.
- [ ] Canlıya alma: `git push` → Vercel. **Henüz yapılmadı.**

## 12 EYLÜL 2026 (2) — PARA BİRİMİ EURO OLDU, DOLAR KALDIRILDI

**Hasan'ın sorusu kararı değiştirdi:** *"madem AB ile ilgileniyoruz neden EUR
kullanmıyoruz?"* Haklıydı. Ürünlerin hepsi AB mevzuatı (CBAM, GDPR, EUDR),
müşteri AB'ye satan firma, CBAM danışmanlığı zaten €2.500 ve İngilizce hizmet
sayfasındaki bant €35/saat. Dolar hiçbir şeye oturmuyordu.

**Önce ölçüldü (tahmin değil, iki bağımsız kaynak):**
```
1 USD = ₺48,60   (frankfurter.dev 48,596 · 11 Eyl | open.er-api.com 48,603 · 12 Eyl)
1 EUR = ₺56,33   (frankfurter.dev 56,3329 · 11 Eyl | open.er-api.com 56,39 · 12 Eyl)
```

**Bulunan hata:** sitedeki `$` notları **₺38,5/$** kuruna göre yazılmıştı.
Gerçek kur ₺48,60 olduğu için yurt dışı alıcıya **%26 fazla** fiyat
gösteriliyordu (₺5.000 = $103 iken $130 yazıyordu).

**Yapılan:** dolar tamamen kaldırıldı, euro yaklaşık notu kondu. TL ana fiyat,
euro bilgi notu; fatura TL üzerinden kesilir. **TL fiyatlara dokunulmadı.**

| Paket | TL | Eski (yanlış) | Yeni |
|---|---|---|---|
| CBAM Girişimci Kiti | ₺5.000 | $130 | ≈ €89 |
| KVKK Şablon Paketi | ₺2.490 | $69 | ≈ €44 |
| İSG Şablon Paketi | ₺2.490 | $69 | ≈ €44 |
| GDPR Başlangıç | ₺2.990 | $79 | ≈ €53 |
| E-Fatura Geçiş | ₺1.490 | $39 | ≈ €26 |
| YZ İş Promptu | ₺1.990 | $49 | ≈ €35 |
| CBAM Profesyonel | ₺7.900 | — | ≈ €140 |

**Kur artık tek kaynakta:** `site.ts` içinde `export const kur` — oran, ölçüm
tarihi ve iki kaynağın adı yazılı. Kur eskiyince **tek yerden** yeniden
hesaplanır; bir daha sessizce eskimez.

**Ölçüm:** tsc 0, build 0, prerender 90/0. Mağazanın 7 paket sayfası da euro
basıyor; `dist` genelinde dolar taraması **temiz**.

### Tanıtım afişi kuruldu (GORSEL-VİDEO/)
Dışarıdaki AI'ın ürettiği afiş bozuktu: `TR:`/`EN:` etiketleri ve tırnaklar
görsele girmiş, her şey iki dilli olmuş, telefon panelleri uydurma. Afiş
sıfırdan kuruldu: `GORSEL-VİDEO/Main.dc.html` (TR) + `English.dc.html` (EN),
1080×1440, her biri **tek dil**. Renkler Hasan'ın isteğiyle koyudan **açık ve
yumuşak** düzene çevrildi, "KONYA · TÜRKİYE" satırı çıkarıldı. Uydurma panel
ve robot görseli yok; ortada gerçek kanıt bloğu var
(3 uygulama · 4 mağaza yayını · TONSORA, HeliaLoop, JuriLoop, Eco-Report).
Düzenlenebilir tuval: claude.ai/code/artifact/77eb2115-1e30-47e4-a9dd-856d514e35b4

- [ ] **Afişler siteye eklenecek.** Tuvalden PNG indirilip
      `client/public/medya/tanitim/` içine `nechh-yazilim-afis-tr.png` ve
      `nechh-yazilim-afis-en.png` adıyla konur; sonra `site.ts` içindeki
      `galeriTanitimlar` listesine iki satır eklenir. PNG gelmeden satır
      eklenmez, yoksa galeri kırık resim gösterir.

## 12 EYLÜL 2026 (3) — EURO ANA FİYAT OLDU, TL RAKAMI SİTEDEN KALKTI

**Hasan'ın kararı:** *"EUR fiyat yazılsın, ödeme yapılırken TL'ye çevrilir.
Fiyat karmaşası biter. Zaten Türk sanayiciler EUR ile çalışıyor."*

Sabahki ara çözüm (TL ana fiyat + "≈ €89" notu) **terk edildi**. Sebep: iki
para birimi yazmak, eskiyecek bir kur tutmayı zorunlu kılıyordu — hatanın kök
sebebi buydu. Artık sitede **tek para birimi** var.

| Paket | Sabah (ara çözüm) | Şimdi |
|---|---|---|
| CBAM Girişimci Kiti | ₺5.000 · ≈€89 | **€89** |
| KVKK Şablon Paketi | ₺2.490 · ≈€44 | **€44** |
| İSG Şablon Paketi | ₺2.490 · ≈€44 | **€44** |
| GDPR Başlangıç | ₺2.990 · ≈€53 | **€53** |
| E-Fatura Geçiş | ₺1.490 · ≈€26 | **€26** |
| YZ İş Promptu | ₺1.990 · ≈€35 | **€35** |
| CBAM Profesyonel | ₺7.900 · ≈€140 | **€140** |
| CBAM Danışmanlığı | €2.500 | €2.500 *(değişmedi)* |

**`export const kur` sabiti SİLİNDİ.** Sitede artık hiçbir kur tutulmuyor;
tutulacak bir şey yok. Euro fiyat asıl fiyattır. Türetildiği kur (₺56,33/EUR,
11 Eyl, iki kaynak) `site.ts` içindeki yorum bloğunda tarihsel kayıt olarak
duruyor — hesapta kullanılmıyor.

**Ödeme kutusuna çevrim cümlesi eklendi** (`PaketDetay.tsx`, 8 sayfada birden):
*"Fiyatlar euro cinsindendir. Ödeme, ödeme günündeki Merkez Bankası efektif
satış kuru üzerinden Türk lirası olarak alınır; fatura da Türk lirası
üzerinden düzenlenir."*

**Ölçüm:** tsc 0, build 0, prerender 90/0. Sekiz paket/hizmet sayfası da tek
para birimi basıyor, TL rakamı hiçbirinde yok, çevrim notu hepsinde var,
`dist` genelinde dolar taraması temiz.

### Afiş: orijinal logo ve marka renkleri
Afişe önce elle çizilmiş SVG amblem, sonra `logo_modern.png` (lacivert) konmuştu.
İkisi de yanlıştı. **Doğrusu `client/public/medya/nechh-logo.png`** — orijinal
kilit: kırmızı-siyah amblem + NECHH ROBOTICS + INTELLIGENCE IN MOTION.
Beyaz zemini şeffaflaştırıldı, kırpıldı, 820 piksele ölçeklendi, 160 renk
palete indirilip 44 KB'a sıkıştırıldı → `GORSEL-VİDEO/nechh-logo-lockup.png`.

Afişin renk düzeni de laciverdden **marka renklerine** çevrildi:
kırmızı `#e60012`, siyah `#16161a`, açık nötr zemin. Lacivert kalıntısı yok
(kontrol edildi). Böylece günlükteki "marka rengi kararı" maddesi de kapandı:
**kırmızı asıl marka rengi**, afiş ve logo artık aynı dili konuşuyor.

- [x] Afişler siteye eklendi *(aşağıya bakınız)*
- [x] Yazılım kalemleri de euroya çevrildi *(aşağıya bakınız)*

## 12 EYLÜL 2026 (4) — SİTE TEK PARA BİRİMİNE GEÇTİ + AFİŞLER GALERİDE

**Hasan:** *"EUR'ya çevir hepsini, karmaşa bitsin."* Yazılım geliştirme
kalemleri de euroya geçti; sitede **artık hiç TL rakamı yok.**

Kur ₺56,33/EUR (11 Eyl, iki kaynak), yuvarlama **yukarı** — hiçbir kalem TL
karşılığının altına düşmüyor:

| İş | Önce | Şimdi |
|---|---|---|
| Mağazaya çıkarma | ₺20.000 | **€360** |
| Tanıtım sitesi | ₺30.000 | **€540** |
| Kurumsal site | ₺55.000 | **€980** |
| Hesaplama motoru | ₺90.000 | **€1.600** |
| Mobil, tek mağaza | ₺120.000 | **€2.150** |
| Panelli web uygulaması | ₺150.000 | **€2.700** |
| Mobil, iki mağaza | ₺220.000 | **€3.950** |
| Abonelikli platform | ₺250.000 | **€4.500** |
| Bakım / destek | ₺15.000/ay | **€270/ay** |

**Beklenmeyen kazanç:** tek para birimi olunca **İngilizce sayfa da aynı fiyatı
gösterebiliyor.** Sabah "EN sayfasında proje bazlı rakam yazılmaz, sabit kur
uydurmak ikinci fiyat kaynağı yaratır" diye karar verilmişti — o gerekçe
ortadan kalktı, çünkü artık çevrilecek bir şey yok. `englishRate` alanı silindi.
`FIYATLANDIRMA.md` §7 buna göre güncellendi.

İki dilde de şu cümle yazılı: *"Fiyatlar euro cinsindendir; fatura ve tahsilat,
ödeme günündeki kur üzerinden Türk lirası olarak yapılır."*
🔴 **Teklif verirken `FIYATLANDIRMA.md` §1–§2'nin TL rakamları kullanılır**,
siteye bakılmaz.

**Ölçüm:** tsc 0, build 0, prerender 90/0. `dist` genelinde TL fiyat taraması
**temiz**; dokuz euro fiyatın dokuzu hem `/hizmetler` hem `/en/services`
sayfasında basılı.

### Afişler galeriye eklendi
Hasan tuvalden PNG indirdi. Export 1x ve 2x olmak üzere dört dosya bırakmış
(adlarında boşluk ve `.png-1` eki vardı). 2x sürümler kaynak alınıp 1080×1440'a
ölçeklendi, JPEG q90 olarak ~158 KB'a indirildi (mevcut afişler 1,7–1,9 MB,
bunlar 10 kat hafif). Dağınık dört dosya silindi. `galeriTanitimlar` listesinin
**başına** eklendi — en yeni iş en önde.

### ⚠️ Afişte kesilme bulundu ve düzeltildi
İlk export'ta **alt satır kesilmişti**: "gerçeğe dönüştürün" yarıda kalmış,
iletişim satırı hiç görünmüyordu. Sebep: logo kilidi neredeyse kare (820×750),
430 piksel genişlikte 393 piksel yer yiyordu ve içerik 1440'ı aşıyordu.
Ölçüler daraltıldı: logo 430→270 px, dış boşluk 42→28 px, üst iç boşluk
84→70 px, başlık 54→48 px, kart iç boşluğu 22→18 px, kanıt başlığı 42→36 px,
buton 34→30 px. Hesaplanan içerik yüksekliği ~1223 px, çerçeve 1440 → ~215 px
pay bırakıldı.

- [ ] **Afiş yeniden indirilecek.** Galeride şu an **kesik sürüm** duruyor.
      Tuvalden iki afiş tekrar PNG olarak indirilip aynı adlarla
      (`nechh-yazilim-afis-tr.jpg` / `-en.jpg`) değiştirilmeli.
      *Not: PNG indirip JPEG'e çevirmek gerekiyor — dosya adları `.jpg`.*

## 12 EYLÜL 2026 (5) — FİYATLAR YÜKSELTİLDİ: KUR ÇEVİRİSİ YANLIŞ ÇIPAYDI

**Hasan:** *"Marjinal fiyat istemiyorum, bizi öldürmesin ama rakiplerimizden de
çok aşağı olmayalım, ucuz hissi oluşmasın. PROFESYONEL BİR İŞ YAPIYORUZ."*

**Hatayı ben yaptım.** TL fiyatları piyasa kuruyla euroya çevirdim. O TL
rakamları **yurt içi** pazar için belirlenmişti; euro olarak yazıldığında
uluslararası fiyat gibi okunuyor ve "ucuz taşeron" sinyali veriyordu. Bir
abonelikli platform €4.500 görünüyordu — Avrupa'da o iş €15.000+.

**Doğru çıpa `FIYATLANDIRMA.md` §1'de zaten vardı:** yurt dışı €35–70/saat.
Türetme tamamen o dosyanın kendi rakamlarından, uydurma yok:

```
saat yükü   = §2'deki TL üst sınırı / ₺1.500   (§1 yurt içi saat tabanı)
site fiyatı = saat yükü × €35                  (bandın TABANI, ilk işler için)
```

| İş | Önceki (kur çevirisi) | Şimdi (saat bandı) |
|---|---|---|
| Mağazaya çıkarma | €360 | **€1.100** |
| Tanıtım sitesi | €540 | **€1.300** |
| Kurumsal site | €980 | **€2.100** |
| Hesaplama motoru | €1.600 | **€4.700** |
| Mobil, tek mağaza | €2.150 | **€5.900** |
| Panelli web uygulaması | €2.700 | **€6.600** |
| Abonelikli platform | €4.500 | **€9.400** |
| Mobil, iki mağaza | €3.950 | **€10.500** |
| Bakım / destek | €270/ay | **€950/ay** |

Ortalama ~3 kat arttı. **€70 üst bandı elde duruyor** — doğrudan müşteri ve
referans sonrası için. Sitedeki rakamlar bandın tabanı.

Türetme `site.ts` içindeki yorum bloğuna da yazıldı; "bu rakam nereden geldi"
sorusu bir daha sorulmayacak.

### 🔴 YILLIK ÜCRET YASAĞI
Hasan: *"hiçbir yerde yıllık ücret olmayacak, sadece aylık — bizim ülkemizde
ciddi enflasyon var."* Gerekçe doğru: yıllık taahhüt enflasyonu geliştiricinin
sırtına yıkar, 12 ay önce anlaşılan bedel bugün maliyeti karşılamaz.

**Ölçüm yapıldı: site temiz.** `dist` genelinde yıllık/`per year`/`annual`
taraması boş döndü; tek yinelenen kalem bakım ve o zaten aylık. Kural
`FIYATLANDIRMA.md` §7'ye kalıcı olarak yazıldı.

**Ölçüm:** tsc 0, build 0, prerender 90/0. Dokuz yeni fiyat hem `/hizmetler`
hem `/en/services` sayfasında basılı; TL fiyat taraması temiz.

---

## 13 EYLÜL 2026 — CEZA ARGÜMANI EN ÜSTE, ÖN GÖRÜŞME KALKTI, YAYINDA

**Hasan:** *"Bu argümanları siteye taşı ve en üstte yayınlansın — insanlar
sadece başlıkları okuyor."* ve *"ön görüşme hiçbir yerde olmayacak."*

- Eco-Report ürün sayfasında hero'nun hemen altına **maliyet şeridi**:
  *"Veriyi siz vermezseniz, farkını siz ödersiniz."* — 2026 €18.278 · 2027
  €36.556 · 2028 €54.834 örnek fark, dipnotlu (`site.ts` → `cbamMaliyet`).
- "Ön görüşme isteyin" → "İletişime geçin"; "ilk 20 dk ücretsiz" kaldırıldı.
- Kit €299 · profesyonel €749 · danışmanlık €2.500 (uygulama katalogu ile aynı;
  kit takımındaki fiyat koruması iki yüzeyi karşılaştırıyor).
- Diğer oturumun afişleri (`nechh-yazilim-afis-tr/en.jpg`) ve yeniden üretilen
  altı kit ZIP'i aynı commit'e girdi — 12 Eyl'de "commit edilmezse canlı eski
  dosyayı servis eder" diye açık bırakılmıştı, kapandı.

**Ölçüm:** tsc 0 · build 0 · prerender 90/0 · commit `fee6124` push edildi.
Canlıda `/cozumler/eco-report`: "18.278" var, "ön görüşme" 0 (ilk denemede).

### ✅ KAPANDI — SİTEDE YANLIŞ SÖZ: FATURA
Hasan şu an şirket açamıyor; **fatura kesilemiyor.** Sitede dört yerde fatura
sözü duruyordu. **Hasan kararı (13 Eyl): fatura sözünü kaldır.** Dördü de silindi;
ödeme ve teslimat adımları aynı kaldı ("ileteriz" yazım hatası da düzeldi):

| Yer | Yazan |
|---|---|
| `sss.json:28` | "kurumsal faturası birlikte gönderilir" |
| `PaketDetay.tsx:24` | "kurumsal fatura bilgilerinizi e-posta ile iletiriz" |
| `PaketDetay.tsx:47` | "kurumsal faturası birlikte gönderilir" |
| `site.ts:823` | "fatura da Türk lirası üzerinden düzenlenir" |

Ayrıca `hukukiMetinler.json` içinde abonelik "fatura dönemi" ifadeleri var
(genel sözleşme dili) — ayrı bakılacak.

### Bilgi — havale akışı (uygulama tarafı Eco-Report günlüğünde)
Sitede sunucu fonksiyonu yok ve Eco-Report sunucusunda CORS yok: sitedeki bir
form doğrudan uygulamaya veri gönderemez. Sipariş formu uygulamanın içinde
olacak; sitedeki buton oraya yönlendirecek.

**Ölçüm (fatura düzeltmesi):** aynı arama kalıbı eski sürümde (HEAD) **4** eşleşme,
yeni sürümde **0** — boş sonucun kalıp hatası olmadığı böyle gösterildi. İngilizce
sayfalarda "invoice" sözü yok. tsc 0 · build 0 · prerender 90/0 · derlenmiş
sayfalarda fatura sözü yok, "Paket, firmanız adına lisanslanmış" adımı yerinde.

---

## 13 EYLÜL 2026 (2) — 🔴 ÜCRETLİ KİTLER ÖDEMESİZ İNİYORDU, SİTEDEN KALDIRILDI

**Ölçüm:** `/urunler/cbam-girisimci-kiti.zip` → **HTTP 200, 223 KB**, ödeme yok
(KVKK paketi de 200). Sayfalarda bağlantı yoktu ama **altı adresin hepsi** derlenmiş
JavaScript'te yazılıydı (`site.ts` → `dosya:` alanları). Site haritası ve robots temiz.

**Daha büyüğü:** bu depo GitHub'da **herkese açık** (`nechh42/nechhrobotics_website_3`).
Pozitif kontrol: bilinen açık depo aynı sorguya 200, Eco-Report deposu 404. ZIP'ler
GitHub'dan da iniyordu ve **git geçmişinde duruyor.**

Güvenlik taraması: açık depoda `.env`/anahtar dosyası yok, `.env` geçmişte hiç
commit edilmemiş (aynı sorgu bilinen `vercel.json` üzerinde sonuç verdi).

**Hasan kararı:** depoyu gizle + ZIP'leri kaldır.

| Yapılan | Neden |
|---|---|
| `client/public/urunler/*.zip` (6) silindi | Açık klasördeki her dosya herkese servis edilir |
| `site.ts` → 6 `dosya:` alanı + tipteki alan kaldırıldı | Adresler JS paketine giriyordu |
| `vercel.json` → `/urunler/:dosya*` → `/magaza` (geçici) | Önbellekte/elde kalan eski bağlantılar 404 yerine mağazaya |

Kit artık Eco-Report tarafında, **alıcı firmanın adıyla** üretilip e-postayla gidiyor
(ayrıntı Eco-Report günlüğünde). Sitedeki *"firmanız adına lisanslanmış"* sözü böylece
karşılık buldu.

**Ölçüm:** tsc 0 · build 0 · prerender 90/0 · derlenmiş sitede `/urunler/*.zip` **0** ·
`dist/urunler` yok.

### 🔴 AÇIK — HASAN'IN ADIMI
GitHub → `nechh42/nechhrobotics_website_3` → **Settings** → **Danger Zone** →
**Change visibility → Private**. Yapılana kadar eski ZIP'ler git geçmişinden
indirilebilir. (Vercel gizli depoyla çalışmaya devam eder.)

---

## 13 EYLÜL 2026 (3) — CBAM PAKETLERİ SİPARİŞ FORMUNA BAĞLANDI

Eco-Report'a havale sipariş sistemi eklendi (ayrıntı Eco-Report günlüğünde): referans
kodu + TCMB kuruyla TL + Hasan'a e-posta + "Havale geldi" kapısı + kitin firma adıyla
ekte gitmesi.

**Sitede:** `PaketDetay.tsx` → üç CBAM paketi (`cbam-girisimci-kiti` → PRICE-002,
`cbam-profesyonel-paket` → PRICE-006, `cbam-basvuru-danismanligi` → PRICE-005) artık
**"Sipariş formunu açın"** butonu gösteriyor:
`https://ecoreport.nechhrobotics.com/?view=order&paket=PRICE-…`

- Bu üç sayfada **IBAN gösterilmiyor**: referans kodsuz gelen havale hangi siparişe ait
  olduğu bilinmeden kalırdı. IBAN sipariş formunda, referansla birlikte verilir.
- Uygulama katalogunda olmayan şablon paketleri (KVKK, İSG, GDPR, e-Fatura, YZ) eski
  kutuyu (IBAN + dekont e-postası) kullanmaya devam ediyor.

**Ölçüm:** tsc 0 · build 0 · prerender 90/0. Derlenmiş sayfalarda: üç CBAM sayfasında
form bağlantısı var, "Hesap sahibi" 0, "Dekontu" 0; KVKK sayfasında eski kutu (1/1) yerinde.
Push, uygulamanın canlıda yeni sürümü sunduğu ölçüldükten sonra yapıldı.

### 🔴 13 Eyl — depo gizlenince yayın BLOKLANDI
`03a45d6` Vercel'de: *"Deployment Blocked — commit author did not have contributing access to
the project on Vercel. The Hobby Plan does not support collaboration for private repositories."*
Yazar Hasan'ın kendisiydi (`nechh42 <nechhlab.global@gmail.com>`); fark commit mesajındaki
`Co-Authored-By: Claude` satırı. Push "başarılı" göründü ama site 10 dk boyunca eski kaldı —
canlı sayfa curl ile ölçülerek fark edildi.

**Düzeltme (aynı gün):** co-author tahmini ÇÜRÜDÜ — satırsız commit `7ce5e17` de bloklandı,
panelden Redeploy da işe yaramadı. Kesin sebep ölçülmedi (muhtemelen commit yazarının GitHub
kimliği ile Vercel hesabı `nechh42-1246` eşleşmiyor). **Hasan depoyu yeniden Public yaptı**;
Hobby plan açık depodan yayını bloklamıyor. Depoda sır yok (`.env` hiç commit edilmemiş, ölçüldü);
eski kit ZIP'leri yalnızca git geçmişinde duruyor.

---

## 13 EYLÜL 2026 (4) — DORA TEDARİKÇİ HAZIRLIK KİTİ MAĞAZADA (€499)

**Hasan kararı:** DORA kiti yapılsın, €499 tek seferlik. Kitin kendisi Eco-Report'ta üretiliyor
(ayrıntı Eco-Report günlüğünde; araştırma `KONULAR/DORA-ARASTIRMASI-2026-09.md`).

**Sitede:**
- `site.ts` → `paketler` içine `dora-tedarikci-hazirlik-kiti` (aile "DORA · AB Finans Sektörü", €499,
  sınır: hukuki danışmanlık / sözleşme incelemesi / sertifika değildir).
- `PaketDetay.tsx` → `UYGULAMA_SIPARISI` içine PRICE-008: sayfa IBAN yerine **"Sipariş formunu açın"** gösterir.
- `client/public/sitemap.xml` → yeni ürün adresi eklendi. 🔴 Eklenmeden önce derleme sayfayı **ön-render
  etmiyordu** (90 sayfa, DORA yok) — ön-render listesi site haritasından okunuyor.

**Ölçüm:** tsc 0 · build 0 · prerender **91**/0 · derlenmiş DORA sayfasında €499 var, `paket=PRICE-008` bağlantısı
var, "Hesap sahibi" 0. Push, Eco-Report canlıda PRICE-008'i kabul ettikten SONRA yapıldı (19:30 ölçüldü).

**Kit fiyat koruması:** Eco-Report kit testine `dora-tedarikci-hazirlik-kiti → PRICE-008` eşleşmesi eklendi;
site ve katalog fiyatı ayrışırsa test düşer.

---

## 13 EYLÜL 2026 (5) — ANA SAYFAYA DORA ŞERİDİ

**Hasan:** *"DORA için ana sayfaya bir yer ekle, tanınsın."*

- `Home.tsx` → ürün portföyünün hemen altına `.dora-serit` bölümü: "AB bankasına yazılım mı veriyorsunuz?
  DORA sözleşmesi size de gelir." + kitin ilk 4 içerik satırı + kit sayfasına buton + sınır notu.
- 🔴 **Fiyat, ad, içerik ve sınır elle yazılmadı:** `paketler` içindeki DORA kaydından okunuyor (aynı ürünün iki
  yerde iki fiyat göstermesi daha önce yaşandı). Kayıt silinirse bölüm hiç çizilmez.
- `index.css` → `.dora-serit` (masaüstü iki sütun, 860px altı tek sütun).

**Ölçüm:** tsc 0 · build 0 · prerender 91/0 · ön-render ana sayfada şerit, başlık, €499 ve kit bağlantısı var ·
DORA ve CBAM paket sayfalarındaki form bağlantıları bozulmadı · **gerçek Chrome:** 1440px ve 400px'te şerit
görünüyor, buton metni "DORA Tedarikçi Hazırlık Kiti · €499", yatay taşma yok, konsol hatası 0; iki ekran
görüntüsüne bakıldı.

---

## 14 EYLÜL 2026 — BEŞ ŞABLON PAKETİ SİPARİŞ FORMUNA (✅ CANLIDA)

**Canlıya alındı (Hasan: "push yapabilirsin"):** Eco-Report canlıda PRICE-009…013'ü kabul ettiği ölçüldükten SONRA
`79f63b7` push edildi. Push öncesi: tsc 0 · build 0 · prerender 91/0 · derlenmiş KVKK sayfasında `paket=PRICE-009` 1, "Hesap sahibi" 0.
**Canlı ölçüm (11:49):** kvkk → PRICE-009, isg → PRICE-010, gdpr → PRICE-011, efatura → PRICE-012, yz → PRICE-013,
dora → PRICE-008, cbam-girisimci → PRICE-002; hepsinde "Hesap sahibi" 0.

KVKK, İSG, GDPR, E-Fatura ve YZ paketleri Eco-Report'un havale sipariş sistemine bağlandı (PRICE-009…013;
kit üretimi ve testleri Eco-Report günlüğünde, `GUNLUKLER/GUNLUK-2026-09-14.md` §4).

**Sitede:** `PaketDetay.tsx` → `UYGULAMA_SIPARISI` içine beş slug. Bu sayfalar artık IBAN + "dekontu mailleyin"
yerine **"Sipariş formunu açın"** gösterecek. Fiyatlar değişmedi (`site.ts` tek kaynak; Eco-Report kit testi site
fiyatını katalogla karşılaştırıyor).

**Ölçüm:** tsc 0. **Yapılmadı:** build/prerender, Chrome turu, push.

🔴 **Sıra kuralı (DORA'daki gibi):** bu değişiklik **Eco-Report canlıda PRICE-009…013'ü kabul ettikten SONRA**
push edilir. Önce site giderse beş sayfanın formu canlı uygulamada "bilinmeyen paket" hatası verir.
