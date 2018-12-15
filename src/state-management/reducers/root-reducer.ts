import postReducer from './post-reducer'
import {combineReducers} from 'redux'

const allReducers:any = {
  postReducer : postReducer
}

const rootReducer:any = combineReducers(allReducers)
export default rootReducer