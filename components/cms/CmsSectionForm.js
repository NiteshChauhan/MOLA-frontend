import { useState } from "react";
import RichTextEditor from "./RichTextEditor";

export default function CmsSectionForm({ onSave }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [sectionKey, setSectionKey] = useState("content");

  const submit = () => {
    if (!title.trim()) return;

    onSave({
      title,
      content,
      section_key: sectionKey,
    });

    setTitle("");
    setContent("");
    setSectionKey("content");
  };

  return (
    <div style={container}>
      <div style={header}>➕ Add New Section</div>

      <div style={body}>
        {/* TYPE */}
        <label style={label}>Section Type</label>
        <select
          value={sectionKey}
          onChange={(e) => setSectionKey(e.target.value)}
          style={input}
        >
          <option value="definition">Definition</option>
          <option value="content">Content</option>
          <option value="note">Note</option>
        </select>

        {/* TITLE */}
        <label style={label}>Section Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={input}
          placeholder="Enter section title"
        />

        {/* CONTENT */}
        <label style={label}>Section Content</label>
        <div style={editorWrap}>
          <RichTextEditor value={content} onChange={setContent} />
        </div>

        <div style={{ textAlign: "right" }}>
          <button
            onClick={submit}
            disabled={!title.trim()}
            style={btn}
          >
            Save Section
          </button>
        </div>
      </div>
    </div>
  );
}

/* styles */
const container = {
  background: "#fff",
  borderRadius: 14,
  border: "1px solid #e5e7eb",
  boxShadow: "0 8px 24px rgba(0,0,0,.06)",
};

const header = {
  padding: "16px 22px",
  borderBottom: "1px solid #eef0f3",
  fontWeight: 700,
  background: "#f9fafb",
};

const body = { padding: 22 };

const label = {
  display: "block",
  marginBottom: 6,
  marginTop: 16,
  fontSize: 12,
  fontWeight: 700,
};

const input = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 8,
  border: "1px solid #d1d5db",
};

const editorWrap = {
  border: "1px solid #d1d5db",
  borderRadius: 10,
  overflow: "hidden",
};

const btn = {
  marginTop: 24,
  background: "#2563eb",
  color: "#fff",
  padding: "11px 26px",
  borderRadius: 10,
  border: "none",
  fontWeight: 700,
};
