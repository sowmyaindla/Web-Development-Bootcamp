var express = require("express");

var app = express();

app.get("/", function(req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at sowmya_indla@yahoo.com");
});

app.get("/about", function(req, res) {
  res.send("I am Sowmya, Web Developer");
});

app.get("/hobbies", function(req, res) {
  res.send("<ul><li>Coding</li><li>Yoga</li><li>Meditation</li></ul>");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
