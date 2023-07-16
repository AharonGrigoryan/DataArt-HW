// config.js
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  host: process.env.HOST,
  user: process.env.USER,
  port: process.env.PORT,
  database: process.env.DBNAME,
  password: process.env.PASSWORD,
};
