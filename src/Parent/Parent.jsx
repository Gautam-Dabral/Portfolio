import React from 'react'
import { Header } from '../Header/Header.jsx'
import { Footer } from '../Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

const Parent = () => {
  return (
    <div className='bg-black min-h-screen flex flex-col border-4 border-red-500 overflow-hidden'>
       <Header/>
       <div className='flex h-screen'>
          <Outlet/>
       </div>
       <Footer/>
    </div>
  )
}

export default Parent