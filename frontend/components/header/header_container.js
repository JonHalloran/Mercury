import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';
import {logout} from "../../actions/session_actions";
import Header from "./header"

const mapStateToProps = ({session}, ownProps) => ({
    currentUser: session.currentUser,
    loggedIn: (session.currentUser !== null)
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))