import net from "net";

const client = net.connect({ port: 8080 }, () => {
  console.log("connected to server!");
});
