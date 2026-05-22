const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost", // i will use .env in LMS
  user: "root",
  database: "books",
  password: "Velsof@123",
});

module.exports = pool;
