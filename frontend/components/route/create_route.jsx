import React from 'react'
import {initMap, codeAddress, getRequest} from "../../util/google_api_util";


class CreateRoute extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            zipcode: '',
            showRouteDetails: true,
            routeName: ''
        }

        this.handlChangeZipcode = this.handlChangeZipcode.bind(this);
        this.handleToggleRouteDetails = this.handleToggleRouteDetails.bind(this);
        this.handleNewRoute = this.handleNewRoute.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
    }


    componentDidMount() {
        window.initMap = initMap();
        const script = document.createElement("script");
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAdfqHssdl3Lpo_Lul6UOOGLwnfO85bbJ0&callback=initMap";
        script.async = true;
        document.body.appendChild(script);
    }

    handleCenterChange() {
        codeAddress(this.state.zipcode)
    }

    handlChangeZipcode(e) {
        this.setState({zipcode: e.target.value})
    }

    handleToggleRouteDetails() {
        this.setState({showRouteDetails: !this.state.showRouteDetails})
    }

    handleChangeName(e) {
        this.setState({routeName: e.target.value})
    }

    handleNewRoute() {
        let request = getRequest();
        let newRoute = {
            request: JSON.stringify(request),
            name: this.state.routeName,
            description: "hello"
        };
        console.log(JSON.stringify(request));
        this.props.createRoute(newRoute);
    }


    render() {
        console.log('details', this.state.showRouteDetails)
        let rootDetails;

        rootDetails = this.state.showRouteDetails ?
            <form className={'route-details-form'} onSubmit={() => this.handleNewRoute()}>
                <input className={'route-name'} placeholder={'Name this map'} value={this.state.routeName}
                       onChange={(e) => this.handleChangeName(e)}/>
                <button className={'route-name-button'}>SAVE ROUTE</button>
            </form> : '';
        console.log('rootDetails', rootDetails)
        return (
            <div className={'create-route-page'}>
                <aside className={'create-route-sidebar'}>
                    <form className={'change-center'} onSubmit={() => this.handleCenterChange()}>
                        <p className={'choose-size'}> Choose map location</p>
                        <div className={'choose-center-zip-and-button'}>
                            <input className={'zipcode'} type={'text'} placeholder={'94101'}
                                   onChange={(e) => this.handlChangeZipcode(e)}/>
                            <button className={'change-center-button'}>Search</button>
                        </div>
                    </form>
                    <div className={'route-details-root'}><span onClick={() => this.handleToggleRouteDetails()}>Route Details</span>
                        {rootDetails}
                    </div>
                </aside>
                <div id={'map'}>OHHH Shite map broke</div>

            </div>
        )


    }

}

export default CreateRoute