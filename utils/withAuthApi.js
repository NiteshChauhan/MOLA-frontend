import { verifyToken } from "./jwt";

export default function withAuthApi(handler) {
  return async (req, res) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        return res.status(401).json({
          success: false,
          message: "Authorization token missing",
        });
      }

      const token = authHeader.split(" ")[1]; // Bearer TOKEN

      if (!token) {
        return res.status(401).json({
          success: false,
          message: "Invalid authorization format",
        });
      }

      const decoded = verifyToken(token);

      if (!decoded) {
        return res.status(401).json({
          success: false,
          message: "Invalid or expired token",
        });
      }

      // Attach user to request (optional but useful)
      req.user = decoded;

      return handler(req, res);
    } catch (error) {
      console.error("API Auth Error:", error);
      return res.status(500).json({
        success: false,
        message: "Authentication failed",
      });
    }
  };
}
