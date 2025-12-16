import CmsPage from "@/models/CmsPage";
import withAuthApi from "@/utils/withAuthApi";

async function handler(req, res) {
  try {
    const pages = await CmsPage.findAll({
      order: [["updatedAt", "DESC"]],
    });

    res.status(200).json({ success: true, data: pages });
  } catch (error) {
    console.error("CMS Pages Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
}

export default withAuthApi(handler);
