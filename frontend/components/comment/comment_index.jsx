import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {

  componentDidMount() {
    this
      .props
      .fetchComments(this.props.match.params.runId);
  }

  render() {
    if (!(this.props.comments.length && this.props.users)) 
      return (<div/>);
    return (
      <ul className={'comments-index-ul'}>
        {this
          .props
          .comments
          .map(comment => <CommentIndexItem
            comment={comment}
            user={this.props.users[comment.user_id]}
            key={comment.id}/>)}
      </ul>
    );
  }
}

export default CommentIndex;
