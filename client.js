const teachersSocket = io("http://localhost:3000/teachers");
teachersSocket.on("connect", data => {
  teachersSocket.emit("teacherClient", "message from teacher namespace!");
  teachersSocket.on("teacherServer", data => {console.log(data)})
})



const studentsSocket = io("http://localhost:3000/students");
studentsSocket.on("connect", data => {
  studentsSocket.emit("studentClient", "message from students namespace!");
  studentsSocket.on("studentServer", data => {console.log(data)})
})
const socket = io("http://localhost:3000/")
socket.on("broadCast", data => {console.log(data)})

