import * as commentAPIUtil from "../util/comment_util";

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

const receiveComment = payload => ({
  type: RECEIVE_COMMENT,
  payload
});

const receiveComments = payload => ({
  type: RECEIVE_COMMENTS,
  payload
});

const receiveCommentErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export const fetchComments = runId => dispatch =>
  commentAPIUtil.fetchComments(runId).then(payload => receiveComments(payload));

export const createComment = (runId, commentForm) => dispatch =>
  commentAPIUtil
    .createComment(runId, commentForm)
    .then(payload => receiveComment(payload));
