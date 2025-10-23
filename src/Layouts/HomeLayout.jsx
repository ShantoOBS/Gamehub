import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer.jsx/Footer'
import SlidingBanner from '../Components/SlidingBanner/SlidingBanner'
import PopularGames from '../Components/PopularGames/PopularGames'
import { Outlet } from 'react-router'

import Newsweltter from '../Components/Newseltter/Newseltter'

export default function HomeLayout() {
  return (
    <div className='bg-gray-900 text-white'>
         
         <div className='w-11/12 mx-auto'>

            <Navbar></Navbar>
            <Outlet></Outlet>
           <Footer></Footer>
            
         </div>
         
      
    </div>
  )
}
