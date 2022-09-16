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

app.get("/employees", (req, res) => {
  dataservice.getAllEmployees().then((data) => {
    res.json({ data })
  }).catch((err) => {
    res.json({ message: err });
  })

});

app.get("/managers", (req, res) => {
  dataservice.getManagers().then((data) => {
    res.json({ data })
  }).catch((err) => {
    res.json({ message: err });
  })

});

app.get("/departments", (req, res) => {
  dataservice.getDepartments().then((data) => {
    res.json({ data })
  }).catch((err) => {
    res.json({ message: err });
  })

});

app.use((req, res) => {
  res.status(404).end('404 PAGE NOT FOUND');
})
// setup the static folder that static resources can load from
// like images, css files, etc.
app.use(express.static('public'));

dataservice.initialize().then(() => {
  app.listen(HTTP_PROT, onHttpStart());
}).catch(() => {
  console.log("error!");
});
