export const runtime = "nodejs";
import { DataTypes } from "sequelize";
import sequelize from "../lib/sequelize";

const CmsPage = sequelize.define(
  "cms_pages",
  {
    idpage: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    page_uid: {
      type: DataTypes.STRING,
      unique: true,
    },
    page_slug: DataTypes.STRING,
    page_title: DataTypes.STRING,
    page_short_title: DataTypes.STRING,
    page_status: DataTypes.STRING,
  },
  {
    tableName: "cms_pages",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default CmsPage;
