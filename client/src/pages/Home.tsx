/** Evidence Grid: an asymmetric, high-key home page where a left reference rail frames dense product intelligence. */
import { ArrowDownRight, ArrowUpRight, CheckCircle2, Network, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { PageFrame } from "@/components/SiteShell";
import { ProductCard } from "@/components/ProductCard";
import { SectionLead } from "@/components/SectionLead";
import KurumsalVideo from "@/components/KurumsalVideo";
import { assets, paketler, products, yolHaritasi } from "@/lib/site";

/** 13 Eyl 2026 (Hasan: "DORA icin ana sayfaya bir yer ekle, taninsin").
 *  Fiyat ELLE yazilmaz: magaza kaydindan okunur — ayni urunun iki yerde iki
 *  fiyat gostermesi bu projede daha once yasandi. */
const doraKiti = paketler.find((p) => p.slug === "dora-tedarikci-hazirlik-kiti");

export default function Home() {
  return (
    <PageFrame description="Nechh Robotics, regülasyona tabi sektörler için dikey yapay zekâ ürünleri geliştirir.">
      <section className="hero">
        <div className="hero-reference"><span>NR / 01</span><i /></div>
        <div className="hero-copy">
          <p className="eyebrow">DİKEY YAPAY ZEKÂ SİSTEMLERİ</p>
          <h1>Regülasyonun yükünü,<br /><em>iş akışınızdan</em> ayırın.</h1>
          <p className="hero-description">Nechh Robotics; sağlık, hukuk, uyum ve operasyon süreçleri için kurum bağlamını gözeten dijital ürünler geliştirir.</p>
          <div className="hero-actions">
            <Link href="/cozumler" className="button button-primary">Çözümleri keşfedin <ArrowDownRight size={18} /></Link>
            <Link href="/iletisim" className="button button-text">Bir konuşma başlatın <ArrowUpRight size={17} /></Link>
          </div>
          <div className="hero-note"><span className="signal-dot" /> Veriyi, süreçleri ve sorumlulukları aynı bağlamda ele alma yaklaşımı.</div>
        </div>
        <div className="hero-visual-wrap">
          <div className="hero-visual-label"><span>CONTROL LOOP</span><span>01—05</span></div>
          <img src={assets.hero} alt="Dikey yapay zekâ sistemlerini temsil eden soyut denetim ağı" className="hero-visual" />
          <div className="hero-annotation annotation-one"><span /> VERİ YERELLİĞİ</div>
          <div className="hero-annotation annotation-two"><span /> İZLENEBİLİR AKIŞ</div>
        </div>
      </section>

      <section className="video-serit">
        <div className="video-serit-lead">
          <p className="eyebrow">TANITIM</p>
          <h2>Ne yaptığımızı <em>90 saniyede</em> anlatalım.</h2>
          <p>Regülasyona tabi sektörlerde geliştirdiğimiz ürünlerin kısa tanıtımı.</p>
        </div>
        <KurumsalVideo />
      </section>

      <section className="problem-section">
        <SectionLead number="02" eyebrow="ÇÖZDÜĞÜMÜZ PROBLEM" title={<>İşin yükü, çoğu zaman<br /><em>işin kendisinden ağır.</em></>} copy="Düzenlemeye tabi sektörlerde maliyet, veri hassasiyeti ve kopuk koordinasyon aynı anda büyür. Nechh ürünleri, bu üç temas noktasında derinleşir." />
        <div className="problem-grid">
          <article className="problem-card"><span className="problem-index">A</span><h3>Uyum çalışması<br />dağınık ilerler.</h3><p>Yeni düzenlemeler, dokümanlar ve kontroller çoğu ekip için ayrı bir operasyon yaratır.</p></article>
          <article className="problem-card"><span className="problem-index">B</span><h3>Hassas veri<br />bağlam ister.</h3><p>Hasta kaydı, dava dosyası ve üretim verisi; rastgele araçlara bırakılmayacak kadar kritiktir.</p></article>
          <article className="problem-card"><span className="problem-index">C</span><h3>Koordinasyon<br />iz bırakmaz.</h3><p>Telefon, mesajlaşma ve dağınık tablolar arasında ilerleyen süreçler sorumluluğu görünmez kılar.</p></article>
        </div>
      </section>

      <section className="solutions-section" id="cozumler">
        <SectionLead number="03" eyebrow="ÜRÜN PORTFÖYÜ" title={<>Bir teknoloji değil,<br /><em>doğru bağlam.</em></>} copy="Her ürün, tek bir sektörün tekrar eden iş akışına odaklanır. Kapsamı genişletmek yerine, kritik süreci daha anlaşılır ve işlenebilir hale getirir." />
        <div className="portfolio-layout">
          <div className="portfolio-image"><img src={assets.systems} alt="Sağlık, hukuk, CBAM, salon ve ekipman kiralama yönetimi için birbirine bağlı soyut sistemler" /><span className="image-caption">SECTOR-SPECIFIC SYSTEMS / 05</span></div>
          <div className="portfolio-grid">{products.map((product, index) => <ProductCard key={product.slug} product={product} featured={index === 0} />)}</div>
        </div>
        <Link href="/cozumler" className="route-link">Tüm çözümleri karşılaştırın <ArrowUpRight size={18} /></Link>
      </section>

      {doraKiti && (
        <section className="dora-serit" id="dora">
          <div className="dora-serit-lead">
            <p className="eyebrow">YENİ · DORA · AB FİNANS SEKTÖRÜ</p>
            <h2>AB bankasına yazılım mı veriyorsunuz?<br /><em>DORA sözleşmesi size de gelir.</em></h2>
            <p>
              DORA 17 Ocak 2025'ten beri uygulanıyor. Yükümlü olan banka; ama madde 30 gereği
              sözleşmede denetim hakkı, olay desteği, veri konumu ve çıkış planı <strong>sizden</strong> isteniyor.
            </p>
          </div>
          <div className="dora-serit-govde">
            <ul>
              {doraKiti.icerik.slice(0, 4).map((satir) => (
                <li key={satir}><CheckCircle2 size={16} /> {satir}</li>
              ))}
            </ul>
            <div className="dora-serit-eylem">
              <Link href="/magaza/dora-tedarikci-hazirlik-kiti" className="button button-primary">
                {doraKiti.ad} · {doraKiti.fiyat} <ArrowUpRight size={17} />
              </Link>
              <small>{doraKiti.sinir}</small>
            </div>
          </div>
        </section>
      )}

      <section className="principles-section">
        <div className="principles-background">N</div>
        <SectionLead number="04" eyebrow="ÇALIŞMA İLKELERİ" dark title={<>Sözümüzden önce,<br /><em>çalışma biçimimiz.</em></>} copy="Nechh Robotics, sektörel ürünleri iddialı vaatlerle değil; bağlam, açıklık ve denetlenebilirlik ilkeleriyle tasarlar." />
        <div className="principles-list">
          <article><span><Network size={22} /></span><div><h3>Sektör bağlamı</h3><p>Tek bir yatay araç yerine, her alanın özel akışına ve diliyle uyumlu çözümler geliştirmeyi hedefleriz.</p></div><b>01</b></article>
          <article><span><ShieldCheck size={22} /></span><div><h3>Veri kontrolü</h3><p>Hassas verinin kurumda kalabilmesi, hangi sistemle çalışılırsa çalışılsın temel tasarım sorusudur.</p></div><b>02</b></article>
          <article><span><CheckCircle2 size={22} /></span><div><h3>Açık sınırlar</h3><p>Bir ürünün rolünü ve resmî süreçlerde nerede durmadığını açıkça ifade etmek, güvenin parçasıdır.</p></div><b>03</b></article>
        </div>
      </section>

      <section className="yol-haritasi">
        <div className="yol-lead">
          <p className="eyebrow">SIRADAKİ ÇALIŞMALAR</p>
          <h2>Bugün çalışanlar bunlar.<br /><em>Üzerinde çalıştıklarımız da var.</em></h2>
          <p className="yol-uyari">
            Aşağıdakiler <strong>yayında olan ürünler değildir.</strong> Kanuni
            zemini, kapsamı ve veri ihtiyacı çıkarılmış; hazırlık ve geliştirme
            sırası budur. Bir tarih taahhüdü vermiyoruz.
          </p>
        </div>
        <div className="yol-liste">
          {yolHaritasi.map((kalem) => (
            <article key={kalem.kod} className={kalem.durum === "hazirlik" ? "yol-oge is-hazirlik" : "yol-oge"}>
              <span className="yol-kod">{kalem.kod}</span>
              <div className="yol-govde">
                <h3>{kalem.ad}</h3>
                <p>{kalem.aciklama}</p>
              </div>
              <div className="yol-etiketler">
                <b>{kalem.bolge}</b>
                <small>{kalem.faz}</small>
                <em>{kalem.durum === "hazirlik" ? "Hazırlık aşamasında" : "Planlandı"}</em>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="fabric-section">
        <div className="fabric-copy">
          <p className="eyebrow">AI-FABRIC / ÜRETİM YAKLAŞIMI</p>
          <h2>Bugünün ürünleri,<br /><em>yarının sistemlerini</em> besler.</h2>
          <p>AI-Fabric, yeni ürün fikirlerini değerlendirme, belgelemek ve geliştirme disiplinini daha sistematik hale getiren şirket içi üretim yaklaşımımızdır.</p>
          <Link href="/ai-fabric" className="button button-ink">AI-Fabric'i inceleyin <ArrowUpRight size={17} /></Link>
        </div>
        <div className="fabric-image"><img src={assets.aiFabric} alt="Yapay zekâ ile ürün geliştirme yaklaşımını temsil eden soyut modüler üretim hattı" /><div className="fabric-stamp">FABRIC<br /><small>BUILD / TEST / LEARN</small></div></div>
      </section>

      <section className="contact-cta">
        <div><p className="eyebrow">BİR SONRAKİ ADIM</p><h2>Süreçteki en zor düğümü<br /><em>birlikte tanımlayalım.</em></h2></div>
        <Link href="/iletisim" className="button button-primary button-large">İletişime geçin <ArrowUpRight size={19} /></Link>
      </section>
    </PageFrame>
  );
}
