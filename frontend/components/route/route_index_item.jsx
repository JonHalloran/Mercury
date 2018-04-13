import React from 'react'

export default ({route, history, ind}) => {
  if (!route) return (<div />)

  return(
      <li className={'route-index-items'} onClick={() => history.push(`/routes/${route.id}`)}>
          <div className={'route-index-order'}>{ind}</div>
          <div className={'route-index-route'}>
              <img
                  src={`https://maps.googleapis.com/maps/api/staticmap?size=75x75&path=enc%3A${route.img_url}&key=AIzaSyAdfqHssdl3Lpo_Lul6UOOGLwnfO85bbJ0`}/>
          </div>
          <div className={'route-index-created'}>{route.created_at.slice(0, 10).split('-').reverse().join('/')}</div>
          <div className={'route-index-distance'}>{route.distance} mi</div>
          <div className={'route-index-name'}>{route.name}</div>
          <div className={'route-index-city'}>{route.origin}</div>
          {/*<span className={'route-index-option'}>OPTIONS</span>*/}
      </li>
  )
}
