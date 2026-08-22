/** Evidence Grid: mineral-white surfaces, a visible information rail, and restrained audit-blue interaction. */
import React, { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { assets, englishNavItems, navItems, products } from "@/lib/site";

type PageFrameProps = {
  children: ReactNode;
  title?: string;
  description?: string;
  locale?: "tr" | "en";
};

function BrandLockup() {
  return (
    <Link href="/" className="brand-lockup" aria-label="Nechh Robotics ana sayfa">
      <img src={assets.mark} alt="" className="brand-mark" />
      <span className="brand-wordmark">
        <strong>NECHH</strong>
        <small>ROBOTICS</small>
      </span>
    </Link>
  );
}

export function SiteHeader({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isEnglish = locale === "en";
  const items = isEnglish ? englishNavItems : navItems;

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="site-header">
      <div className="header-frame">
        <BrandLockup />
        <nav className="desktop-nav" aria-label={isEnglish ? "Main navigation" : "Ana navigasyon"}>
          {items.map((item) => (
            <Link key={item.href} href={item.href} className={location === item.href ? "nav-link is-active" : "nav-link"}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link href={isEnglish ? "/" : "/en/"} className="language-switch" aria-label={isEnglish ? "Türkçe siteye geç" : "Switch to English site"}>{isEnglish ? "TR" : "EN"}</Link>
          <button className="menu-toggle" type="button" onClick={() => setIsOpen((value) => !value)} aria-label={isOpen ? (isEnglish ? "Close menu" : "Menüyü kapat") : (isEnglish ? "Open menu" : "Menüyü aç")} aria-expanded={isOpen}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <div className={isOpen ? "mobile-panel is-open" : "mobile-panel"}>
        <nav aria-label={isEnglish ? "Mobile navigation" : "Mobil navigasyon"}>
          {items.map((item, index) => (
            <Link key={item.href} href={item.href} className="mobile-nav-link">
              <span>0{index + 1}</span>{item.label}<ArrowUpRight size={18} />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const isEnglish = locale === "en";
  const labels = isEnglish
    ? { intro: "Vertical AI products and a systematic product-development approach for regulated industries.", discover: "Discover", products: "Products", contact: "Contact", solution: "Solutions", services: "Services", about: "About", resources: "Blog", request: "Contact page", country: "Türkiye-based vertical AI venture" }
    : { intro: "Regülasyona tabi sektörler için dikey yapay zekâ ürünleri ve sistematik ürün geliştirme yaklaşımı.", discover: "Keşfedin", products: "Ürünler", contact: "İletişim", solution: "Çözümler", services: "Hizmetler", about: "Hakkımızda", resources: "Blog Yazıları", request: "İletişim sayfası", country: "Türkiye merkezli dikey yapay zekâ girişimi" };
  const prefix = isEnglish ? "/en" : "";
  return (
    <footer className="site-footer">
      <div className="footer-topline" />
      <div className="footer-grid">
        <div className="footer-intro">
          <BrandLockup />
          <p>{labels.intro}</p>
          <a href="mailto:nechhlab.global@gmail.com" className="footer-mail">nechhlab.global@gmail.com <ArrowUpRight size={15} /></a>
        </div>
        <div className="footer-column">
          <span className="footer-label">{labels.discover}</span>
          <Link href={`${prefix}/cozumler`.replace("/en/cozumler", "/en/solutions")}>{labels.solution}</Link>
          <Link href={isEnglish ? "/en/services" : "/hizmetler"}>{labels.services}</Link>
          <Link href={`${prefix}/ai-fabric`}>AI-Fabric</Link>
          <Link href={`${prefix}/hakkimizda`.replace("/en/hakkimizda", "/en/about")}>{labels.about}</Link>
          <Link href={`${prefix}/blog`.replace("/en/blog", "/en/blog")}>{labels.resources}</Link>
          {!isEnglish && <Link href="/magaza">Mağaza</Link>}
          {!isEnglish && <Link href="/galeri">Galeri</Link>}
        </div>
        <div className="footer-column">
          <span className="footer-label">{labels.products}</span>
          {products.map((product) => <Link key={product.slug} href={isEnglish ? `/en/solutions/${product.slug}` : `/cozumler/${product.slug}`}>{product.name}</Link>)}
        </div>
        <div className="footer-column">
          <span className="footer-label">{labels.contact}</span>
          <Link href={isEnglish ? "/en/contact" : "/iletisim"}>{labels.request}</Link>
          <a href="https://www.linkedin.com/in/nechh-r-5358a737a" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
          <a href="mailto:nechhlab.global@gmail.com">E-posta <ArrowUpRight size={13} /></a>
        </div>
        <div className="footer-column">
          <span className="footer-label">{isEnglish ? "Legal" : "Yasal"}</span>
          <Link href="/kvkk">KVKK</Link>
          <Link href="/gizlilik">{isEnglish ? "Privacy" : "Gizlilik"}</Link>
          <Link href="/iade">{isEnglish ? "Refunds" : "İade"}</Link>
          <Link href="/sorumluluk">{isEnglish ? "Disclaimer" : "Sorumluluk"}</Link>
          <Link href="/sss">{isEnglish ? "FAQ" : "SSS"}</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Nechh Robotics</span>
        <span>{labels.country}</span>
      </div>
    </footer>
  );
}

export function PageFrame({ children, title, description, locale = "tr" }: PageFrameProps) {
  useEffect(() => {
    document.title = title ? `${title} | Nechh Robotics` : "Nechh Robotics | Dikey Yapay Zekâ";
    document.documentElement.lang = locale;
    if (description) {
      const tag = document.querySelector('meta[name="description"]');
      if (tag) tag.setAttribute("content", description);
    }

    // Canonical HER SAYFA İÇİN kendi adresini gösterir.
    // 12 Ağu 2026 dersi: kökte sabit "/" canonical bırakmak tüm siteyi
    // dizinden düşürüyor — bu yüzden burada yola göre üretiliyor.
    {
      const adres = `https://www.nechhrobotics.com${window.location.pathname}`.replace(/\/$/, "") || "https://www.nechhrobotics.com";
      let bag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!bag) {
        bag = document.createElement("link");
        bag.rel = "canonical";
        document.head.appendChild(bag);
      }
      bag.href = adres;
      document.documentElement.lang = locale;
    }
  }, [title, description, locale]);

  return (
    <div className="site-root">
      <SiteHeader locale={locale} />
      <main>{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}
