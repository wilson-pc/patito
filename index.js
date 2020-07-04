var app=require("./app");

var port = process.env.port || 3002;

app.listen(port,()=>{
    console.log("corriendo en puerto 3000");
})
