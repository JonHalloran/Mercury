import React from 'react';
import RunIndexItem from './run_index_item';

class RunIndex extends React.Component {

  componentDidMount() {
    this
      .props
      .retrieveRuns();
  }

  render() {
    if (!this.props.runs) 
      return (
        <div>LOADING</div>
      );
    return (
      <div className={'run-index'}>
        <h2>My workouts</h2>
        <ul className={'run-index-ul'}>
          {this
            .props
            .runs
            .map(run => <RunIndexItem key={run.id} history={this.props.history} run={run}/>)}
        </ ul>
      </div>
    );
  }
}

export default RunIndex;
