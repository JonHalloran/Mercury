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
            </ul>
        );
        return (
            <nav className={'main-nav'}>
                <p>logo goes here</p>
                {buttons}
            </nav>
        )
    }
}

export default Header