import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import postActions from '../../state-management/actions/post-actions'

const mapStateToProps = (state:any) => {
  let mappedProps = {
    post : state.postReducer.selectedDummyPost
  }
  return mappedProps
}


const mapDispatchToProps = (dispatch:any) => {
  let mappedProps = {
    deletePost : (id:any) => dispatch(postActions.deleteDummyPost(id))
  }
  return mappedProps
}


export interface Props {
  post : any,
  deletePost : any
}


class ConnectedPostDetails extends React.Component <Props> {
  constructor(props:any){
    super(props)
  }

  handleDelete(postId:any){
    this.props.deletePost(postId)
  }

  render(){
    const { post } = this.props

    const selectedPost = (
      <div className='block mobile-bottom-margin'>
        <article className="message is-info">
          <div className="message-header">
            <p>{post.title}</p>
          </div>
          <div className="message-body">
            <p className='subtitle'>By: </p><p className='title'><strong>{post.author}</strong></p>
            <div className='block pad-bottom'>
              <NavLink className='button is-info is-pulled-left' to={{pathname : "/posts/details/" + post.id, state : {post : post} }} > Read More </NavLink>
              
              <button className='button is-danger is-pulled-right' onClick={ () => this.handleDelete(post.id) }>Delete</button>
            </div>
          </div>
        </article>
      </div>
    )

    const withoutPost = (
      <div className='block'>
        <p> Click on a Post to see the details.</p>
      </div>
    )

    return post.title ? selectedPost : withoutPost
  }
}

const DummyPostDetails = connect(mapStateToProps, mapDispatchToProps)(ConnectedPostDetails)
export default DummyPostDetails