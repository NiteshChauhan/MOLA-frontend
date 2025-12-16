import { DataTypes } from "sequelize";
import sequelize from "../lib/sequelize.js";

const CmsPageSection = sequelize.define("cms_page_sections", {
  idsection: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  page_uid: DataTypes.STRING,
  section_key: DataTypes.STRING,
  section_title: DataTypes.STRING,
  section_content: DataTypes.TEXT("long"),
  section_order: DataTypes.INTEGER,
}, { timestamps: true });

export default CmsPageSection;
