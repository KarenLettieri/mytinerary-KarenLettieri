import React from "react";
import NavLinks from "../NavLinks/NavLinks";

const links = [
  { value: "/", content: "Home", id: "1", active: true },
  { value: "/cities", content: "Cities", id: "2", active: false },
  { value: "/login", content: "Log In", id: "3", active: false },
];

const Footer = () => {
  return (
    <footer className="app-footer bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <NavLinks links={links} />
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
