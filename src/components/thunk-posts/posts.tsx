import React from 'react'
import PostsList from './posts-list'
import PostDetails from './basicDetails'
import AddPost from './addPost'

const DummyPosts:React.FunctionComponent = () =>{
  const PostsIndex = (
    <div className='column is-half'>
      <h5 className='title is-5'>Read Posts (Thunk)</h5>
      <PostsList></PostsList>
    </div>
  )
  const PostBasicDetails = (
    <div className='block'>
    <h5 className='title is-5'>Basic Details</h5>
    <PostDetails></PostDetails>
  </div>
  )
  const PostAddForm = (
    <div className='block'>
      <h5 className='title is-5'>Add Post (Thunk)</h5>
      <AddPost></AddPost>
    </div>
  )
  const Posts = (
    <div className='block'>
      <h3 className='title is-3'>Posts</h3>
      <div className='columns'>
        {PostsIndex}
        <div className='column is-half'>
          {PostBasicDetails}
          {PostAddForm}
        </div>
      </div>
    </div>
  )
  return Posts
}
export default DummyPosts