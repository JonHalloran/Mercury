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
  convert(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor(seconds % 3600 / 60);
    var seconds = Math.floor(seconds % 3600 % 60);
    var time = '';
    if (hours > 0) {
      time += hours + ':'
    }
    if (minutes < 10 && hours > 0){
      time += '0'
    }
    time += minutes + ':'
    if (seconds < 10){
      time += '0'
    }
    time += seconds
    return time;
  }

  render(){

    let dist = 0;
    let duration = 0;
    let name = '';
    if (this.state.run && this.state.route) {
      dist = this.state.route.distance;
      name = this.state.run.name;
      duration = this.state.run.duration;
    }
    const time = this.convert(duration)
    const pace = this.convert(Math.round(duration/dist))


    console.log(this.state);
    return (
      <main className={'run-show-page'}>
        <div id={'map'}>MAP!!!</div>
        <div className={'runs-show-page-info-box'}>
          <h2>{name}</h2>
          <div className={'calculated-values'}>
            <div className={'run-show-page-value-pair'}>
              <section className={'run-show-page-value-title'} >Distance</section>
              <section className={'run-show-page-value-number'}>{dist}
              <span className={'run-show-page-value-label'}>miles</span>
              </section>
            </div>
            <div className={'run-show-page-value-pair'}>
              <section className={'run-show-page-value-title'} >duration</section>
              <section className={'run-show-page-value-number'}>{time}
              <span className={'run-show-page-value-label'}></span>
              </section>
            </div>
            <div className={'run-show-page-value-pair'}>
              <section className={'run-show-page-value-title'} >AVG Pace</section>
              <section className={'run-show-page-value-number'}>{pace}
              <span className={'run-show-page-value-label'}>/mile</span>
              </section>
            </div>
          </div>
          </div>
      </main>
    )
  }
}

export default RunShow;
