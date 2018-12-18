import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from './state-management/store/store'
import postActions from './state-management/actions/post-actions'

class RootComponent extends React.Component{
  componentDidMount(){
    store.dispatch( postActions.getPostsFromAPI() )
  }
  render(){
    return(
      <Provider store={store}>
        <App></App>
      </Provider>
    )
  }
}

ReactDOM.render(<RootComponent />, document.getElementById('root'));

