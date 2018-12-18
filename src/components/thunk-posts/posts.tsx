import React from 'react'
import PostsList from './posts-list'
import PostDetails from './basicDetails'
import AddPost from './addPost'

const DummyPosts:React.FunctionComponent = () =>{
  const PostsIndex = (
    <div className='block'>
      <PostsList></PostsList>
    </div>
  )
  const PostBasicDetails = (
    <div className='block'>
      <PostDetails></PostDetails>
    </div>
  )
  const PostAddForm = (
    <div className='block'>
      <AddPost></AddPost>
    </div>
  )
  const Posts = (
    <div className='block'>
      <div className='mt24 mobile-padding'>
        <h3 className='title is-3'>Posts</h3>
        <div className='columns'>
          <div className='column'>
            {PostBasicDetails}
          </div>
        </div>
        <div className='columns'>
          <div className='column is-half'>
            {PostsIndex}
          </div>
          <div className='column is-half'>
            {PostAddForm}
          </div>
        </div>
      
      </div>
    </div>
  )
  return Posts
}
export default DummyPosts