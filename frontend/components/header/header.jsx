import React from 'react'
import {Link} from 'react-router'

class Header extends React.Component {

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        const buttons = this.props.loggedIn ? (
            [<button key='logout-button' onClick={this.props.logout}>Log Out</button>]
        ) : (
            [<button key='login-button' onClick={() => this.props.history.push('/login/')}>Login</button>,
                <button key='signup-button' onClick={() => this.props.history.push('/signup/')}>Signup</button>]
        );
        return (
            <div>
                {buttons.map(button => button)}
            </div>
        )
    }
}

export default Header