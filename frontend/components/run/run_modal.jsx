import React from 'react'

class RunModal extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            hours: undefined,
            minutes: undefined,
            seconds: undefined,
            date: '',
            showModal: false
        }

        this.handleChange = this.handleChangeSeconds.bind(this)
        this.handleChangeMinSec= this.handleChangeMinSec.bind(this)
    }

    handleChange(field) {
        return ((e) => this.setState({[field]: e.target.value}))
    }

    handleChangeMinSec(field) {
        return ((e) => {
          if (e.target.value < 100){
        this.setState({[field]: e.target.value})}})
    }

    handleSubmit() {
        let run = {
            route_id: this.props.match.params.routeId,
            duration: this.state.hours * 3600 + this.state.minutes * 60 + this.state.seconds
        }
    }

    handleChangeSeconds(e) {

    }

    render() {
        return (
            <div className={'modal-overlay'}>
                <div className={'run-log-modal'}>
                    <h2>I have run this, log it: </h2>
                    <form className={'run-log-modal-form'} onSubmit={this.handleSubmit}>
                        <label><span>When did you do this Workout?</span>
                            <input type='date'
                                   onChange={this.handleChange('date')}
                                   value={this.state.date} />
                        </label>

                        <label><span>How long did it take you?</span>
                          <div className={'run-log-modal-time'}>
                            <input className={'run-log-modal-time-hours'}
                                   value={this.state.hours}
                                   type={'number'}
                                   placeholder={'hh'}
                                   onChange={this.handleChange('hours')} />
                            <p> : </p>
                            <input className={'run-log-modal-time-minutes'}
                                   value={this.state.minutes}
                                   type={'number'}
                                   placeholder={'mm'}
                                   onChange={this.handleChangeMinSec('minutes')} />
                            <p> : </p>
                            <input className={'run-log-modal-time-seconds'}
                                   value={this.state.seconds}
                                   type={'number'}
                                   placeholder={'hh'}
                                   onChange={this.handleChangeMinSec('seconds')} />
                          </div>
                          <div className={'run-modal-buttons'}>
                            <button className={'save-run-button'}>save</button>

                          </div>
                        </label>
                    </form>
                </div>
            </div>

        )
    }
}

export default RunModal
