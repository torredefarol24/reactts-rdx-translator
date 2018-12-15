import React from 'react'
import {connect} from 'react-redux'
import postActions from '../../state-management/actions/post-actions'

const mapStateToProps = (state:any) => {
  let mappedProps = {
    dummyPosts : state.postReducer.dummyPosts
  }
  return mappedProps
}

const mapDispatchToProps = (dispatch:any) => {
  let mappedProps = {
    displayDummyPostDetails : (postId: Number) => dispatch(postActions.showDummyPostDetails(postId)),
   
  }
  return mappedProps
}

export interface Props {
  dummyPosts: any,
  displayDummyPostDetails : any,
}

class connectedDummyPosts extends React.Component<Props>{
  showDummyDetails(id: any){
    this.props.displayDummyPostDetails(id)
  }

  render(){

    const dummyPosts = (
      this.props.dummyPosts.map( (dummyPost:any) => {
        return (
          <li key={dummyPost.id}>
            <a className="button dummyPostBtn" onClick={ () => this.showDummyDetails(dummyPost.id)}> {dummyPost.title} </a>
          </li>
        )
      })
    )

    return(
      <div className='block'>
        <p className='menu-label'>
          Dummy Posts 
        </p>
        <ul className='menu-list'>
          {dummyPosts}
        </ul>

      </div>
    )
  }
}

const PostsList = connect(mapStateToProps, mapDispatchToProps)(connectedDummyPosts)
export default PostsList