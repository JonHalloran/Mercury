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

    componentDidMount() {
      this.props.clearErrors()
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    submitForm(e) {
        e.preventDefault()
        this.props.login({user: this.state}).then(() => this.props.history.push('/dashboard/'), () => console.log(this.props))
    }

    render() {

        let errors = []
        if (this.props.sess_errors.responseJSON) {
            errors = this.props.sess_errors.responseJSON
        }
        return (
            <div className={'whole-page'}>
                <div className={'login-form-conatainer session-form'}>
                    <Link to={'/signup/'} className={'login-link-to-signup'}><span>SIGN UP</span></Link>
                    <button className={'demo-user'}
                            onClick={() => this.props.login({user: {email: 'email', password: 'password'}})}>DEMO
                        USER
                    </button>
                    <div className={'session-errors'}>
                        {errors.map((error) => <p className={'session-error'}>{error}</p>)}
                    </div>
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
