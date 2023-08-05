import React from "react";

const Hero = () => {
  return (
    <div
      className="py-16 px-4 md:px-8 text-white"
      style={{
        backgroundImage: `url("/images/hero2.jpg")`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">MyTinerary</h1>
        <p className="text-lg mb-8">
          Find your perfect trip, designed by insiders who know and love their
          cities!
        </p>
        <button className="bg-white text-secondary font-bold px-6 py-3 rounded-full hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
