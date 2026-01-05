import { DataTypes } from "sequelize";
import sequelize from "../lib/sequelize";

const CmsActivityLog = sequelize.define(
  "cms_activity_logs",
  {
    entity_type: DataTypes.STRING,
    entity_id: DataTypes.INTEGER,
    action: DataTypes.STRING,
    old_data: DataTypes.JSON,
    new_data: DataTypes.JSON,
    performed_by: DataTypes.STRING,
    ip_address: DataTypes.STRING,
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
  }
);

export default CmsActivityLog;
