import React, { useEffect } from 'react'
import SlidingBanner from '../Components/SlidingBanner/SlidingBanner'
import PopularGames from '../Components/PopularGames/PopularGames'
import Newsletter from '../Components/Newseltter/Newseltter'
import { useLoaderData } from 'react-router'


export default function Home() {
    useEffect(() => {
      document.title = "Home";
    }, []);
  
  const data=useLoaderData();
  const sortedGames = [...data].sort((a, b) => b.ratings - a.ratings);
  const firstThree = sortedGames.slice(0, 3);
  
  return (
    <div>

         <SlidingBanner></SlidingBanner>
        <PopularGames firstThree={firstThree} title={"Popular Games"} isShow={true}></PopularGames>
         <Newsletter></Newsletter>
      
    </div>
  )
}
