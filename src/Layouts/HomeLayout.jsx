import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer.jsx/Footer'
import { Outlet } from 'react-router'


export default function HomeLayout() {
  return (
    <div className='bg-gray-900 text-white'>
  
      <div className='fixed top-0 left-0 w-full z-50 bg-gray-900'>
        <div className='w-11/12 mx-auto'>
          <Navbar />
        </div>
      </div>

    
      <div className='pt-20 w-11/12 mx-auto'>
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}
