import React from 'react'
import {initMap, codeAddress} from "../../util/running_route_util";


class CreateRoute extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            zipcode: ''
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

        return (
            <div className={'create-route-page'}>
                <aside className={'sidebar'}>
                    <form className={'change-center'} onSubmit={() => this.handleCenterChange()}>
                        <input className={'zipcode'} type={'text'} defaultValue={'zipcode'}
                               onChange={(e) => this.handlChangeZipcode(e)}/>
                        <button>Search</button>
                    </form>
                </aside>
                <div id={'map'}>OHHH Shite map broke</div>

            </div>
        )


    }

}

export default CreateRoute