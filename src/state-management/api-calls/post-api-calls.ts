const retrievePosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then( res => { return res.json() }) 
}

const editPost = (post:any) => {
  let endpointURL = "https://jsonplaceholder.typicode.com/post/" + post.id
  let requestBody = {
    id : post.id,
    title : post.title,
    body : post.body,
    userId : post.userId
  }
  let headerOptions = {
    "Content-Type" : "application/json"
  }

  let requestOptions = {
    method : "PUT",  
    body : JSON.stringify(requestBody),
    headers : headerOptions
  }

  return fetch(endpointURL, requestOptions).then( res => { return res.json() })
}


const deletePost = (postId:any) => {
  let endpointURL = "https://jsonplaceholder.typicode.com/post/" + postId
  let headerOptions = {
    "Content-Type" : "application/json"
  }
  let requestOptions = {
    method : "DELETE",  
    headers : headerOptions
  }
  return fetch(endpointURL, requestOptions).then( res => { return res.json() })
}

const createNewPost = (post:any) => {
  let endpointURL = "https://jsonplaceholder.typicode.com/posts"
  let requestBody = {
    title : post.title,
    body : post.body,
    userId : post.userId
  }
  let headerOptions = {
    "Content-Type" : "application/json"
  }

  let requestOptions = {
    method : "POST",  
    body : JSON.stringify(requestBody),
    headers : headerOptions
  }

  return fetch(endpointURL, requestOptions).then( data => { 
    return data.json()}
  )
}

const PostApiCalls = {
  retrieveAllPosts : retrievePosts,
  editPostById : editPost,
  deletePostById : deletePost,
  createPost : createNewPost
}

export default PostApiCalls