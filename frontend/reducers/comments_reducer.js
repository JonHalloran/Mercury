import { RECEIVE_COMMENT, RECEIVE_COMMENTS } from "../actions/comment_actions";
import { merge } from "lodash";

const commentReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.payload.comments || {};
    case RECEIVE_COMMENT:
      return merge({}, oldState, {
        [action.payload.comment.id]: action.payload.comment
      });
    default:
      return oldState;
  }
};

export default commentReducer;
