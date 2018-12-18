import React from 'react'
import {connect} from 'react-redux'
import translatorActions from '../../state-management/actions/translator-actions'

export interface Props{
  bookmarks : any,
  deleteBookmark : any
}

interface State{

}

const mapStateToProps = (state:any) => {
  let mappedProps = {
    bookmarks : state.translatorReducer.bookmarks
  }
  return mappedProps
}

const mapDispatchToProps = (dispatch:any) => {
  let mappedProps = {
    deleteBookmark : (bookmark:any) => dispatch(translatorActions.deleteBookmark(bookmark))
  }
  return mappedProps
}

class ConnectedBookmarks extends React.Component <Props, State>{
  handleDeleteBookmark(bookmark:any) : any {
    this.props.deleteBookmark(bookmark)
  }

  bookmarkItem = (bookmark:any): any => {
    return (
      <div className='column is-three-quarters'>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                {bookmark.translatedText}
              </h1>
              <h2 className="subtitle">
                {bookmark.sourceText}
              </h2>
            </div>
          </div>
        </section>
      </div>
    )
  }

  bookmarkDelete = (bookmark:any): any => {
    return (
      <div className='column '>
        <button className="button is-danger" onClick={ () => this.handleDeleteBookmark(bookmark)}> Delete </button>
      </div>
    )
  }

  render(){
    const {bookmarks} = this.props
    
    const bookmarkItems = (
      bookmarks.map( (bookmark:any) => {
        return (
          <div className="columns">
            {this.bookmarkItem(bookmark)}
            {this.bookmarkDelete(bookmark)}
          </div>
        )
      })
    )

    const noBookmarks = (
      <p>You have not bookmarked any translations yet</p>
    )
      
    const bookmarksList = (
      <div className='block'>
        <div className='mobile-padding mt24'>
          <h3 className='title is-3'> BookMarks </h3>
          {bookmarks.length > 0 ? bookmarkItems : noBookmarks}
        </div>
      </div>
    )

    return bookmarksList
  }
}

const Bookmarks = connect(mapStateToProps, mapDispatchToProps)(ConnectedBookmarks)
export default Bookmarks