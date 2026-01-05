// pages/api/feedback.js
export const runtime = "nodejs";
import Feedback from "../../models/Feedback.js";
import sequelize from "../../lib/sequelize.js";
import { logActivity } from "../../utils/logger.js";
import { withLogging } from "../../middleware/logMiddleware.js";
import { v4 as uuidv4 } from "uuid";

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const {
        feedback_type,
        feedback_service,
        estate_name,
        name,
        email,
        has_matter_been_raised_before,
        feedback_subject,
        feedback,
        outcome,
      } = req.body;

      // Ensure DB connection
      await sequelize.authenticate();
      await sequelize.sync();

      const newFeedback = await Feedback.create({
        feedback_uid: uuidv4(),
        feedback_type,
        feedback_service,
        estate_name,
        name,
        email,
        has_matter_been_raised_before,
        feedback_subject,
        feedback,
        outcome,
      });

    //   // ✅ Log success
    //   await logActivity({
    //     req,
    //     type: "SUCCESS",
    //     response: { message: "Feedback saved", id: feedback.id }
    //   });

      return res.status(201).json({ success: true, data: newFeedback });
    } catch (error) {
    //    // ❌ Log error
    //   await logActivity({
    //     req,
    //     type: "ERROR",
    //     response: { error: err.message }
    //   });  
      console.error(error);
      return res.status(500).json({ success: false, message: "Error saving feedback" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default withLogging(handler);