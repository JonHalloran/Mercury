import React from 'react'
import {initMap, calcRoute} from "../../util/google_api_util";


class RunShow extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      run: this.props.run,
      route: this.props.route
    }
  }

  componentDidMount() {
    window.initMap = initMap({draggable: false, clickable: false});
    this.props.retrieveRun(this.props.match.params.runId)
      .then(response => setTimeout(() => calcRoute(JSON.parse(response.payload.route.request)), 1000));
  }

  componentWillReceiveProps(newProps){
    this.setState({
      run: newProps.run,
      route: newProps.route,
    })
    if (this.props.match.params.routeId !== newProps.match.params.routeId) {
        this.props.retrieveRun(this.props.match.params.runId).then(response => calcRoute(JSON.parse(response.payload.route.request)))
    }

  }

  render(){

    let dist = 1;
    let duration = 60;
    let name = ';alksfjd'
    if (this.state.run && this.state.route) {
      dist = this.state.route.distance;
      duration = this.state.run.duration;
      name = this.state.run.name
    }
    const pace = (duration/60)/dist


    console.log(this.state);
    return (
      <main className={'run-show-page'}>
        <div id={'map'}>MAP!!!</div>
        <div className={'runs-show-page-info-box'}>
          <h2>{name}</h2>
          <div className={'calculated-values'}>
            <div className={'run-show-page-value-pair'}>
              <section className={'run-show-page-value-title'} >Distance</section>
              <section className={'run-show-page-value-number'}>{dist}</section>
            </div>
            <div className={'run-show-page-value-pair'}>
              <section className={'run-show-page-value-title'} >duration</section>
              <section className={'run-show-page-value-number'}>{duration}</section>
            </div>
            <div className={'run-show-page-value-pair'}>
              <section className={'run-show-page-value-title'} >AVG Pace</section>
              <section className={'run-show-page-value-number'}>{pace}</section>
            </div>
          </div>
          </div>
      </main>
    )
  }
}

export default RunShow;
