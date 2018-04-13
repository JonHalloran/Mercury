import React from 'react';
import RouteIndexContainer from './route_index_container';

class MyRoutes extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this
            .props
            .retrieveRoutes();
    }

    render() {
        return (<RouteIndexContainer/>);
    }
}

export default MyRoutes;