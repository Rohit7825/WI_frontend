import React from "react";

const Navbar = () => {
  return (
    <>
      <div className=" bg--50 flex bg-purple-200 flex-col items-center justify-between">
        <div className="flex justify-between w-full">
          <h1 className="text-black font-bold p-4">Explore</h1>
          <button className="text-blue-500  p-4">filter</button>
        </div>
        <div>
          <input
            className="p-2 mb-4 rounded-full bg-white"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
