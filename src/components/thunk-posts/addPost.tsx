import React from 'react'
import {connect} from 'react-redux'
import postActions from '../../state-management/actions/post-actions'

const mapStateToProps = null
const mapDispatchToProps = (dispatch:any) => {
  let mappedProps = {
    addPost : (post:any) => dispatch(postActions.addPost(post))
  }
  return mappedProps
}

interface Props{
  addPost : any
}

interface State{
  postBody : string,
  postTitle : string
}

class ConnectedAddPost extends React.Component<Props, State>{
  constructor(props:any){
    super(props)
    this.state = {
      postTitle : "",
      postBody : ""
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
  }

  handleFormSubmit(event:any){
    event.preventDefault()
    let newPost = {
      body : this.state.postBody,
      title : this.state.postTitle,
      userId : 12
    }
    this.props.addPost(newPost);
    this.setState({
      postBody : "",
      postTitle : ""
    })
    return false
  }

  handleBodyChange(event: any){
    this.setState({
      postBody : event.target.value
    })
  }

  handleTitleChange(event : any){
    this.setState({
      postTitle : event.target.value
    })
  }

  render(){
    return(
      <div className='block'>
        <form onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input className="input" type="texpost_titlet" placeholder="Your Post Heading" value={this.state.postTitle} onChange={this.handleTitleChange} id="post_title" name="postTitle"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Body</label>
            <div className="control">
              <input className="input" type="text" placeholder="Your Message" value={this.state.postBody} onChange={this.handleBodyChange} id="post_body" name="postBody"/>
            </div>
          </div>
          <button type='submit' className='button is-success'>Submit</button>
        </form>
      </div>
    )
  }
}

const AddPost = connect(mapStateToProps, mapDispatchToProps)(ConnectedAddPost)
export default AddPost