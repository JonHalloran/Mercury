import React from 'react'
import RouteIndexItem from './route_index_item'


class RouteIndex extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={'route-index'}>
                <ul className={'route-index-lise'}>
                    <li className={'route-index-items route-index-titles'}>
                        <span className={'route-index-route'}></span>
                        <span className={'route-index-created'}></span>
                        <span className={'route-index-distance'}></span>
                        <span className={'route-index-name'}></span>
                        <span className={'route-index-city'}></span>
                        <span className={'route-index-option'}></span>
                    </li>
                    {this.props.routes.map(route => <RouteIndexItem key={route.id} route={route}/>)}
                </ul>
            </div>
        )

    }
}

export default RouteIndex