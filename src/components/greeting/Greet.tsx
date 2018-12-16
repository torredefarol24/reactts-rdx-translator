import React from 'react'

const Greet:React.FunctionComponent = () => {
  const message = (
    <div className='block'>
      <h3 className='title is-3'>Hey React & TypeScript 
        <i className='fas fa-igloo'></i>
      </h3>
    </div>
  )
  return message
}

export default Greet