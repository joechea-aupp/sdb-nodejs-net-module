import net from "net";

const sockets = [];

const broadcast = (data) => {
  sockets.forEach((socket) => {
    socket.write(data);
  });
};

const server = net.createServer((socket) => {
  sockets.push(socket);

  socket.on("data", (data) => {
    broadcast(data);
  });

  socket.on("error", (error) => {
    console.log(error);
  });
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
