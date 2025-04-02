const express=require("express");
const http=require("http");
const app=express();
const socketio=require("socket.io");
const path=require("path");
const server = http.createServer(app);
const io= socketio(server);

app.set("view engine","ejs");
app.set(express.static(path.join(__dirname,"public")));
app.use('/style', express.static(path.join(__dirname, 'public/style')));

app.use('/javascripts', express.static(path.join(__dirname, 'public/javascripts')));
io.on("connection",function(socket){
    console.log("connected to socket");
})
app.get("/",function(req,res){
    res.render("index");
});

server.listen(3000);


