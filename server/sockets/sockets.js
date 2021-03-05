const { io } = require("../server");

io.on("connection", (client) => {
  console.log("Client Connected");

  client.on("disconnect", () => {
    console.log("Client Disconnected");
  });

  // LISTEN FROM CLIENT TO SERVER
  client.on("sendMessage", (message) => {
    console.log(message);
  });

  client.on("fromClient", (data, callback) => {
    console.log(data);

    client.broadcast.emit("fromClient", data);

    // if (!message.email) {
    //   callback("Email is required");
    // } else {
    //   callback("Welcome!");
    // }
  });

  // EMIT TO CLIENT FROM SERVER
  client.emit("fromServer", {
    from: "Server",
    to: "Client",
    admins: ["Luis", "Pernia", "Enrique"],
  });
});
