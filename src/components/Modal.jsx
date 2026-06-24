import { useEffect } from "react";

export default function Modal({ data, onClose }) {
  // ESC tuşuyla kapatma
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!data) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Kapat">
          ✕
        </button>
        <div className="modal-icon">{data.icon}</div>
        <h2 className="modal-title">{data.title}</h2>
        <div className="modal-body">{data.body}</div>
      </div>
    </div>
  );
}
