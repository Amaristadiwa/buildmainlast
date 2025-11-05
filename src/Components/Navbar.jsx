// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-transparent absolute top-0 right-0 w-auto">
      {/* Left: Menu */}
      <div className="flex space-x-4 bg-gray-400/20 backdrop-blur-md rounded-full px-4 py-2">
        <a href="#home" className="text-black font-medium hover:text-blue-500">Home</a>
        <a href="#service" className="text-black font-medium hover:text-blue-500">Service</a>
        <a href="#about" className="text-black font-medium hover:text-blue-500">About Us</a>
        <a href="#projects" className="text-black font-medium hover:text-blue-500">Projects</a>
        <a href="#contact" className="text-black font-medium hover:text-blue-500">Contact Us</a>
      </div>

      {/* Right: Register + Profile */}
      <div className="flex items-center space-x-4 ml-6">
        <button className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition">
          Register
        </button>
        <img
          src="https://via.placeholder.com/40"
          alt="profile"
          className="w-10 h-10 rounded-full border border-white"
        />
      </div>
    </nav>
  );
}


