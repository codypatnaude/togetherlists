import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListService {
  socketServer!: io.Socket;
  connected = new BehaviorSubject(false);
  lists = new BehaviorSubject(null);
  list = new BehaviorSubject(null);

  constructor() { }

  connect() {
    return new Promise((resolve, reject) => {
      this.socketServer = io.connect('/lists');
      
      this.socketServer.on('lists', (lists) => {
        console.log('got some lists');
        this.lists.next(lists);
      });

      this.socketServer.on('list', (list) => {
        this.list.next(list);
      });
      
      this.socketServer.on('connected', (data) => {
        this.connected.next(true);
        resolve(true);
      });
    });
  }

  getLists() {
    if (!this.connected.value) {
      throw new Error('You must connect before doing that');
    }
    this.socketServer.emit('lists');
  }

  setList(list) {
    this.socketServer.emit('setlist', list);
  }
}
