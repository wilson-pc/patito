var app=require("./app");

var port = process.env.port || 5000;

app.listen(port,()=>{
    console.log("corriendo en puerto 3000");
})