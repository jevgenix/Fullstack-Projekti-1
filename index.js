const PORT = process.env.PORT || 8081;

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./public"));

newmessage = ["username", "country", "message", "submit buttin (not empty)"];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/mainpage.html");
});

app.get("/guestbook", (req, res) => {
  res.sendFile(__dirname + "/public/guestbook.html");
});

app.get("/newmessage", (req, res) => {
  res.sendFile(__dirname + "/public/newmessage.html");
});

app.post("/newmessage", (req, res) => {
  console.log(req.body);
  let username = req.body.username;
  let country = req.body.country;
  let message = req.body.message;
  console.log(username, country, message);
  res.send(
    "Username: " + username + "\nCountry: " + country + "\nMessage: " + message
  );
});

app.get("/ajaxmessage", (req, res) => {
  res.sendFile(__dirname + "/public/ajaxmessage.html");
});

app.get("*", function (req, res) {
  res.send("Cant find the requested page", 404);
});

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});
