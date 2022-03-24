const PORT = process.env.PORT || 5000;

const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));

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

  if (username.length > 0 && country.length > 0 && message.length > 0) {
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
  } else {
    return;
  }
  res.send(
    "Your data were sended into json table, check guestbook to find your data!" +
      "<br>" +
      "Your data is: " +
      "<br>" +
      "username = " +
      username +
      "<br>" +
      "country = " +
      country +
      "<br>" +
      "message = " +
      message +
      "</br>"
  );
});

app.get("/ajaxmessage", (req, res) => {
  res.sendFile(__dirname + "/public/ajaxmessage.html");
});

app.get("*", function (req, res) {
  res.send("Cant find the requested page", 404);
});

app.post("/message", function (req, res) {
  let data = require("./public/data.json");
  let id = data.length + 1;
  let date = new Date().toString();

  if (
    req.body.username.length > 0 &&
    req.body.country.length > 0 &&
    req.body.message.length > 0
  ) {
    data.push({
      id: id,
      username: req.body.username,
      country: req.body.country,
      date: date,
      message: req.body.message,
    });

    var jsonStr = JSON.stringify(data);

    fs.writeFile("./public/data.json", jsonStr, (err) => {
      if (err) throw err;
      console.log("Data sended to json file!");
    });
  } else {
    console.log("Some fields are missing");
  }

  res.send(
    "You send an AJAX message: " +
      req.body.message +
      ". It is saved to a JSON file"
  );
});

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});
