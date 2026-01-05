export default function ConfirmModal({
  title,
  message,
  confirmText,
  onConfirm,
  onCancel,
}) {
  return (
    <div style={overlay}>
      <div style={modal}>
        <h3>{title}</h3>
        <p>{message}</p>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 12 }}>
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onConfirm} style={{ background: "#dc2626", color: "#fff" }}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
