import React from 'react'


class RunShow extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      run: this.props.run,
      route: this.props.route
    }
  }

  componentDidMount() {
    this.props.retrieveRun(this.props.match.params.runId)
  }

  componentWillReceiveProps(newProps){
    console.log('will rec')
    console.log("newProps", newProps)
    this.setState({
      run: newProps.run,
      route: newProps.route,
    })
  }

  render(){
    console.log(this.state);
    if (this.state.run && this.state.route){
      console.log('here');
    return (
      <div className={'run-show-page'}>
        <h2>{this.state.run.id}</h2>
      </div>
    )}
    return('')
  }
}

export default RunShow;
