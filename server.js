var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var path = require("path");
var app = express();
var dataservice = require(__dirname + "/data-service.js");

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, "/views/about.html"));
});

app.get('/employees', (req, res) => {
  dataservice.getAllEmployees().then((data) => {
    res.json({ data });
  }).catch((err) => {
    res.json({ message: err });
  });
});

app.get('/managers', (req, res) => {
  dataservice.getManagers().then((data) => {
    res.json({ data });
  }).catch((err) => {
    res.json({ message: err });
  });
});

app.get('/departments', (req, res) => {
  dataservice.getDepartments().then((data) => {
    res.json({ data });
  }).catch((err) => {
    res.json({ message: err });
  });
});

app.use((req, res) => {
  res.status(404).send("Page not Found");
});

onHttpServer = () => {
  console.log(`server running on ${HTTP_PORT}`);
};

app.use(express.static('public'));

dataservice.initialize().then(() => { app.listen(HTTP_PORT, onHttpServer()) }).catch(() => {
  console.log("err!");
})
