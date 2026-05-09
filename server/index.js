const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

function generateCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("create-room", () => {
    const code = generateCode();
    socket.join(code);
    socket.emit("room-created", code);
  });

  socket.on("join-room", (code) => {
    const room = io.sockets.adapter.rooms.get(code);
    if (!room) {
      socket.emit("error", "Room not found");
      return;
    }
    socket.join(code);
    socket.emit("room-joined", code);
    socket.to(code).emit("peer-joined");
  });

  socket.on("offer", ({ code, offer }) => {
    socket.to(code).emit("offer", offer);
  });

  socket.on("answer", ({ code, answer }) => {
    socket.to(code).emit("answer", answer);
  });

  socket.on("ice-candidate", ({ code, candidate }) => {
    socket.to(code).emit("ice-candidate", candidate);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

server.listen(3000, () => {
  console.log("running on port 3000");
});
