import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DescriptionComponent from '../components/ShopDescrip';
import Navbar from '../components/Navbar';
import SimilarProducts from '../components/SimilarProduct';

const Shopdetail = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <section className="w-full bg-[url('/signup.png')] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6">
              Shop Details
            </h1>
            <div className="text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center">
              <Link
                href="/"
                className="text-white hover:text-[#FF9F0D] transition-colors duration-300"
              >
                Home
              </Link>
              <span className="text-white">/</span>
              <Link href="/SigninPage" className="text-[#FF9F0D]">
              Shop Details
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-[1320px] h-[718px] mx-auto mt-[100px] flex flex-col md:flex-row">
        {/* Left images */}
        <div className="flex flex-col md:ml-0 ml-[80px] gap-4 mr-2 mt-8">
          <Image
            src="/detail2.png"
            alt="Image 1"
            width={132}
            height={129}
            className="md:w-[132px] md:h-[129px] w-[200px] h-[200px] rounded-[6px] border-2"
          />
          <Image
            src="/detail3.png"
            alt="Image 2"
            width={132}
            height={129}
            className="md:w-[132px] md:h-[129px] w-[200px] h-[200px] rounded-[6px] border-2"
          />
          <Image
            src="/detail4.png"
            alt="Image 3"
            width={132}
            height={129}
            className="md:w-[132px] md:h-[129px] w-[200px] h-[200px] rounded-[6px] border-2"
          />
          <Image
            src="/detail5.png"
            alt="Image 4"
            width={132}
            height={129}
            className="md:w-[132px] md:h-[129px] w-[200px] h-[200px] rounded-[6px] border-2"
          />
        </div>

        {/* Large image */}
        <div className="m-[30px] md:mr-4">
          <Image
            src="/detail1.png"
            alt="Large Image"
            width={491}
            height={596}
            className="rounded-[6px]"
          />
        </div>

        {/* Details section */}
        <div className="flex-1">
          {/* In stock and navigation */}
          <div className="flex items-center mb-4">
            <span className="bg-[#FF9F0D] text-white px-4 py-1 rounded-full">
              In stock
            </span>
            <div className="flex items-center ml-4 gap-4">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                <span>Prev</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-bold text-[48px] leading-[56px] mb-2">
            Yummy Chicken Chup
          </h1>

          {/* Paragraph */}
          <p className="text-[18px] leading-[26px] mb-4 max-w-[608px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, urna, vitae feugiat pretium donec id elementum. Ultrices
            mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit
            in consequat.
          </p>

          <hr className="mb-4" />
          <div className="flex items-center mb-4">
            <span className="font-bold text-[32px] leading-[40px] mr-4">
              54.00$
            </span>
          </div>
        </div>
      </div>
      <DescriptionComponent />
      <SimilarProducts />
    </div>
  );
};

export default Shopdetail;
