var app=require("./app");

var port = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log("corriendo en puerto 3000");
})