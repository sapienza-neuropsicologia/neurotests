const path = require("path");
const http = require('http');
const express = require("express");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

// open livereload high port and start to watch public directory for changes
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));

// ping browser on Express boot, once browser has reconnected and handshaken
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

const app = express();

// monkey patch every served HTML so they know of changes
app.use(connectLivereload());

// serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// start Express server
const server = http.createServer(app);
server.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});