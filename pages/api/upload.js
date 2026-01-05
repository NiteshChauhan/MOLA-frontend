import fs from "fs";
import path from "path";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const uploadDir = path.join(process.cwd(), "public/assets/uploads");

  // Ensure upload directory exists
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const form = formidable({
    uploadDir,
    keepExtensions: true,
    maxFileSize: 5 * 1024 * 1024, // 5MB
    filter: ({ mimetype }) =>
      ["image/jpeg", "image/png", "image/webp"].includes(mimetype),
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    // 🔥 FORMIDABLE v3 FIX
    const uploadedFile = Array.isArray(files.file)
      ? files.file[0]
      : files.file;

    if (!uploadedFile || !uploadedFile.filepath) {
      return res.status(400).json({ error: "File upload failed" });
    }

    const fileName = path.basename(uploadedFile.filepath);
    const fileUrl = `/assets/uploads/${fileName}`;

    res.status(200).json({ url: fileUrl });
  });
}
