import { RECEIVE_RUN, RECEIVE_RUNS } from "../actions/run_actions";
import { merge } from "lodash";

const runReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_RUNS:
      return action.payload.runs;
    case RECEIVE_RUN:
      return merge({}, oldState, {
        [action.payload.run.id]: action.payload.run
      });
    default:
      return oldState;
  }
};

export default runReducer;
