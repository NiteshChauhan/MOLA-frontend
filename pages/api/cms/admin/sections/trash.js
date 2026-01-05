import CmsPageSection from "@/models/CmsPageSection";

export default async function handler(req, res) {
  const { page_uid } = req.query;

  if (!page_uid) {
    return res.status(400).json({ error: "page_uid required" });
  }

  const sections = await CmsPageSection.findAll({
    where: {
      page_uid,
      section_status: "deleted",
    },
    order: [["updated_at", "DESC"]],
  });

  return res.json({ sections });
}
