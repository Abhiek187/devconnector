import api from "./api";

// Store our JWT in LS and set axios headers if we do have a token
const setAuthToken = (token) => {
  // LS returns undefined for non-existent keys, but the auth reducer sets the token to null
  if (token !== null) {
    api.defaults.headers.common["x-auth-token"] = token;
    localStorage.setItem("token", token);
  } else {
    delete api.defaults.headers.common["x-auth-token"];
    localStorage.removeItem("token");
  }
};

export default setAuthToken;
