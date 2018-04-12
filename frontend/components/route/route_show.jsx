import React from "react"
import {calcRoute, initMap, mapExists, removeClicks} from "../../util/google_api_util";
import RunModalConatainer from '../run/run_modal_container'

class RouteShow extends React.Component {

    constructor(props) {
      debugger
      console.log("TEST");
        super(props)

        this.state = {
          modal: false,
        }

        this.toggleModal = this.toggleModal.bind(this)
    }

    componentDidMount() {
      window.initMap = initMap({draggable: false, clickable: false});
      this.props.retrieveRoute(this.props.match.params.routeId)
          .then(response => setTimeout(() => calcRoute(JSON.parse(response.payload.route.request)), 1000));

    }

    componentWillReceiveProps(newProps) {
      console.log(newProps);
        if (this.props.match.params.routeId !== newProps.match.params.routeId) {
            this.props.retrieveRoute(newProps.match.params.routeId).then(response => calcRoute(JSON.parse(response.payload.route.request)))
        }
    }

    toggleModal () {
      this.setState({
        modal: !this.state.modal
      })

    }

    render() {
      console.log('this props', this.props);
        let route = this.props.route;
        let distance = [0, 'miles'];
        let origin = 'Neverland';
        let creator_name = "Captain Hook";
        let name = 'name';
        let description = 'description';

        if (route && this.props.creator) {
            name = route.name;
            distance = route.distance;
            description = route.description;
            origin = route.origin;
            creator_name = this.props.creator.first_name + ' ' + this.props.creator.last_name
        }
        let modal = this.state.modal ? <RunModalConatainer toggleModal={this.toggleModal} /> : ""
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
                                onClick={this.toggleModal}>Log
                            Workout
                        </button>
                    </div>
                </aside>
                {modal}
            </div>
        )
    }

}

export default RouteShow
