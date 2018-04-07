import * as routeAPIUtil from '../util/running_route_util'
import {receiveSessionErrors} from "./session_actions";

export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const RECEIVE_ROUTE_ERRORS = 'RECEIVE_ROUTE_ERRORS';

export const receiveRoutes = routes => ({
    type: RECEIVE_ROUTES,
    routes
})

export const receiveRoute = route => ({
    type: RECEIVE_ROUTE,
    route
})

export const receiveRouteErrors = errors => ({
    type: RECEIVE_ROUTE_ERRORS,
    errors
})

export const createRoute = routeForm => dispatch =>
    routeAPIUtil.createRoute(routeForm).then(route => dispatch(receiveRoute(route)))

export const retreiveRoutes = () => dispatch =>
    routeAPIUtil.getRoutes().then(routes => dispatch(receiveRoutes(routes)), errors => dispatch(receiveRouteErrors(errors)))

export const retreiveRoute = routeId => dispatch =>
    routeAPIUtil.getRoute(routeId).then(route = dispatch(receiveRoute(route)), errors => dispatch(receiveRouteErrors(errors)))

