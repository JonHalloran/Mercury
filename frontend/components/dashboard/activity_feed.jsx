import React from 'react'
import ActivityFeedRunContainer from './activity_feed_run_container'
import ActivityFeedRoute from './activty_feed_route'

class ActivityFeed extends React.Component {
  constructor(props) {
    super(props)

    this.mapActivtyFeedItem = this.mapActivtyFeedItem.bind(this)
  }

  componentDidMount() {
    this.props.retrieveRuns();
    this.props.retrieveRoutes();
  }

  mapActivtyFeedItem(actFeedArr) {
    if (actFeedArr[1] === 'RUN') {
      return (<ActivityFeedRunContainer runId={actFeedArr[2].id}
                                        key={`run-${actFeedArr[2]}`}/>)
    }else {
      return (<ActivityFeedRoute route={actFeedArr[2]}
                                 user={this.props.users[actFeedArr[2].user_id]}
                                 history={this.props.history}
                                 key={`route-${actFeedArr[2].id}`}/>)
    }
  }

  render() {
    return(
      <div className={'actiity-feed'}>
        <ul className={'activity-feed-ul'}>
          {this.props.activityFeed.map(el => this.mapActivtyFeedItem(el))}
        </ul>
      </div>
    )
  }
}


export default ActivityFeed
