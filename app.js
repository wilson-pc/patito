var express = require("express");
var app= express();
var cors = require('cors')
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())
app.use("/api/",require("./route/app.route"));
app.get("/",(req,res)=>{
res.send({msg:"hello"});
})



module.exports=app;