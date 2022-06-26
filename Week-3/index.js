var express = require("express");
var app = express();

var cookieParser = require("cookie-parser");
var path = require("path");
app.use(cookieParser());

app.get("/", function (req, res) {
  res.send("Hello, My Server!");
});

function sum(num) {
  ((1 + num) * num) / 2;
  return ((1 + num) * num) / 2;
}

app.get("/data", function (req, res) {
  let numberInput = req.query.number;
  if (!numberInput) {
    res.end("Lack of Parameter");
  } else {
    let number = Number(numberInput);
    if (!Number.isInteger(number)) {
      res.end("Wrong Parameter");
    } else {
      res.end(String(sum(number)));
    }
  }
});

app.get("/myName", function (req, res) {
  let name = req.cookies.userName;

  if (!name) {
    res.sendFile(path.join(__dirname + "/myName.html"));
  } else {
    res.end(name);
  }
});

app.get("/trackName", function (req, res) {
  let name = req.query.name;
  res.cookie("userName", name);
  res.redirect("/myName");
});

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("The server is running on port 3000.");
});
