// import db from "../../../../lib/db";
// import verifyToken from "../../../../middlewares/verifyToken";

// export default verifyToken(async (req, res) => {
//   if (req.method !== "POST") return res.status(405).end();

//   const { sections } = req.body;

//   for (let i = 0; i < sections.length; i++) {
//     await db.query(
//       `UPDATE cms_sections SET section_order=? WHERE section_uid=?`,
//       [i + 1, sections[i].section_uid]
//     );
//   }

//   res.json({ success: true });
// });
