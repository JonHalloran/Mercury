import {RECEIVE_CURRENT_USER} from '../actions/session_actions'


const SessionReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.user
        default:
            return oldState
    }
}

export default SessionReducer