import React from 'react'
import {Link} from 'react-router-dom'

class Header extends React.Component {


    render() {
        let session_routes = ['/login/', '/signup/', '/login', '/signup']
        let loggingIn = session_routes.includes(this.props.location.pathname)
        let buttons = this.props.loggedIn ? (
            <div className={'dropdown-root'}>
                <img
                    src={'https://res.cloudinary.com/dtw7iteso/image/upload/v1522964206/Mercury/Hermes_pushkin_01.jpg'}/>
                <ul className={'dropdown'}>
                    <li>
                        <div className={'link'} onClick={() => {
                            this.props.logout()
                        }}>Logout
                        </div>
                    </li>
                    <li>
                        <Link className={'link'} to={'/friends/'}>Friends</Link>
                    </li>
                </ul>
            </div>
        ) : (
            <ul className={'new-session-buttons'}>
                <li>
                    <Link to='/login/' className='login-link'>Log in</Link>
                </li>
                <li>
                    <button key='signup-button' className='signup-button'
                            onClick={() => this.props.history.push('/signup/')}>SIGN UP
                    </button>
                </li>
                <li>
                    <button key='demo-user' className='demo-user-login'
                            onClick={() => this.props.login({user: {email: 'email', password: 'password'}})}>Demo
                        User
                    </button>
                </li>
            </ul>
        );

        if (loggingIn) {
            buttons = <div></div>
        }

        return (
            <div className={'full-nav-bar'}>
                <nav className={'main-nav'}>
                    <div className={'logo'}>
                        <img className={'logo-image'}
                             src={'https://res.cloudinary.com/dtw7iteso/image/upload/v1522964575/Mercury/hermes-silver.png'}/>
                        <p className={'logo-name'}>M E R C U R Y</p>
                    </div>
                    {buttons}
                </nav>
            </div>
        )
    }
}

export default Header