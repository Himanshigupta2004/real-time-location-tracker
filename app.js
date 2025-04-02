const express = require("express");
const http = require("http");
const path = require("path");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set EJS as the view engine
app.set("view engine", "ejs");

// Serve static files
app.use(express.static(path.join(__dirname, "public")));
app.use("/style", express.static(path.join(__dirname, "public/style")));
app.use("/javascripts", express.static(path.join(__dirname, "public/javascripts")));

// Handle WebSocket connections
io.on("connection", function (socket) {
    console.log(`User connected: ${socket.id}`);

    // Listen for location updates
    socket.on("send-location", function (data) {
        console.log(`User ${socket.id} sent location:`,data.latitude, data.longitude);
        io.emit("recieved-location", { id: socket.id, ...data });
    });

    // Handle user disconnection
    socket.on("disconnect", function () {
        console.log(`User disconnected: ${socket.id}`);
        io.emit("user-disconnected", socket.id);
    });
});


app.get("/", function (req, res) {
    res.render("index");
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
