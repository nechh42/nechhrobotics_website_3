# 📥 MANUS'TAN İNDİRİLECEK 3 GÖRSEL

Bu klasöre şu 3 dosya konacak. Konduktan sonra Claude bağlayacak.

| Kaydedilecek ad | Sitede nerede görünür |
|---|---|
| `hero.jpg` | Ana sayfa üst görsel (sağdaki büyük kare) |
| `cozumler.jpg` | Ana sayfa "Ürün portföyü" bölümündeki görsel |
| `ai-fabric.jpg` | AI-Fabric bölümü / sayfası görseli |

## Nasıl indirilir
1. Manus'ta bu projenin **önizleme** sayfasını aç (site göründüğü hali).
2. Görselin üstünde **sağ tık** → *"Resmi farklı kaydet"*.
3. Yukarıdaki tabloya göre adlandırıp bu klasöre kaydet.

## Neden Claude indiremiyor
Görseller Manus'un kendi depolama servisinde (`/manus-storage/...`) duruyor ve
`server/_core/storageProxy.ts` bunlara **Forge API anahtarıyla** erişiyordu.
O anahtar bizde yok — dosyalar hiçbir zaman indirilen koda dahil edilmedi.
Zip'lerde de, `dist/` içinde de yok (arandı, bulunamadı).
