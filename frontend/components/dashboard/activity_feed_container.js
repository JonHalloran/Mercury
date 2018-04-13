import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { retrieveRuns } from "../../actions/run_actions";
import { retrieveRoutes } from "../../actions/route_actions";
import { activityFeed } from "../../selectors/selectors.js";
import ActivityFeed from "./activity_feed";

const mapStateToProps = state => ({
  activityFeed: activityFeed(state, state.session.currentUser.id),
  users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  retrieveRuns: () => dispatch(retrieveRuns()),
  retrieveRoutes: () => dispatch(retrieveRoutes({ my: true }))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ActivityFeed)
);
