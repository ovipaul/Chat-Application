//Make Connection
var socket = io.connect("http://localhost:4000");

//DOM Query
var sendMessage = document.getElementById("sendMessage");
    nickName = document.getElementById("nickName");
    outputMessage = document.getElementById("outputMessage");
    inputMessage = document.getElementById("inputMessage");

//Emit Events
//Sending message from client to server
sendMessage.addEventListener("click",function(){
  socket.emit("chat",{
    message:inputMessage.value,
    nickname:nickName.value
  });
});

//listen
socket.on("chat",function(data){
  outputMessage.innerHTML += "<p><strong>"+data.nickname+"</strong>"+data.message+"</p>";
});
