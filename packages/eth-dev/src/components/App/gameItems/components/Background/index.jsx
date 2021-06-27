import React from 'react'
import { connectController } from './controller'

const Background = ({ pathToCurrentBackground, children }) => {
  return (
    <div
      className='background-image'
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        pointerEvents: 'none',
        backgroundColor: '#221F34',
        background: `url(${pathToCurrentBackground}) no-repeat center center fixed`,
        backgroundSize: 'cover'
      }}
    >
      {children}
    </div>
  )
}

export default connectController(Background)