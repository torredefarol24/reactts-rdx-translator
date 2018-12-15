import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'

import rootReducer from '../reducers/root-reducer'

const middlewares = applyMiddleware(thunk, logger)

const store = createStore(rootReducer, {}, middlewares)

store.subscribe( () => {
  console.log("New State ", store.getState())
})

export default store