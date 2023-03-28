function initializeChatBox() {
  const localStorageValue = localStorage.getItem("messages");
  console.log(localStorageValue)
  const messages = (localStorageValue ? localStorageValue.split("#") : []).map(item=>{
    if(item) return item
  });
  messages?.forEach((item) => {
    const paragraphElement = document.createElement("p");
    paragraphElement.innerText = item;
    const chatBox = document.querySelector(".chatBox");
    chatBox.appendChild(paragraphElement);
  });
}
initializeChatBox();
const socket = io("http://localhost:3000/");
socket.on("connect", (data) => {
  const sendBtn = document.getElementById("sendBtn");
  sendBtn.addEventListener("click", (e) => {
    const textBoxt = document.getElementById("text");
    const message = textBoxt.value;
    if (!message) return alert("textbox cannot be empty");
    socket.emit("clientMessage", message);
    textBoxt.value = "";
  });
});
socket.on("serverMessage", (message) => {
  let localStorageValue = localStorage.getItem("messages") ? localStorage.getItem("messages")+"#"+message : message;
  console.log(localStorageValue);
  localStorage.setItem("messages", localStorageValue);
  const paragraphElement = document.createElement("p");
  paragraphElement.innerText = message;
  const chatBox = document.querySelector(".chatBox");
  chatBox.appendChild(paragraphElement);
});
