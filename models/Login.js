export const runtime = "nodejs";
import { DataTypes } from "sequelize";
import sequelize from "../lib/sequelize.js"; // adjust path as per your project
import User from "./User.js"; // Assuming User.js is in the same directory

const Login = sequelize.define(
  "Login",
  {
    // Primary Key: idlogin (maps to idlogin in cms_login)
    idlogin: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // Foreign Key: login_userid (links to cms_users.iduser)
    login_userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true, // Enforces the one-to-one relationship
      references: {
        model: User, // Reference the User model
        key: "iduser", // Reference the primary key of the User model
      },
      onDelete: "CASCADE", // Matches the SQL constraint
    },
    // Authentication Credential (password hash)
    login_password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    // Timestamps
    login_addedon: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    login_modifiedon: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "cms_login",
    timestamps: false, // Following the pattern of your other models
  }
);

// Define the association after both models are defined (often done in a separate index/association file)
// This explicitly defines the One-to-One relationship
Login.belongsTo(User, { foreignKey: "login_userid", targetKey: "iduser" });
User.hasOne(Login, { foreignKey: "login_userid", sourceKey: "iduser" });

export default Login;