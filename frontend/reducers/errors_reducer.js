import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import routeErrorsReducer from "./route_errors_reducer";
import runErrorsReducer from "./run_errors_reducer";
import commentErrorsReducer from "./comment_errors_reducer";

export default combineReducers({
  session: sessionErrorsReducer,
  routes: routeErrorsReducer,
  run: runErrorsReducer,
  comment: commentErrorsReducer
});
