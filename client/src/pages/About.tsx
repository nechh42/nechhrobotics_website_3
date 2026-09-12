/** Evidence Grid: the company page balances a precise origin story with clearly bounded, credible ambition. */
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { PageFrame } from "@/components/SiteShell";

export default function About() {
  return (
    <PageFrame title="Hakkımızda" description="Nechh Robotics'in yaklaşımı, ürün odağı ve çalışma ilkeleri.">
      <section className="about-hero"><div className="about-year">2024</div><div><p className="eyebrow">NECHH ROBOTICS HAKKINDA</p><h1>Teknolojiyi<br /><em>gösteri için değil,</em><br />iş yükünü azaltmak için kuruyoruz.</h1></div><p>Nechh Robotics, Türkiye merkezli bir teknoloji girişimidir. Sağlık, hukuk, regülasyon uyumu ve operasyon alanlarında; sektöre özgü iş akışlarını anlayan dikey ürünler geliştirir.</p></section>

      <section className="about-manifesto"><p className="manifesto-mark">“</p><blockquote>Bir ürünün etkisi, ne kadar çok şey vadettiğinde değil; kritik bir süreci ne kadar açık, güvenli ve tekrarlanabilir hale getirdiğinde başlar.</blockquote><span>NECHH / ÇALIŞMA PRENSİBİ</span></section>

      <section className="about-values"><div className="values-intro"><p className="eyebrow">NASIL ÇALIŞIRIZ</p><h2>Şeffaflık,<br /><em>ürünün bir özelliğidir.</em></h2></div><div className="values-list"><article><span>01</span><h3>Sınırları açıklarız</h3><p>Bir ürünün ne yaptığını kadar, ne yapmadığını da net biçimde ifade ederiz.</p></article><article><span>02</span><h3>Bağlamdan başlarız</h3><p>Teknolojiyi önce iş akışının ve sektörün diliyle değerlendiririz.</p></article><article><span>03</span><h3>İz bırakmayı önemseriz</h3><p>Karar, veri ve süreç ilişkilerinin görünür olması; güvenilir çalışmanın temelidir.</p></article></div></section>

      <section className="about-roadmap"><p className="eyebrow">YÖN</p><div className="roadmap-grid"><article><span>BUGÜN</span><h3>Dikey ürünler</h3><p>Sağlık, hukuk, CBAM ve operasyon alanlarında kullanılabilir ürünler.</p></article><article><span>GELİŞİM</span><h3>AI-Fabric</h3><p>Ürün değerlendirme ve üretim disiplinini güçlendiren ortak yaklaşım.</p></article><article><span>UZUN VADE</span><h3>Robotik sistemler</h3><p>Yazılım ve yapay zekâ deneyimini gömülü sistemlere taşıma vizyonu.</p></article></div><Link href="/iletisim" className="route-link">Doğrudan bizimle konuşun <ArrowUpRight size={18} /></Link></section>
    </PageFrame>
  );
}
