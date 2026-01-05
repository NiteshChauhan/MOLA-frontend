import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { modules, formats } from "../../utils/quillConfig";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

export default function RichTextEditor({ value, onChange }) {
  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder="Write your content here..."
        className="min-h-[300px]"
      />
    </div>
  );
}
