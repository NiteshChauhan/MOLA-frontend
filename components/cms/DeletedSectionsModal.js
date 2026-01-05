import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function DeletedSectionsModal({ pageUid, onClose, onRestored }) {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch(`/api/cms/admin/sections/trash?page_uid=${pageUid}`)
      .then(res => res.json())
      .then(data => setSections(data.sections || []));
  }, [pageUid]);

  const restore = async (id) => {
    await fetch(`/api/cms/admin/sections/${id}`, {
      method: "PATCH",
    });

    setSections(prev => prev.filter(s => s.idsection !== id));
    onRestored();
  };

  return createPortal(
    <div style={overlay}>
      <div style={modal}>
        <h3 style={{ fontWeight: 800, marginBottom: 16 }}>
          🗑 Deleted Sections
        </h3>

        {sections.length === 0 && <p>No deleted sections</p>}

        {sections.map(section => (
          <div key={section.idsection} style={item}>
            <strong>{section.section_title || "Untitled"}</strong>

            <button onClick={() => restore(section.idsection)}>
              ♻ Restore
            </button>
          </div>
        ))}

        <button onClick={onClose} style={{ marginTop: 20 }}>
          Close
        </button>
      </div>
    </div>,
    document.body
  );
}

/* ===== STYLES ===== */

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};

const modal = {
  background: "#fff",
  padding: 24,
  borderRadius: 12,
  width: 500,
};

const item = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 12,
};
