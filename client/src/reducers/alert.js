import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = []; // the array acts as a queue of alerts

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
