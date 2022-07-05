const express = require("express");
const mysql = require("mysql2");
const app = express();
const bodyParser = require("body-parser");
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qazwsx123",
  database: "assignment",
});

//connect & Create database
db.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  // db.query("CREATE DATABASE mydb", function (err, result) {
  //   if (err) throw err;
  //   console.log("Database mydb created");
  // });
  // var sql = "CREATE TABLE user(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255),PRIMARY KEY(id))";
  // db.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table created");
  // });
});

//testing
db.query("SELECT 12 + 34 AS result", function (err, rows, fields) {
  if (err) throw err;
  console.log("The result is: ", rows[0].result);
});

// //create DB
// app.get("/createdb", (req, res) => {
//   let sql = "CREATE DATABASE IF NOT EXISTS player";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("database created..");
//   });
// });

//create table
app.get("/createtable", (req, res) => {
  let sql =
    "CREATE TABLE IF NOT EXISTS user(id int AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255),PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("table created...");
  });
});

//home page
app.get("/", (req, res) => {
  res.render("home");
});

//sign up user
app.post("/sign-up", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let sql = `INSERT INTO user (email, password) VALUES ("${email}", "${password}")`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("data added...");
  });
});

//sign in user check logic
app.post("/sign-in", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  let sql = "INSERT INTO user SET ?";
  db.query(sql, data, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("data added...");
  });
});

// //get data
// app.get("/getdata", (req, res) => {
//   let sql = "SELECT * FROM user";
//   db.query(sql, (err, results) => {
//     if (err) throw err;
//     console.log(results);
//     res.send("data fetched...");
//   });
// });

app.listen("3000", () => {
  console.log("The server is running on port 3000.");
});
