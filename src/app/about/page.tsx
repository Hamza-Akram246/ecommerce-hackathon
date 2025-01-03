import { Great_Vibes } from "next/font/google";
import Aboutus from "./AboutUs";
import Hero from "./Hero";
import Image from "next/image";

const VibeFont = Great_Vibes({subsets:['latin'], weight:['400']})

export default function Testimonial() {
  return (
    <div className="bg-white text-black py-8 px-4 sm:py-16">
      <Aboutus />

      <div className="max-w-3xl mx-auto text-center">
        <h2
          className={`${VibeFont.className} text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-[#FF9F0D] font-bold mb-4 sm:mb-6 text-start`}
        >
          Testimonial
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl mb-8 text-start">
          What our client are saying
        </h3>
        <div className="bg-white text-black rounded-lg p-6 relative shadow-md w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto mt-10 sm:mt-20 border border-black">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <Image
              src="/testi.png" // replace with actual image path
              alt="Client"
              width={16}
              height={16}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-yellow-400"
            />
          </div>
          <blockquote className="mt-[140px] sm:mt-[180px] text-gray-600 text-sm md:text-base px-4 sm:px-8">
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Lorem ipsum dolor sit amet.&quot;
          </blockquote>
          <div className="flex justify-center items-center mt-4">
            <span className="text-yellow-400 text-lg sm:text-xl font-bold">
              ⭐⭐⭐⭐⭐
            </span>
          </div>
          <p className="mt-4 font-semibold">Alamin Hasan</p>
          <p className="text-sm text-gray-500">Food Specialist</p>
        </div>

        {/* Dots for navigation */}
        <div className="flex justify-center space-x-2 mt-6">
          <button className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></button>
          <button className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-500"></button>
          <button className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-500"></button>
        </div>
      </div>
      <Hero />
    </div>
  );
}

