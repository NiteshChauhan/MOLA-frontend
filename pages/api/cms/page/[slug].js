// import db from "@/lib/db";

// export default async function handler(req, res) {
//   const { slug } = req.query;

//   const [[page]] = await db.query(
//     "SELECT * FROM cms_pages WHERE page_slug=? AND page_status='published'",
//     [slug]
//   );

//   if (!page) {
//     return res.status(404).json({ message: "Page not found" });
//   }

//   const [sections] = await db.query(
//     "SELECT * FROM cms_sections WHERE section_pageuid=? ORDER BY section_order ASC",
//     [page.page_uid]
//   );

//   res.json({ page, sections });
// }
