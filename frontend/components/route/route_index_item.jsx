import React from 'react'

export default ({route, history}) => (
    <li className={'route-index-items'} onClick={() => history.push(`/routes/${route.id}`)}>
        <span className={'route-index-route'}>
            <img
                src={`https://maps.googleapis.com/maps/api/staticmap?size=75x75&path=enc%3A${route.img_url}&key=AIzaSyAdfqHssdl3Lpo_Lul6UOOGLwnfO85bbJ0`}/>
        </span>
        <span className={'route-index-created'}>{route.created_at.slice(0, 10).split('-').reverse().join('/')}</span>
        <span className={'route-index-distance'}>{route.distance} mi</span>
        <span className={'route-index-name'}>{route.name}</span>
        <span className={'route-index-city'}>{route.origin}</span>
        {/*<span className={'route-index-option'}>OPTIONS</span>*/}
    </li>
)