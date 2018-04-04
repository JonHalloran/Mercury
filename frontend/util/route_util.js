import {Redirect, Route} from 'react-router';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import React from 'react';

const Auth = ({component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/dashboard/"/>
        )
    )}/>
);

const Protected = ({component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/login"/>
        )
    )}/>
);

const mapStateToProps = state => {
    return {loggedIn: Boolean(state.session.currentUser)};
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));