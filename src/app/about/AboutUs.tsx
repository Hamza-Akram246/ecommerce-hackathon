import Image from "next/image"; // Importing Next.js Image component for optimized images
import { IoPlayOutline } from "react-icons/io5"; // Importing the play button icon from React Icons
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Aboutus() {
  return (
    <div className="bg-white">

      {/* beckground image */}
      <div className="-mt-[45px]">
      <Navbar/>
      </div>
      <section className='w-full bg-[url("/signup.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 '>
  <div className='container mx-auto px-4'>
    <div className='flex flex-col items-center'>
      {/* Page Title */}
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
        About Us
      </h1>
      {/* Breadcrumb Navigation */}
      <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
        {/* Link to Home */}
        <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
          Home
        </Link>
        {/* Divider */}
        <span className='text-white'>/</span>
        {/* Link to Blog */}
        <Link href="/blog" className='text-[#FF9F0D]'>
          About
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* First Section: Content and Buttons */}
      <section className="text-white body-font">
        <div className="container md:gap-8 mx-auto flex px-5 py-24">
          {/* Left Section - Hero Image */}
          <div className="md:block hidden md:flex-row items-center md:space-x-4 mt-2 ml-2">
          <Image
              className="object-cover object-center mt-584px ml-660px radius-6px"
              alt="image2"
              src="/us1.png"
              width={309} height={271}
            />
          </div>
          {/* Right Section - Additional Images */}
          <div className=" hidden md:block md:flex-col gap-6 space-y-2 space-x-2 mt-2 ml-2">
          <Image
              className="object-cover object-center mt-530px ml-300px radius-6px"
              alt="hero"
              src= "/us2.png" width={336} height={536} 
            />
            <Image
              className="object-cover object-center w-309px h-382px mt-882px ml-660px radius-6px"
              alt="image3"
              src="/us3.png"
              width={309} height={382}
            />
          </div>
          {/* Right Text Content and Buttons */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-sm mb-4 font-medium text-yellow-400 italic">
              About us _____
            </h1>
            <p className="text-black title-font text-3xl font-bold">
              Food is an important part of a balanced Diet
            </p>
            <p className="mb-8 leading-relaxed mt-8 text-[black]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            {/* Show More and Watch Video Buttons */}
            <div className="flex justify-center">
              <button className="inline-flex text-[#FFFFFF] font-boldb bg-orange-400 border-0 py-2 px-3 focus:outline-none rounded text-lg">
                Show More
              </button>
              <button className="ml-4 inline-flex text-black border-0 py-2 px-3 focus:outline-none rounded text-lg">
                <IoPlayOutline className="mr-2 block bg-[#FF9F0D] w-12 h-12 rounded-full text-[#FFFFFF]" /> {/* Play Icon */}
                Watch video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section: Why Choose Us */}
      <section className="text-black body-font">
        <div className="container mx-auto flex items-center justify-center flex-col">
            <h1 className="text-black text-3xl text-bold mt-3">Why Choose Us</h1>
            <p className="text-black text-center mt-2 w-[579px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam 
              pellentesque bibendum non dui volutpat fringilla bibendum.
            </p>
            <Image
              className="mb-10 md:w-[2530%] md:h-[500px] md:mt-[12px] mt-10"
              alt="hero"
              src = "/choose.png"
              width={1320} height={386}
            />
        </div>
      </section>

      {/* 3rd Section */}

      <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Best Chef */}
          <div className="flex flex-col items-center">
            <div className="w-[80px] h-[80px] flex justify-center items-center bg-gray-100 rounded-full">
              <img
                src="/us4.png" // Replace with your image path
                alt="Best Chef"
                className="w-8 h-8"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Best Chef</h3>
            <p className="w-[359px] h-[76px] mt-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              aliquam pellentesque bibendum non dui volutpat.
            </p>
          </div>

          {/* 120 Item Food */}
          <div className="flex flex-col items-center">
            <div className="w-[80px] h-[80px] flex justify-center items-center bg-gray-100 rounded-full">
              <img
                src="/us5.png" // Replace with your image path
                alt="120 Item Food"
                className="w-8 h-8"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold">120 Item Food</h3>
            <p className="w-[359px] h-[76px] mt-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              aliquam pellentesque bibendum non dui volutpat.
            </p>
          </div>

          {/* Clean Environment */}
          <div className="flex flex-col items-center">
            <div className="w-[80px] h-[80px] flex justify-center items-center bg-gray-100 rounded-full">
              <img
                src="/us6.png" // Replace with your image path
                alt="Clean Environment"
                className="w-8 h-8"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Clean Environment</h3>
            <p className="w-[359px] h-[76px] mt-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              aliquam pellentesque bibendum non dui volutpat.
            </p>
          </div>
        </div>
      </div>
    </div>

      {/* Third Section: Our Team Members */}
      <section className="text-white body-font">
        <div className="container px-3 py-20 mx-auto">
          <h2 className="text-black text-3xl font-bold text-center mb-8">
            Our Team Members
          </h2>
          <p className="text-black text-center justify-between mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Varius sed pharetra dictum neque massa congue
          </p>

          {/* Team Member Cards */}
          <div className="flex flex-wrap -m-4">
            {/* Member 1 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full flex justify-center items-center flex-col rounded-lg overflow-hidden bg-[#FFB534] w-full">
                <Image
                  className="flex flex-col justify-center items-center mx-auto"
                  src="/aboutchef.png"
                  alt="blog"
                  width={250}
                  height={350}
                  style={{ objectFit: 'cover' }}
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                    Mark Henry
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-black">
                    Owner
                  </p>
                </div>
              </div>
            </div>

            {/* Member 2 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full flex justify-center items-center flex-col rounded-lg overflow-hidden bg-[#FFB534] w-full">
                <Image
                  className="flex flex-col justify-center items-center mx-auto"
                  src="/aboutchef.png"
                  alt="blog"
                  width={250}
                  height={350}
                  style={{ objectFit: 'cover' }}
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                    Lucky Helen
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-black">
                    Owner
                  </p>
                </div>
              </div>
            </div>

            {/* Member 3 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full flex justify-center items-center flex-col rounded-lg overflow-hidden bg-[#FFB534] w-full">
                <Image
                  className="flex flex-col justify-center items-center mx-auto"
                  src="/aboutchef.png"
                  alt="blog"
                  width={250}
                  height={350}
                  style={{ objectFit: 'cover' }}
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                    Moon Henry
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-black">
                    Owner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}