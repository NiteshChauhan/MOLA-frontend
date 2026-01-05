import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import RichTextEditor from "./RichTextEditor";

export default function EditSectionModal({ section, onClose, onSaved }) {
  const [mounted, setMounted] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [sectionKey, setSectionKey] = useState("content");
  const [showDelete, setShowDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);

  /* ===== INIT DATA ===== */
  useEffect(() => {
    if (!section) return;

    setTitle(section.section_title || "");
    setContent(section.section_content || "");
    setSectionKey(section.section_key || "content");
    setMounted(true);
  }, [section]);

  if (!mounted) return null;

  /* ===== UPDATE ===== */
  const save = async () => {
    await fetch(`/api/cms/admin/sections/${section.idsection}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        section_title: title,
        section_content: content,
        section_key: sectionKey,
        section_type: sectionKey,
      }),
    });

    onSaved();
  };

  /* ===== DELETE (SOFT DELETE) ===== */
  const deleteSection = async () => {
    try {
      setDeleting(true);

      const res = await fetch(
        `/api/cms/admin/sections/${section.idsection}`,
        { method: "DELETE" }
      );

      if (!res.ok) {
        throw new Error("Delete failed");
      }

      onSaved(); // reload list
      onClose(); // close modal
    } catch (err) {
      alert("Failed to delete section");
    } finally {
      setDeleting(false);
      setShowDelete(false);
    }
  };

  return createPortal(
    <div style={overlay}>
      <div style={modal}>
        {/* HEADER */}
        <div style={header}>✏️ Edit Section</div>

        {/* BODY */}
        <div style={body}>
          <label style={label}>Section Type</label>
          <select
            value={sectionKey}
            onChange={(e) => setSectionKey(e.target.value)}
            style={input}
          >
            <option value="defination">Definaion</option>
            <option value="content">Content</option>
            <option value="note">Note</option>
          </select>

          <label style={label}>Section Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={input}
          />

          <label style={label}>Section Content</label>
          <div style={editorWrap}>
            <RichTextEditor value={content} onChange={setContent} />
          </div>
        </div>

        {/* FOOTER */}
        <div style={footer}>
          <button onClick={onClose} style={cancelBtn}>
            Cancel
          </button>

          <button onClick={save} style={saveBtn}>
            Update
          </button>

          <button
            onClick={() => setShowDelete(true)}
            style={deleteBtn}
          >
            Delete
          </button>
        </div>
      </div>

      {/* ===== DELETE CONFIRMATION ===== */}
      {showDelete && (
        <div style={confirmOverlay}>
          <div style={confirmBox}>
            <h3 style={{ marginBottom: 8 }}>Delete Section?</h3>
            <p style={{ fontSize: 14, color: "#555" }}>
              This section will be hidden from admin & frontend.
              
            </p>

            <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
              <button
                onClick={() => setShowDelete(false)}
                style={cancelBtn}
              >
                Cancel
              </button>

              <button
                onClick={deleteSection}
                disabled={deleting}
                style={{
                  ...saveBtn,
                  background: "#dc2626",
                }}
              >
                {deleting ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>,
    document.body
  );
}

/* ================= STYLES ================= */

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.65)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
  padding: 16,
};

const modal = {
  background: "#fff",
  width: "100%",
  maxWidth: 900,
  maxHeight: "90vh",
  display: "flex",
  flexDirection: "column",
  borderRadius: 16,
};

const header = {
  padding: "18px 24px",
  borderBottom: "1px solid #e5e7eb",
  fontWeight: 800,
  fontSize: 18,
};

const body = {
  padding: 24,
  overflowY: "auto",
  flexGrow: 1,
};

const footer = {
  padding: 18,
  borderTop: "1px solid #e5e7eb",
  display: "flex",
  justifyContent: "flex-end",
  gap: 12,
};

const label = {
  fontSize: 12,
  fontWeight: 700,
  marginTop: 16,
};

const input = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 10,
  border: "1px solid #d1d5db",
};

const editorWrap = {
  marginTop: 6,
  border: "1px solid #d1d5db",
  borderRadius: 12,
  minHeight: 200,
};

const cancelBtn = {
  padding: "10px 18px",
  borderRadius: 10,
  border: "1px solid #d1d5db",
  background: "#fff",
  fontWeight: 700,
  cursor: "pointer",
};

const saveBtn = {
  background: "#2563eb",
  color: "#fff",
  padding: "10px 22px",
  borderRadius: 10,
  border: "none",
  fontWeight: 800,
  cursor: "pointer",
};

const deleteBtn = {
  background: "#fee2e2",
  color: "#b91c1c",
  border: "1px solid #fecaca",
  padding: "10px 18px",
  borderRadius: 10,
  fontWeight: 700,
  cursor: "pointer",
};

/* ===== CONFIRM MODAL ===== */

const confirmOverlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 10000,
};

const confirmBox = {
  background: "#fff",
  padding: 24,
  borderRadius: 12,
  maxWidth: 400,
  width: "100%",
};
