import { CmsPageSection, CmsActivityLog } from "@/models";

export default async function handler(req, res) {
  if (req.method !== "PUT") return res.status(405).end();

  const { id } = req.query;
  const user = "admin"; // replace with auth user
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  const section = await CmsPageSection.findByPk(id);

  if (!section) {
    return res.status(404).json({ message: "Section not found" });
  }

  // 🔥 Soft delete
  await section.update({
    section_status: "deleted",
    deleted_at: new Date(),
    deleted_by: user,
  });

  // 🧾 Log
  await CmsActivityLog.create({
    entity_type: "section",
    entity_id: id,
    action: "delete",
    old_data: section.toJSON(),
    performed_by: user,
    ip_address: ip,
  });

  res.json({ success: true });
}
