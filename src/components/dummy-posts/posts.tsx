import React from 'react'
import PostsList from './posts-list'
import DummyPostDetails from './basicDetails'
import AddPost from './addPost'

const DummyPosts:React.SFC = () =>{
  return(
    <div className='block'>
      <h3 className='title is-3'>Posts</h3>
      <div className='columns'>
        <div className='column'>
          <h5 className='title is-5'>Read Posts</h5>
          <PostsList></PostsList>
        </div>
        <div className='column'>
          <h5 className='title is-5'>Add Post</h5>
          <AddPost></AddPost>
        </div>
        <div className='column'>
          <h5 className='title is-5'>Basic Details</h5>
          <DummyPostDetails></DummyPostDetails>
        </div>
      </div>
    </div>
  )
}
export default DummyPosts