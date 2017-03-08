import io from "socket.io-client";

import { connectSuccess, connectError, alert } from "../actions/alerts";
import {updateDataChart} from '../actions/graph';

let socket = null;

export default function connectToAlerts(store) {
  if (!socket) {
    socket = io();
    socket.on("connect", () => {
      console.log("Socket.io connection success");
      store.dispatch(connectSuccess());

      socket.emit("fetchData");
    });

    socket.on("connect_error", () => {
      console.log("Socket.io connection error. Disconnecting socket ...");
      socket.disconnect();
      store.dispatch(connectError());
      socket = null; // set to null
    });

    socket.on('sendData', pie => {
      store.dispatch(updateDataChart(pie))
    });

    socket.on("alert", payload => {
      console.log(`Alert received from server: ${JSON.stringify(payload)}`);
      store.dispatch(alert(payload));
    });
  }
}
