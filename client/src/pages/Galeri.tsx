/** Galeri (11 Kas 2026): yalnız kurumsal tanıtım videosu + her uygulamanın logosu. */
import { PageFrame } from "@/components/SiteShell";
import { galeriLogolar, galeriVideolar } from "@/lib/site";

export default function Galeri() {
  return (
    <PageFrame
      title="Galeri"
      description="Nechh Robotics tanıtım videosu ve uygulamalarımız."
    >
      <section className="services-hero">
        <div className="page-hero-rail"><span>GALLERY / 01</span><i /></div>
        <div>
          <p className="eyebrow">GALERİ</p>
          <h1>Nechh Robotics,<br /><em>kısaca.</em></h1>
        </div>
        <p>
          Kurumsal tanıtım videomuz ve geliştirdiğimiz uygulamalar.
        </p>
      </section>

      <section className="galeri-bolum">
        <div className="galeri-baslik">
          <p className="eyebrow">TANITIM VİDEOSU</p>
          <h2>Hareket halinde</h2>
        </div>
        <div className="galeri-video-grid">
          {galeriVideolar.map((video) => (
            <figure key={video.dosya}>
              <video controls preload="none" poster={video.kapak} playsInline>
                <source src={video.dosya} type="video/mp4" />
                Tarayıcınız video oynatmayı desteklemiyor.
              </video>
              <figcaption>
                <strong>{video.baslik}</strong>
                <small>{video.urun}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="galeri-bolum">
        <div className="galeri-baslik">
          <p className="eyebrow">UYGULAMALARIMIZ</p>
          <h2>Logolar</h2>
        </div>
        <div className="galeri-logo-grid">
          {galeriLogolar.map((logo) => (
            <figure key={logo.dosya} className="galeri-logo">
              <img src={logo.dosya} alt={logo.baslik} loading="lazy" />
              <figcaption>{logo.baslik}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
