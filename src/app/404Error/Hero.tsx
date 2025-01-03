import React from 'react'; // Import React
import Link from 'next/link'; // Import Link from Next.js for navigation

function Hero() {
  return (
    <section className='w-full bg-[url("/signup.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
      
      <div className='container mx-auto px-4'>
        
        <div className='flex flex-col items-center'>
          {/* Main Title */}
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
            404
          </h1>
          <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
            {/* Navigation Links */}
            <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
              Home
            </Link>
            <span className='text-white'>/</span>
            <Link href="/404Error" className='text-[#FF9F0D]'>
              404
            </Link>
          </div>
        </div>
       
      </div>
      
    </section>
  );
}

export default Hero;