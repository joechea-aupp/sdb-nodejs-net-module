import net from "net";

const client = net.connect({ port: 8080 }, () => {
  console.log("connected to server!");
  client.write("Hello from client!\r\n");
});

client.on("data", (data) => {
  console.log(data.toString());
});
