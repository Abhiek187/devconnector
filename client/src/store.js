// Boilerplate code for Redux
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers"; // /index.js
import setAuthToken from "./utils/setAuthToken";

const initialState = {};
// The thunk middleware is automatically added with @reduxjs/toolkit
const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware,
});

// NOTE: set up a store subscription listener to store the user's token in localStorage
/*
  Initialize current state from redux store for subscription comparison,
  preventing undefined error
 */
let currentState = store.getState();

store.subscribe(() => {
  // Keep track of the previous and current state to compare changes
  const previousState = currentState;
  currentState = store.getState();
  // If the token changes, set the value in LS and axios headers
  if (previousState.auth.token !== currentState.auth.token) {
    const token = currentState.auth.token;
    setAuthToken(token);
  }
});

export default store;
