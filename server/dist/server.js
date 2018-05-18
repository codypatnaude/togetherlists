"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var http = require("http");
var path = require("path");
var bodyParser = require("body-parser");
var api_1 = require("./middleware/api");
var list_1 = require("./middleware/list");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../../client/dist/client')));
app.use('/api', api_1.api());
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/dist/client/index.html'));
});
app.use('/socket.io', function (req, res) {
    console.log("socket connection");
});
var server = http.createServer(app);
var wsServer = new list_1.ListConnector(server);
var io = wsServer.server;
server.listen(3000, function () { return console.log("listening on port 3000"); });
