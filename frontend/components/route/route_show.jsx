import React from "react"
import {calcRoute, initMap, mapExists} from "../../util/google_api_util";


class RouteShow extends React.Component {

    componentDidMount() {
        this.props.retrieveRoute(this.props.match.params.routeId).then((response) => console.log(response.route))
        if (mapExists()) {
            window.initMap()
            return undefined;
        }
        window.initMap = initMap();
        const script = document.createElement("script");
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAdfqHssdl3Lpo_Lul6UOOGLwnfO85bbJ0&callback=initMap";
        script.async = true;
        document.body.appendChild(script);
    }

    componentWillReceiveProps(newProps) {
        console.log('receiveProps');
        console.log('props change', newProps);
        console.log(JSON.parse(this.props === newProps));
        if (this.props.match.params.routeId !== newProps.match.params.routeId) {
            this.props.retrieveRoute(newProps.match.params.routeId);
        } else {
            setTimeout(calcRoute(JSON.parse(newProps.route.request)), 500);
        }
    }


    render() {
        let route = this.props.route;
        console.log("render route", this.props.route);
        let distance = [0, 'miles'];
        let origin = 'Neverland';
        let creator_name = "Captain Hook";
        let name = 'name';
        let description = 'description';

        if (route) {
            console.log("route", route);
            let response = route.response;
            name = route.name;
            let parsed = JSON.parse(response);
            distance = parsed.distance.text.split(' ');
            let origin_split = parsed.start_address.split(', ');
            description = route.description;
            origin = origin_split[1] + ', ' + origin_split[2].slice(0, 2);
            console.log('origin split', origin_split);
            creator_name = route.creator.first_name + ' ' + route.creator.last_name
            console.log(route);
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
                            <h2 className={'distance-amount'}>{distance[0]}</h2>
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

                </aside>

            </div>
        )
    }

}

export default RouteShow