# Dijital Oda — Kurulum Rehberi

## 1) Bağımlılıkları kur

Terminalde proje klasörüne gir ve şunu çalıştır:

```
npm install
```

## 2) Spline sahnesini bağla

1. Spline.com'da odanı aç.
2. Sağ üstten **Export → Code Export → React** seç.
3. Sana verilen `.splinecode` URL'sini kopyala (şuna benzer:
   `https://prod.spline.design/XXXXXXX/scene.splinecode`)
4. `src/App.jsx` dosyasını aç, en üstteki şu satırı bul:

   ```js
   const SPLINE_SCENE_URL = "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode";
   ```

   ve kendi URL'inle değiştir.

## 3) Spline'da nesne isimlerini kontrol et

`src/roomData.jsx` dosyasındaki anahtar isimler (`book`, `music`, `computer`,
`mug`, `girl`, `Ball`) Spline editöründeki **Layers panelindeki isimlerle
harfiyen aynı olmalı** (büyük/küçük harf de dahil).

Kendi nesne isimlerini kullanmak istersen, `roomData.jsx` içindeki anahtar
isimlerini Spline'daki isimlerle eşleştirmen yeterli — kodun başka hiçbir
yerini değiştirmene gerek yok.

## 4) Çalıştır

```
npm run dev
```

Tarayıcıda `http://localhost:5173` adresine git.

## 5) Yeni nesne eklemek istersen

`src/roomData.jsx` dosyasına yeni bir obje ekle:

```jsx
Yeni_Nesne_Adi: {
  title: "Başlık",
  icon: "🎯",
  body: <p>İçerik buraya.</p>,
},
```

Spline'da o nesneye de aynı ismi ver. Ayrıca `src/App.jsx` içindeki
`CLICKABLE_LIST` dizisine de bir satır eklersen, ekranın sağ üstündeki
"Keşfet" listesinde de görünür:

```js
{ key: "Yeni_Nesne_Adi", label: "Listede Görünecek İsim", icon: "🎯" },
```

## 6) Fotoğraf eklemek istersen

Fotoğrafı `public/` klasörüne koy (örn. `public/fotograf.jpg`), sonra
`roomData.jsx` içinde şöyle çağır:

```jsx
<img src="/fotograf.jpg" alt="açıklama" style={{ width: "140px" }} />
```

`public/elanur.jpg` zaten örnek olarak eklendi ve küçük/düşük kalitede
kaydedildi (sayfa hızlı yüklensin diye).

## Performans / Kasma Sorunu İçin

Kodda şu iyileştirme zaten yapıldı:

- `renderOnDemand={true}` — sahne hareketsizken GPU'yu boşa render
  yaptırmıyor, sadece kamera/animasyon hareket ettiğinde render eder.

Yine de kasma sürüyorsa, asıl sebep genelde **Spline sahnesinin kendisi**
oluyor. Spline editöründe şunlara bak:

- **Texture boyutları** — her materyale tıkla, çözünürlüğü 1024px veya
  altına indirmeyi dene (4K texture'lar mobilde ciddi yavaşlatır).
- **Poligon sayısı** — sağ üstteki istatistik panelinden (genelde "i"
  ikonu) toplam poligon/vertex sayısına bak. 100binin üzerindeyse bazı
  detay seviyelerini düşürmen gerekebilir.
- **Işık sayısı** — gerçek zamanlı gölgeli ışıklar (özellikle birden
  fazla) performansı çok düşürür. Mümkünse "baked" (önceden hesaplanmış)
  ışıklandırma kullan.
- **Export ayarları** — Export ekranında Spline bazen otomatik bir
  optimizasyon uyarısı/önerisi gösterir, onu uygula.

## Notlar

- Tıklama olayı `onSplineMouseDown` ile yakalanıyor. Spline sahnesindeki
  HERHANGİ bir nesneye tıklandığında tetiklenir; `roomData.jsx`'te
  karşılığı olmayan nesneler (duvar, zemin vb.) sessizce yoksayılır.
- Ekranın sağ üstündeki "Keşfet" listesi, kullanıcıya hangi nesnelere
  tıklayabileceğini gösterir — Spline sahnesindeki tıklamayla aynı
  modalı açar.
- Mobilde Spline sahneleri ağır olabilir; `npm run build` sonrası gerçek
  cihazda test etmen iyi olur.
