var HTTP_PROT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var path = require("path");
var dataservice = require(__dirname + "/data-service.js");

function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PROT);
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/about.html"));
});

// setup the static folder that static resources can load from
// like images, css files, etc.
app.use(express.static('public'));

app.listen(HTTP_PROT, onHttpStart);
