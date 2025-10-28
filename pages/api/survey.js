import Survey from "../../models/Survey.js";
import { withLogging } from "../../middleware/logMiddleware.js";
import { v4 as uuidv4 } from "uuid";

async function handler(req, res) {
  if (req.method === "POST") {
    const { user_id, answers } = req.body;

    if (!user_id || !answers || typeof answers !== "object") {
      return res.status(400).json({
        status: 400,
        data: { success: false, message: "user_id and answers object are required" }
      });
    }

    try {
      const newSurvey = await Survey.create({
        survey_uid: uuidv4(),
        user_id,
        answers
      });

      return res.status(200).json({
        status: 200,
        data: { success: true, message: "Survey submitted successfully", survey: newSurvey }
      });
    } catch (error) {
      console.error("Survey API error:", error);
      return res.status(500).json({
        status: 500,
        data: { success: false, message: "Server Error" }
      });
    }
  } else {
    return res.status(405).json({
      status: 405,
      data: { success: false, message: "Method Not Allowed" }
    });
  }
}

export default withLogging(handler);
