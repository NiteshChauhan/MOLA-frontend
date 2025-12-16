// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { useState } from "react";

// export default function CmsSectionForm({ initialData = {}, onSave }) {
//   const [title, setTitle] = useState(initialData.section_title || "");
//   const [content, setContent] = useState(initialData.section_content || "");

//   return (
//     <div className="cms-section-form">
//       <label>Section Title</label>
//       <input
//         value={title}
//         onChange={e => setTitle(e.target.value)}
//         placeholder="Section title"
//       />

//       <label>Section Content</label>
//       <CKEditor
//         editor={ClassicEditor}
//         data={content}
//         onChange={(event, editor) => {
//           setContent(editor.getData());
//         }}
//       />

//       <button
//         className="btn-primary"
//         onClick={() => onSave({ title, content })}
//       >
//         Save Section
//       </button>
//     </div>
//   );
// }
