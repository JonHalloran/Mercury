import React from "react"
import {calcRoute, initMap, mapExists} from "../../util/google_api_util";


class RouteShow extends React.Component {
    componentDidMount() {
        this.props.retrieveRoute(this.props.match.params.routeId)
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

    render() {
        let route = this.props.route
        if (!route) return null;
        console.log(route);
        let response = this.props.route.response;
        let parsed = JSON.parse(response);

        let response_0 = parsed.legs[0];
        let distance = response_0.distance.text;
        let origin_split = response_0.start_address.split(', ');
        let origin = origin_split[1] + ", " + origin_split[2].slice(0, 2);
        let creator_name = route.creator.first_name + " " + route.creator.last_name;
        console.log(creator_name)
        return (
            <div className={'route-show'}>
                <main className={'route-show-main'}>
                    <h1 className={"route-show"}>{route.name}</h1>
                    <div className={'route-show-not-title'}>
                        <div className={'distance-info'}>
                            <h4 className={'distance-label'}>DISTANCE</h4>
                            <h2 className={'distance-amount'}>{distance[0]}</h2>
                            <h4 className={'distance-lave'}>miles</h4>
                        </div>
                    </div>
                    <div className={'route-details'}>
                        <div className={'route-details-beginning'}>
                            <p className={'route-show-title'}>BEGINS IN: </p>
                            <p className={'route-show-information'}>{origin}</p>
                        </div>
                        <div className={'route-details-creator'}>
                            <p className={'route-show-title'}>CREATED BY: </p>
                            <p className={'route-show-information'}>{creator_name}</p>
                        </div>
                        <div className={'route-details-description'}>
                            <p className={'route-show-title'}>DESCRIPTION: </p>
                            <p className={'route-show-information'}>{route.description}</p>
                        </div>
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