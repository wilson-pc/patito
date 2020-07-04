var app=require("./app");

var port = process.env.port || 3002;

app.listen(process.env.PORT, '0.0.0.0',()=>{
    console.log("corriendo en puerto 3000");
})
