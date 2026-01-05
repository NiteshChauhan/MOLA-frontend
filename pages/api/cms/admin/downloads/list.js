import CmsDownload from "@/models/CmsDownload";

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).end();

  const { trash } = req.query;

  const where = trash === "1"
    ? { status: "deleted" }
    : { status: ["active", "inactive"] };

  const downloads = await CmsDownload.findAll({
    where,
    order: [["created_at", "DESC"]],
  });

  res.json({ downloads });
}
