// components/cms/RichTextEditor.js
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

export default function RichTextEditor({ value, onChange }) {
  if (typeof window === "undefined") return null;

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      modules={{
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block"],
          [{ align: [] }],
          ["link", "image"],
          ["clean"],
        ],
      }}
      formats={[
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "list",
        "bullet",
        "blockquote",
        "code-block",
        "align",
        "link",
        "image",
      ]}
    />
  );
}
