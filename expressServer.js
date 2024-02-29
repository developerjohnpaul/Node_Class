const express = require("express");
const bodyparser = require("body-parser");
const mysql = require("mysql");

const app = express();

const con = mysql.createPool({
  host: "srv1107.hstgr.io",
  user: "u532672005_BlimeDatabase",
  password: "Developerjohnpaul70??",
  database: "u532672005_blime",
  port: "3306",
});




app.get("/getUsers", bodyparser.json(), function (req, res) {
  var sql = `select * from users`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/test",bodyparser.json(), (req, res) => {
  res.send("test me 1");
});


app.listen(8000, console.log("listening 8000"));
