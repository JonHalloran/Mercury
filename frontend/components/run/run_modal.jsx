import React from "react";

class RunModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      hours: "",
      minutes: "",
      seconds: "",
      date: undefined,
      showModal: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeMinSec = this.handleChangeMinSec.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleChangeMinSec(field) {
    return e => {
      if (e.target.value <= 60 && e.target.value >= 0) {
        this.setState({ [field]: e.target.value });
      };
    }
  };

  handleSubmit() {
    let runForm = {
      route_id: this.props.match.params.routeId,
      duration:
        this.state.hours * 3600 + this.state.minutes * 60 + this.state.seconds,
      date: this.state.date
    };

    this.props
      .createRun(runForm)
      .then(response => this.props.history.push(`/runs/${response.payload.run.id}`));
  }

  handleChangeSeconds(e) {}

  render() {
    return (
      <div className={"modal-overlay"} onClick={this.props.toggleModal}>
        <div className={"run-log-modal"} onClick={e => e.stopPropagation()}>
          <p className={"run-modal-close-x"} onClick={this.props.toggleModal}>
            &#10006;
          </p>
          <h2>I have run this, log it: </h2>
          <form className={"run-log-modal-form"} onSubmit={this.handleSubmit}>
            <label>
              <span>When did you do this Workout?</span>
              <input
                type="date"
                className={"run-log-modal-date"}
                onChange={this.handleChange("date")}
                value={this.state.date}
              />
            </label>
            <label>
              <span>Name:</span>
              <input
                type="text"
                className={"run-log-modal-name"}
                onChange={this.handleChange("name")}
                placeholder={'Title'}
                value={this.state.name}
              />
            </label>
            <label>
              <span>How long did it take you?</span>
              <div className={"run-log-modal-time"}>
                <input
                  className={"run-log-modal-time-hours"}
                  value={this.state.hours}
                  type={"number"}
                  placeholder={"hh"}
                  onChange={this.handleChange("hours")}
                />
                <p> : </p>
                <input
                  className={"run-log-modal-time-minutes"}
                  value={this.state.minutes}
                  type={"number"}
                  placeholder={"mm"}
                  onChange={this.handleChangeMinSec("minutes")}
                />
                <p> : </p>
                <input
                  className={"run-log-modal-time-seconds"}
                  value={this.state.seconds}
                  type={"number"}
                  placeholder={"hh"}
                  onChange={this.handleChangeMinSec("seconds")}
                />
              </div>
              <div className={"run-modal-buttons"}>
                <button className={"save-run-button"}>save</button>
                <p className={"run-modal-buttons-or"}>or</p>
                <p
                  className={"run-modal-cancel"}
                  onClick={this.props.toggleModal}>
                  Cancel
                </p>
              </div>
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default RunModal;
