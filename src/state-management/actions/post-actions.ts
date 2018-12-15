import postActionTypes from '../action-types/post-action-types'
import postApiCalls from '../api-calls/post-api-calls'
import actionTypes from '../action-types/post-action-types';


const showDetailsofDummyPost = (postId:Number) => {
  return {
    type : postActionTypes.SHOW_DETAILS_DUMMY_POST,
    payload : postId
  }
}

const showPostDetails = (postId:Number) => {
  return {
    type : postActionTypes.SHOW_POST_DETAILS,
    payload : postId
  }
}

const addDummyPost = (post:any) => {
  return {
    type : postActionTypes.ADD_DUMMY_POST,
    payload : post
  }
}

const deleteDummyPost = (postId:any) => {
  return {
    type : postActionTypes.DELETE_DUMMY_POST,
    payload : postId
  }
}

const editDummyPost = (post:any) => {
  return {
    type : postActionTypes.EDIT_DUMMY_POST,
    payload : post
  }
}

const callLoadAllPostsApi = (): any => {
  return (dispatch:any) => {
    return postApiCalls.retrieveAllPosts()
      .then( posts => {
        posts = posts.splice(0,10)
        dispatch(loadPosts(posts)) 
      })
      .catch( error => dispatch(loadError(error)) )
  }
}

const loadPosts = (posts:any) => {
  return {
    type : postActionTypes.LOAD_POSTS,
    payload : posts
  }
}

const loadError = (err:any) => {
  return {
    type : postActionTypes.SHOW_ERROR,
    payload : err
  }
}

const replaceUpdatedPost = (post:any) => {
  return {
    type : postActionTypes.EDIT_POST,
    payload : post
  }
}


const callEditPostByIdAPI = (post:any) :any => {
  return (dispatch:any) => {
    return postApiCalls.editPostById(post)
      .then(resp => dispatch(replaceUpdatedPost(post)) )
      .catch(err => dispatch(loadError(err)))
  }
}

const replaceDeletedPost = (postId:any) => {
  return {
    type : postActionTypes.DELETE_POST,
    payload : postId
  }
}

const callDeletePostByIdAPI = (postId:any):any => {
  return (dispatch:any) => {
    return postApiCalls.deletePostById(postId)
      .then( resp => dispatch(replaceDeletedPost(postId)) )
      .catch(err => dispatch(loadError(err)))
  }
}

const callCreatePostAPI = (post:any) : any => {
  return (dispatch:any) => {
    return postApiCalls.createPost(post)
      .then(data => dispatch(addNewPost(data)))
      .catch(err => dispatch(loadError(err)))
  }
}

const addNewPost = (post:any) => {
  return {
    type : postActionTypes.ADD_POST,
    payload : post
  }
}

const PostActions = {
  showDummyPostDetails : showDetailsofDummyPost,
  addDummyPost : addDummyPost,
  deleteDummyPost : deleteDummyPost,
  editDummyPost : editDummyPost,
  getPostsFromAPI : callLoadAllPostsApi,
  showPostDetails : showPostDetails,
  deletePost : callDeletePostByIdAPI,
  editPost : callEditPostByIdAPI,
  addPost : callCreatePostAPI
}

export default PostActions