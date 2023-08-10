import React from "react";
import NavLinks from "../Common/NavLinks.jsx/NavLinks";

const links = [
  { value: "/", content: "Home", id: "1", active: true },
  { value: "/cities", content: "Cities", id: "2", active: false },
  { value: "/contact", content: "Contact", id: "3", active: false },
];

const Navbar = () => {
  return <NavLinks links={links} />;
};

export default Navbar;
