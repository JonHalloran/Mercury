import React from 'react'
import {Link} from 'react-router-dom'

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
        this.props.login({user: this.state}).then(() => this.props.history.push('/dashboard/'), () => this.props.history.push('failure'))
    }

    render() {
        return (
            <div className={'whole-page'}>
                <div className={'login-form-conatainer session-form'}>
                    <Link to={'/signup/'} className={'login-link-to-signup'}><span>SIGN UP</span></Link>
                    <form className='login-form' onSubmit={this.submitForm}>
                        <input type='text' value={this.state.email} placeholder={'Email'}
                               onChange={this.update('email')}/>
                        <input type='password' value={this.state.password} placeholder={'Password'}
                               onChange={this.update('password')}/>
                        <button>LOG IN</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm