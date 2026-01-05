import { CmsPage, CmsPageSection } from "@/models";

export default async function handler(req, res) {
  const { slug } = req.query;

  try {
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const page = await CmsPage.findOne({
      where: {
        page_slug: slug,
        page_status: "published",
      },
      include: [
        {
          model: CmsPageSection,
          as: "sections",               // ✅ MUST MATCH index.js
          where: { section_status: "active" },
          required: false,
          separate: true,
          order: [["section_order", "ASC"]],
        },
      ],
    });

    if (!page) {
      return res.status(404).json({ error: "Page not found" });
    }

    return res.status(200).json({ page });

  } catch (error) {
    console.error("CMS PAGE API ERROR:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
