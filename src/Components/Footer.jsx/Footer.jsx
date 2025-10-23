import React from 'react'
import logo from '../../assets/download (1).png'
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io5";


export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-gray-900 text-white p-10">
      
      <aside>
        <img
          src={logo}
          alt="Gamehub Logo"
          className="w-14 h-14"
        />
        <p className="text-lg font-semibold mt-2">GameHub - A Game Library</p>
        <p className="text-sm text-gray-400">
          Discover, play, and support your favorite indie games.  
          <br /> A hub for gamers and creators 🎮
        </p>
      </aside>

    
      <nav>
        <h6 className="footer-title text-gray-100">Quick Links</h6>
        <a href="/" className="link link-hover">Home</a>
        <a href="/games" className="link link-hover">Popular Games</a>
        <a href="/newsletter" className="link link-hover">Newsletter</a>
        <a href="/about" className="link link-hover">About Us</a>
      </nav>

      <nav>
        <h6 className="footer-title text-gray-100">Follow Us</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <IoLogoTwitter />
          </a>
          <a href="https://youtube.com/" target="_blank" rel="noreferrer">
            <IoLogoYoutube />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer">
           <FaFacebook />
          </a>
        </div>
      </nav>

      

      
    </footer>
  );
}
