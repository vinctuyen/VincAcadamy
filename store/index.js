import { combineReducers } from "redux";
import login from "./features/auth/login";
import loading from "./features/share/loading";
import notify from "./features/share/notify";
import search from "./features/home/search"
export default combineReducers({
  login,
  loading,
  notify,
  search,
});
