import dynamic from "next/dynamic";
import { useState } from "react";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading Editor...</p>,
});

export default function SectionEditor({ section, onSave }) {
  const [content, setContent] = useState(section.section_content || "");

  return (
    <div className="section-editor">
      <h4>{section.section_title}</h4>

      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
      />

      <button
        className="btn-primary"
        onClick={() => onSave(section.idsection, content)}
      >
        Save Section
      </button>
    </div>
  );
}
