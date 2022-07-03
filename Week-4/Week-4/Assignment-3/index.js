const express = require("express");
const mysql = require("mysql");
const app = express();
app.set("view engine", "pug");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "assignment",
});

app.get("/", (req, res) => {
  res.render("home");
});
//sign in
app.get("/sign-in", (req, res) => {
  let sql = `SELECT * from user WHERE email = '${req.query.email}' AND password = '${req.query.password}';`;
  db.query(sql, (err, result) => {
    if (err) {
      res.send(
        '<script>alert("Please try again."); window.location.href = "/";</script>'
      );
      throw err;
    } else if (result.length === 0) {
      res.send(
        '<script>alert("Please try again."); window.location.href = "/";</script>'
      );
    } else {
      res.redirect("/member");
    }
    console.log(result);
  });
});

//sign up
app.get("/sign-up", (req, res) => {
  let sqlSearch = `SELECT email FROM user WHERE email = '${req.query.email}';`;
  let sqlInsert = `INSERT INTO user (email, password) VALUES ('${req.query.email}', '${req.query.password}');`;
  db.query(sqlSearch, (err, result) => {
    if (err) {
      res.send(
        '<script>alert("Please try again."); window.location.href = "/";</script>'
      );
      throw err;
    } else if (result.length !== 0) {
      res.send(
        '<script>alert("Email existed. Please try another one."); window.location.href = "/";</script>'
      );
    } else {
      db.query(sqlInsert, (err, result) => {
        if (err) {
          res.send(
            '<script>alert("Please try again."); window.location.href = "/";</script>'
          );
          throw err;
        }
        console.log(result);
        res.redirect("/member");
      });
    }
    console.log(result);
  });
});
app.get("/member", (req, res) => {
  res.send("Welcome : )");
});
app.listen("3000", () => {
  console.log("The server is running on port 3000.");
});
