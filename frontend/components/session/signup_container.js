import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {login, signup} from "../../actions/session_actions";
import SignupForm from './signup_form'

const mapDispatchToProps = dispatch => ({
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user))
})

export default withRouter(connect(null, mapDispatchToProps)(SignupForm))