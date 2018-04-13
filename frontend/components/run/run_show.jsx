import React from 'react';
import {initMap, calcRoute} from "../../util/google_api_util";
import CommentFormContainer from '../comment/comment_form_container';
import CommentIndexContainer from "../comment/comment_index_container";

class RunShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      run: this.props.run,
      route: this.props.route,
      user: this.props.user
    };
  }

  componentDidMount() {
    window.initMap = initMap({draggable: false, clickable: false});
    this
      .props
      .retrieveRun(this.props.match.params.runId)
      .then(response => setTimeout(() => calcRoute(JSON.parse(response.payload.route.request)), 1000));
  }

  componentWillReceiveProps(newProps) {
    this.setState({run: newProps.run, route: newProps.route, user: newProps.user});
    if (this.props.match.params.routeId !== newProps.match.params.routeId) {
      this
        .props
        .retrieveRun(this.props.match.params.runId)
        .then(response => calcRoute(JSON.parse(response.payload.route.request)));
    }

  }
  convert(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor(seconds % 3600 / 60);
    var seconds = Math.floor(seconds % 3600 % 60);
    var time = '';
    if (hours > 0) {
      time += hours + ':';
    }
    if (minutes < 10 && hours > 0) {
      time += '0';
    }
    time += minutes + ':';
    if (seconds < 10) {
      time += '0';
    }
    time += seconds;
    return time;
  }

  render() {

    let dist = 0;
    let duration = 0;
    let name = '';
    let runner_name = '';
    let date = '';
    if (this.state.run && this.state.route) {
      dist = this.state.route.distance;
      name = this.state.run.name;
      duration = this.state.run.duration;
      runner_name = this.state.user.first_name + ' ' + this.state.user.last_name;
      date = this.state.run.date;
    }
    const time = this.convert(duration);
    const pace = this.convert(Math.round(duration / dist));

    return (
      <main className={'run-show-page'}>
        <article className={'run-show-info'}>
          <div id={'map'}>MAP!!!</div>
          <div className={'runs-show-page-info-box'}>
            <h2>{name}</h2>
            <div className={'calculated-values'}>
              <div className={'run-show-page-value-pair'}>
                <section className={'run-show-page-value-title'}>Run By</section>
                <section className={'run-show-page-value-number'}>{runner_name}</section>
              </div>
              <div className={'run-show-page-value-pair'}>
                <section className={'run-show-page-value-title'}>Run On</section>
                <section className={'run-show-page-value-number'}>{date}</section>
              </div>
              <div className={'run-show-page-value-pair'}>
                <section className={'run-show-page-value-title'}>Distance</section>
                <section className={'run-show-page-value-number'}>{dist}
                  <span className={'run-show-page-value-label'}>miles</span>
                </section>
              </div>
              <div className={'run-show-page-value-pair'}>
                <section className={'run-show-page-value-title'}>duration</section>
                <section className={'run-show-page-value-number'}>{time}</section>
              </div>
              <div className={'run-show-page-value-pair'}>
                <section className={'run-show-page-value-title'}>AVG Pace</section>
                <section className={'run-show-page-value-number'}>{pace}
                  <span className={'run-show-page-value-label'}>/mile</span>
                </section>
              </div>
            </div>
          </div>
        </article>
        <CommentIndexContainer/>
        <CommentFormContainer/>
      </main>
    );
  }
}

export default RunShow;
