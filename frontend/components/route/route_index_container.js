import { connect } from "react-redux";
import RouteIndex from "./route_index";
import { withRouter } from "react-router-dom";
import { receiveRoutes } from "../../actions/route_actions";

const mapStateToProps = state => ({
  routes: Object.values(state.entities.routes)
});

const mapDispatchToProps = dispatch => ({
  receiveRoutes: () => dispatch(receiveRoutes({ routes: {} }))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RouteIndex)
);
