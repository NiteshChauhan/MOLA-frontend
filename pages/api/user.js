import User from "../../models/User.js";
import Login from "../../models/Login.js";
import { withLogging } from "../../middleware/logMiddleware.js";
import { hashPassword } from "../../utils/auth.js";
import sequelize from "../../lib/sequelize.js";
import { v4 as uuidv4 } from "uuid";

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  const { user_name, user_email, password } = req.body;

  if (!user_name || !user_email || !password) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and password are required",
    });
  }

  let transaction;

  try {
    const existingUser = await User.findOne({ where: { user_email } });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await hashPassword(password);
    transaction = await sequelize.transaction();

    const user = await User.create(
      {
        user_uid: uuidv4(),
        user_name,
        user_email,
        user_status: "active",
      },
      { transaction }
    );

    await Login.create(
      {
        login_userid: user.iduser,
        login_password: hashedPassword,
      },
      { transaction }
    );

    await transaction.commit();

    return res.status(201).json({
      success: true,
      data: {
        iduser: user.iduser,
        user_uid: user.user_uid,
        user_name: user.user_name,
        user_email: user.user_email,
      },
      message: "User registered successfully",
    });

  } catch (err) {
    if (transaction) await transaction.rollback();
    console.error("Registration error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error during registration",
    });
  }
}

export default withLogging(handler);
