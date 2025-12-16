import { useEffect } from "react";

export default function ModalVideo({ isOpen, onClose, videoSrc }) {
  // Disable background scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <button style={closeBtnStyle} onClick={onClose}>
          ✕
        </button>

        <video
          src={videoSrc}
          controls
          autoPlay
          controlsList="nodownload"
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
      </div>
    </div>
  );
}

/* ---------- Styles ---------- */

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};

const modalStyle = {
  position: "relative",
  width: "90%",
  maxWidth: "900px",
  background: "#000",
  padding: "10px",
  borderRadius: "10px",
};

const closeBtnStyle = {
  position: "absolute",
  top: "-40px",
  right: "0",
  background: "transparent",
  color: "#fff",
  border: "none",
  fontSize: "30px",
  cursor: "pointer",
};
