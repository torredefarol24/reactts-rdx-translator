import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import postActions from '../../state-management/actions/post-actions'

const mapStateToProps = null

const mapDispatchToProps = (dispatch:any) => {
  let mappedProps = {
    editPost : (post:any) => dispatch(postActions.editDummyPost(post))
  }
  return mappedProps
}

export interface Props {
  location: any,
  editPost : any,
  history : any
}

interface State {
  postAuthor: string,
  postBody : string,
  postTitle : string,
  postId : any
}

class ConnectedPostById extends React.Component <Props, State> {
  constructor(props: any){
    super(props)
    this.state = {
      postBody : "",
      postAuthor : "",
      postTitle : "",
      postId : ""
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleBack = this.handleBack.bind(this)
  }

  componentDidMount(){
    this.setState({
      postId : parseInt(this.props.location.state.post.id),
      postAuthor : this.props.location.state.post.author,
      postTitle : this.props.location.state.post.title,
      postBody : this.props.location.state.post.body
    })
  }

  handleFormSubmit(event:any){
    event.preventDefault()
    let updatedPost = {
      id : this.state.postId,
      author : this.state.postAuthor,
      body : this.state.postBody,
      title : this.state.postTitle
    }
    this.props.editPost(updatedPost)
    this.props.history.push("/posts")
    return false
  }

  handleBodyChange(event:any){
    this.setState({
      postBody : event.target.value
    })
  }

  handleBack(){
    this.props.history.push("/posts")
  }


  render(){
   
    const postSection = (
      <section className="hero is-primary">
        <div className="hero-body ">
          <div className="container">
            <h1 className="title">
              {this.state.postTitle}
            </h1>
            <h2 className="subtitle">
              By: <strong>{this.state.postAuthor}</strong>
            </h2>
            <p>{this.state.postBody}</p>
          </div>
        </div>
      </section>
    )

    const postEditForm = (
      <div className='block mobile-padding'>
        <h3 className='subtitle is-3'>Edit </h3>
        <form onSubmit={this.handleFormSubmit}>
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
          <div className='column is-two-thirds'>
            {postSection}
          </div>
          <div className='column'>
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