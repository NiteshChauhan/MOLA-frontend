import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME || "cms_guyana",
  process.env.DB_USER || "root",
  process.env.DB_PASS === undefined ? "" : process.env.DB_PASS, // handle blank password properly
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    logging: false,
  }
);

export default sequelize;
