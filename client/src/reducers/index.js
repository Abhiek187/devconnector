import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import post from "./post";

/* How Redux works:
 * 1. The component calls an action.
 * 2. The action dispatches the action type and payload to the reducer.
 * 3. The reducer updates the state of the Redux store.
 * (All reducers are called, but only one handles the action.)
 * 4. The component's props get updated, causing a re-render.
 */
export default combineReducers({
  alert,
  auth,
  profile,
  post,
});
