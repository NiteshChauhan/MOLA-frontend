import CmsPage from "@/models/CmsPage";
import { v4 as uuidv4 } from "uuid";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const pages = await CmsPage.findAll({
        order: [["created_at", "DESC"]],
      });
      return res.json({ pages });
    }

    if (req.method === "POST") {
      const { page_title,page_short_title, page_slug, page_status } = req.body;

      const page = await CmsPage.create({
        page_uid: uuidv4(),
        page_title,
        page_short_title,
        page_slug,
        page_status,
      });

      return res.json({ success: true, page });
    }

    res.status(405).end();
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
