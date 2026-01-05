import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { modules, formats } from "../../utils/quillConfig";

// 1. Keep the dynamic import
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <div className="p-4 border">Loading editor...</div>,
});

export default function RichTextEditor({ value, onChange }) {
  const [mounted, setMounted] = useState(false);

  // 2. Only set mounted to true once we are in the browser
  useEffect(() => {
    setMounted(true);
    // 3. Import CSS here or keep it at the top, 
    // but inside useEffect is safest for some Next.js versions
    import("react-quill/dist/quill.snow.css");
  }, []);

  if (!mounted) {
    return <div className="min-h-[300px] bg-gray-50 border rounded-lg" />;
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