const io = require("socket.io-client");

const HOST = "localhost";
const PORT = 80;

const socket = io("http://192.168.1.134:80"
/*,{
    reconnectionDelayMax: 10000,
    auth: {
      token: "123"
    },
    query: {
      "my-key": "my-value"
    }
  }*/
);

socket.emit("hola", "hey");

setInterval(() => socket.emit("hola", "heyup"), 200);