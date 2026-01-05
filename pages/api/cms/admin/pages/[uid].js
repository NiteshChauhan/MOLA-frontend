import { CmsPage, CmsPageSection } from "@/models";

export default async function handler(req, res) {
  const { uid } = req.query;

  try {
    /* ================= GET PAGE + ACTIVE SECTIONS ================= */
    if (req.method === "GET") {
      const page = await CmsPage.findOne({
        where: { page_uid: uid },
        include: [
          {
            model: CmsPageSection,
            as: "sections",               // ✅ MUST MATCH association
            where: { section_status: "active" }, // ✅ ONLY ACTIVE SECTIONS
            required: false,              // ✅ PAGE STILL LOADS IF NO SECTIONS
            separate: true,
            order: [["section_order", "ASC"]],
          },
        ],
      });

      if (!page) {
        return res.status(404).json({ error: "Page not found" });
      }

      return res.json({ page });
    }

    /* ================= UPDATE PAGE ================= */
    if (req.method === "PUT") {
      const {
        page_title,
        page_short_title,
        page_slug,
        page_status,
      } = req.body;

      await CmsPage.update(
        {
          page_title,
          page_short_title,
          page_slug,
          page_status,
        },
        { where: { page_uid: uid } }
      );

      return res.json({ success: true });
    }

    /* ================= DELETE PAGE ================= */
    if (req.method === "DELETE") {
      await CmsPage.destroy({ where: { page_uid: uid } });
      await CmsPageSection.destroy({ where: { page_uid: uid } });

      return res.json({ success: true });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("CMS PAGE ADMIN API ERROR:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
