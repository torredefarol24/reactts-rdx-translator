import React from 'react'
import {connect} from 'react-redux'
import postActions from '../../state-management/actions/post-actions'
import uuid from 'uuid'

const mapStateToProps = null
const mapDispatchToProps = (dispatch:any) => {
  let mappedProps = {
    addDummyPost : (post:any) => dispatch(postActions.addDummyPost(post))
  }
  return mappedProps
}

interface Props{
  addDummyPost : any
}

interface State{
  dummyPostAuthor : string,
  dummyPostBody : string,
  dummyPostTitle : string
}

class AddConnectedDummyPost extends React.Component<Props, State>{
  constructor(props:any){
    super(props)
    this.state = {
      dummyPostTitle : "",
      dummyPostAuthor : "",
      dummyPostBody : ""
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
  }

  handleFormSubmit(event:any){
    event.preventDefault()
    let newPost = {
      id : uuid(),
      author: this.state.dummyPostAuthor,
      body : this.state.dummyPostBody,
      title : this.state.dummyPostTitle
    }
    console.log(newPost, 'BEFORE ACTION')
    this.props.addDummyPost(newPost);
    this.setState({
      dummyPostAuthor : "",
      dummyPostBody : "",
      dummyPostTitle : ""
    })
    return false
  }

  handleAuthorChange(event :any){
    this.setState({
      dummyPostAuthor : event.target.value
    })
  }

  handleBodyChange(event: any){
    this.setState({
      dummyPostBody : event.target.value
    })
  }

  handleTitleChange(event : any){
    this.setState({
      dummyPostTitle : event.target.value
    })
  }

  render(){

    const DummyPostForm = (
      <form onSubmit={this.handleFormSubmit}>
        <div className="field">
          <label className="label" htmlFor="post_author">Author</label>
          <div className="control">
            <input className="input" type="text" placeholder="Your Name" value={this.state.dummyPostAuthor} onChange={this.handleAuthorChange} id="post_author" name="dummyPostAuthor" />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="post_title">Title</label>
          <div className="control">
            <input className="input" type="texpost_titlet" placeholder="Your Post Heading" value={this.state.dummyPostTitle} onChange={this.handleTitleChange} id="post_title" name="dummyPostTitle"/>
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="post_body">Body</label>
          <div className="control">
            <input className="input" type="text" placeholder="Your Message" value={this.state.dummyPostBody} onChange={this.handleBodyChange} id="post_body" name="dummyPostBody"/>
          </div>
        </div>
        <button type='submit' className='button is-success'>Submit</button>
      </form>
    )

    const AddForm = (
      <div className='block'>
        <article className='message is-warning'>
          <div className='message-header'>
            <p>Add Post</p>
          </div>
          <div className='message-body'>
            {DummyPostForm}
          </div>
        </article>
      </div>
    )

    return AddForm
  }
}

const AddDummyPost = connect(mapStateToProps, mapDispatchToProps)(AddConnectedDummyPost)
export default AddDummyPost