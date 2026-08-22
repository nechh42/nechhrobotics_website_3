/** Evidence Grid: AI-Fabric is presented as a transparent internal product discipline, not a vague futurist promise. */
import { ArrowUpRight, Check, ScanSearch, Workflow } from "lucide-react";
import { Link } from "wouter";
import { PageFrame } from "@/components/SiteShell";
import { assets } from "@/lib/site";

export default function AiFabric() {
  return (
    <PageFrame title="AI-Fabric" description="Nechh Robotics'in sistematik ürün geliştirme yaklaşımı.">
      <section className="fabric-page-hero">
        <div className="fabric-page-copy"><p className="eyebrow">AI-FABRIC / 05</p><h1>Bir fikirden ürüne<br /><em>daha disiplinli</em> bir yol.</h1><p>AI-Fabric, Nechh Robotics'in yeni ürün fikirlerini değerlendirme, belgeleme ve geliştirme biçimini ortak bir üretim mantığında buluşturan şirket içi yaklaşımdır.</p></div>
        <div className="fabric-page-image"><img src={assets.aiFabric} alt="AI-Fabric yaklaşımını temsil eden soyut modüler üretim sistemi" /><span>BUILD SYSTEM / NOT A BLACK BOX</span></div>
      </section>

      <section className="fabric-workflow">
        <div className="workflow-lead"><p className="eyebrow">ÜRETİM DİSİPLİNİ</p><h2>Ürünü yalnızca<br /><em>yapmıyoruz; anlamlandırıyoruz.</em></h2></div>
        <div className="workflow-stages">
          <article><span>01</span><ScanSearch size={23} /><h3>Analiz</h3><p>Fikirleri kullanıcı, problem, teknik risk ve uygulanabilirlik açısından çerçeveleriz.</p></article>
          <article><span>02</span><Workflow size={23} /><h3>Belgeleme</h3><p>Kararları, sınırları ve çalışma varsayımlarını ortak referans haline getiririz.</p></article>
          <article><span>03</span><Check size={23} /><h3>Doğrulama</h3><p>Ürünü tek seferlik vaatler yerine kullanılabilirlik ve gerçek süreç değeri üzerinden geliştiririz.</p></article>
        </div>
      </section>

      <section className="future-section"><div className="future-rail"><span>HORIZON</span><i /></div><div><p className="eyebrow">UZUN VADE</p><h2>Yazılım birikimini;<br /><em>gömülü sistemlere, sensör ağlarına</em><br />ve robotik sistemlere taşımak.</h2></div><p>Bu yön, bugünkü ürünlerin yerine geçmez. Her yeni adımın önce gerçek bir iş akışında değer üretmesi gerektiği inancıyla ilerler.</p><Link href="/iletisim" className="route-link">Bir iş akışını konuşalım <ArrowUpRight size={18} /></Link></section>
    </PageFrame>
  );
}
