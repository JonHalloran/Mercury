import React from 'react'

class ActivityFeedRun extends React.Component {

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

  render() {
    let run = this.props.run;
    if (!run) return (<div />);
    let user = this.props.user;
    if (!user) return (<div />);
    let route = this.props.route;
    if (!route) return (<div />);
    let name = user.first_name + " " + user.last_name;
    let pace_seconds = Math.floor(run.duration / route.distance);
    let pace = this.convert(pace_seconds)
    return (
      <li className={'activity-feed-item'}
          onClick={() => this.props.history.push(`/runs/${run.id}`)}>
        <img  className={'activity-feed-user-img'}
              src={`${user.photo_url}`} />
        <div className={'activity-feed-box'} >
          <section className={'activity-feed-run-top'}>{`${name} ran ${route.distance} miles`}
          </section>
          <article className= {'activity-feed-run-middle'}>

            <div className={'activity-feed-distance-box'}>
              <div className={'activity-feed-distance-logo-and-title'}>
                <img className={'activity-feed-distance-logo'}
                     src={'https://res.cloudinary.com/dtw7iteso/image/upload/v1523578155/distance.png'}/>
                <p className={'activity-feed-distance-title'}>distance</p>
              </div>
              <div className={'activity-feed-distance-amount-with-label'}>
                <span className={'actiity-feed-distance-amount'}>{route.distance}</span>
                <span className={'actiity-feed-distance-units'}>mi</span>
              </div>
            </div>


            <div className='activity-feed-pace-box' >
              <div className={'activity-feed-pace-logo-and-title'}>
                <img className={'activity-feed-pace-logo'}
                     src={'https://res.cloudinary.com/dtw7iteso/image/upload/v1523582653/pace.png'}/>
                <p className={'activity-feed-pace-title'}>avg pace</p>
              </div>
              <div className={'activity-feed-pace-amount-with-label'}>
                <span className={'actiity-feed-pace-amount'}>{pace}</span>
                <span className={'actiity-feed-pace-units'}>/mi</span>
              </div>
            </div>

            <img  className={'activity-feed-route-map'}
                  src={`https://maps.googleapis.com/maps/api/staticmap?size=185x160&path=enc%3A${route.img_url}&key=AIzaSyAdfqHssdl3Lpo_Lul6UOOGLwnfO85bbJ0`} />

          </article>
        </div>
      </li>
    )
  }
}

export default ActivityFeedRun
