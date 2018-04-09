import React from 'react'
import RouteIndexItem from './route_index_item'


class RouteIndex extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        if (this.props.routes.length === 0) return (null)
        return (
            <div className={'route-index'}>
                <ul className={'route-index-list'}>
                    <li className={'route-index-items route-index-titles'}>
                        <span className={'route-index-route'}>Route</span>
                        <span className={'route-index-created'}>Created</span>
                        <span className={'route-index-distance'}>Distance</span>
                        <span className={'route-index-name'}>Name</span>
                        <span className={'route-index-city'}>City</span>
                        {/*<span className={'route-index-option'}>Options</span>*/}
                    </li>
                    {this.props.routes.map(route => <RouteIndexItem key={route.id} route={route}
                                                                    history={this.props.history}/>)}
                </ul>
            </div>
        )

    }
}

export default RouteIndex