import {RECEIVE_CURRENT_USER} from '../actions/session_actions'


const sessionReducer = (oldState = {currentUser: null}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let currentUser = {currentUser: action.user}
            return {currentUser: action.user}
        default:
            return oldState
    }
}

export default sessionReducer