import { DataTypes } from "sequelize";
import sequelize from "../lib/sequelize.js";

const LogActivity = sequelize.define("LogActivity", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  log_uid: { type: DataTypes.STRING(50), allowNull: false },
  log_ipaddress: { type: DataTypes.STRING(45) },
  log_userid: { type: DataTypes.INTEGER },
  log_usertype: { type: DataTypes.STRING(50) },
  log_type: { type: DataTypes.ENUM("SUCCESS", "ERROR", "INFO", "WARNING"), allowNull: false },
  log_apiname: { type: DataTypes.STRING(255) },
  log_postdata: { type: DataTypes.TEXT },
  log_response: { type: DataTypes.TEXT },
  log_addedon: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: "cms_log_activity",
  timestamps: false
});

export default LogActivity;
