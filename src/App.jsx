import { useState, useCallback } from "react";
import Spline from "@splinetool/react-spline";
import Modal from "./components/Modal.jsx";
import { roomObjects } from "./roomData.jsx";

// ❗ BURAYI DEĞİŞTİR: Spline'dan "Export > Code Export > React" yaptığında
// sana verilen .splinecode linkini buraya yapıştır.
const SPLINE_SCENE_URL =
  "https://prod.spline.design/ysQxZNS6RdYYZbhn/scene.splinecode";

// Ekranın kenarındaki listede görünecek nesneler.
// label: listede görünen yazı, key: roomData.jsx'teki karşılığı, icon: küçük simge
const CLICKABLE_LIST = [
  { key: "book", label: "Kitaplık", icon: "📚" },
  { key: "music", label: "Müzik Çalar", icon: "🎵" },
  { key: "computer", label: "Bilgisayar", icon: "💻" },
  { key: "mug", label: "Kahve Fincanı", icon: "☕" },
  { key: "girl", label: "Hakkımda", icon: "🧑" },
  { key: "Ball", label: "Voleybol Topu", icon: "🏐" },
];

export default function App() {
  const [activeObject, setActiveObject] = useState(null); // hangi nesne seçili?
  const [isLoading, setIsLoading] = useState(true);

  // Spline sahnesi hazır olduğunda çalışır.
  // Performans için: gereksiz yüksek çözünürlük render'ı engelliyoruz.
  const onSplineLoad = useCallback((spline) => {
    setIsLoading(false);

    // Spline runtime objesi üzerinden sahnenin kalitesini sınırlamak
    // çoğu zaman en büyük performans kazancını verir (özellikle düşük
    // performanslı bilgisayar/telefonlarda).
    if (spline?.setZoom) {
      // İstersen başlangıç zoom seviyesini sabitleyebilirsin, örn:
      // spline.setZoom(1);
    }
  }, []);

  // Sahnedeki HERHANGİ bir nesneye tıklanınca tetiklenir.
  // e.target.name → Spline'da Layers panelinde verdiğin isim.
  const handleSplineClick = useCallback((e) => {
    const clickedName = e.target.name;
    if (roomObjects[clickedName]) {
      setActiveObject(roomObjects[clickedName]);
    }
    // Eşleşme yoksa hiçbir şey yapma (boş alan, duvar vs. tıklanmış olabilir)
  }, []);

  // Kenardaki listeden bir öğeye tıklanınca da aynı modal açılsın.
  const handleListClick = useCallback((key) => {
    if (roomObjects[key]) {
      setActiveObject(roomObjects[key]);
    }
  }, []);

  return (
    <div className="room-wrapper">
      {isLoading && (
        <div className="loading-screen">
          <div className="loading-spinner" />
          <p>Oda yükleniyor…</p>
        </div>
      )}

      <Spline
        scene={SPLINE_SCENE_URL}
        onLoad={onSplineLoad}
        onSplineMouseDown={handleSplineClick}
        className="spline-canvas"
        renderOnDemand={true}
      />

      <div className="hint-text">
        💡 Odadaki nesnelere tıkla ve beni keşfet
      </div>

      <div className="object-list">
        <div className="object-list-title">Keşfet</div>
        {CLICKABLE_LIST.map((item) => (
          <button
            key={item.key}
            className="object-list-item"
            onClick={() => handleListClick(item.key)}
          >
            <span className="object-list-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>

      <Modal data={activeObject} onClose={() => setActiveObject(null)} />
    </div>
  );
}
