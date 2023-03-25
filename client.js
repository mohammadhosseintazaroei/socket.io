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

