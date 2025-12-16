import CmsPage from "@/models/CmsPage";
import CmsPageSection from "@/models/CmsPageSection";

export default async function handler(req, res) {
  try {
    const { slug } = req.query;

    // 1️⃣ Find page by slug
    const page = await CmsPage.findOne({
      where: {
        page_slug: slug,
        page_status: "active"
      }
    });

    if (!page) {
      return res.status(404).json({
        success: false,
        message: "Page not found"
      });
    }

    // 2️⃣ Fetch sections
    const sections = await CmsPageSection.findAll({
      where: { page_uid: page.page_uid },
      order: [["section_order", "ASC"]]
    });

    // 3️⃣ Return response
    res.status(200).json({
      success: true,
      page,
      sections
    });

  } catch (error) {
    console.error("CMS Page API Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
}
