import React from 'react'
import PostsList from './posts-list'
import PostDetails from './basicDetails'
import AddPost from './addPost'

const DummyPosts:React.SFC = () =>{
  return(
    <div className='block'>
      <h3 className='title is-3'>Posts</h3>
      <div className='columns'>
        <div className='column is-half'>
          <h5 className='title is-5'>Read Posts (Thunk)</h5>
          <PostsList></PostsList>
        </div>
        <div className='column is-half'>
          <div className='block'>
            <h5 className='title is-5'>Basic Details</h5>
            <PostDetails></PostDetails>
          </div>
          <div className='block'>
            <h5 className='title is-5'>Add Post (Thunk)</h5>
            <AddPost></AddPost>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}
export default DummyPosts