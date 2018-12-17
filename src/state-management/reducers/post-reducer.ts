import postActionTypes from '../action-types/post-action-types';

const initialState = {
  posts : [],
  dummyPosts : [
    {
      id : 1,
      title : "Something Interesting",
      author : "Don Corleone",
      body : "Some Dummy Description & A long post body, consider using lorem ipsum"
    },
    {
      id:2,
      title : "Cartman Arrives",
      author : "Michael Jackson",
      body : "Insert some random content here so that the body has some words"
    },
    {
      id:3,
      title : "The Last Samurai Soundtrack",
      author : "Someone Cool",
      body : "Pretty neat soundtrack and can't seem to remember much of it"
    },
    {
      id:4,
      title : "Winter Problems",
      author : "Me",
      body : "Feet get frozen and the apetite becomes weird"
    },
    {
      id: 5,
      title : "Christman Miracles",
      author : "Charles Dickens",
      body : "Backpain will never leave you."
    }
  ],
  selectedDummyPost : {}
}

const postReducer = (state=initialState, action:any) =>{
  switch(action.type){
    case postActionTypes.LOAD_POSTS:
      return { ...state, posts : action.payload}
    
    case postActionTypes.SHOW_POST_DETAILS:
      var postId = action.payload
      var foundPost = state.posts.filter( (post:any) => post.id == postId)
      return { ...state, selectedDummyPost : foundPost[0]}

    case postActionTypes.ADD_POST:
      return { ...state, posts: [...state.posts, action.payload]}
    
    case postActionTypes.EDIT_POST:
      var postItem = action.payload
      var searchedPosts: any = state.posts.filter( (post:any) => post.id != postItem.id)

      searchedPosts.push(postItem)
      return { ...state, posts : searchedPosts}

    case postActionTypes.DELETE_POST:
      var postId = action.payload
      var otherPosts = state.posts.filter( (post:any) => post.id != postId)
      return { ...state, posts: otherPosts, selectedDummyPost : {} }

    case postActionTypes.SHOW_ERROR:
      console.error(action.payload)
      return { ...state, posts : []}

    case postActionTypes.ADD_DUMMY_POST:
      return { ...state, dummyPosts: [...state.dummyPosts, action.payload]}

    case postActionTypes.DELETE_DUMMY_POST:
      var postId = action.payload
      var remainingPosts = state.dummyPosts.filter( (post:any) => post.id != postId)
      return { ...state, dummyPosts: remainingPosts, selectedDummyPost : {} }

    case postActionTypes.SHOW_DETAILS_DUMMY_POST:
      var postId = action.payload
      var matchedPost = state.dummyPosts.filter( post => post.id == postId)
      return { ...state, selectedDummyPost : matchedPost[0]}

    case postActionTypes.EDIT_DUMMY_POST:
      var postItem = action.payload
      var filteredPosts = state.dummyPosts.filter( (post:any) => post.id != postItem.id)
      filteredPosts.push(postItem)
      return { ...state, dummyPosts : filteredPosts}

    default:
      return state
  }
}

export default postReducer

