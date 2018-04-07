import {RECEIVE_ROUTE_ERRORS, RECEIVE_ROUTE, RECEIVE_ROUTES} from "../actions/route_actions";

const routeErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_ROUTE_ERRORS:
            return action.errors
        case RECEIVE_ROUTE:
            return []
        case RECEIVE_ROUTES:
            return []
        default:
            return oldState
    }
}

export default routeErrorsReducer