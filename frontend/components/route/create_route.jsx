import React from 'react'
import {
    initMap,
    codeAddress,
    getResponse,
    mapExists,
    removeLastWaypoint,
    removeAllWaypoint,
    staticThumbImage
} from "../../util/google_api_util";


class CreateRoute extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            location: '',
            showRouteDetails: true,
            routeName: '',
            routeErrors: []
        }

        this.handlChangeZipcode = this.handlChangeZipcode.bind(this);
        this.handleToggleRouteDetails = this.handleToggleRouteDetails.bind(this);
        this.handleNewRoute = this.handleNewRoute.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
    }


    componentDidMount() {
      console.log('did mount');
      initMap({draggable: true, clickable:true});
    }


    handleCenterChange() {
        codeAddress(this.state.location)
    }

    handlChangeZipcode(e) {
        this.setState({location: e.target.value})
    }

    handleToggleRouteDetails() {
        this.setState({showRouteDetails: !this.state.showRouteDetails})
    }

    handleChangeName(e) {
        this.setState({routeName: e.target.value})
    }

    handleNewRoute() {
      if (this.state.routeName == '') {
        console.log("HERE!!!!");
        this.setState({routeErrors: ['The route must have a name']})
        return null;
      }
      let response_object
      try {
        response_object = getResponse()
      } catch (TypeError) {
        this.setState({routeErrors: ['The route must have 2 or more points']})
        return null;
      }
      let response_0 = response_object.response.routes[0];
      let distance = response_0.legs[0].distance.text;
      let start_location = response_0.legs[0].start_address;
      let polyline = response_0.overview_polyline;
      let split_origin = start_location.split(', ');
      let origin = split_origin[1] + ", " + split_origin[2].slice(0, 2);
      let
        newRoute = {
            request: JSON.stringify(response_object.response.request),
            name: this.state.routeName,
            description: `This is a ${distance} route that starts at ${start_location}`,
            lat: response_object.waypointLat,
            log: response_object.waypointLng,
            origin: origin,
            img_url: polyline,
            distance: distance
        };

      removeAllWaypoint();
      this.props.createRoute(newRoute).then(response => this.props.history.push(`/routes/${response.payload.route.id}`), );
    }


    render() {
        let rootDetails;
        let errors;
        rootDetails = this.state.showRouteDetails ?
            <form className={'route-details-form'} onSubmit={() => this.handleNewRoute()}>
                <input className={'route-name'} placeholder={'Name this map'} value={this.state.routeName}
                       onChange={(e) => this.handleChangeName(e)}/>
                <button className={'route-name-button'}>SAVE ROUTE</button>
            </form> : '';

        errors = this.props.routeErrors ?
        <ul className={'route-errors'} >
          {this.state.routeErrors.map(error => <li key={error} >{error}</li>)}
        </ul>
        : '';
        errors = this.state.routeErrors.length > 0 ?
        <ul className={'route-errors'} >
          {this.state.routeErrors.map(error => <li key={error} >{error}</li>)}
        </ul>
        : '';

        return (
            <div className={'create-route-page'}>
                <aside className={'create-route-sidebar'}>
                    <form className={'change-center'} onSubmit={() => this.handleCenterChange()}>
                        <p className={'choose-size'}> Choose map location</p>
                        <div className={'choose-center-zip-and-button'}>
                            <input className={'location'} type={'text'} placeholder={'Zipcode or City'}
                                   onChange={(e) => this.handlChangeZipcode(e)}/>
                            <button className={'change-center-button'}>Search</button>
                        </div>
                    </form>
                    <div className={'map-interaction-buttons'}>
                        <button className={'remove-last-location'} onClick={() => removeLastWaypoint()}>&#8627; Remove Last
                        </button>
                        <button className={'clear-map'} onClick={() => removeAllWaypoint()}>&#10006; Clear</button>
                    </div>
                    <div className={'route-details-root'}><span onClick={() => this.handleToggleRouteDetails()}>Route Details</span>
                        {errors}
                        {rootDetails}
                    </div>
                </aside>
                <div id={'map'}>OHHH Shite map broke</div>

            </div>
        )


    }

}

export default CreateRoute
