import CmsDownload from "@/models/CmsDownload";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const { category } = req.query;

    if (!category) {
      return res.status(400).json({ error: "Category required" });
    }

    const downloads = await CmsDownload.findAll({
      where: {
        category,
        status: "active",
      },
      order: [["created_at", "DESC"]],
      attributes: [
        "iddownload",
        "title",
        "short_description",
        "file_path",
      ],
    });

    res.json({ downloads });
  } catch (err) {
    console.error("PUBLIC DOWNLOAD API ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
}
