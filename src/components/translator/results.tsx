import React from 'react'
import {connect} from 'react-redux'
import uuid from 'uuid'
import translatorActions from '../../state-management/actions/translator-actions'

export interface Props{
  translatedInfo : any,
  waitingMessage : any,
  addBookmark : any,
  bookMarkMessage : any
}
interface State{

}
const mapStateToProps = (state:any) => {
  let mappedProps = {
    translatedInfo : state.translatorReducer.translatedTextResult,
    waitingMessage : state.translatorReducer.translationStatus,
    bookMarkMessage : state.translatorReducer.bookmarkStatus
  }
  return mappedProps
}

const mapDispatchToProps = (dispatch:any) => {
  let mappedProps = {
    addBookmark : (bookmark:any) => dispatch(translatorActions.addBookmark(bookmark))
  }
  return mappedProps
}

class ConnectedTranslationResults extends React.Component <Props, State>{
  handleBookmark(){
    let newBookmark = {
      id : uuid(),
      ...this.props.translatedInfo
    }
    this.props.addBookmark(newBookmark)
  }

  render(){
    const { translatedInfo, waitingMessage , bookMarkMessage} = this.props
    
    const waitingMessageDiv = (
      <p className='subtitle'> {waitingMessage.message} </p>
    )

    const bookMarkMessageDiv = (
      <p className='subtitle'> {bookMarkMessage.message}</p>
    )

    const Results = (
      <div className='block'>
        <h5 className='subtitle is-5'>{translatedInfo.sourceText}</h5>
        <h3 className='title is-3'>{translatedInfo.translatedText}</h3>
        <button className='button is-info' onClick={this.handleBookmark.bind(this)}>Bookmark This Translation</button>
      </div>
    )
    
    if (waitingMessage.message && !translatedInfo.sourceText){
      return waitingMessageDiv
    } else if (bookMarkMessage.message) {
      return bookMarkMessageDiv
    } else if (translatedInfo.sourceText && !bookMarkMessage.message){
      return Results
    } else {
      return ""
    }
    
  }
}

const TranslationResults = connect(mapStateToProps, mapDispatchToProps)(ConnectedTranslationResults)
export default TranslationResults