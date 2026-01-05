import CmsPageSection from "@/models/CmsPageSection";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { sections } = req.body;

  if (!Array.isArray(sections)) {
    return res.status(400).json({ error: "Invalid sections payload" });
  }

  try {
    for (let i = 0; i < sections.length; i++) {
      await CmsPageSection.update(
        { section_order: i + 1 },
        { where: { idsection: sections[i].idsection } }
      );
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("SECTION ORDER ERROR:", error);
    return res.status(500).json({ error: "Failed to reorder sections" });
  }
}
