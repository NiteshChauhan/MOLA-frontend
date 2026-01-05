export const runtime = "nodejs";
import sequelize from "../../lib/sequelize";

export default async function handler(req, res) {
  try {
    await sequelize.authenticate();
    res.status(200).json({ success: true, message: "DB connected successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "DB connection failed", error });
  }
}
