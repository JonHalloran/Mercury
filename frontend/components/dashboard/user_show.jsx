import React from 'react'
import {convertTime} from "../../util/general_util"

class UserShow extends React.Component {
  constructor(props) {
    super(props)
    this.totalAmounts = this.totalAmounts.bind(this)
  }


  componentDidMount() {
    this.props.retrieveRuns();
  }

  totalAmounts() {
    let distance = 0;
    let duration = 0;
    for (var i = 0; i < this.props.runs.length; i++) {
      let run = this.props.runs[i]
      duration += run.duration
      let route = this.props.routes[run.route_id]
      if (route) {
        distance += route.distance;
      }
    }
    return [distance, duration];
  }

  render () {
    let runs = this.props.runs;
    if (!runs) return (<div />);
    let user = this.props.user;
    if (!user) return (<div />);
    let routes = this.props.routes;
    if (!routes || routes.length === 0) return (<div />);
    let name = user.first_name + " " + user.last_name;
    let sumAmount = this.totalAmounts()
    let sumDistance = Math.round(sumAmount[0], 1)
    let time = convertTime(sumAmount[1])
    return (
      <aside className={'user-info-sidebar'}>
        <div className={'user-prof-info'} >
          <img  className={'user-prof-user-img'}
                src={`${user.photo_url}`} />
          <h3 className={'user-info-name'}>{name}</h3>
        </div>
        <div className={'total-distance user-info-total'} >
          <span className={'user-info-title'}>total distance</span>
          <span className={'user-info-amount'}>{sumDistance} mi</span>
        </div>
        <div className={'total-time user-info-total'} >
          <span className={'user-info-title'}>total time</span>
          <span className={'user-info-amount'}>{time}</span>
        </div>
        <div className={'total-workouts user-info-total'} >
          <span className={'user-info-title'}>total workouts</span>
          <span className={'user-info-amount'}>{runs.length}</span>
        </div>
      </aside>
    )
  }
}

export default UserShow
