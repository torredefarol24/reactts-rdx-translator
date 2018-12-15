import React from 'react'
import {Route} from 'react-router-dom'

import Greet from '../components/greeting/Greet'


const RouteSetup:React.SFC = () => {
  return(
    <div className='block'>
      <Route exact path='/' component={Greet} />
    </div>
  )
}

export default RouteSetup