import CmsDownload from "@/models/CmsDownload";
import formidable from "formidable";
import fs from "fs";
import path from "path";

/* Disable Next.js body parser */
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const uploadBase = path.join(
      process.cwd(),
      "public/uploads/downloads"
    );

    if (!fs.existsSync(uploadBase)) {
      fs.mkdirSync(uploadBase, { recursive: true });
    }

    /* ✅ Formidable v3+ */
    const form = formidable({
      multiples: false,
      keepExtensions: true,
    });

    const [fields, files] = await form.parse(req);

    const title = fields.title?.[0];
    const short_description = fields.short_description?.[0] || "";
    const category = fields.category?.[0];
    const file = files.file?.[0];

    if (!title || !category || !file) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (file.mimetype !== "application/pdf") {
      return res.status(400).json({ error: "Only PDF files allowed" });
    }

    /* Category folder */
    const categoryDir = path.join(uploadBase, category);
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }

    const fileName = `${Date.now()}-${file.originalFilename}`;
    const finalPath = path.join(categoryDir, fileName);

    /* 🔥 WINDOWS-SAFE FILE MOVE */
    await fs.promises.copyFile(file.filepath, finalPath);
    await fs.promises.unlink(file.filepath);

    const filePath = `/uploads/downloads/${category}/${fileName}`;

    await CmsDownload.create({
      title,
      short_description,
      category,
      file_path: filePath,
      file_name: file.originalFilename,
      file_size: file.size,
      status: "active",
      created_at: new Date(),
      updated_at: new Date(),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("DOWNLOAD UPLOAD ERROR:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
