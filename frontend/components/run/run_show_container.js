import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { retrieveRun } from "../../actions/run_actions";
import RunShow from "./run_show";

const mapStateToProps = (state, ownProps) => {
  const runId = ownProps.match.params.runId;
  const run = state.entities.runs[runId];
  if (run) {
    return {
      run: run,
      route: state.entities.routes[run.route_id]
    };
  }
  return {
    run: state.entities.runs[ownProps.match.params.runId],
    route: undefined
  };
};

const mapDispatchToProps = dispatch => ({
  retrieveRun: runId => dispatch(retrieveRun(runId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RunShow)
);
