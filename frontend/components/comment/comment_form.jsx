import React from 'react';

class CommentForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      body: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      body: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createComment(this.props.match.params.runId, this.state)
      .then(this.setState({body: ''}))
  }

  render() {
    return (
      <form className={'create-comment-form'} onSubmit={this.handleSubmit} >
        <input className={'create-comment-form-body'}
               value={this.state.body}
               placeholder={'Write a comment...'}
               onChange={this.handleChange}/>
        <button className={'create-comment-form-submit'}>Post</button>
      </form>
    )
  }
}

export default CommentForm
