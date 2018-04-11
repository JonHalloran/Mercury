import React from 'react'

export default ({comment}) => {
  console.log(comment);
  return (
    <li className={'comment-index-item'}>{comment.body}</li>
  )
}
