import io from "socket.io-client";

import {UPDATE_CHART, UPDATE_CHART_ALL} from '../actions/graph';

const INCREASE_VALUE = 2;
const initialState = {
  red: 33,
  blue: 33,
  yellow: 34
};

let socket = null;
if (!socket) {
  socket = io();
}
export default function graph(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_CHART:
      const newState = Object.assign({}, state);

      newState[action.key] += INCREASE_VALUE;
      if (newState[action.key] >= 100)
        newState[action.key] = 100;

      for (const chart of Object.keys(newState)) {
        if (action.key !== chart) {
          if (newState[chart] > 0)
            newState[chart] -= INCREASE_VALUE/2;
        }
      }
      socket.emit("updateData", newState);
      console.log(newState);
      return newState;

    case UPDATE_CHART_ALL:
      return action.pie;

    default:
      return state;
  }
}