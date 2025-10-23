import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlidingBanner() {
  const slides = [
    {
      title: "Welcome to GameHub 🎮",
      content: "Discover amazing indie games from creative developers.",
      image: "https://img.freepik.com/premium-photo/retro-lines-grid-space-abstract-background-elegant-luxury-80s-90s-style-3d-illustration_510351-3019.jpg",
    },
    {
      title: "Play Anytime, Anywhere 🕹️",
      content: "Your favorite games are just one click away!",
      image: "https://thumbs.dreamstime.com/b/digital-gaming-hub-cyber-world-futuristic-playstation-ui-virtual-entertainment-network-sci-fi-game-interface-ai-generated-362042638.jpg",
    },
    {
      title: "Support Indie Developers ❤️",
      content: "Help new creators grow by exploring their creations.",
      image: "https://t3.ftcdn.net/jpg/08/61/51/02/360_F_861510294_6Je3kKMSC7wNfW0JIZf0OyYQcGCzB8y9.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
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
              <h2 className="text-5xl font-bold mb-3 drop-shadow-lg ">
                {slide.title}
              </h2>
              <p className="text-lg max-w-2xl text-center drop-shadow-md">
                {slide.content}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
