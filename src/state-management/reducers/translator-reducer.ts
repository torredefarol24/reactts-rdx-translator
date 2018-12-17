import langList from './lang-list/lang-list'
import translatorActionTypes from '../action-types/translator-action-types'

const initialState = {
  langs : langList,
  translatedTextResult : {},
  translationStatus : {},
  bookmarks : [],
  bookmarkStatus : {}
}

const TranslatorReducer = (state=initialState, action:any) => {
  switch (action.type) {
    case translatorActionTypes.BEGIN_TRANSLATION:
      let particularState = { 
        ...state, 
        translatedTextResult : {}, 
        translationStatus : { message : action.payload }
      }
      return particularState

    case translatorActionTypes.RECEIVE_TRANSLATED_TEXT:
      return { ...state, translatedTextResult : action.payload}
    
    case translatorActionTypes.ADD_BOOKMARK:
      let bookmark_AddState = {
        ... state, 
        bookmarkStatus : { message : "Bookmark Added"},
        bookmarks : [...state.bookmarks, action.payload]
      }
      return bookmark_AddState
    
      case translatorActionTypes.DELETE_BOOKMARK:
      var bookmarkItem = action.payload
      var otherBookmarks = state.bookmarks.filter( (bookmark:any) => bookmark.id != bookmarkItem.id)
      return {...state, bookmarks : otherBookmarks}

    case translatorActionTypes.SHOW_ERROR:
      console.error(action.payload)
      return { ...state}

    default:
      return state
  }
}

export default TranslatorReducer