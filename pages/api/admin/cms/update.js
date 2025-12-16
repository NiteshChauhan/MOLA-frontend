import CmsPageSection from "@/models/CmsPageSection";
import withAuth from "@/utils/withAuth";

async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { idsection, section_content } = req.body;

  await CmsPageSection.update(
    { section_content },
    { where: { idsection } }
  );

  res.json({ success: true });
}

export default withAuth(handler);
