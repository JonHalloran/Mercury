import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserShow from "./user_show";

const mapStateToProps = state => ({
  user: state.entities.users[state.session.currentUser.id]
});

export default withRouter(connect(mapStateToProps, null)(UserShow));
