import React from "react";
import NavLinks from "../NavLinks/NavLinks";

const links = [
  { value: "/", content: "Home", id: "1", active: true },
  { value: "/cities", content: "Cities", id: "2", active: false },
  { value: "/login", content: "Log In", id: "3", active: false },
];

const Navbar = () => {
  return (
    <div className=" bg-secondary">
      <NavLinks className=" bg-secondary" links={links} />;
    </div>
  );
};

export default Navbar;
