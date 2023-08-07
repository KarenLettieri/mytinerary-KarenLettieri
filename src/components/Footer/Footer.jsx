import React from "react";

const Footer = () => {
  return (
    <footer className="app-footer bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <nav className="flex justify-center md:justify-start gap-10">
              <a href="#" className="hover:underline">
                Home
              </a>
              <a href="#" className="hover:underline">
                Cities
              </a>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </nav>
          </div>

          <div className="w-full md:w-1/3 text-center md:text-right">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Karen Ailen Lettieri
            </h2>
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
