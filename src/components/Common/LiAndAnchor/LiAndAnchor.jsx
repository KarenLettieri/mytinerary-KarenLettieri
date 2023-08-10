import React from "react";
import { Link, NavLink } from "react-router-dom";

const LiAndAnchor = (props) => {
  const { value, content } = props;

  return (
    <ul>
      <Link
        className=" text-white hover:text-gray-800 bg-tertiary hover:bg-primary text-sm font-bold py-2 px-4 m-3 rounded-full"
        to={value}
      >
        {content}
      </Link>
    </ul>
  );
};

export default LiAndAnchor;
