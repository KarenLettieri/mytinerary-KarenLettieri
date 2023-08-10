import React from "react";
import LiAndAnchor from "../LiAndAnchor/LiAndAnchor";

const UnderConstruction = () => {
  return (
    <div className="text-center">
      <h2 className="mt-14 text-3xl font-bold text-center text-gray-900 md:text-4xl lg:text-5xl">
        Oops!
      </h2>
      <h2 className="my-14 text-3xl font-bold text-center text-gray-900 md:text-4xl lg:text-5xl">
        This page is {""}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          under construction
        </span>
      </h2>
      <h3 className="my-14 text-1xl font-bold text-center text-gray-900 md:text-2xl lg:text-3xl">
        Come back soon!
      </h3>
      <LiAndAnchor value="/" content="Go back home" />
    </div>
  );
};

export default UnderConstruction;
