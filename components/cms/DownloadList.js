import { useEffect, useMemo, useState } from "react";
import EditDownloadModal from "@/components/cms/EditDownloadModal";
import ConfirmModal from "@/components/common/ConfirmModal";

export default function DownloadList({ refreshKey }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [confirmItem, setConfirmItem] = useState(null);

  /* FILTER STATE */
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");

  /* LOAD DATA */
  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/cms/admin/downloads/list");
      const data = await res.json();
      setItems(data.downloads || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, [refreshKey]);

  /* FILTER LOGIC */
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const text =
        `${item.title} ${item.short_description || ""}`.toLowerCase();

      if (search && !text.includes(search.toLowerCase())) return false;
      if (category !== "all" && item.category !== category) return false;
      if (status !== "all" && item.status !== status) return false;

      return true;
    });
  }, [items, search, category, status]);

  if (loading) return <p>Loading downloads...</p>;

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
        padding: 16,
      }}
    >
      {/* 🔍 FILTER BAR */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: 12,
          marginBottom: 16,
        }}
      >
        <input
          placeholder="Search title or description..."
          className="form-control"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="form-control"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="legislation">Legislation</option>
          <option value="forms">Forms</option>
        </select>

        <select
          className="form-control"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {/* TABLE */}
      {filteredItems.length === 0 ? (
        <p style={{ color: "#6b7280" }}>No matching downloads</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table className="table" style={{ width: "100%", margin: 0 }}>
            <thead>
              <tr style={{ background: "#f9fafb" }}>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>File</th>
                <th style={{ width: 140 }}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredItems.map((item) => (
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
                        background:
                          item.status === "active" ? "#dcfce7" : "#fee2e2",
                        color:
                          item.status === "active"
                            ? "#166534"
                            : "#991b1b",
                      }}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td>
                    <a
                      href={item.file_path}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#2563eb", fontWeight: 600 }}
                    >
                      View
                    </a>
                  </td>

                  <td>
                    <button
                      onClick={() => setEditing(item)}
                      style={actionBtn}
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => setConfirmItem(item)}
                      style={{ ...actionBtn, color: "#dc2626" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* DELETE */}
      {confirmItem && (
        <ConfirmModal
          title="Delete Download?"
          message="This will move the file to Trash."
          onClose={() => setConfirmItem(null)}
          onConfirm={async () => {
            await fetch(
              `/api/cms/admin/downloads/${confirmItem.iddownload}`,
              { method: "DELETE" }
            );
            setConfirmItem(null);
            load();
          }}
        />
      )}

      {/* EDIT */}
      {editing && (
        <EditDownloadModal
          item={editing}
          onClose={() => setEditing(null)}
          onSaved={() => {
            setEditing(null);
            load();
          }}
        />
      )}
    </div>
  );
}

/* ACTION BUTTON */
const actionBtn = {
  background: "none",
  border: "none",
  color: "#2563eb",
  fontWeight: 600,
  cursor: "pointer",
  marginRight: 10,
};
