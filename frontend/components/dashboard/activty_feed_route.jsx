import React from 'react';

export default(route) => {
  debugger;
  return (
  <li className={'activity-feed-route-item'} >
    <img src={`https://maps.googleapis.com/maps/api/staticmap?size=75x75&path=enc%3A${route.img_url}&key=AIzaSyAdfqHssdl3Lpo_Lul6UOOGLwnfO85bbJ0`} />
  </li>
)
}
