import {connect} from 'react-redux'
import RouteIndex from './route_index'
import {withRouter} from 'react-router-dom'

const mapStateToProps = state => ({
    routes: Object.values(state.entities.routes)
})

export default withRouter(connect(mapStateToProps, null)(RouteIndex))