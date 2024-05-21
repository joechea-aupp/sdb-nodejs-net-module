import net from "net";
import readline from "readline";

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const usernameIn = new Promise((resolve) => {
  readLine.question("Enter your username: ", (answer) => {
    resolve(answer);
  });
});

usernameIn.then((username) => {
  const client = net.createConnection({ port: 8080 }, () => {
    console.log("Connected to server");
  });

  readLine.on("line", (data) => {
    client.write(`${username}: ${data}`);
  });

  client.on("data", (data) => {
    console.log(data.toString());
  });
});
