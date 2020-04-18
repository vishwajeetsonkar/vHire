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
        console.log("setSocketConnection");
        this.userId = await AsyncStorage.getItem("_id");
        console.log(this.userId, ',dsdsadasdsaddada');
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
          console.log("connected from react native");
          this.socketDetails();
        });
        this.socket.on(`${this.userId}_socketDetailsEmit`, () => {
            console.log('_socketDetailsEmit_socketDetailsEmit_socketDetailsEmit')
            this.isSocketConnected = true;
        })
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
