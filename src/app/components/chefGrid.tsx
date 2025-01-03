import React from "react";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";

// Importing the Great_Vibes font from Google Fonts
const VibeFont = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

function Cheefs() {
  const chefs = [
    { name: "D. Estwood", role: "Chief Chef", image: "/chef1.png" },
    { name: "D. Scoriesh", role: "Assistant Chef", image: "/chef2.png" },
    { name: "M. William", role: "Advertising Chef", image: "/chef3.png" },
    { name: "W. Readfroad", role: "Chef", image: "/chef4.png" },
  ];

  return (
    <div className="w-full  md:mt-[100px] bg-[url('/leave1.png')] bg-no-repeat py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      {/* Header Section */}
      <div className="text-center">
        <h1
          className={`${VibeFont.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-[#FF9F0D] font-bold mb-4 sm:mb-6`}
        >
          Chefs
        </h1>
        <p className="text-base font-bold text-white sm:text-lg md:text-[48px]">
          <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </p>
      </div>

      {/* Chef Cards */}
      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <Image
                src={chef.image}
                alt={chef.name}
                width={409}
                height={531}
                className="w-full h-auto rounded-lg object-cover mb-4"
              />
              <h3 className="text-lg font-bold text-white text-center">
                {chef.name}
              </h3>
              <p className="text-sm text-center text-[#FF9F0D]">{chef.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-12">
        <button className="px-6 py-3 bg-transparent border-2 border-[#FF9F0D] text-[#FF9F0D] font-bold rounded-full hover:bg-[#FF9F0D] hover:text-black transition-all">
          See More
        </button>
      </div>
    </div>
  );
}

export default Cheefs;
