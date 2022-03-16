const PORT = process.env.PORT || 8081;

var express = require("express");
var app = express();
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

app.get("*", function (req, res) {
  res.send("Cant find the requested page", 404);
});

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});
