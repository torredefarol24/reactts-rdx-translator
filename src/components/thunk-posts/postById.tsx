import React from 'react'
import {connect} from 'react-redux'
import postActions from '../../state-management/actions/post-actions'

const mapStateToProps = null
const mapDispatchToProps = (dispatch:any) => {
  let mappedProps = {
    editPost : (post:any) => dispatch(postActions.editPost(post))
  }
  return mappedProps
}

export interface Props {
  location: any,
  editPost : any,
  history : any
}

interface State {
  postBody : string,
  postTitle : string,
  postId : any
}

class ConnectedPostById extends React.Component <Props, State> {
  constructor(props: any){
    super(props)
    this.state = {
      postBody : "",
      postTitle : "",
      postId : ""
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleBack = this.handleBack.bind(this)
  }

  componentDidMount(){
    this.setState({
      postId : parseInt(this.props.location.state.post.id),
      postTitle : this.props.location.state.post.title,
      postBody : this.props.location.state.post.body
    })
  }

  handleFormSubmit(event:any){
    event.preventDefault()
    let updatedPost = {
      id : this.state.postId,
      body : this.state.postBody,
      title : this.state.postTitle,
      userId : 14
    }
    this.props.editPost(updatedPost)
    this.props.history.push("/posts/thunk")
    return false
  }

  handleTitleChange(event:any){
    this.setState({
      postTitle : event.target.value
    })
  }

  handleBodyChange(event:any){
    this.setState({
      postBody : event.target.value
    })
  }

  handleBack(){
    this.props.history.push("/posts/thunk")
  }

  render(){
   
    const postSection = (
      <section className="hero is-primary">
        <div className="hero-body ">
          <div className="container">
            <h1 className="title">
              {this.state.postTitle}
            </h1>
            <p>{this.state.postBody}</p>
          </div>
        </div>
      </section>
    )

    const postEditForm = (
      <div className='block mobile-padding'>
        <h3 className='subtitle is-3'>Edit Post</h3>
        <form onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input className="input" type="text" placeholder="Post Title" value={this.state.postTitle} onChange={this.handleTitleChange} id="post_body" name="dummyPostTitle"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Body</label>
            <div className="control">
              <input className="input" type="text" placeholder="Your Message" value={this.state.postBody} onChange={this.handleBodyChange} id="post_body" name="dummyPostBody"/>
            </div>
          </div>
          <button type='submit' className='button is-success is-pulled-left'>Submit</button>
          <button className='button is-primary is-pulled-right' onClick={ this.handleBack }>Back</button>
        </form>
      </div>
    )

    const postById = (
      <div className='block'>
        <div className='columns'>
          <div className='column'>
            {postSection}
          </div>
        </div>
        <div className='columns'>
          <div className='column is-half'>
            {postEditForm}
          </div>
        </div>
      </div>
    )

    return postById
  }
}

const DummyPostById = connect(mapStateToProps, mapDispatchToProps)(ConnectedPostById)
export default DummyPostById