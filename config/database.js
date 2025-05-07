const mysql = require("mysql2");

//Database config
var config = {
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "expressDB",
};

//Database Connection
const localDB = mysql.createPool(config);

const localDB2 = mysql.createPool(config);

localDB.getConnection((err) => {
  if (err) {
    console.log("Database connection is not established");
  } else {
    console.log("Database Connected");
  }
});

module.exports = { localDB };
