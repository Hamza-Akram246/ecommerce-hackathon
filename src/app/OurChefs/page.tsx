import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";

const OurChefs = () => {
  return (
    <div className="min-h-screen bg-white text-black py-10 px-5">
      {/* Navbar Component */}
      <Navbar />
      {/* Background Image */}
      <section className="w-full bg-[url('/signup.png')] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            {/* Page Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6">
              Our Chefs
            </h1>
            {/* Breadcrumb Navigation */}
            <div className="text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center">
              {/* Link to Home */}
              <Link
                href="/"
                className="text-white hover:text-[#FF9F0D] transition-colors duration-300"
              >
                Home
              </Link>
              {/* Divider */}
              <span className="text-white">/</span>
              {/* Link to Blog */}
              <Link href="/blog" className="text-[#FF9F0D]">
                Our Chefs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Display for Chef Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-[60px]">
        {/* Chef 1 */}
        <div>
          <Image
            src="/ch1.png"
            alt="Chef A"
            width={300}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <h2 className="mt-2 text-lg font-semibold text-gray-800 text-center ">
            Tahmina Rumi
          </h2>
          <p className="text-center">chef</p>
        </div>
        {/* Chef 2 */}
        <div>
          <Image
            src="/ch2.png"
            alt="Chef B"
            width={300}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <h2 className="mt-2 text-lg font-semibold text-gray-800 text-center">
          Jorina Begum
          </h2>
          <p className="text-center">chef</p>
        </div>
        {/* Chef 3 */}
        <div>
          <Image
            src="/ch3.png"
            alt="Chef C"
            width={300}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <h2 className="mt-2 text-lg font-semibold text-gray-800 text-center">
            M.Muhammad
          </h2>
          <p className="text-center">chef</p>
        </div>
        {/* Chef 4 */}
        <div>
          <Image
            src="/ch4.png"
            alt="Chef D"
            width={300}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <h2 className="mt-2 text-lg font-semibold text-gray-800 text-center">
           Munna Kathy
          </h2>
          <p className="text-center">chef</p>
        </div>
        {/* Chef 5 */}
        <div>
          <Image
            src="/ch5.png"
            alt="Chef 1"
            width={300}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <h2 className="mt-2 text-lg font-semibold text-gray-800 text-center">
            Tahmina Rumi
          </h2>
          <p>chef</p>
        </div>
        {/* Chef 6 */}
        <div>
          <Image
            src="/ch6.png"
            alt="Chef 2"
            width={300}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <h2 className="mt-2 text-lg font-semibold text-gray-800 text-center">
            Bisnu Devgon
          </h2>
          <p className="text-center">chef</p>
        </div>
        {/* Chef 7 */}
        <div>
          <Image
            src="/ch7.png"
            alt="Chef 3"
            width={300}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <h2 className="mt-2 text-lg font-semibold text-gray-800 text-center">
            Motin Molladsf
          </h2>
          <p className="text-center">chef</p>
        </div>
        {/* Chef 8 */}
        <div>
          <Image
            src="/ch8.png"
            alt="Chef 4"
            width={300}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <h2 className="mt-2 text-lg font-semibold text-gray-800 text-center">
            William Rumi
          </h2>
          <p className="text-center">chef</p>
        </div>
        {/* Chef 9 */}
        <div>
          <Image
            src="/ch9.png"
            alt="Chef 5"
            width={300}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <h2 className="mt-2 text-lg font-semibold text-gray-800 text-center">
            Kets William Roy
          </h2>
          <p className="text-center">chef</p>
        </div>
        {/* Chef 10 */}
        <div>
          <Image
            src="/ch10.png"
            alt="Chef 6"
            width={300}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <h2 className="mt-2 text-lg font-semibold text-gray-800 text-center">
            Mehmud kholil
          </h2>
          <p className="text-center">chef</p>
        </div>
        {/* Chef 11 */}
        <div>
          <Image
            src="/ch11.png"
            alt="Chef 7"
            width={300}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <h2 className="mt-2 text-lg font-semibold text-gray-800 text-center">
            Ataur Rehman
          </h2>
          <p className="text-center">chef</p>
        </div>
        {/* Chef 12 */}
        <div>
          <Image
            src="/ch12.png"
            alt="Chef 8"
            width={300}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <h2 className="mt-2 text-lg font-semibold text-gray-800 text-center">
            Monalisa Holly
          </h2>
          <p className="text-center">chef</p>
        </div>
      </div>
    </div>
  );
};

export default OurChefs;

