/** Evidence Grid: galeri yalnızca gerçek malzeme gösterir — çekilmiş ürün ekranları ve üretilmiş tanıtım videoları. */
import { useState } from "react";
import { PageFrame } from "@/components/SiteShell";
import { galeriEkranlar, galeriTanitimlar, galeriVideolar } from "@/lib/site";

type Buyuteç = { src: string; alt: string } | null;

export default function Galeri() {
  const [acik, setAcik] = useState<Buyuteç>(null);

  return (
    <PageFrame
      title="Galeri"
      description="Nechh Robotics ürünlerinden ekran görüntüleri ve tanıtım videoları."
    >
      <section className="services-hero">
        <div className="page-hero-rail"><span>GALLERY / 01</span><i /></div>
        <div>
          <p className="eyebrow">GALERİ</p>
          <h1>Ürünler nasıl görünüyor,<br /><em>kendiniz bakın.</em></h1>
        </div>
        <p>
          Aşağıdakiler temsilî görsel değil; uygulamalardan alınmış gerçek ekran
          görüntüleri ve kendi ürettiğimiz tanıtım videolarıdır.
        </p>
      </section>

      <section className="galeri-bolum">
        <div className="galeri-baslik">
          <p className="eyebrow">TANITIM VİDEOLARI</p>
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


      <section className="galeri-bolum is-koyu">
        <div className="galeri-baslik">
          <p className="eyebrow">UYGULAMA EKRANLARI</p>
          <h2>PALETRA, telefonda</h2>
          <p className="galeri-not">Emülatörde uygulamanın kendisinden alınmış ekranlar; içindeki firma ve makine adları deneme verisidir.</p>
        </div>
        <div className="galeri-ekran-grid">
          {galeriEkranlar.map((ekran) => (
            <button
              type="button"
              key={ekran.dosya}
              className="galeri-ekran"
              onClick={() => setAcik({ src: ekran.dosya, alt: ekran.baslik })}
            >
              <img src={ekran.dosya} alt={ekran.baslik} loading="lazy" />
              <span>{ekran.baslik}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="galeri-bolum">
        <div className="galeri-baslik">
          <p className="eyebrow">TANITIM GÖRSELLERİ</p>
          <h2>Ürün anlatımları</h2>
        </div>
        <div className="galeri-tanitim-grid">
          {galeriTanitimlar.map((gorsel) => (
            <button
              type="button"
              key={gorsel.dosya}
              className="galeri-tanitim"
              onClick={() => setAcik({ src: gorsel.dosya, alt: gorsel.baslik })}
            >
              <img src={gorsel.dosya} alt={gorsel.baslik} loading="lazy" />
              <span>{gorsel.baslik}</span>
            </button>
          ))}
        </div>
      </section>

      {acik && (
        <div className="galeri-buyutec" role="dialog" aria-modal="true" aria-label={acik.alt} onClick={() => setAcik(null)}>
          <button type="button" className="galeri-kapat" aria-label="Kapat" onClick={() => setAcik(null)}>×</button>
          <img src={acik.src} alt={acik.alt} />
        </div>
      )}
    </PageFrame>
  );
}
