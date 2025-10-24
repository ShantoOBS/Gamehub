import React from "react";
import { Link } from "react-router";


export default function PopularGames({firstThree,title}) {
  
  const sortedGames = firstThree;
  

  return (
    <div className="p-6">

      <h2 className="text-5xl font-bold my-7 text-center">🎮 {title}</h2>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
        sortedGames.map((game) => (
          <Link
            to={`/games/${game.id}`}
            key={game.id}
            className="border rounded-2xl shadow-blue-500 shadow-md hover:shadow-lg transition duration-300 p-4 bg-gray-900 text-white"
          >
            <img
              src={game.coverPhoto}
              alt={game.title}
              className="w-full h-48 object-cover rounded-xl"
            />
            <h3 className="text-lg font-semibold mt-3">{game.title}</h3>
            <p className="text-sm text-gray-600">⭐ {game.ratings}</p>
            <p className="text-sm text-gray-500 mt-1">{game.category}</p>
          </Link>
        ))
        
        }
      </div>

         <div className="flex justify-center items-center">
              <Link to='/all-game'
                
                className=" my-4 px-10 rounded-md bg-indigo-500 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition"
              >
                See All
              </Link>
         </div>

    </div>
  );
}
