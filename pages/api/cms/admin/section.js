import CmsPageSection from "@/models/CmsPageSection";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      page_uid,
      section_title,
      section_content,
      section_order,
      section_key,
    } = req.body;

    /* ✅ VALIDATION */
    if (
      !page_uid ||
      !section_title ||
      !section_content ||
      !section_order
    ) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    /* ✅ CREATE SECTION */
    const section = await CmsPageSection.create({
      page_uid,
      section_title,
      section_content,
      section_order,
      section_key: section_key,
      section_type: section_key,
    });

    return res.status(200).json({
      success: true,
      section,
    });
  } catch (err) {
    console.error("CMS SECTION CREATE ERROR:", err);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
}
