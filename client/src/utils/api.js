import axios from "axios";
import store from "../store";
import { LOGOUT } from "../actions/types";

// Create an instance of axios
// The proxy specified in the client package.json will forward browser requests
// from localhost:3000 to the server at localhost:5000
const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

/*
 * NOTE: intercept any error responses from the api and check if the token is no longer valid.
 * (i.e., token has expired or user is no longer authenticated)
 * Logout the user if the token has expired
 */
api.interceptors.response.use(
  // Any status code within the 2xx range
  (res) => res,
  // Any status code outside the 2xx range
  (err) => {
    // 401 = unauthenticated
    if (err.response.status === 401) {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default api;
