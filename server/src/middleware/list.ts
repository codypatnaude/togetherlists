import * as http from "http"
import {Server, Socket, Namespace} from "socket.io"
import * as SocketIO from "socket.io"
import {ListRoom} from "../types/ListRoom"

export class ListConnector{
  nsp: Namespace;
  rooms!: ListRoom[];
  server: Server
  
  constructor(server: http.Server){

    this.server = SocketIO(server)
    this.nsp = this.server.of('/lists')

    this.nsp.on('connection', (socket: Socket) => {
      console.log('Someone connected')
      socket.emit('connected', {success: true})
    })
  }

  joinRoom(data: any, socket: Socket){}

  
  
}