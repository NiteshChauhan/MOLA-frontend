import CmsDownload from "@/models/CmsDownload";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const downloads = await CmsDownload.findAll({
      where: { status: "deleted" },
      order: [["updated_at", "DESC"]], // ✅ FIX HERE
    });

    return res.json({ downloads });
  } catch (error) {
    console.error("TRASH DOWNLOAD ERROR:", error);
    return res.status(500).json({ error: "Failed to load trash" });
  }
}
