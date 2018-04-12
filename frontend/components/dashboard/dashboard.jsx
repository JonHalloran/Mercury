import React from 'react'
import UserShowContainer from './user_show_container'
import ActivityFeedContainer from './activity_feed_container'

export default () => (
  <main className={'dashboard'} >
    <ActivityFeedContainer />
    <UserShowContainer />
  </main>
)
