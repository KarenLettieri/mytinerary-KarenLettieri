import React from "react";

const Footer = () => {
  return (
    <footer className="app-footer bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 text-center">
            <nav className="flex gap-10">
              <a href="#">Home</a>
              <a href="#">Cities</a>
              <a href="#">Contact</a>
            </nav>
          </div>

          <div className="w-full md:w-1/3 text-center md:text-right">
            <h2 className="text-2xl font-bold mb-4">Karen Ailen Lettieri</h2>
            <a
              href="https://www.linkedin.com/in/karen-ailen-lettieri/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
