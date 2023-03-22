const socket = io("http://localhost:3000");
socket.on("connect", data => {
  socket.emit("welcome", "Hello server!");
socket.on("welcome-client", data => {console.log(data)})
})

