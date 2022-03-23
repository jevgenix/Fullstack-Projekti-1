const PORT = process.env.PORT || 8081;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");

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
  let data = require("./public/data.json");

  console.log(req.body);
  let username = req.body.username;
  let country = req.body.country;
  let message = req.body.message;
  let id = data.length + 1;
  let date = new Date().toString();

  data.push({
    id: id,
    username: username,
    country: country,
    date: date,
    message: message,
  });

  var jsonStr = JSON.stringify(data);

  fs.writeFile("./public/data.json", jsonStr, (err) => {
    if (err) throw err;
    console.log("Data sended to json file!");
  });

  res.send(
    "Username: " + username + "Country: " + country + "Message: " + message
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
