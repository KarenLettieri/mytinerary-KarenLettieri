import React from "react";

const Search = () => {
  return (
    <div className="flex justify-center  h-screen">
      <input
        type="text"
        className="w-1/2 h-12 text-lg px-5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
