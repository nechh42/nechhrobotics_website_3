/** Evidence Grid: contact is a focused route to a real mailbox, avoiding non-functional forms in a static build. */
import { ArrowUpRight, Mail, MapPin, MoveUpRight } from "lucide-react";
import { Link } from "wouter";
import { PageFrame } from "@/components/SiteShell";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <PageFrame title="İletişim" description="Nechh Robotics ile ürünler ve iş akışları hakkında iletişime geçin.">
      <section className="contact-page-hero"><div><p className="eyebrow">İLETİŞİM</p><h1>Doğru soruyla<br /><em>başlayalım.</em></h1><p>Bir ürün, çalışma alanı ya da regülasyon süreci hakkında konuşmak için doğrudan e-posta gönderebilirsiniz.</p></div><div className="contact-page-marker"><span>NR</span><i /><small>OPEN / 2026</small></div></section>
      <section className="contact-grid"><article className="contact-main"><span className="contact-number">01</span><Mail size={25} /><p className="eyebrow">E-POSTA</p><h2>İlk mesajınızı<br /><em>doğrudan ekibe iletin.</em></h2><a href="mailto:nechhlab.global@gmail.com" className="contact-email">nechhlab.global@gmail.com <ArrowUpRight size={21} /></a><p className="contact-helper">Mesajınızda ilgilendiğiniz ürün veya çözmeye çalıştığınız iş akışını belirtmeniz yeterlidir.</p></article><div className="contact-side"><article><span>02</span><MapPin size={21} /><h3>Merkez</h3><p>Türkiye</p></article><article><span>03</span><MoveUpRight size={21} /><h3>Profesyonel ağ</h3><a href="https://www.linkedin.com/in/nechh-r-5358a737a" target="_blank" rel="noreferrer">LinkedIn profilini açın <ArrowUpRight size={15} /></a></article></div></section>
      <ContactForm />
      <section className="contact-redirect"><div><p className="eyebrow">ÖNCE ÜRÜNLER</p><h2>Nechh ürünlerinden birini<br /><em>incelemek mi istersiniz?</em></h2></div><Link href="/cozumler" className="route-link">Çözümlere dönün <ArrowUpRight size={18} /></Link></section>
    </PageFrame>
  );
}
