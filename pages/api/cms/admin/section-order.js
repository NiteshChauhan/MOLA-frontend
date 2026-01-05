import CmsPageSection from "@/models/CmsPageSection";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { sections } = req.body;

    if (!Array.isArray(sections)) {
      return res.status(400).json({ error: "Invalid sections data" });
    }

    // 🔁 Update order one by one
    const updates = sections.map((section) =>
      CmsPageSection.update(
        { section_order: section.section_order },
        { where: { idsection: section.idsection } }
      )
    );

    await Promise.all(updates);

    return res.status(200).json({
      success: true,
      message: "Section order updated",
    });

  } catch (error) {
    console.error("Section reorder error:", error);
    return res.status(500).json({
      error: "Failed to update section order",
      details: error.message,
    });
  }
}
