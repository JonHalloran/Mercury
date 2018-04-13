import React from 'react';

export default({route, user, history}) => {
  if (!route) return (<div />)
  console.log(user.photo_url)
  let name = user.first_name + " " + user.last_name;
  return (
  <li className={'activity-feed-route-item'}
      onClick={() => history.push(`/routes/${route.id}`)}>
    <img  className={'activity-feed-user-img'}
          src={`${user.photo_url}`} />
    <div className={'activity-feed-route-box'} >
      <section className={'activity-feed-route-top'}>{`${name} created the route ${route.name}`}
      </section>
      <article className= {'activity-feed-route-middle'}>
        <img  className={'activity-feed-route-map'}
              src={`https://maps.googleapis.com/maps/api/staticmap?size=250x175&path=enc%3A${route.img_url}&key=AIzaSyAdfqHssdl3Lpo_Lul6UOOGLwnfO85bbJ0`} />
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
      </article>
    </div>
  </li>
)
}
