import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_RUN } from "../actions/run_actions";
import { RECEIVE_ROUTE } from "../actions/route_actions";
import { merge } from "lodash";

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (!action.user) return oldState;
      return merge({}, oldState, { [action.user.id]: action.user });
    case RECEIVE_RUN:
      return merge({}, oldState, {
        [action.payload.user.id]: action.payload.user
      });
    case RECEIVE_ROUTE:
      return merge({}, oldState, {
        [action.payload.user.id]: action.payload.user
      });
    default:
      return oldState;
  }
};

export default usersReducer;
