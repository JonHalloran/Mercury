import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {createRoute} from "../../util/running_route_util";
import CreateRoute from './create_route'

const mapDispatchToProps = dispatch => ({
    createRoute: (route) => dispatch(createRoute(route))
})

export default withRouter(connect(null, mapDispatchToProps)(CreateRoute))