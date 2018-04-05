import React from 'react'
import {Route} from 'react-router'
import LoginContainer from './session/login_container'
import SignupContainer from './session/signup_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import HeaderContainer from './header/header_container'
import Shortcuts from './shortcuts/shortcuts'

export default () => (
    <div>
        <HeaderContainer/>
        <ProtectedRoute path='/dashboard' component={Shortcuts}/>
        <AuthRoute path='/login' component={LoginContainer}/>
        <AuthRoute path='/signup' component={SignupContainer}/>
    </div>
)