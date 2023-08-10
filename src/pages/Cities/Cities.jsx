import React from "react";
import Search from "../../components/Common/Search/Search";

const Cities = () => {
  return (
    <div>
      <h2 className="my-14 text-3xl font-bold text-center text-gray-900 md:text-4xl lg:text-5xl">
        Search some {""}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          amazing cities
        </span>
      </h2>
      <Search />
    </div>
  );
};

export default Cities;
