import socketIO from "socket.io-client";
import { environment } from "../../environment/environment";
import { AsyncStorage } from "react-native";

class SocketIO {
  url = `${environment.baseUrl}`;
  socket;
  userId = 0;
  isSocketConnected = false;
  constructor() {}

  async setSocketConnection() {
    if (!this.isSocketConnected) {
      this.isSocketConnected = true;
      this.userId = await AsyncStorage.getItem("_id");
      this.socket = socketIO(this.url, {
        timeout: 10000,
        jsonp: false,
        transports: ["websocket"],
        //   autoConnect: false,
        //   agent: "-",
        //   path: "/", // Whatever your path is
        pfx: "-",
        //   key: token, // Using token-based auth.   passphrase: cookie, // Using
        //   // cookie auth.
        cert: "-",
        ca: "-",
        ciphers: "-",
        //   rejectUnauthorized: "-",
        perMessageDeflate: "-",
      });
      this.socket.on("connect", () => {
        this.socketDetails();
      });
      this.socket.on(`${this.userId}_socketDetailsEmit`, () => {
        this.isSocketConnected = true;
      });
    }
  }

  async socketDetails() {
    this.socket.emit("socketDetails", {
      userId: this.userId,
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
