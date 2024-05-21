import net from "net";

const server = net.createServer((connection) => {
  console.log("Client connected");
});

server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
