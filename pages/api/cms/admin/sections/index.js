import CmsPageSection from "@/models/CmsPageSection";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    page_uid,
    section_title,
    section_content,
    section_order,
  } = req.body;

  if (!page_uid || !section_title || !section_content) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const section = await CmsPageSection.create({
      page_uid,
      section_title,
      section_content,
      section_order,
      created_at: new Date(),
      updated_at: new Date(),
    });

    return res.status(200).json({ success: true, section });
  } catch (error) {
    console.error("CREATE SECTION ERROR:", error);
    return res.status(500).json({ error: "Failed to create section" });
  }
}
