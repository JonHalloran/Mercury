import React from 'react'

class RunIndexItem extends React.Component {

  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  convert(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor(seconds % 3600 / 60);
    var seconds = Math.floor(seconds % 3600 % 60);
    var time = '';
    if (hours > 0) {
      time += hours + ':'
    }
    if (minutes < 10 && hours > 0){
      time += '0'
    }
    time += minutes + ':'
    if (seconds < 10){
      time += '0'
    }
    time += seconds
    return time;
  }

  handleClick() {
    this.props.history.push(`/runs/${this.props.run.id}`)
  }

  render() {
    let time = this.convert(this.props.run.duration)
    return (
    <li className={'run-index-item'} onClick={this.handleClick}>
      <img
        src={'https://res.cloudinary.com/dtw7iteso/image/upload/v1523502876/Mercury/mercuryRunJhSaveySave.png'}
        className={'run-index-item-image'}
        />
      <div className={'run-index-item-info'}>
        <span className={'run-index-item-duration'}>{time}</span>
        <span className={'run-index-item-date'}>{this.props.run.date}</span>
      </div>
    </li>
  )}
}

export default RunIndexItem
