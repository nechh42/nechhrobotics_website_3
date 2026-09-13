/** Evidence Grid: fiyat, kapsam, sınır ve ödeme adımları aynı sayfada; satın almadan önce her şey görünür. */
import { ArrowLeft, ArrowUpRight, Building2, Check, ShieldCheck } from "lucide-react";
import { Link, useRoute } from "wouter";
import { PageFrame } from "@/components/SiteShell";
import { odeme, paketler, ucretliHizmetler } from "@/lib/site";

function OdemeKutusu({ urunAdi }: { urunAdi: string }) {
  const hazir = Boolean(odeme.iban);
  return (
    <div className="odeme-kutusu">
      <div className="odeme-baslik">
        <Building2 size={20} />
        <span>Ödeme: banka havalesi / EFT</span>
      </div>
      <p className="odeme-para-birimi">{odeme.paraBirimiNotu}</p>
      {hazir ? (
        <dl className="odeme-bilgi">
          <div><dt>Hesap sahibi</dt><dd>{odeme.sahip}</dd></div>
          <div><dt>IBAN</dt><dd className="odeme-iban">{odeme.iban}</dd></div>
        </dl>
      ) : (
        <p className="odeme-bekliyor">
          Havale bilgileri hazırlanıyor. Bu arada aşağıdaki adresten bize
          yazarsanız hesap bilgilerini e-posta ile iletiriz.
        </p>
      )}
      <ol className="odeme-adimlar">
        <li>
          <span>1</span>
          <p>
            Havale açıklamasına <strong>“{urunAdi}”</strong> yazın ve firma
            unvanınızı ekleyin.
          </p>
        </li>
        <li>
          <span>2</span>
          <p>
            Dekontu <a href={`mailto:${odeme.eposta}?subject=${encodeURIComponent(urunAdi + " — sipariş")}`}>{odeme.eposta}</a>{" "}
            adresine gönderin. <small>Bu adres siparişinizi ulaştırmanız içindir; başka bir işlem gerekmez.</small>
          </p>
        </li>
        <li>
          <span>3</span>
          <p>
            Paket, firmanız adına lisanslanmış olarak <strong>aynı gün</strong>{" "}
            e-postanıza gelir.
          </p>
        </li>
      </ol>
      <p className="odeme-not">
        Kredi kartı ile çevrimiçi ödeme alınmamaktadır.
      </p>
    </div>
  );
}

export default function PaketDetay() {
  const [, params] = useRoute("/magaza/:slug");
  const slug = params?.slug;
  const paket = paketler.find((p) => p.slug === slug);
  const hizmet = ucretliHizmetler.find((h) => h.slug === slug);

  if (!paket && !hizmet) {
    return (
      <PageFrame title="Paket bulunamadı" description="Aradığınız paket mağazada yer almıyor.">
        <section className="not-found">
          <h1>Bu paket mağazada yok.</h1>
          <p>Adres değişmiş olabilir. Mağazadaki güncel listeye göz atın.</p>
          <Link href="/magaza" className="route-link">Mağazaya dön <ArrowUpRight size={18} /></Link>
        </section>
      </PageFrame>
    );
  }

  const ad = paket?.ad ?? hizmet!.ad;
  const aile = paket?.aile ?? hizmet!.aile;
  const ozet = paket?.ozet ?? hizmet!.ozet;
  const fiyat = paket?.fiyat ?? hizmet!.fiyat;
  const fiyatNot = paket?.fiyatNot ?? hizmet!.fiyatNot;
  const sinir = paket?.sinir ?? hizmet!.sinir;

  return (
    <PageFrame title={ad} description={ozet}>
      <section className="paket-hero">
        <Link href="/magaza" className="article-back"><ArrowLeft size={15} /> MAĞAZA</Link>
        <p className="eyebrow">{aile}</p>
        <h1>{ad}</h1>
        <p className="paket-hero-ozet">{ozet}</p>
        <div className="paket-hero-fiyat">
          <strong>{fiyat}</strong>
          <small>{fiyatNot}</small>
        </div>
      </section>

      <section className="paket-govde">
        <div className="paket-kapsam">
          {paket && (
            <>
              <p className="eyebrow">PAKETTE NE VAR</p>
              <ul className="paket-icerik">
                {paket.icerik.map((satir) => (
                  <li key={satir}><Check size={16} /> {satir}</li>
                ))}
              </ul>
            </>
          )}
          <div className="service-boundary">
            <span>SINIR</span>
            <small>{sinir}</small>
          </div>
          <div className="paket-guvence">
            <article>
              <ShieldCheck size={19} />
              <h3>Lisanslı teslimat</h3>
              <p>Dijital paketler firmanızın adıyla damgalanır; firma içi kullanım içindir.</p>
            </article>
            <article>
              <Check size={19} />
              <h3>Dürüst kapsam</h3>
              <p>Hazırlık ve şablon hizmeti veriyoruz; akredite doğrulama yapmıyoruz.</p>
            </article>
          </div>
        </div>
        <aside className="paket-yan">
          <OdemeKutusu urunAdi={ad} />
          <div className="paket-soru">
            <p>Emin değil misiniz?</p>
            <Link href="/iletisim" className="route-link">Önce soru sorun <ArrowUpRight size={17} /></Link>
          </div>
        </aside>
      </section>
    </PageFrame>
  );
}
