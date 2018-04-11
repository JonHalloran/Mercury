import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createRoute } from "../../actions/route_actions";
import CreateRoute from "./create_route";

const mapStateToProps = state => ({
  userId: state.session.user.userId,
  routeErrors: state.errors.route
});

const mapDispatchToProps = dispatch => ({
  createRoute: route => dispatch(createRoute(route))
});

export default withRouter(connect(null, mapDispatchToProps)(CreateRoute));
