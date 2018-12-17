import translatorApiCalls from '../api-calls/translator-api-calls'
import translatorActionTypes from '../action-types/translator-action-types'


const translateText = (textInfo: any) : any => {
  return (dispatch:any) => {
    return translatorApiCalls.sendTextForTranslation(textInfo)
      .then( data => dispatch(sendTranslatedText(data)) )
      .catch( err => dispatch(sendError(err)) )
  }
}

const sendTranslatedText = (translatedText:any) => {
  return {
    type : translatorActionTypes.RECEIVE_TRANSLATED_TEXT,
    payload : translatedText
  }
}

const sendError = (error:any) => {
  return {
    type : translatorActionTypes.SHOW_ERROR,
    payload : error
  }
}

const translationStarted = () => {
  return {
    type : translatorActionTypes.BEGIN_TRANSLATION,
    payload : "Please Wait for the translation to complete"
  }
}

const createBookmark = (bookmark:any) => {
  return {
    type : translatorActionTypes.ADD_BOOKMARK,
    payload : bookmark
  }
}

const removeBookmark = (bookmark:any) => {
  return {
    type : translatorActionTypes.DELETE_BOOKMARK,
    payload : bookmark
  }
}

const translatorActions = {
  translateText : translateText,
  translationHasBegun : translationStarted,
  addBookmark : createBookmark,
  deleteBookmark : removeBookmark
}

export default translatorActions