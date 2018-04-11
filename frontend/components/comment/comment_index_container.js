import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchComments } from "../../actions/comment_actions";
import CommentIndex from "./comment_index";

const mapStateToProps = (state, ownProps) => ({
  comments: Object.values(state.entities.comments)
});

const mapDispatchToProps = dispatch => ({
  fetchComments: runId => dispatch(fetchComments(runId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CommentIndex)
);
