import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between flex-wrap items-center">
      <div className="text-2xl font-semibold text-white flex gap-2 items-center">
        <h1> Affan </h1>
        <h1 className=" rounded-full py-2 px-4 bg-[#007ced]">A.</h1>
        <h1> Khan </h1>
      </div>
      <div className="flex gap-12 text-gray-300 hover:text-white text-sm  ">
        <div className="cursor-pointer  text-gray-400 hover:text-white min-[1050px]:inline hidden">
          About me
        </div>
        <div className="cursor-pointer  text-gray-400 hover:text-white min-[1050px]:inline hidden">
          Resume
        </div>
        <div className="cursor-pointer  text-gray-400 hover:text-white min-[1050px]:inline hidden">
          Portfolio
        </div>
        <div className="cursor-pointer  text-gray-400 hover:text-white min-[1050px]:inline hidden">
          Blog
        </div>
        <div className="cursor-pointer  text-gray-400 hover:text-white min-[1050px]:inline hidden">
          Contact
        </div>
        <div className="cursor-pointer  text-gray-400 hover:text-white min-[1050px]:inline hidden">
          Extra
        </div>
        <div className="cursor-pointer  text-gray-400 hover:text-white min-[1050px]:inline hidden">
          Get it Now
        </div>
      </div>
    </div>
  );
}
