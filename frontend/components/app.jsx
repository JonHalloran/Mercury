import React from 'react'
import {Route, Switch} from 'react-router'
import LoginContainer from './session/login_container'
import SignupContainer from './session/signup_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import HeaderContainer from './header/header_container'
import Shortcuts from './shortcuts/shortcuts'
import Splash from './splash/splash'
import CreateRoute from './route/create_route'

export default () => (
    <div>
        <HeaderContainer/>
        <Switch>
            <AuthRoute exact path='/' component={Splash}/>
            <AuthRoute path='/login' component={LoginContainer}/>
            <AuthRoute path='/signup' component={SignupContainer}/>
            <ProtectedRoute path='/' component={Shortcuts}/>
        </Switch>
        <ProtectedRoute path='/create_route' component={CreateRoute}/>
    </div>
)