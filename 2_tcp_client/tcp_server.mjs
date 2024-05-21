import net from "net";

const server = net.createServer((socket) => {
  socket.write("Hello from server!\r\n");
  console.log("data sent to client!");

  socket.on("data", (data) => {
    console.log(data.toString());
  });

  socket.on("error", (error) => {
    console.log(error);
  });
});

server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
