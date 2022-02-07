var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "henri",
  password: "qwerty",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});