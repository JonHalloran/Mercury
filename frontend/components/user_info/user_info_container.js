import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';


const mapStateToProps = state => ({
    currentUser: state.users[state.session.currentUser.id],
    session: state.session
})


export default withRouter(connect(mapStateToProps, null)(UserInfo));