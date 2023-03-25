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
io.on("connection",(socket)=>{
  console.log(socket.handshake.query)
  console.log(socket.handshake.headers["authorization"])
})

server.listen(3000, (err, res) =>
  console.log("run on port " + "localhost:3000")
);
