import { useEffect } from "react";

export default function Toast({
  message,
  type = "success",
  onClose,
  duration = 3000,
}) {
  useEffect(() => {
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [onClose, duration]);

  return (
    <div style={{ ...toast, ...toastTypes[type] }}>
      {message}
    </div>
  );
}

/* ===== STYLES ===== */

const toast = {
  position: "fixed",
  bottom: 24,
  right: 24,
  padding: "12px 18px",
  borderRadius: 10,
  color: "#fff",
  fontWeight: 600,
  boxShadow: "0 10px 25px rgba(0,0,0,.15)",
  zIndex: 2000,
  animation: "fadeIn .3s ease",
};

const toastTypes = {
  success: { background: "#16a34a" },
  error: { background: "#dc2626" },
  info: { background: "#2563eb" },
};
