import CmsDownload from "@/models/CmsDownload";

export default async function handler(req, res) {
  const downloads = await CmsDownload.findAll({
    where: { status: "active" },
  });

  res.json({ downloads });
}
