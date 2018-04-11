import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import RouteShow from "./route_show";
import { retrieveRoute } from "../../actions/route_actions";

const mapStateToProps = (state, ownProps) => {
  let route = state.entities.routes[ownProps.match.params.routeId];
  if (route) {
    return {
      creator: state.entities.users[route.user_id],
      route
    };
  }
  return {
    route
  };
};

const mapDispatchToProps = dispatch => ({
  retrieveRoute: routeId => dispatch(retrieveRoute(routeId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RouteShow)
);
