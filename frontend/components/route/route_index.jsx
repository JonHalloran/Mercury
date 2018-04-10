import React from 'react'
import RouteIndexItem from './route_index_item'


class RouteIndex extends React.Component {

    constructor(props) {
        super(props)
    }

    calculateIndexMap() {
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let source = "https://maps.googleapis.com/maps/api/staticmap?size=640x350&maptype=roadmap"
        this.props.routes.forEach((route, ind) => {
                let parsed = JSON.parse(route.request).origin.location;
                console.log(parsed)
                source += `&markers=color:blue%7Clabel:${alphabet[ind]}%7C${parsed.lat},${parsed.lng}`
            }
        )
        source += '&key=AIzaSyAdfqHssdl3Lpo_Lul6UOOGLwnfO85bbJ0'
        return source
    }

    render() {
        if (this.props.routes.length === 0) return (null);
        let source = this.calculateIndexMap()
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        return (
            <div className={'route-index'}>
                <img src={source} className={'route-index-map'}/>
                <ul className={'route-index-list'}>
                    <li className={'route-index-items route-index-titles'}>
                        <span className={'route-index-order'}></span>
                        <span className={'route-index-route'}>Route</span>
                        <span className={'route-index-created'}>Created</span>
                        <span className={'route-index-distance'}>Distance</span>
                        <span className={'route-index-name'}>Name</span>
                        <span className={'route-index-city'}>City</span>
                        {/*<span className={'route-index-option'}>Options</span>*/}
                    </li>
                    {this.props.routes.map((route, ind) => <RouteIndexItem key={route.id} route={route}
                                                                           history={this.props.history}
                                                                           ind={alphabet[ind]}/>)}
                </ul>
            </div>
        )

    }
}

export default RouteIndex