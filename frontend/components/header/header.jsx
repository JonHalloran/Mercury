import React from 'react'
import {Link} from 'react-router-dom'

class Header extends React.Component {


    render() {
        const buttons = this.props.loggedIn ? (
            <button key='logout-button' className='logout-button' onClick={this.props.logout}>Log Out</button>
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
                    <button key='demo-user' className='demo-user'
                            onClick={() => this.props.login({user: {email: 'email', password: 'password'}})}>Demo User
                    </button>
                </li>
            </ul>
        );

        let session_routes = ['/login/', '/signup/']
        return (
            <nav className={'main-nav'}>
                <p>logo</p>
                {buttons}
            </nav>
        )
    }
}

export default Header