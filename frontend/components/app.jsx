import React from 'react';
import {Route, Switch} from 'react-router';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import HeaderContainer from './header/header_container';
import Shortcuts from './shortcuts/shortcuts';
import Splash from './splash/splash';
import CreateRouteContainer from './route/create_route_container';
import RouteShowContainer from './route/route_show_container';
import RouteSearchContainer from './route/route_search_container';
import RouteIndexContainer from './route/route_index_container';
import MyRouteContainer from './route/my_routes_container';
import RunShowContainer from './run/run_show_container';
import RunIndexContainer from './run/run_index_container';
import Dashboard from './dashboard/dashboard';

export default() => (
    <div>
        <HeaderContainer/>
        <Switch>
            <AuthRoute exact path='/' component={Splash}/>
            <AuthRoute path='/login' component={LoginContainer}/>
            <AuthRoute path='/signup' component={SignupContainer}/>
            <ProtectedRoute path='/' component={Shortcuts}/>
        </Switch>
        <ProtectedRoute path='/create_route' component={CreateRouteContainer}/>
        <Route path={'/routes/:routeId'} component={RouteShowContainer}/>
        <Route path={'/search_routes/'} component={RouteSearchContainer}/>
        <Route path={'/search_routes/'} component={RouteIndexContainer}/>
        <ProtectedRoute path={'/my_routes/'} component={MyRouteContainer}/>
        <Route path={'/runs/:runId'} component={RunShowContainer}/>
        <ProtectedRoute path={'/workouts/'} component={RunIndexContainer}/>
        <ProtectedRoute path={'/dashboard/'} component={Dashboard}/>
    </div>
);
