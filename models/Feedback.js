// models/Feedback.js
import { DataTypes } from "sequelize";
import sequelize from "../lib/sequelize.js"; // adjust path as per your project

const Feedback = sequelize.define(
  "cms_feedbacks",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    feedback_uid: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    feedback_type: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    feedback_service: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    estate_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    has_matter_been_raised_before: {
      type: DataTypes.ENUM("yes", "no"),
      allowNull: false,
    },
    feedback_subject: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    feedback: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    outcome: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false, // because you are handling created_at manually
    freezeTableName: true, // prevent Sequelize from pluralizing table name
  }
);

export default Feedback;
