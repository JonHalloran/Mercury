import React from 'react'
import {Link} from 'react-router-dom'


export default () => (
    <div className={'shortcut-links-div'}>
        <ul className={'shortcut-links'}>
            <li>
                <Link to={'/create_route/'} className={"link"}>Create Route</Link>
            </li>
            <li>
                <Link to={'/workout/'} className={"link"}>Log Workout</Link>
            </li>
            <li>
                <Link to={'/goal/'} className={"link"}>Create a Goal</Link>
            </li>
        </ul>
    </div>
)