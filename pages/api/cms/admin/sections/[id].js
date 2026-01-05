import CmsPageSection from "@/models/CmsPageSection";
import CmsLog from "@/models/CmsActivityLog";

export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "Section ID missing" });
  }

  try {
    /* ================= UPDATE ================= */
    if (req.method === "PUT") {
      const { section_title, section_content, section_key } = req.body;

      await CmsPageSection.update(
        {
          section_title,
          section_content,
          section_key,
          section_type: section_key,
        },
        { where: { idsection: id } }
      );

      return res.json({ success: true });
    }

    /* ================= SOFT DELETE (ALREADY WORKING) ================= */
    if (req.method === "DELETE") {
      const section = await CmsPageSection.findByPk(id);

      await CmsPageSection.update(
        { section_status: "deleted" },
        { where: { idsection: id } }
      );

      await CmsLog.create({
        entity_type: "section",
        entity_id: id,
        action: "delete",
        old_data: section.toJSON(),
        new_data: { section_status: "deleted" },
        created_by: "admin",
      });

      return res.json({ success: true });
    }

    /* ================= RESTORE SECTION ================= */
    if (req.method === "PATCH") {
      const section = await CmsPageSection.findByPk(id);

      if (!section) {
        return res.status(404).json({ error: "Section not found" });
      }

      await CmsPageSection.update(
        { section_status: "active" },
        { where: { idsection: id } }
      );

      await CmsLog.create({
        entity_type: "section",
        entity_id: id,
        action: "restore",
        old_data: { section_status: "deleted" },
        new_data: { section_status: "active" },
        created_by: "admin",
      });

      return res.json({ success: true });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("SECTION API ERROR:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
