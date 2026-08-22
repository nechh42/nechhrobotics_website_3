/** Evidence Grid: resources are framed as clear learning tracks instead of invented downloads or empty editorial volume. */
import { ArrowUpRight, BookOpenText, FileCheck2, Route } from "lucide-react";
import { Link } from "wouter";
import { PageFrame } from "@/components/SiteShell";

const tracks = [
  { number: "01", icon: FileCheck2, label: "CBAM hazırlığı", title: "Uyum hazırlığında hangi veriler, hangi sırayla ele alınır?", copy: "Karbon verisi, kaynak ilişkisi ve iç kontrol disiplinine giriş için temel sorular." },
  { number: "02", icon: Route, label: "Süreç tasarımı", title: "Bir yönlendirme akışı nerede görünmez hale gelir?", copy: "Sorumluluk, bağlam ve sonraki adımın kayıt altına alınması üzerine düşünme çerçevesi." },
  { number: "03", icon: BookOpenText, label: "Veri yerelliği", title: "Hassas bilgiyle çalışan sistemlerde ilk tasarım soruları.", copy: "Veri kontrolü, kurum bağlamı ve çalışma sınırlarını tanımlamak için pratik başlangıç noktaları." },
];

export default function Resources() {
  return (
    <PageFrame title="Kaynaklar" description="Regülasyon, veri yerelliği ve süreç tasarımı için Nechh çalışma notları.">
      <section className="resources-hero"><div className="resources-hero-rail"><span>NOTES / 01</span><i /></div><div><p className="eyebrow">KAYNAKLAR</p><h1>İyi bir sistem,<br /><em>iyi sorularla</em> başlar.</h1></div><p>Bu alan, Nechh Robotics'in regülasyon, veri yerelliği ve süreç tasarımı hakkında paylaştığı çalışma notları için hazırlanmıştır.</p></section>
      <section className="resource-tracks">{tracks.map((track) => { const Icon = track.icon; return <article key={track.number}><div className="track-meta"><span>{track.number}</span><Icon size={21} /></div><p className="eyebrow">{track.label}</p><h2>{track.title}</h2><p>{track.copy}</p><Link href="/iletisim" className="route-link">Bu konuyu görüşün <ArrowUpRight size={18} /></Link></article>; })}</section>
      <section className="resources-callout"><p className="eyebrow">DOĞRU BAŞLANGIÇ</p><h2>İş akışınızdaki soruyu<br /><em>birlikte netleştirelim.</em></h2><p>Mevcut kaynak setimiz ve ürün yaklaşımımız hakkında e-posta üzerinden konuşabilirsiniz.</p><a href="mailto:nechhlab.global@gmail.com" className="button button-primary">E-posta gönderin <ArrowUpRight size={17} /></a></section>
    </PageFrame>
  );
}
