import React from 'react'
import * as SessionAPIUtil from '../util/session_api_util'


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
})

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const signup = userForm => dispatch =>
    SessionAPIUtil.signup(userForm).then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors)))

export const login = userLogin => dispatch =>
    SessionAPIUtil.login(userLogin).then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors)))

export const logout = () => dispatch =>
    SessionAPIUtil.logout().then(() => dispatch(receiveCurrentUser(null)), errors => dispatch(receiveErrors(errors)))
