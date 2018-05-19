import * as express from "express";
import * as http from "http";
import * as fs from "fs";
import * as path from "path";
import * as bodyParser from "body-parser";
import { api } from "./middleware/api";
import * as socketIo from "socket.io";
import * as uuid from "uuid";
import { ListConnector } from "./middleware/list";
import * as mongoose from "mongoose";
import {ListModel, IListModel} from "./models/list"

mongoose.connect('mongodb://localhost/togetherlists')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../../client/dist/client")));

app.use("/api", api());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/dist/client/index.html"));
});

app.use("/socket.io", (req, res) => {
  console.log("socket connection");
});

const server = http.createServer(app);

let wsServer = new ListConnector(server);

let io = wsServer.server;

server.listen(3000, () => console.log("listening on port 3000"));
