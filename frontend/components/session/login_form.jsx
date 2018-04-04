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
        this.props.login({user: this.state}).then(() => this.props.history.push('/hello/'), () => this.props.history.push('failure'))
    }

    render() {
        return (
            <form className='login-form' onSubmit={this.submitForm}>
                <input type='text' value={this.state.email} placeholder={'Email'} onChange={this.update('email')}/>
                <input type='password' value={this.state.password} placeholder={'Password'}
                       onChange={this.update('password')}/>
                <button>Login</button>
            </form>
        )
    }
}

export default LoginForm