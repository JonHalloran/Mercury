import {RECEIVE_RUN_ERRORS, RECEIVE_RUN, RECEIVE_RUNS} from "../actions/run_actions";


const runErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_RUN_ERRORS:
            return action.errors;
        case RECEIVE_RUN:
            return [];
        case RECEIVE_RUNS:
            return [];
        default:
            return oldState
    }
};

export default runErrorsReducer