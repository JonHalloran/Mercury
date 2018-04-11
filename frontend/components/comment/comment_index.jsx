import React from 'react'
import CommentIndexItem from './comment_index_item'

class CommentIndex extends React.Component {

  componentDidMount() {
    this.props.fetchComments(this.props.match.params.runId)
  }

  render() {
    console.log(this.props)
    return(
      <ul className={'comments-index'} >
        {this.props.comments.map(comment =>
        <CommentIndexItem comment={comment} key={comment.id}/>)}
      </ul>
    )
  }
}

export default CommentIndex
