import React from 'react'
import ActivityFeedRunContainer from './activity_feed_run_container'
import ActivityFeedRouteContainer from './activity_feed_route_container'

class ActivityFeed extends React.Component {

  componentDidMount() {
    this.props.retrieveRuns();
    this.props.retrieveRoutes();
  }

  mapActivtyFeedItem(actFeedArr) {
    if (actFeedArr[1] === 'RUN') {
      return (<ActivityFeedRunContainer run={actFeedArr[2]} />)
    }else {
      return (<ActivityFeedRouteContainer route={actFeedArr[2]} />)
    }
  }

  render() {
    debugger
    return(
      <div className={'actiity-feed'}>
        <ul className={'activity-feed-ul'}
          {this.props.activityFeed.map(el => this.mapActivtyFeedItem(el))}
        </ul>
      </div>
    )
  }
}


export default ActivityFeed
