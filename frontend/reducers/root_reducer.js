import {combineReducers} from 'redux'
import errors from './errors_reducer'
import session from './session_reducer'
import entities from './entities_reducer'

export default combineReducers({
    session,
    entities,
    errors,
})