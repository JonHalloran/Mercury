import { RECEIVE_ROUTE, RECEIVE_ROUTES } from "../actions/route_actions";
import { RECEIVE_RUN } from "../actions/run_actions";
import { merge } from "lodash";

const routeReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ROUTES:
      return action.payload.routes;
    case RECEIVE_ROUTE:
      return merge({}, oldState, {
        [action.payload.route.id]: action.payload.route
      });
    case RECEIVE_RUN:
      return merge({}, oldState, {
        [action.payload.route.id]: action.payload.route
      });
    default:
      return oldState;
  }
};

export default routeReducer;
