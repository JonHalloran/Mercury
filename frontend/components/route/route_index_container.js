import {connect} from 'react-redux'
import RouteIndex from './route_index'

const mapStateToProps = state => ({
    routes: Object.values(state.entities.routes)
})

export default connect(mapStateToProps, null)(RouteIndex)