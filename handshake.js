// server
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

// client 
const socket = io("http://localhost:3000/",{
  query:{
    field1:"value1",
    field2:"value2",
  },
  transportOptions:{
    polling:{
      extraHeaders:{
        Authorization: "Bearer <token>",
      }
    }
  }
})
socket.on("connect", data => {console.log(data)})

