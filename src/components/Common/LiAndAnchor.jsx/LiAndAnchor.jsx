import React from "react";
import { Link, NavLink } from "react-router-dom";

const LiAndAnchor = (props) => {
  const { value, content, active } = props;

  return (
    <li>
      <Link
        className=" text-white hover:text-gray-800 bg-tertiary hover:bg-primary text-sm font-bold py-2 px-4 m-3 rounded-full"
        style={active ? { backgroundColor: "#95B8D1" } : {}}
        to={value}
      >
        {content}
      </Link>
    </li>
  );
};

export default LiAndAnchor;
