import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';
import {login} from "../../actions/session_actions";
import LoginForm from './login_form'


const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login(user))
})

export default withRouter(connect(null, mapDispatchToProps)(LoginForm))