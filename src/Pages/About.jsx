import React, { useEffect } from "react";
import logo from '../assets/download (1).png'
const About = () => {
  useEffect(() => {
    document.title = "About | GameHub";
  }, []);

  return (
    <div className=" bg-gradient-to-b from-gray-900 to-black text-white flex flex-col justify-center items-center py-5 px-4">

      <img src={logo} alt="" className="" />  
      <h1 className="text-4xl font-bold mb-4">About GameHub</h1>
      <p className="max-w-2xl text-center text-gray-300">
        GameHub is an online platform where you can explore, discover, and support indie game developers.
        We aim to connect passionate gamers with creative developers and promote the indie gaming community.
      </p>
    </div>
  );
};

export default About;
