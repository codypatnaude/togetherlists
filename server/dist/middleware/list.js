"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SocketIO = require("socket.io");
var ListConnector = /** @class */ (function () {
    function ListConnector(server) {
        this.server = SocketIO(server);
        this.nsp = this.server.of('/lists');
        this.nsp.on('connection', function (socket) {
            console.log('Someone connected');
            socket.emit('connected', { success: true });
        });
    }
    ListConnector.prototype.joinRoom = function (data, socket) { };
    return ListConnector;
}());
exports.ListConnector = ListConnector;
