import { useState } from "react";
import Toast from "@/components/common/Toast";

export default function DownloadForm({ onAdded }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form = new FormData(e.target);
      if (file) form.append("file", file);

      const res = await fetch("/api/cms/admin/downloads", {
        method: "POST",
        body: form,
      });

      if (!res.ok) throw new Error("Upload failed");

      // ✅ call optional parent callback to update list without reload
      if (onAdded) onAdded();

      setToast({ message: "Download added successfully", type: "success" });
      e.target.reset();
      setFile(null);
      onAdded?.();
    } catch (err) {
      console.error(err);
      setToast({ message: "Failed to add download", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background: "#fff",
        padding: 24,
        borderRadius: 12,
        boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
        marginBottom: 30,
        position: "relative",
      }}
    >
      <h3 style={{ marginBottom: 20 }}>Add New Download</h3>

      <form onSubmit={submit} style={{ display: "grid", gap: 16 }}>
        {/* TITLE */}
        <div>
          <label className="form-label">Title</label>
          <input
            name="title"
            required
            className="form-control"
            placeholder="Document title"
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="form-label">Short Description</label>
          <textarea
            name="short_description"
            rows={3}
            className="form-control"
            placeholder="Brief description"
          />
        </div>

        {/* CATEGORY + FILE */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
          }}
        >
          <div>
            <label className="form-label">Category</label>
            <select name="category" className="form-control">
              <option value="legislation">Legislation & Acts</option>
              <option value="forms">Forms & Brochures</option>
            </select>
          </div>

          <div>
            <label className="form-label">PDF File</label>
            <input
              type="file"
              accept="application/pdf"
              className="form-control"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </div>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          style={{
            marginTop: 10,
            padding: "0px 0px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontWeight: 600,
            cursor: "pointer",
            width: "fit-content",
          }}
        >
          {loading ? "Uploading..." : "Add Download"}
        </button>
      </form>

      {/* ✅ TOAST */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
