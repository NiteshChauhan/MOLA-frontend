import { useEffect, useState } from "react";
import ConfirmModal from "@/components/common/ConfirmModal";

export default function TrashDownloadList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [restoreItem, setRestoreItem] = useState(null);

  /* ---------- LOAD TRASH ---------- */
  useEffect(() => {
    fetch("/api/cms/admin/downloads/trash")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load trash");
        return res.json();
      })
      .then((data) => setItems(data.downloads || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading trash...</p>;

  if (items.length === 0) {
    return <p style={{ color: "#6b7280" }}>Trash is empty</p>;
  }

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
        overflowX: "auto",
      }}
    >
      <table className="table" style={{ width: "100%", margin: 0 }}>
        <thead>
          <tr style={{ background: "#f9fafb" }}>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th style={{ width: 120 }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.iddownload}>
              <td>
                <strong>{item.title}</strong>
                {item.short_description && (
                  <div style={{ fontSize: 12, color: "#6b7280" }}>
                    {item.short_description}
                  </div>
                )}
              </td>

              <td>{item.category}</td>

              <td>
                <span
                  style={{
                    padding: "4px 8px",
                    borderRadius: 6,
                    fontSize: 12,
                    background: "#fee2e2",
                    color: "#991b1b",
                  }}
                >
                  deleted
                </span>
              </td>

              <td>
                <button
                  onClick={() => setRestoreItem(item)}
                  style={restoreBtn}
                >
                  Restore
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ RESTORE CONFIRM */}
      {restoreItem && (
        <ConfirmModal
          title="Restore Download?"
          message="This download will be restored and become active."
          confirmText="Restore"
          onClose={() => setRestoreItem(null)}
          onConfirm={async () => {
            await fetch(
              `/api/cms/admin/downloads/${restoreItem.iddownload}`,
              { method: "PATCH" }
            );

            setItems((prev) =>
              prev.filter((i) => i.iddownload !== restoreItem.iddownload)
            );
            setRestoreItem(null);
          }}
        />
      )}
    </div>
  );
}

/* ===== BUTTON STYLE ===== */
const restoreBtn = {
  background: "none",
  border: "none",
  color: "#16a34a",
  fontWeight: 600,
  cursor: "pointer",
};
