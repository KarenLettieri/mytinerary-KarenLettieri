import React, { useState, Fragment } from "react";
import LiAndAnchor from "../Common/LiAndAnchor/LiAndAnchor";

const NavLinks = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="flex items-center justify-between w-full h-24 p-4">
      <div className="flex items-center">
        <img
          src="/images/logo.png"
          alt="MyTinerary Logo"
          className="h-24 w-24 mx-6"
        />
      </div>

      <button
        className="md:hidden text-white hover:text-gray-300"
        onClick={toggleMenu}
      >
        ☰
      </button>

      <div className={`md:flex space-x-4 ${isMenuOpen ? "flex" : "hidden"} `}>
        <ul className="flex ">
          {links.map((link, indice) => {
            return (
              <Fragment key={indice}>
                <LiAndAnchor value={link.value} content={link.content} />
              </Fragment>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavLinks;
