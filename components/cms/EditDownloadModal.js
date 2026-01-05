import { useState } from "react";
import { createPortal } from "react-dom";

export default function EditDownloadModal({ item, onClose, onSaved }) {
  const [form, setForm] = useState({
    title: item.title,
    short_description: item.short_description || "",
    category: item.category,
    status: item.status,
  });

  const [file, setFile] = useState(null);
  const [saving, setSaving] = useState(false);

  const save = async () => {
    setSaving(true);

    try {
      const data = new FormData();
      data.append("title", form.title);
      data.append("short_description", form.short_description);
      data.append("category", form.category);
      data.append("status", form.status);

      // ✅ only append if new file selected
      if (file) {
        data.append("file", file);
      }

      const res = await fetch(
        `/api/cms/admin/downloads/${item.iddownload}`,
        {
          method: "PUT",
          body: data,
        }
      );

      if (!res.ok) throw new Error("Update failed");

      const json = await res.json();

      onSaved(json.download);
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to update download");
    } finally {
      setSaving(false);
    }
  };

  return createPortal(
    <div style={overlay}>
      <div style={modal}>
        <h3>Edit Download</h3>

        <input
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          placeholder="Title"
        />

        <textarea
          value={form.short_description}
          onChange={(e) =>
            setForm({ ...form, short_description: e.target.value })
          }
          placeholder="Short description"
        />

        <select
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        >
          <option value="legislation">Legislation</option>
          <option value="forms">Forms</option>
        </select>

        <select
          value={form.status}
          onChange={(e) =>
            setForm({ ...form, status: e.target.value })
          }
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        {/* Current PDF */}
        <div style={{ fontSize: 13, marginTop: 8 }}>
          <strong>Current File:</strong>{" "}
          <a
            href={item.file_path}
            target="_blank"
            rel="noopener noreferrer"
          >
            View PDF
          </a>
        </div>

        {/* Upload new PDF */}
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <button onClick={onClose} disabled={saving}>
            Cancel
          </button>
          <button onClick={save} disabled={saving}>
            {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modal = {
  background: "#fff",
  padding: 24,
  borderRadius: 12,
  width: 420,
};
