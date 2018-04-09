import React from 'react'

export default ({route}) => (
    <li>
        <span className={'route-index-route'}><img
            src={`https://maps.googleapis.com/maps/api/staticmap?size=75x75&path=enc%3A${route.img_url}&key=AIzaSyAdfqHssdl3Lpo_Lul6UOOGLwnfO85bbJ0`}/>
    </span>
        <span className={'route-index-created'}></span>
        <span className={'route-index-distance'}></span>
        <span className={'route-index-name'}></span>
        <span className={'route-index-city'}></span>
        <span className={'route-index-option'}></span>
        <img
            src={`https://maps.googleapis.com/maps/api/staticmap?size=75x75&path=enc%3A${route.img_url}&key=AIzaSyAdfqHssdl3Lpo_Lul6UOOGLwnfO85bbJ0`}/>
    </li>
)