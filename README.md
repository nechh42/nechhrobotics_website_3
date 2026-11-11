# Nechh Robotics — web sitesi

nechhrobotics.com: şirketin ve uygulamalarının tanıtım sitesi (TR/EN). Ürün sayfaları (TONSORA, AYLORA, PALETRA, EMOTİCE, LaPaglia, HeliaLoop, JuriLoop, Eco-Report), blog, mağaza ve uygulamaların yasal sayfaları (gizlilik, KVKK, koşullar, Android App Links doğrulama dosyası) burada yayınlanır.

- **Barındırma:** Cloudflare Pages (hesap hhbayrak1). `main` dalına push → otomatik yayın. (Vercel 7 Kas 2026'da kota yüzünden bırakıldı; `vercel.json` eski yapılandırma.)
- **Teknik:** Vite + React + TypeScript, `client/` (kaynak), `scripts/prerender.mjs` (sayfaları önceden üretir), `scripts/rota-kontrol.mjs`.
- **Yasal sayfalar:** `client/public/<uygulama>/` (ör. `client/public/aylora/`), App Links: `client/public/.well-known/assetlinks.json`.

## Klasörler

| Klasör | İçerik |
|---|---|
| `GÜNLÜKLER/` | `ILERLEME-GUNLUGU.md` · `EKSIK-HATALAR.md` |
| `GELİŞTİRME/` | `todo.md`, `ideas.md` |
| `docs/` | İçerik mimarisi, içerik taşıma raporu |
| `GÖRSELLER/tanitim/` | Tanıtım videosu, sunum, afiş kaynakları (git dışında; sitenin servis ettiği kopya `client/public/medya/`) |

Bir değişiklikten sonra yalnız ana sayfa değil, her türden bir alt sayfa da canlıda ölçülür (11 Kas dersi).