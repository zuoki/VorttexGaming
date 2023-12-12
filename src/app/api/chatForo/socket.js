import { Server } from "socket.io";
import { createServer } from "http";

const io = new Server({ path: "/api/chatForo/socket" });

io.on("connection", (socket) => {
  console.log("Connected...");
  socket.on("send-message", (obj) => {
    io.emit("receive-message", obj);
  });
});

export default function handler(req, res) {
  if (!res.socket.server.io) {
    console.log("New IO server...");
    res.socket.server.io = io;
  }

  res.end();
}

