import React from 'react'

export default ({comment, user}) => {
  console.log("index item", comment, user);
  const username = user.first_name + ' ' + user.last_name;
  let dateVars = comment.created_at.slice(0, 10).split('-')
  const date = dateVars[1] + "/" + dateVars[2] + "/" + dateVars[0]
  return (
    <li className={'comment-index-item'}>
      <span className={'comment-index-item-user'} >{username}</span>
      <p className= {'comment-index-item-date'} >{date}</p>
      <p className={'comment-index-item-comment'}>{comment.body}</p>
    </li>
  )
}
