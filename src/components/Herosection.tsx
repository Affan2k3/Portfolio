import React from "react";
import Image from "next/image";

export default function Herosection() {
  return (
    <div className="mt-[7rem] flex flex-col items-center md:flex-row justify-center gap-12">
      <div className="hover:scale-110 overflow-hidden transition-all duration-[3000ms] cursor-pointer">
        <Image
          className=" rounded-full border-[17px] border-[#444]"
          src="/id.jpeg"
          alt="Affan"
          width={330}
          height={500}
        />
      </div>
      <div className="md:w-[30rem] flex flex-col gap-3 md:gap-6 justify-center flex-wrap">
        <div className="text-gray-300">Web Developer</div>
        <div className="text-white font-bold text-3xl md:text-5xl font-serif">
          Affan A. Khan
        </div>
        <div className="text-gray-300  text-sm ">
          Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
          convallis, risus non condimentum gravida, odio mauris ullamcorper
          felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a
          placerat sapien pretium eu.
        </div>
        <div className="text-white  flex gap-4">
          <div className="border-2 py-2 px-7 rounded-3xl border-[#007ced] bg-[#333] hover:bg-[#007ced] cursor-pointer text-sm">
            Download CV
          </div>
          <div className="border-2 py-2 px-7 rounded-3xl border-gray-200 bg-[#444] hover:bg-gray-200 hover:text-black  cursor-pointer text-sm">
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
}
