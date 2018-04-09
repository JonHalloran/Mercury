import React from "react"
import {calcRoute, initMap, mapExists} from "../../util/google_api_util";

class RouteShow extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.retrieveRoute(this.props.match.params.routeId)
            .then(response => setTimeout(() => calcRoute(JSON.parse(response.route.request)), 1000));
        if (mapExists()) {
            window.initMap();
            return undefined;
        }
        console.log('Check in route show');
        window.initMap = initMap();
        const script = document.createElement("script");
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAdfqHssdl3Lpo_Lul6UOOGLwnfO85bbJ0&callback=initMap";
        script.async = true;
        document.body.appendChild(script);

    }

    componentWillReceiveProps(newProps) {
        if (this.props.match.params.routeId !== newProps.match.params.routeId) {
            this.props.retrieveRoute(newProps.match.params.routeId).then(response => calcRoute(JSON.parse(response.route.request)))
        }
    }

    render() {
        let route = this.props.route;
        let distance = [0, 'miles'];
        let origin = 'Neverland';
        let creator_name = "Captain Hook";
        let name = 'name';
        let description = 'description';

        if (route) {
            name = route.name;
            distance = route.distance;
            description = route.description;
            origin = route.origin;
            creator_name = route.creator.first_name + ' ' + route.creator.last_name
        }
        return (
            <div className={'route-show'}>
                <main className={'route-show-main'}>
                    <div className={"route-show"}>
                        <h1>{name}</h1>
                    </div>
                    <div className={'route-show-not-title'}>
                        <div className={'distance-info'}>
                            <h4 className={'distance-label'}>DISTANCE</h4>
                            <h2 className={'distance-amount'}>{distance}</h2>
                            <h4 className={'distance-label'}>miles</h4>
                        </div>
                        <ul className={'route-details'}>
                            <li className={'route-details-beginning'}>
                                <p className={'route-show-title'}>BEGINS IN: </p>
                                <p className={'route-show-information'}>{origin}</p>
                            </li>
                            <li className={'route-details-creator'}>
                                <p className={'route-show-title'}>CREATED BY: </p>
                                <p className={'route-show-information'}>{creator_name}</p>
                            </li>
                            <li className={'route-details-description'}>
                                <p className={'route-show-title'}>DESCRIPTION: </p>
                                <p className={'route-show-information'}>{description}</p>
                            </li>
                        </ul>
                    </div>
                    <div id={'map'}>OHHH SHITE MAP IS BROKEN</div>
                </main>
                <aside className={'route-show-aside'}>
                    <div className={'route-show-aside-buttons'}>
                        <button className={'route-show-create-route-button'}
                                onClick={() => this.props.history.push('/create_route/')}> Create Route
                        </button>
                        <button className={'route-show-log-workout'}
                                onClick={() => this.props.history.push(`/routes/${route.routeId}/log_workout/`)}>Log
                            Workout
                        </button>
                    </div>
                </aside>

            </div>
        )
    }

}

export default RouteShow