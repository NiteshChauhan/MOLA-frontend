import Quill from "quill";

// ---------------- IMAGE RESIZE ----------------
import ImageResize from "quill-image-resize-module-react";
Quill.register("modules/imageResize", ImageResize);

// ---------------- TABLE UI (CORRECT WAY) ----------------
import TableUI from "quill-table-ui";
import "quill-table-ui/dist/index.css";

Quill.register(
  {
    "modules/tableUI": TableUI,
  },
  true
);

// ---------------- IMAGE UPLOAD HANDLER ----------------
const imageHandler = function () {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.click();

  input.onchange = async () => {
    const file = input.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

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
  };
};

// ---------------- FORMATS ----------------
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
];

// ---------------- MODULES ----------------
export const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video", "code-block"],
      ["table"], // ✅ TABLE BUTTON
      ["clean"],
    ],
    handlers: {
      image: imageHandler,
    },
  },

  imageResize: {
    modules: ["Resize", "DisplaySize"],
  },

  tableUI: true, // ✅ THIS ENABLES TABLE MENU
};
