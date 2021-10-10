export default class SocketService {
  static instance = null;
  static get instant () {
    if (!this.instance) {
      this.instance = new SocketService()
    }
    return this.instance
  }
  
  connect() {
    console.log(window, window.WebSocket, 888)
  }


}