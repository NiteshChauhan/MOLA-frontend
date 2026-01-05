export const runtime = "nodejs";
import { DataTypes } from "sequelize";
import sequelize from "../lib/sequelize.js"; // adjust path as per your project

const User = sequelize.define(
  "User",
  {
    // Primary Key: iduser (maps to iduser in cms_users)
    iduser: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // Unique identifier
    user_uid: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    user_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
    },
    // Status (enum('active','inactive') from the SQL dump)
    user_status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active",
    },
    // Timestamps
    user_addedon: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    user_modifiedon: {
      type: DataTypes.DATE,
      // The database handles the ON UPDATE CURRENT_TIMESTAMP functionality
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "cms_users",
    timestamps: false, // Following the pattern of your other models
  }
);

export default User;