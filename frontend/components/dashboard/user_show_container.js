import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectUserRuns } from "../../selectors/selectors";
import { retrieveRuns } from "../../actions/run_actions";
import UserShow from "./user_show";

const mapStateToProps = state => ({
  // user: state.entities.users[state.session.currentUser.id],
  user: state.session.currentUser,
  runs: selectUserRuns(state, state.session.currentUser.id),
  routes: state.entities.routes
});

const mapDispatchToProps = dispatch => ({
  retrieveRuns: () => dispatch(retrieveRuns())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserShow)
);
