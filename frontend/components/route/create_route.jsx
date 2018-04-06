import React from 'react'
import {initMap, codeAddress} from "../../util/running_route_util";


class CreateRoute extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            zipcode: '',
            showRouteDetails: false,
            rootName: ''
        }

        this.handlChangeZipcode = this.handlChangeZipcode.bind(this)
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


    render() {
        let rootDetails = this.state.showRootDetails ? '' : <form className={'root-details-form'}>
            <input className={'root-name'} defaultValue={'Name this map'}/>
            <button className={'root-name-button'}>SAVE ROUTE</button>
        </form>;

        return (
            <div className={'create-route-page'}>
                <aside className={'create-route-sidebar'}>
                    <form className={'change-center'} onSubmit={() => this.handleCenterChange()}>
                        <p className={'choose-size'}> Choose map location</p>
                        <div className={'choose-center-zip-and-button'}>
                            <input className={'zipcode'} type={'text'} defaultValue={'94101'}
                                   onChange={(e) => this.handlChangeZipcode(e)}/>
                            <button className={'change-center-button'}>Search</button>
                        </div>
                    </form>
                    <div className={'root-details-root'}>
                        {rootDetails}
                    </div>
                </aside>
                <div id={'map'}>OHHH Shite map broke</div>

            </div>
        )


    }

}

export default CreateRoute