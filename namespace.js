const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
app.use(express.static("./"));

const socketIO = require("socket.io");
const io = socketIO(server, {
  cors: {
    origin: "*",
  },
  serverClient: true,
});
io.on("connection",()=>{
  io.emit("broadCast", "hello everyone!");

})
io.of("/teachers").on("connection", (socket) => {
  socket.on("teacherClient", (data) => {
    console.log(data);
  });
  socket.emit("teacherServer", "hello techer! i am your server!");
});

io.of("/students").on("connection", (socket) => {
  socket.on("studentClient", (data) => {
    console.log(data);
  });
  socket.emit("studentServer", "hello student! i am your server");
});
server.listen(3000, (err, res) =>
  console.log("run on port " + "localhost:3000")
);
