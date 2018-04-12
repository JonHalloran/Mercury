import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import RunIndex from "./run_index";
import { retrieveRuns } from "../../actions/run_actions";

const mapStateToProps = state => ({
  runs: Object.values(state.entities.runs),
  test: state.entities.runs
});

const mapDispatchToProps = dispatch => ({
  retrieveRuns: () => dispatch(retrieveRuns())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RunIndex)
);
