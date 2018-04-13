import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ActivityFeedRun from "./activity_feed_run";

const mapStateToProps = (state, ownProps) => {
  let run = state.entities.runs[ownProps.runId];
  if (!run) return {};
  return {
    run: run,
    route: state.entities.routes[run.route_id],
    user: state.entities.users[run.user_id]
  };
};

export default withRouter(connect(mapStateToProps, null)(ActivityFeedRun));
