import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import MyRoutes from './my_routes'
import {retrieveRoutes} from "../../actions/route_actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    retrieveRoutes: () => dispatch(retrieveRoutes({my: true}))
});

export default withRouter(connect(null, mapDispatchToProps)(MyRoutes))