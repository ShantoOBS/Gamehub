import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import { motion } from "framer-motion";

const Details = () => {
  useEffect(() => {
    document.title = "Game Details | GameHub";
  }, []);

  const data = useLoaderData();
  const { id } = useParams();
  const game = data.find((single) => single.id === id);


  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  const infoVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } }
  };

  return (
    <motion.div
      className="bg-gradient-to-b from-gray-900 to-black text-white flex flex-col md:flex-row justify-evenly items-center px-4 py-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
    
      <motion.div variants={imageVariants} className="mb-6 md:mb-0">
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full h-80 object-cover rounded-md"
        />
      </motion.div>

    
      <motion.div variants={infoVariants} className="p-6 max-w-lg">
        <h1 className="text-3xl font-bold mb-4">{game.title}</h1>
        <p className="text-gray-300 mb-6">{game.description}</p>

        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-400 uppercase">
              Category: <span className="text-indigo-400">{game.category}</span>
            </span>
            <span className="text-sm text-gray-400 uppercase">
              Developer:{" "}
              <span className="text-indigo-400">{game.developer || "Unknown"}</span>
            </span>
          </div>

          <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg">
            <span className="text-yellow-400 text-lg font-semibold">⭐</span>
            <span className="text-white text-base font-medium">
              {game.ratings || "N/A"}
            </span>
          </div>
        </div>

        <div className="flex justify-end">
          <a
            href={game.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Install Game
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Details;
