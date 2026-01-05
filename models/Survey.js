export const runtime = "nodejs";
import { DataTypes } from "sequelize";
import sequelize from "../lib/sequelize.js"; // ESM import

const Survey = sequelize.define("Survey", {
  id_survey: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  survey_uid: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  user_id: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  answers: {
    type: DataTypes.JSON,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: "cms_survey",
  timestamps: false
});

export default Survey;
