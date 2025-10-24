import React from 'react'
import PopularGames from '../Components/PopularGames/PopularGames'
import { useLoaderData } from 'react-router';

export default function AllGame() {
   const firstThree=useLoaderData();

  return (
    <div>

        <PopularGames firstThree={firstThree} title={"All the Popular Games"}></PopularGames>
      
    </div>
  )
}
