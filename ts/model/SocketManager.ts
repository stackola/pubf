export default class SocketManager {
	socket: SocketIO.Server;
	constructor(s: SocketIO.Server) {
		this.socket = s;	
	}
}