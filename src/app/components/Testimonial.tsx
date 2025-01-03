import { Great_Vibes } from "next/font/google";

const VibeFont = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

export default function Testimonial() {
  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2
          className={`${VibeFont.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#FF9F0D] font-bold mb-4 sm:mb-6 text-start`}
        >
          Testimonial
        </h2>
        <h3 className="text-xl sm:text-2xl md:text-4xl mb-4 sm:mb-8 text-start">
          What our client are saying
        </h3>

        {/* Testimonial Card */}
        <div className="bg-white text-black rounded-lg p-6 relative shadow-md max-w-full sm:w-[500px] md:w-[600px] lg:w-[868px] mx-auto h-auto sm:h-[450px] mt-20">
          {/* Profile Image */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <img
              src="/testi.png" // replace with actual image path
              alt="Client"
              className="w-20 h-20 rounded-full border-4 border-yellow-400"
            />
          </div>

          {/* Testimonial Text */}
          <blockquote className="mt-[100px] sm:mt-[180px] text-gray-600 text-sm sm:text-base max-w-full mx-auto sm:w-[90%] md:w-[696px] h-auto text-center">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Lorem ipsum dolor sit amet."
          </blockquote>

          {/* Rating */}
          <div className="flex justify-center items-center mt-4">
            <span className="text-yellow-400 text-lg sm:text-xl font-bold">
              ⭐⭐⭐⭐⭐
            </span>
          </div>

          {/* Author Details */}
          <p className="mt-4 font-semibold text-center">Alamin Hasan</p>
          <p className="text-sm text-gray-500 text-center">Food Specialist</p>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          <button className="w-3 h-3 rounded-full bg-yellow-400"></button>
          <button className="w-3 h-3 rounded-full bg-gray-500"></button>
          <button className="w-3 h-3 rounded-full bg-gray-500"></button>
        </div>
      </div>
    </div>
  );
}
