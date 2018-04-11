import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createComment } from "../../actions/comment_actions";
import CommentForm from "./comment_form";

const mapDispatchToProps = dispatch => ({
  createComment: (runId, comment) => dispatch(createComment(runId, comment))
});

export default withRouter(connect(null, mapDispatchToProps)(CommentForm));
