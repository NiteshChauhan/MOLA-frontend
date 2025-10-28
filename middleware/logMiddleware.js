import { logActivity } from "../utils/logger.js";

export function withLogging(handler) {
  return async (req, res) => {
    const start = Date.now();

    // Capture original res.json to log response data
    const originalJson = res.json.bind(res);
    res.json = async (data) => {
      // Log activity after sending response
      await logActivity({
        req,
        type: res.statusCode < 400 ? "SUCCESS" : "ERROR",
        response: { status: res.statusCode, data }
      });
      return originalJson(data);
    };

    try {
      await handler(req, res);
    } catch (err) {
      console.error("Unhandled API error:", err);

      await logActivity({
        req,
        type: "ERROR",
        response: { error: err.message }
      });

      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  };
}
