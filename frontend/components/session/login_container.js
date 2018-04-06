import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';
import {login, receiveErrors} from "../../actions/session_actions";
import LoginForm from './login_form'

const mapStateToProps = state => ({
    sess_errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(receiveErrors([]))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))