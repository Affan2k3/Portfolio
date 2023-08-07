import React from "react";
import { Footerdata } from "./Data";

type footerdata = {
  link1: string;
  link2: string;
  link3: string;
  cp: string;
};

export default function Footer() {
  const { link1, link2, link3, cp }: footerdata = Footerdata;
  return (
    <div className="flex justify-between border-t-2 border-[#444] p-4 text-sm  md:rounded-b-[2.4rem] px-12 font-light">
      <div className="flex gap-6 ">
        <h1 className="text-gray-400 cursor-pointer hover:text-white">
          {link1}
        </h1>
        <h1 className="text-gray-400 cursor-pointer hover:text-white">
          {link2}
        </h1>
        <h1 className="text-gray-400 cursor-pointer hover:text-white">
          {link3}
        </h1>
      </div>
      <h1 className="text-gray-300 cursor-pointer hover:text-white">{cp}</h1>
    </div>
  );
}
