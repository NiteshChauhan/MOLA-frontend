export const runtime = "nodejs";
import { DataTypes } from "sequelize";
import sequelize from "@/lib/sequelize";

const CmsDownload = sequelize.define(
  "CmsDownload",
  {
    iddownload: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    download_uid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    title: DataTypes.STRING,
    short_description: DataTypes.TEXT,
    category: {
      type: DataTypes.ENUM("legislation", "forms"),
    },
    file_path: DataTypes.STRING,
    file_name: DataTypes.STRING,
    file_size: DataTypes.INTEGER,
    status: {
      type: DataTypes.ENUM("active", "inactive", "deleted"),
      defaultValue: "active",
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  },
  {
    tableName: "cms_downloads",
    timestamps: false,
  }
);

export default CmsDownload;
