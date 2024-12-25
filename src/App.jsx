import React from 'react'
import BlueChat from './Components/BlueChat'
import Message from './Components/Message'
import Profile from './Components/Profile'

function App() {
  return (
    <div className='flex w-[100%]'>
      <BlueChat/>
      <Message/>
      <Profile/>
      </div>
  )
}

export default App
