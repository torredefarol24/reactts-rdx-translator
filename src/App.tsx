import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import RouteSetup from './routes/route-setup'
import Navbar from './components/navbar/Navbar'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Navbar></Navbar>
          <RouteSetup></RouteSetup>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
