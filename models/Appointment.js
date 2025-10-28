import { DataTypes } from "sequelize";
import sequelize from "../lib/sequelize.js"; // adjust path as per your project


const Appointment = sequelize.define("Appointment", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  appointment_uid: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  contact_details: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  brief_description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date_of_appointment: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: "cms_appointments",
  timestamps: false,
});

export default Appointment;
