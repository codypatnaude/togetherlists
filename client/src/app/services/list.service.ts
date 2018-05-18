import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  socketServer;
  constructor() {
    console.log('connecting');
    // this.socketServer = io('http://localhost:3000/lists');
    this.socketServer = io.connect('http://localhost:3000/lists');
    this.socketServer.on('connected', (data) => {
      console.log('connected');
    });
  }
}
