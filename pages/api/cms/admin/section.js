// import db from "../../../../lib/db";
// import verifyToken from "../../../../middlewares/verifyToken";

// export default verifyToken(async (req, res) => {
//   if (req.method === "POST") {
//     const { page_uid, title, content, order } = req.body;

//     await db.query(
//       `INSERT INTO cms_sections 
//        (section_pageuid, section_title, section_content, section_order)
//        VALUES (?, ?, ?, ?)`,
//       [page_uid, title, content, order]
//     );

//     return res.json({ success: true });
//   }

//   if (req.method === "PUT") {
//     const { section_uid, title, content } = req.body;

//     await db.query(
//       `UPDATE cms_sections 
//        SET section_title=?, section_content=?
//        WHERE section_uid=?`,
//       [title, content, section_uid]
//     );

//     return res.json({ success: true });
//   }

//   res.status(405).end();
// });
