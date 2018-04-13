import React from "react";
import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const retrieveUser = userId => dispatch =>
  SessionAPIUtil.retrieveUser(userId).then(user => dispatch(receiveUser(user)));
