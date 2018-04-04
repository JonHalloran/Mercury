import React from 'react'
import {Route} from 'react-router'
import LoginContainer from './session/login_container'
import SignupContainer from './session/signup_container'
import {AuthRoute} from '../util/route_util'
import HeaderContainer from './header/header_container'

export default () => (
    <div>
        <HeaderContainer/>
        <AuthRoute path='/login' component={LoginContainer}/>
        <AuthRoute path='/signup' component={SignupContainer}/>
    </div>
)