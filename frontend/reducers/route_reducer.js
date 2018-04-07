import {RECEIVE_ROUTE, RECEIVE_ROUTES} from "../actions/route_actions";
import {merge} from 'lodash'


const routeReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ROUTES:
            return action.routes;
        case RECEIVE_ROUTE:
            return merge({}, oldState, {[action.route.id]: action.route})
        default:
            return oldState;
    }
};

export default routeReducer