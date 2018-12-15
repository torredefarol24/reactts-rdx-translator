import React from 'react'
import {Route} from 'react-router-dom'

import Greet from '../components/greeting/Greet'
import DummyPosts from '../components/dummy-posts/posts'
import DummyPostById from '../components/dummy-posts/postById'
import ThunkPosts from '../components/thunk-posts/posts'
import ThunkPostById from '../components/thunk-posts/postById'

const RouteSetup:React.SFC = () => {
  return(
    <div className='block'>
      <Route exact path='/' component={Greet} />
      <Route exact path='/posts' component={DummyPosts} />
      <Route exact path="/posts/details/:id" component={DummyPostById} />

      <Route exact path='/posts/thunk' component={ThunkPosts} />
      <Route exact path='/posts/thunk/details/:id' component={ThunkPostById} />
    </div>
  )
}

export default RouteSetup