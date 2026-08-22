/** Evidence Grid: routes preserve a simple, explicit public-site information architecture with legacy entry paths retained. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import ProductDetail from "./pages/ProductDetail";
import AiFabric from "./pages/AiFabric";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Services, { EnglishServices } from "./pages/Services";
import Store, { EnglishStore } from "./pages/Store";
import PaketDetay from "./pages/PaketDetay";
import Galeri from "./pages/Galeri";
import { TurkishArchive, EnglishArchive } from "./pages/BlogArchive";
import LegacyArticlePage, { EnglishLegacyArticlePage } from "./pages/LegacyArticlePage";
import { EnglishAbout, EnglishAiFabric, EnglishContact, EnglishHome, EnglishProductDetail, EnglishSolutions } from "./pages/EnglishPages";
function Router() {
  const [location] = useLocation();
  // make sure to consider if you need authentication for certain routes
  return (
    <div key={location} className="route-transition"><Switch>
      <Route path="/" component={Home} />
      <Route path="/cozumler" component={Solutions} />
      <Route path="/cozumler/:slug" component={ProductDetail} />
      <Route path="/products/:slug" component={ProductDetail} />
      <Route path="/hizmetler" component={Services} />
      <Route path="/ai-fabric" component={AiFabric} />
      <Route path="/portfolio_nechh" component={AiFabric} />
      <Route path="/hakkimizda" component={About} />
      <Route path="/about" component={About} />
      <Route path="/kaynaklar/:slug" component={LegacyArticlePage} />
      <Route path="/kaynaklar" component={TurkishArchive} />
      <Route path="/blog/:slug" component={LegacyArticlePage} />
      <Route path="/blog" component={TurkishArchive} />
      <Route path="/galeri" component={Galeri} />
      <Route path="/en/gallery" component={Galeri} />
      <Route path="/magaza/:slug" component={PaketDetay} />
      <Route path="/magaza" component={Store} />
      <Route path="/products/magaza" component={Store} />
      <Route path="/iletisim" component={Contact} />
      <Route path="/contact" component={Contact} />
      <Route path="/en/" component={EnglishHome} />
      <Route path="/en" component={EnglishHome} />
      <Route path="/en/solutions" component={EnglishSolutions} />
      <Route path="/en/solutions/:slug" component={EnglishProductDetail} />
      <Route path="/en/services" component={EnglishServices} />
      <Route path="/en/ai-fabric" component={EnglishAiFabric} />
      <Route path="/en/about" component={EnglishAbout} />
      <Route path="/en/resources/:slug" component={EnglishLegacyArticlePage} />
      <Route path="/en/resources" component={EnglishArchive} />
      <Route path="/en/blog/:slug" component={EnglishLegacyArticlePage} />
      <Route path="/en/store" component={EnglishStore} />
      <Route path="/en/contact" component={EnglishContact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch></div>
  );
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
