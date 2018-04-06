import React from 'react'
import {initMap} from "../../util/running_route_util";


class CreateRoute extends React.Component {

    constructor(props) {
        super(props)

        this.state = {}


    }

    componentDidMount() {
        window.initMap = initMap;
        console.log(initMap);
        const script = document.createElement("script");

        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAdfqHssdl3Lpo_Lul6UOOGLwnfO85bbJ0&callback=initMap";
        script.async = true;

        document.body.appendChild(script);
    }

    render() {

        return (
            <div id={'map'}>OHHH Shite map broke</div>

        )


    }

}

export default CreateRoute