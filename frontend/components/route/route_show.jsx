import React from "react"

class RouteShow extends React.Component {
    componentDidMount() {
        this.props.retrieveRoute(this.props.match.params.routeId)
    }

    render() {
        let route = this.props.route
        if (!this.props.route) return null;
        return (
            <div className={'route-show'}>
                <main className={'route-show-main'}>
                    <h1 className={"route-show"}>{route.name}</h1>
                    <div className={'distance-info'}>
                        <h4 className={'distance-label'}>DISTANCE</h4>
                        <h2 className={'distance-amount'}>{this.route}</h2>
                    </div>
                </main>
                <aside className={'route-show-aside'}>

                </aside>
            </div>
        )
    }
}

export default RouteShow