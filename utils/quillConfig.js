/**
 * utils/quillConfig.js
 * ✅ SSR-SAFE
 * ✅ Next.js + Vercel compatible
 * ✅ Supports Image Resize, Table UI, Image Upload
 */

/* ---------------- FORMATS ---------------- */
export const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "indent",
  "align",
  "link",
  "image",
  "video",
  "code-block",
  "table",
];

/* ---------------- IMAGE UPLOAD HANDLER ---------------- */
export const imageHandler = function () {
  if (typeof document === "undefined") return;

  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.click();

  input.onchange = async () => {
    const file = input.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!data?.url) {
        alert("Image upload failed");
        return;
      }

      const range = this.quill.getSelection(true);
      this.quill.insertEmbed(range.index, "image", data.url);
      this.quill.setSelection(range.index + 1);
    } catch (err) {
      console.error("Image upload error", err);
      alert("Upload failed");
    }
  };
};

/* ---------------- MODULES (STATIC CONFIG ONLY) ---------------- */
export const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video", "code-block"],
      ["table"],
      ["clean"],
    ],
    handlers: {
      image: imageHandler,
    },
  },

  imageResize: {
    modules: ["Resize", "DisplaySize"],
  },

  tableUI: true,
};
