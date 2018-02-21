var express = require("express");
var socket = require("socket.io");
//App Setup
var app =express();
var server = app.listen(process.env.PORT || 4000);

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
