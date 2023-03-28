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
});
io.on("connection", (socket) => {
  socket.on("clientMessage", (data) => {
    io.emit("serverMessage", data);
  });
});

server.listen(3000, (err, res) =>
  console.log("run on port " + "localhost:3000")
);
