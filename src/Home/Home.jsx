import React from 'react'
import { Navigate } from 'react-router-dom'

const Home = () => {

  const toMainContent = () => {
    Navigate('/main-content');
  }
  return (
    <div className='max-w-auto bg-red-100'>
      <div>

      </div>
      <div>
        <button onClick={toMainContent}>Start</button>
      </div>
    </div>
  )
}

export default Home