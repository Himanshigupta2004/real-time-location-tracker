const express=require("express");
const http=require("http");
const app=express();
const socketio=require("socket.io");
const server = http.createServer(app);
const io= socketio(server);

app.set("view engine","ejs");
app.set(express.static(path.join(__dirname,"public")));

io.on("connection",function(socket){
    console.log("connected to socket");
})
app.get("/",function(req,res){
    res.send("connection established");
});

server.listen(3000);


