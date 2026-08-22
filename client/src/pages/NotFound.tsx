/** Evidence Grid: error states stay calm, precise and navigable with a single clear recovery route. */
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { PageFrame } from "@/components/SiteShell";

export default function NotFound() {
  return <PageFrame title="Sayfa bulunamadı"><section className="not-found"><p className="eyebrow">404 / YOL BULUNAMADI</p><h1>Bu sayfa artık<br /><em>burada değil.</em></h1><p>Aradığınız içerik taşınmış veya tanımlanmamış olabilir.</p><Link href="/" className="button button-primary"><ArrowLeft size={17} /> Ana sayfaya dönün</Link></section></PageFrame>;
}
