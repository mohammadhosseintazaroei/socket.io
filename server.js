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
  socket.join(["nodejs", "php"]); // ---> جوین میشه تو یه رومی
  socket.leave("php"); // ---> از یه رومی خارج میشه
  socket.compress(false).emit();
  socket.broadcast.emit("event", "message"); // ---> این مسیج به تمام کلاینت ها ارسال میشه به جز خودش
  socket.on("disconnecting", (reason) => {
    console.log(reason);
  }); // ---> وقتی داره قطع میشه و میخوایم دلیل قطع شدگیش رو بگیریم
  socket.on("disconnect", (data) => {
    console.log(data);
  }); // ---> برای وقتی هست که اتصال به طور کامل قطع شده

  io.to("nodejs").emit("a new user aded");
  console.log(socket.rooms);
});
server.listen(3000, (err, res) =>
  console.log("run on port " + "http://localhost:3000/")
);
