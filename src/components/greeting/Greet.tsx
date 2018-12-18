import React from 'react'

const Greet:React.FunctionComponent = () => {
  const message = (
    <div className='block'>
      <div className='mobile-padding'>
        <h3 className='title is-3 mt24'> React TypeScript App </h3>
        <div className='content'>
          <ul >
            <li> Demo React, Redux (Thunk) app made using TypeScript</li>
            <li> Frontend JS Framework : React</li>
            <li> Libraries used: Redux, Thunk, UUID</li>
            <li> Design Framework : Bulma CSS</li>
            <li> APIs Used : Yandex Translator API, JSONTypicode (Fake Rest API)</li>
            <li> Service Workers for PWA</li>
            <li> Deployed over : Surge.sh (Thanks for the free hosting and SSL)</li> 
          </ul>
        </div>
        <p className='mt24'> Created By <span className='myName'>BurningRaven06</span></p>
      </div>
    </div>
  )
  return message
}

export default Greet