export default function ConfirmModal({
  title,
  message,
  confirmText = "Confirm",
  onConfirm,
  onCancel,
  onClose, // allow both
}) {
  const close = onCancel || onClose;

  return (
    <div style={overlay}>
      <div style={modal}>
        <h3 style={{ marginBottom: 8 }}>{title}</h3>
        <p style={{ marginBottom: 16 }}>{message}</p>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 12 }}>
          <button onClick={close}>Cancel</button>

          <button
            onClick={onConfirm}
            style={{ background: "#dc2626", color: "#fff" }}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ===== STYLES ===== */
const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.45)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};

const modal = {
  background: "#fff",
  padding: 20,
  borderRadius: 12,
  width: 360,
};
