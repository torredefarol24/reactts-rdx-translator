import postReducer from './post-reducer';
import translatorReducer from './translator-reducer'
import {combineReducers} from 'redux'

const allReducers:any = {
  postReducer : postReducer,
  translatorReducer : translatorReducer
}

const rootReducer:any = combineReducers(allReducers)
export default rootReducer