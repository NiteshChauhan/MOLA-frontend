export const runtime = "nodejs";
import { DataTypes } from "sequelize";
import sequelize from "../lib/sequelize";

const CmsPageSection = sequelize.define(
  "cms_page_sections",
  {
    idsection: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    page_uid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    section_key: DataTypes.STRING,   // content | list | note
    section_type: DataTypes.STRING,  // optional (can be same as key)
    section_title: DataTypes.STRING,
    section_content: DataTypes.TEXT("long"),
    section_order: DataTypes.INTEGER,
    section_status: {
      type: DataTypes.STRING,
      defaultValue: "active",
    },
    deleted_at: DataTypes.DATE,
    deleted_by: DataTypes.STRING,
  },
  {
    tableName: "cms_page_sections",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default CmsPageSection;
