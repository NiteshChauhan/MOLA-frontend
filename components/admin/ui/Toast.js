import { useEffect } from "react";

export default function Toast({ message, show, onClose }) {
  useEffect(() => {
    if (!show) return;
    const t = setTimeout(onClose, 2500);
    return () => clearTimeout(t);
  }, [show]);

  if (!show) return null;

  return (
    <div style={toast}>
      {message}
    </div>
  );
}

const toast = {
  position: "fixed",
  top: 24,
  right: 24,
  background: "#16a34a",
  color: "#fff",
  padding: "14px 20px",
  borderRadius: 10,
  fontWeight: 700,
  boxShadow: "0 12px 30px rgba(0,0,0,.25)",
  zIndex: 9999,
};
