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
        borderRadius: 14,
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        padding: 16,
      }}
    >
      {/* ================= DESKTOP TABLE ================= */}
      <div className="desktop-only">
        <div style={{ overflowX: "auto" }}>
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
        </div>
      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="mobile-only">
        {items.map((item) => (
          <div key={item.iddownload} className="trash-card">
            <div>
              <strong>{item.title}</strong>
              {item.short_description && (
                <p className="muted">{item.short_description}</p>
              )}
            </div>

            <div className="card-row">
              <span>Category:</span>
              <span>{item.category}</span>
            </div>

            <div className="card-row">
              <span>Status:</span>
              <span className="badge-deleted">Deleted</span>
            </div>

            <div className="card-actions">
              <button
                onClick={() => setRestoreItem(item)}
                style={restoreBtn}
              >
                Restore
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= RESTORE CONFIRM ================= */}
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

      {/* ================= RESPONSIVE STYLES ================= */}
      <style jsx>{`
        .desktop-only {
          display: none;
        }

        .mobile-only {
          display: block;
        }

        .trash-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 14px;
          margin-bottom: 14px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .card-row {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          margin-top: 6px;
        }

        .card-actions {
          margin-top: 10px;
        }

        .muted {
          font-size: 12px;
          color: #6b7280;
          margin-top: 4px;
        }

        .badge-deleted {
          background: #fee2e2;
          color: #991b1b;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
        }

        @media (min-width: 992px) {
          .desktop-only {
            display: block;
          }

          .mobile-only {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

/* ===== BUTTON STYLE ===== */
const restoreBtn = {
  background: "none",
  border: "none",
  color: "#16a34a",
  fontWeight: 700,
  cursor: "pointer",
};
