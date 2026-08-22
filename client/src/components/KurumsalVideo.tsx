/** Evidence Grid: video görünür olunca sessizce başlar, ekrandan çıkınca durur — otomatik oynatma bant genişliğini boşa harcamaz. */
import { useEffect, useRef } from "react";
import { kurumsalVideo } from "@/lib/site";

export default function KurumsalVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Kullanıcı hareketsizliği tercih ediyorsa otomatik oynatma yapılmaz.
    const sakinMod = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (sakinMod) return;

    if (typeof IntersectionObserver === "undefined") {
      el.play().catch(() => {});
      return;
    }

    const gozlemci = new IntersectionObserver(
      ([giris]) => {
        if (giris.isIntersecting) {
          // Tarayıcı sesli otomatik oynatmayı engeller; sessiz başlatmak zorunlu.
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.35 },
    );

    gozlemci.observe(el);
    return () => gozlemci.disconnect();
  }, []);

  return (
    <figure className="video-cerceve">
      <video
        ref={ref}
        controls
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={kurumsalVideo.kapak}
      >
        <source src={kurumsalVideo.dosya} type="video/mp4" />
        Tarayıcınız video oynatmayı desteklemiyor.
      </video>
      <figcaption className="video-ses-notu">Ses kapalı başlar — açmak için oynatıcıdaki hoparlöre dokunun.</figcaption>
    </figure>
  );
}
