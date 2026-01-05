import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { modules, formats } from "../../utils/quillConfig";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <div className="p-4 border">Loading editor...</div>,
});

export default function RichTextEditor({ value, onChange }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    import("react-quill/dist/quill.snow.css");
  }, []);

  if (!mounted) {
    return <div className="min-h-[300px] border bg-gray-50 rounded-lg" />;
  }

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
