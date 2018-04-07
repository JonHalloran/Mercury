import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {login, signup, receiveSessionErrors} from "../../actions/session_actions";
import SignupForm from './signup_form'

const mapStateToProps = state => ({
    sess_errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(receiveSessionErrors([]))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm))