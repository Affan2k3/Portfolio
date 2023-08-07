import React from "react";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { GiWatch } from "react-icons/gi";
import { FaStar } from "react-icons/fa";

export default function Funfacts() {
  return (
    <div className="my-[8rem] flex flex-col ">
      <div className="text-white w-fit pb-1 border-b-2 border-blue-600 text-2xl font-semibold ">
        Fun Facts
      </div>

      <div className="grid min-[200px]:grid-cols-1 md:grid-cols-2 min-[1200px]:grid-cols-4 gap-5  items-center justify-center my-10">
        <div className="w-full h-[184px]  border-2 rounded-xl  bg-[#333] border-[#444] flex flex-col justify-center gap-4 items-center text-white hover:-translate-y-2 transition-all duration-[600ms]">
          <BsFillHeartPulseFill className="h-[33px] w-[33px] fill-blue-600" />
          <h1 className="font-semibold text-lg">Happy Clients</h1>
          <h1 className="text-5xl text-gray-300">578</h1>
        </div>
        <div className="w-full h-[184px]  border-2 rounded-xl  bg-[#333] border-[#444] flex flex-col justify-center gap-4 items-center text-white hover:-translate-y-2 transition-all duration-[600ms] ">
          <MdOutlineAccessTimeFilled className="h-[33px] w-[33px] fill-blue-600" />
          <h1 className="font-semibold text-lg">Experience</h1>
          <h1 className="text-5xl text-gray-300">234</h1>
        </div>
        <div className="w-full h-[184px]  border-2 rounded-xl  bg-[#333] border-[#444] flex flex-col justify-center gap-4 items-center text-white hover:-translate-y-2 transition-all duration-[600ms] ">
          <GiWatch className="h-[33px] w-[43px] fill-blue-600" />
          <h1 className="font-semibold text-lg">Working Hours</h1>
          <h1 className="text-5xl text-gray-300">4,780</h1>
        </div>
        <div className="w-full h-[184px]  border-2 rounded-xl  bg-[#333] border-[#444] flex flex-col justify-center gap-4 items-center text-white hover:-translate-y-2 transition-all duration-[600ms]">
          <FaStar className="h-[33px] w-[33px] fill-blue-600" />
          <h1 className="font-semibold text-lg">Awards Won</h1>
          <h1 className="text-5xl text-gray-300">15</h1>
        </div>
      </div>
    </div>
  );
}
