import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer.jsx/Footer'
import SlidingBanner from '../Components/SlidingBanner/SlidingBanner'
import PopularGames from '../Components/PopularGames/PopularGames'

export default function HomeLayout() {
  return (
    <div>

         <Navbar></Navbar>
         <SlidingBanner></SlidingBanner>
         <PopularGames></PopularGames>
         <Footer></Footer>
      
    </div>
  )
}
