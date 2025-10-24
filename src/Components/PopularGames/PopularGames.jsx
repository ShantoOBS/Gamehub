import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion"; 

export default function PopularGames({ firstThree, title, isShow }) {
  const sortedGames = firstThree;

  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="p-6">
      <h2 className="text-5xl font-bold my-7 text-center">🎮 {title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sortedGames.map((game) => (
          <motion.div
            key={game.id}
            className="relative group border rounded-2xl shadow-blue-500 shadow-md bg-gray-900 overflow-hidden"
            variants={cardVariants}       
            initial="hidden"              
            animate="visible"             
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.3 }}
          >
            <img
              src={game.coverPhoto}
              alt={game.title}
              className="w-full h-56 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
              <Link
                to={`/details/${game.id}`}
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-md font-semibold transition"
              >
                See Details
              </Link>
            </div>

   
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold">{game.title}</h3>
              <p className="text-sm text-gray-400">⭐ {game.ratings}</p>
              <p className="text-sm text-gray-500 mt-1">{game.category}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center items-center">
        {isShow && (
          <Link
            to="/all-game"
            className="my-4 px-10 rounded-md bg-indigo-500 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-400 transition"
          >
            See All
          </Link>
        )}
      </div>
    </div>
  );
}
