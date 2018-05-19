import * as http from "http";
import { Server, Socket, Namespace } from "socket.io";
import * as SocketIO from "socket.io";
import { ListRoom } from "../types/ListRoom";
import {ListController} from "../controller/list"

export class ListConnector {
  nsp: Namespace;
  rooms!: ListRoom[];
  server: Server;
  listController: ListController

  constructor(server: http.Server) {
    this.listController = new ListController()
    this.server = SocketIO(server);
    this.nsp = this.server.of("/lists");

    this.nsp.on("connection", (socket: Socket) => {
      console.log("Someone connected");
      socket.emit("connected", { success: true });

      socket.on('lists', (msg)=>{
        console.log(`someone's asking for lists`)
        this.listController.getLists()
        .then((lists)=>socket.emit('lists', lists))
      })
      
      socket.on('list', (msg)=>{
        this.listController.getList(msg)
        .then((list)=>socket.emit('list', list))
      })

      socket.on('setlist', (msg)=>{
        console.log('someone is setting a list')
        this.listController.setList(msg)
        .then(list => this.listController.getLists())
        .then(lists => socket.broadcast.emit('lists', lists))
      })

    });
  }

  allowed(list_id: string){
    return true
  }

  joinRoom(data: any, socket: Socket) {}
}
