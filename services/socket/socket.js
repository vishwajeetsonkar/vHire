import socketIO from "socket.io-client";
import { environment } from "../../environment/environment";

class SocketIO {
  url = `${environment.baseUrl}`;
  socket;
  constructor() {}

  setSocketConnection() {
    console.log("setSocketConnection");
    this.socket = socketIO(this.url, {
      timeout: 10000,
      jsonp: false,
      transports: ["websocket"],
    //   autoConnect: false,
      agent: "-",
    //   path: "/", // Whatever your path is
      pfx: "-",
      //   key: token, // Using token-based auth.   passphrase: cookie, // Using
    //   // cookie auth.
      cert: "-",
      ca: "-",
      ciphers: "-",
      rejectUnauthorized: "-",
      perMessageDeflate: "-",
    });
    this.socket.on("connect", () => {
      console.log("connected from react native");
      this.socketDetails();
    });
    console.log(this.socket);
  }

  socketDetails() {
    this.socket.emit("socketDetails", {
      userId: 1,
      socketId: this.socket.id,
    });
  }

  getSocket() {
    if (!this.socket) {
        this.setSocketConnection();
        return this.socket;
    } else {
        return this.socket;
    }
  }
}

export const socket = new SocketIO();
