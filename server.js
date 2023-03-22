const http = require("http");
const webSocket = require("ws");
const server = http.createServer();
// const ws = new webSocket.Server({ server });
const socketIO = require("socket.io")
const io = socketIO(server,{
  cors:{
    origin: "*"
  }
})

io.on("connection", (socket) => {
  socket.on("welcome", (data) => {
    console.log(data);
  });
  socket.emit("welcome-client", "hello client!");
});

server.listen(3000, (err, res) =>
  console.log("run on port " + "localhost:3000")
);
