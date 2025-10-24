import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlidingBanner() {
  const slides = [
    {
      title: "Welcome to GameHub 🎮",
      content: "Discover amazing indie games from creative developers.",
      image:
        "https://img.freepik.com/premium-photo/retro-lines-grid-space-abstract-background-elegant-luxury-80s-90s-style-3d-illustration_510351-3019.jpg",
    },
    {
      title: "Play Anytime, Anywhere 🕹️",
      content: "Your favorite games are just one click away!",
      image:
        "https://thumbs.dreamstime.com/b/digital-gaming-hub-cyber-world-futuristic-playstation-ui-virtual-entertainment-network-sci-fi-game-interface-ai-generated-362042638.jpg",
    },
    {
      title: "Support Indie Developers ❤️",
      content: "Help new creators grow by exploring their creations.",
      image:
        "https://t3.ftcdn.net/jpg/08/61/51/02/360_F_861510294_6Je3kKMSC7wNfW0JIZf0OyYQcGCzB8y9.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="w-full mx-auto max-w-6xl">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-96 object-cover rounded-xl"
            />

            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white rounded-xl">
             
              <motion.h2
                className="text-5xl font-bold mb-3 drop-shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {slide.title}
              </motion.h2>

            
              <motion.p
                className="text-lg max-w-2xl text-center drop-shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {slide.content}
              </motion.p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
