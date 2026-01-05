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
  const { id } = req.query;

  if (!id) return res.status(400).json({ error: "ID missing" });

  try {
    /* ---------- UPDATE ---------- */
    if (req.method === "PUT") {
      const uploadBase = path.join(process.cwd(), "public/uploads/downloads");
      if (!fs.existsSync(uploadBase)) {
        fs.mkdirSync(uploadBase, { recursive: true });
      }

      const form = formidable({
        multiples: false,
        keepExtensions: true,
      });

      const [fields, files] = await form.parse(req);

      // ✅ Convert array fields to strings
      const getValue = (val) => (Array.isArray(val) ? val[0] : val);

      const title = getValue(fields.title);
      const short_description = getValue(fields.short_description) || "";
      const category = getValue(fields.category);
      const status = getValue(fields.status);

      if (!title || !category) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const updateData = { title, short_description, category, status, updated_at: new Date() };

      // ✅ Handle PDF upload
      if (files.file) {
        const file = Array.isArray(files.file) ? files.file[0] : files.file;

        if (file.mimetype !== "application/pdf") {
          return res.status(400).json({ error: "Only PDF files allowed" });
        }

        // ✅ Category folder (same as add download)
        const categoryDir = path.join(uploadBase, category);
        if (!fs.existsSync(categoryDir)) {
          fs.mkdirSync(categoryDir, { recursive: true });
        }

        const fileName = `${Date.now()}-${file.originalFilename}`;
        const finalPath = path.join(categoryDir, fileName);

        // Move file
        await fs.promises.copyFile(file.filepath, finalPath);
        await fs.promises.unlink(file.filepath);

        // Save new file path in DB
        updateData.file_path = `/uploads/downloads/${category}/${fileName}`;
        updateData.file_name = file.originalFilename;
        updateData.file_size = file.size;
      }

      await CmsDownload.update(updateData, { where: { iddownload: id } });

      const updated = await CmsDownload.findOne({ where: { iddownload: id } });

      return res.json({ success: true, message: "Download updated", download: updated });
    }

    /* ---------- SOFT DELETE ---------- */
    if (req.method === "DELETE") {
      await CmsDownload.update({ status: "deleted" }, { where: { iddownload: id } });
      return res.json({ success: true, message: "Moved to trash" });
    }

    /* ---------- RESTORE ---------- */
    if (req.method === "PATCH") {
      await CmsDownload.update({ status: "active" }, { where: { iddownload: id } });
      return res.json({ success: true, message: "Restored successfully" });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (err) {
    console.error("DOWNLOAD UPDATE ERROR:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
