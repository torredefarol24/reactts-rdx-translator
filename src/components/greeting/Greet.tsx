import React from 'react'

const Greet:React.FunctionComponent = () => {
  const message = (
    <div className='block'>
      <h3 className='title is-3 mt24'> React TypeScript App
      </h3>
      <p> Demo React, Redux (Thunk) app made using TypeScript</p>
      <p> Frontend JS Framework : React</p>
      <p> Libraries used: Redux, Thunk, UUID</p>
      <p> Design Framework : Bulma CSS</p>
      <p> APIs Used : Yandex Translator API, JSONTypicode (Fake Rest API)</p>
      <p className='mt24'> Created By <span className='myName'>BurningRaven06</span></p>
    </div>
  )
  return message
}

export default Greet