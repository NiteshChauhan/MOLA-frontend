import Appointment from "../../models/Appointment.js";
import { withLogging } from "../../middleware/logMiddleware.js";
import { v4 as uuidv4 } from "uuid";

async function handler(req, res) {
  if (req.method === "POST") {
    const { name, contact_details, brief_description, date_of_appointment } = req.body;

    if (!name || !contact_details || !brief_description || !date_of_appointment) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    try {
      const appointment = await Appointment.create({
        appointment_uid: uuidv4(),
        name,
        contact_details,
        brief_description,
        date_of_appointment,
      });

      return res.status(200).json({ success: true, data: appointment });
    } catch (err) {
      console.error("Appointment API error:", err);
      return res.status(500).json({ success: false, message: "Server Error" });
    }
  } else {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}

export default withLogging(handler);
