import { createPortal } from "react-dom";

export default function SectionPreviewModal({ section, onClose }) {
  return createPortal(
    <div style={overlay}>
      <div style={modal}>
        <h3>Preview</h3>

        {section.section_key === "note" && <NoteSection section={section} />}
        {section.section_key === "list" && <ListSection section={section} />}
        {section.section_key === "content" && <ContentSection section={section} />}

        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}
