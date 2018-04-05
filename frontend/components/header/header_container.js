import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';
import {login, logout} from "../../actions/session_actions";
import Header from "./header"

const mapStateToProps = ({session}, ownProps) => ({
    currentUser: session.currentUser,
    loggedIn: (session.currentUser !== null),
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))