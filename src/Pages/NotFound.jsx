import React from "react";
import { Link } from "react-router";
import ghost from "../assets/404.jpeg";

export default function NotFound() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-center gap-5">

      <img src={ghost} alt="Ghost" className="w-60 h-60 mb-6" />

     <div>
       <h1 className="text-6xl font-bold text-white">404</h1>
      <p className="text-gray-300 text-lg mt-2">Settings not found</p>

      <Link
        to="/"
        className="mt-4 text-orange-400 hover:text-orange-500 underline text-lg font-semibold transition-all duration-200"
      >
        Home
      </Link>
     </div>
    </div>
  );
}
