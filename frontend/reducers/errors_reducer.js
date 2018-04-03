import {CombineReducers} from 'redux'
import SessionErrorsReducer from './session_errors_reducer';

export default CombineReducers({
    session: SessionErrorsReducer
})
