import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";

const Details = () => {
  useEffect(() => {
    document.title = "Game Details";
  }, []);

  const data = useLoaderData();
  const { id } = useParams();
  const game = data.find((single) => single.id === id);

  return (
    <div className=" bg-gradient-to-b from-gray-900 to-black text-white flex justify-evenly items-center px-4 py-10 ">
      <div className="">
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full h-80 object-cover rounded-md"
        />

        </div>

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{game.title}</h1>
          <p className="text-gray-300 mb-6">{game.description}</p>

          {/* Game Info Section */}
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
        </div>


    
    </div>
  );
};

export default Details;
