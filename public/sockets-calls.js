var socket = io();
socket.on("connect", function (client) {
  console.log("Connected");
});

let data = {
  name: "Francisco",
  last_name: "Guerra",
  email: "luispcode@gmail.com",
};

// LISTEN FROM SERVER TO
socket.on("disconnect", function () {
  console.log("disconnect from server");
});

socket.on("fromClient", (data) => {
  console.log(data);
});

document.querySelector("#btn").addEventListener("click", function () {
  // EMIT FROM CLIENT TO SERVER
  data.email = "";
  emitData(data);
});
document.querySelector("#btn-true").addEventListener("click", function () {
  // EMIT FROM CLIENT TO SERVER
  data.email = "luispcode@gmail.com";
  emitData(data);
});

function emitData({ name, last_name, email }) {
  socket.emit(
    "fromClient",
    {
      name,
      last_name,
      email,
    },
    (callback) => {
      console.log(callback);
    }
  );
}
