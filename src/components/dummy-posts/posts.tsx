import React from 'react'
import PostsList from './posts-list'
import DummyPostDetails from './basicDetails'
import AddPost from './addPost'

const DummyPosts:React.FunctionComponent = () =>{

  const DummyPostsIndex = (
    <div className='column'>
      <PostsList></PostsList>
    </div>
  )
  const DummyPostAdd = (
    <div className='column'>
      <AddPost></AddPost>
    </div>
  )
  const DummyPostBasicDetails = (
    <div className='column'>
      <DummyPostDetails></DummyPostDetails>
    </div>
  )

  const DummyPosts = (
    <div className='block'>
      <div className='mt24 mobile-padding'>
        <h3 className='title is-3'>Posts</h3>
        <div className='columns'>
          {DummyPostsIndex}
          {DummyPostAdd}
          {DummyPostBasicDetails}
        </div>
      </div>
    </div>
  )

  return DummyPosts
}
export default DummyPosts