import React from "react";
import { Link } from "react-router";

const games = [
  {
    id: "1",
    title: "Player Unknowns Battle Ground: PUBG",
    coverPhoto: "https://example.com/images/pubg.png",
    category: "FPS",
    downloadLink: "https://www.pubgmobile.com/en-US/home.shtml",
    description:
      "PUBG Mobile is a fast-paced battle royale game where players fight for survival, strategy, and victory on dynamic maps.",
    ratings: "4.5",
    developer: "Krafton",
  },
  {
    id: "2",
    title: "Call of Duty: Mobile",
    coverPhoto: "https://example.com/images/cod.png",
    category: "FPS",
    downloadLink: "https://www.callofduty.com/mobile",
    description:
      "COD Mobile brings console-quality gameplay to your phone with various modes and maps.",
    ratings: "4.8",
    developer: "Activision",
  },
  {
    id: "3",
    title: "Free Fire",
    coverPhoto: "https://example.com/images/freefire.png",
    category: "Battle Royale",
    downloadLink: "https://ff.garena.com/",
    description:
      "Free Fire is a popular survival shooter game available on mobile.",
    ratings: "4.4",
    developer: "Garena",
  },
];

export default function PopularGames() {
  
  const sortedGames = [...games].sort((a, b) => b.ratings - a.ratings);

  return (
    <div className="p-6">
      <h2 className="text-5xl font-bold mb-4">🎮 Popular Games</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
        sortedGames.map((game) => (
          <Link
            to={`/games/${game.id}`}
            key={game.id}
            className="border rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-4 bg-white"
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

     <button className="btn btn-primary">Primary</button>

    </div>
  );
}
