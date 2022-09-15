var HTTP_PROT = process.env.PORT || 8080;
var express = require("express");
var app = express();

app.get("/",(req,res)=>{
res.send("Hello World");
});

app.listen(HTTP_PROT);
