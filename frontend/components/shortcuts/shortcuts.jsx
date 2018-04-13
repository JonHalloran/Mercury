import React from 'react';
import {Link} from 'react-router-dom';

export default() => (
    <div className={'shortcut-links-div'}>
        <ul className={'shortcut-links'}>
            <li>
                <Link to={'/create_route/'} className={"link"}>Create Route</Link>
            </li>
            <li>
                <Link to={'/search_routes/'} className={"link"}>Search Routes</Link>
            </li>
            <li>
                <Link to={'/workouts/'} className={"link"}>My Workouts</Link>
            </li>
        </ul>
    </div>
);
