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

    const dummyPostsList = (
      this.props.dummyPosts.map( (dummyPost:any) => {
        return (
          <li key={dummyPost.id}>
            <a className="button dummyPostBtn" onClick={ () => this.showDummyDetails(dummyPost.id)}> {dummyPost.title} </a>
          </li>
        )
      })
    )

    const dummyPosts = (
      <div className='block'>
        <article className='message is-info'>
          <div className='message-header'>
            <p>Read Posts</p>
          </div>
          <div className='message-body'>
            <p className='menu-label'>
              Dummy Posts 
            </p>
            <ul className='menu-list'>
              {dummyPostsList}
            </ul>
          </div>
        </article>

      </div>
    )

    return dummyPosts
  }
}

const PostsList = connect(mapStateToProps, mapDispatchToProps)(connectedDummyPosts)
export default PostsList