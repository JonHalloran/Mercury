import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import RouteSearch from './route_search'
import {retrieveRoutes} from "../../actions/route_actions";

const mapStateToProps = state => ({
    routes: state.routes
});

const mapDispatchToProps = dispatch => ({
    retrieveRoutes: (routeHash) => dispatch(retrieveRoutes(routeHash))
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteSearch)