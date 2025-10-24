import React, { useEffect } from "react";
import { motion } from "framer-motion"; 
import logo from '../assets/download (1).png';

const About = () => {
  useEffect(() => {
    document.title = "About | GameHub";
  }, []);


  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white flex flex-col justify-center items-center py-5 px-4">
      
      <motion.img 
        src={logo} 
        alt="GameHub Logo" 
        className="w-40 mb-6"
        variants={fadeUp} 
        initial="hidden" 
        animate="visible"
      />

      <motion.h1 
        className="text-4xl font-bold mb-4"
        variants={fadeUp} 
        initial="hidden" 
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        About GameHub
      </motion.h1>

      <motion.p 
        className="max-w-2xl text-center text-gray-300"
        variants={fadeUp} 
        initial="hidden" 
        animate="visible"
        transition={{ delay: 0.4 }}
      >
        GameHub is an online platform where you can explore, discover, and support indie game developers.
        We aim to connect passionate gamers with creative developers and promote the indie gaming community.
      </motion.p>
    </div>
  );
};

export default About;
