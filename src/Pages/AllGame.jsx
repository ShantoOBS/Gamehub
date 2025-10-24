import React, { useEffect } from 'react'
import PopularGames from '../Components/PopularGames/PopularGames'
import { useLoaderData } from 'react-router';

export default function AllGame() {
    useEffect(() => {
      document.title = "All Game | GameHub";
    }, []);
  
   const firstThree=useLoaderData();

  return (
    <div>

        <PopularGames firstThree={firstThree} title={"All the Popular Games"} isShow={false}></PopularGames>
      
    </div>
  )
}
