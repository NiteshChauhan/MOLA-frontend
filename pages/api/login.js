import User from "../../models/User.js";
import Login from "../../models/Login.js";
import { withLogging } from "../../middleware/logMiddleware.js";
import { comparePassword } from "../../utils/auth.js";
import { generateToken } from "../../utils/jwt.js";

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  const { user_email, password } = req.body;

  if (!user_email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  try {
    const user = await User.findOne({
      where: { user_email },
      include: [{ model: Login, attributes: ["login_password"] }],
    });

    if (!user || !user.Login?.login_password) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const valid = await comparePassword(password, user.Login.login_password);

    if (!valid) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    // ✅ REAL JWT
    const token = generateToken({
      iduser: user.iduser,
      user_uid: user.user_uid,
      role: "admin",
    });

    return res.status(200).json({
      success: true,
      token,
      data: {
        iduser: user.iduser,
        user_uid: user.user_uid,
        user_name: user.user_name,
        user_email: user.user_email,
      },
      message: "Login successful",
    });

  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ success: false, message: "Server error during login" });
  }
}

export default withLogging(handler);
