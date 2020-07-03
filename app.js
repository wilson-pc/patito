var express = require("express");
var app= express();
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use("/api/",require("./route/app.route"));
app.get("/",(req,res)=>{
res.send({msg:"hello"});
})



module.exports=app;