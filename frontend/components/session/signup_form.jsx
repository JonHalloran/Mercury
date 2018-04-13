import React from 'react';
import {range} from 'lodash';
import {Router} from 'react-router';
import {Link} from 'react-router-dom';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            day: 'Day',
            month: 'Month',
            year: 'Year'
        };

        this.update = this
            .update
            .bind(this);
        this.submitForm = this
            .submitForm
            .bind(this);
        this.loginDemo = this
            .loginDemo
            .bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    submitForm(e) {
        e.preventDefault();
        this
            .props
            .signup({user: this.state});
    }

    componentDidMount() {
        console.log('errors', this.props.clearErrors);
        this
            .props
            .clearErrors();
    }

    loginDemo(e) {
        e.preventDefault();
        this
            .props
            .login(this.props.login({
                user: {
                    email: 'email',
                    password: 'password'
                }
            }));
    }

    render() {
        const days = range(2, 31);
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        const years = range(1898, 2007).reverse();
        let errors = [];
        if (this.props.sess_errors.responseJSON) {
            errors = this.props.sess_errors.responseJSON;
        }
        return (
            <div className={'whole-page'}>
                <div className={'session-form-container session-form'}>
                    <Link to={'/login/'} className={'login-link-to-signup'}>
                        <span>LOG IN</span>
                    </Link>
                    <form className={'signup-form'} onSubmit={this.submitForm}>
                        <button className={'demo-user'} onClick={this.loginDemo}>DEMO USER</button>
                        <div className={'session-errors'}>
                            {errors.map((error) => <p className={'session-error'}>{error}</p>)}
                        </div>
                        <input
                            type='text'
                            value={this.state.first_name}
                            placeholder={'First Name'}
                            onChange={this.update('first_name')}/>
                        <input
                            type='text'
                            value={this.state.last_name}
                            placeholder={'Last Name'}
                            onChange={this.update('last_name')}/>
                        <input
                            type='text'
                            value={this.state.email}
                            placeholder={'Email'}
                            onChange={this.update('email')}/>
                        <div>

                            <select value={this.state.day} onChange={this.update('day')}>
                                <option disabled={true}>Day</option>
                                <option>{range(31)[1]}</option>
                                {days.map(day => (
                                    <option key={day}>{day}</option>
                                ))}
                            </select>

                            <select value={this.state.month} onChange={this.update('month')}>
                                <option disabled={true}>Month</option>
                                {months.map(month => (
                                    <option key={month}>{month}</option>
                                ))}
                            </select>
                            <select value={this.state.year} onChange={this.update('year')}>
                                <option disabled={true}>Year</option>
                                {years.map(year => (
                                    <option key={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                        <input
                            type='password'
                            value={this.state.password}
                            placeholder={'Password'}
                            onChange={this.update('password')}/>
                        <button>Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;
