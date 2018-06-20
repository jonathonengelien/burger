var dotenv = require('dotenv').config();

// Set up MySQL connection.
var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,

//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME
// });

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Adsbnm1!",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
