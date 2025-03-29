const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "mainline.proxy.rlwy.net",
  user: "root",
  password: "QFFoThCbdGOrPnjYjYlCsJjhMAHmcmIj",
  database: "railway",
  port: 11335,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to Railway MySQL!");
    connection.release(); // Release the connection
  }
});

module.exports = pool.promise();
