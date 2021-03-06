import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import routeReducer from "./route_reducer";
import runReducer from "./run_reducer";
import commentsReducer from "./comments_reducer";

export default combineReducers({
  users: usersReducer,
  routes: routeReducer,
  runs: runReducer,
  comments: commentsReducer
});
