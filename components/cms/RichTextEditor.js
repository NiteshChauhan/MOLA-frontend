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

    (async () => {
      const Quill = (await import("quill")).default;

      const ImageResize = (await import("quill-image-resize-module-react")).default;
      Quill.register("modules/imageResize", ImageResize);

      const TableUI = (await import("quill-table-ui")).default;
      await import("quill-table-ui/dist/index.css");

      Quill.register(
        {
          "modules/tableUI": TableUI,
        },
        true
      );
    })();

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