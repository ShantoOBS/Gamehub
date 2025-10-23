import React from 'react'
import SlidingBanner from '../Components/SlidingBanner/SlidingBanner'
import PopularGames from '../Components/PopularGames/PopularGames'
import Newsletter from '../Components/Newseltter/Newseltter'


export default function Home() {
  return (
    <div>

         <SlidingBanner></SlidingBanner>
         <PopularGames></PopularGames>
         <Newsletter></Newsletter>
      
    </div>
  )
}
