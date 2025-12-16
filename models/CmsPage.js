import { DataTypes } from "sequelize";
import sequelize from "../lib/sequelize.js";

const CmsPage = sequelize.define("cms_pages", {
  idpage: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  page_uid: DataTypes.STRING,
  page_slug: DataTypes.STRING,
  page_title: DataTypes.STRING,
  page_status: DataTypes.STRING,
}, { timestamps: true });

export default CmsPage;
