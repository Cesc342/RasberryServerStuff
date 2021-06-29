/*
ifconfig -> to watch ip ? ...
*/


const SocketIO = require("socket.io")();
const Express = require("express");
const app = new Express();

const PORT = 80
const HOST = "192.168.1.134"  // IP or Localhost

app.get("/", (req, res) => {
    res.send("<html><body><script src='http://localhost/socket.io/socket.io.js'></script></body></html>");
    res.end();
})

SocketIO.on("connect", (socket) => {
    console.log("SOCKET CONNECTED");
    socket.on("hola", (a) => {
        console.log(a);
        socket.emit("adeu");
    })
})

const http = app.listen(PORT, HOST,
        () => console.log(`Servidor corrents en http://${HOST}:${PORT}`)
)
SocketIO.listen(http);