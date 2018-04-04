import React from 'react'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''

        }

        this.update = this.update.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    submitForm(e) {
        e.preventDefault()
        this.props.login({user: this.state})
    }

    render() {
        return (
            <form className='login-form' onSubmit={this.submitForm}>
                <input type='text' value={this.state.email} onChange={this.update('email')}/>
                <input type='password' value={this.state.password} onChange={this.update('password')}/>
                <button>Login</button>
            </form>
        )
    }
}

export default LoginForm