var express = require("express");
var socket = require("socket.io");
var port = process.env.PORT || 4000 ;
//App Setup
var app =express();
var server = app.listen(port,function(){
  console.log("Port Connected");
)};

//Static Files
app.use(express.static("public"));

//Socket Setup
var io = socket(server);

io.on("connection",function(socket){
  console.log("socekt connected");

//Emitting message from server to all the clients
  socket.on("chat",function(data){
    io.sockets.emit("chat",data);
  });
});
