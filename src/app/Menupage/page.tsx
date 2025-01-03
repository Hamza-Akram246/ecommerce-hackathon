import React from 'react'; 
import Image from 'next/image'; 
import Link from 'next/link';
import Navbar from '../components/Navbar';

const Menu = () => {
  return (
    <div className='bg-white'>
      <Navbar/>
    {/* Hero Section */}
 <section className='w-full bg-[url("/signup.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
   <div className='container mx-auto px-4'>
     <div className='flex flex-col items-center'>
       {/* Page Title */}
       <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
         Our Menu
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
           Menu
         </Link>
       </div>
     </div>
   </div>
 </section>

      {/* Starter Menu Section */}
      <section className="w-full max-w-4xl my-12 px-4 flex flex-col md:flex-row gap-20 items-center ml-[300px]">
        <Image
          src="/starter.png"
          alt="Starter Menu"
          width={448}
          height={626}
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-4xl font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-4 ">Starter Menu</h2>
          <ul className="text-gray-600 space-y-4">
            {/* Starter Items */}
            <li className="flex justify-between">
              <div>
                <h3 className="font-bold">Alder Grilled Chinook Salmon</h3>
                <p className="text-sm">Toasted French bread topped with romano, cheddar</p>
                <p className="text-xs text-gray-500">560 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">32$</span>
            </li>
            <li className="flex justify-between">
              <div>
                <h3 className="font-bold">Berries and Creme Tart</h3>
                <p className="text-sm">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="text-xs text-gray-500">700 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">43$</span>
            </li>
            <li className="flex justify-between">
              <div>
                <h3 className="font-bold">Tormentoso Bush Pizza Pintage</h3>
                <p className="text-sm">Ground cumin, avocado, peeled and cubed</p>
                <p className="text-xs text-gray-500">1000 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">14$</span>
            </li>
            <li className="flex justify-between">
              <div>
                <h3 className="font-bold">Spicy Vegan Potato Curry</h3>
                <p className="text-sm">Spreadable cream cheese, crumbled blue cheese</p>
                <p className="text-xs text-gray-500">560 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">35$</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Main Course Section */}
      <section className="w-full max-w-4xl my-12 px-4 flex flex-col md:flex-row gap-20 items-center ml-[300px]">
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-4">Main Course</h2>
          <ul className="text-gray-600 space-y-4">
            {/* Main Course Items */}
            <li className="flex justify-between">
              <div>
                <h3 className="font-bold">Optic Big Breakfast Combo Menu</h3>
                <p className="text-sm">Toasted French bread topped with romano, cheddar</p>
                <p className="text-xs text-gray-500">560 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">32$</span>
            </li>
            <li className="flex justify-between">
              <div>
                <h3 className="font-bold">Cashew Chicken With Stir-Fry</h3>
                <p className="text-sm">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="text-xs text-gray-500">700 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">43$</span>
            </li>
            <li className="flex justify-between">
              <div>
                <h3 className="font-bold">Vegetables & Green Salad</h3>
                <p className="text-sm">Ground cumin, avocado, peeled and cubed</p>
                <p className="text-xs text-gray-500">1000 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">14$</span>
            </li>
            <li className="flex justify-between">
              <div>
                <h3 className="font-bold">Spicy Vegan Potato Curry</h3>
                <p className="text-sm">Spreadable cream cheese, crumbled blue cheese</p>
                <p className="text-xs text-gray-500">560 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">35$</span>
            </li>
          </ul>
        </div>
        <Image
          src="/maincourse.png"
          alt="Main Course"
          width={448}
          height={626}
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* Stats Section */}
      <div className="text-white bg-black w-full bg-cover bg-center relative flex flex-col md:flex-row md:m-[80px] md:mt-[160px]"  style={{ backgroundImage: "url('/star1.png')" }}>
        <div className="flex flex-col items-center md:flex-row md:space-x-8">
          {/* Stats about professional chefs */}
         
          <div className="flex flex-col items-center md:items-start">
            <div className='md:ml-[140px]'>
              <Image src='/image1.png' alt="cap-pic" height={120} width={120}/>
            </div>
            <p className="font-bold text-[24px] leading-[32px] text-[#FFFFFF] md:text-[24px] md:w-[218px] md:h-[32px] md:ml-[100px] md:my-6 text-center">Professional Chefs</p>
            <p className="font-bold text-[40px] leading-[48px] text-[#FFFFFF] md:text-[40px] md:w-[67px] md:h-[48px] md:ml-[165px] text-center">420</p>
          </div>

          {/* More Stats */}
          <div className="flex flex-col items-center md:items-start">
            <div className='md:ml-[140px]'>
              <Image src='/image2.png' alt="cap-pic" height={120} width={120}/>
            </div>
            <p className="font-bold text-[24px] leading-[32px] text-[#FFFFFF] md:text-[24px] md:w-[218px] md:h-[32px] md:ml-[100px] md:my-6 text-center">Professional Chefs</p>
            <p className="font-bold text-[40px] leading-[48px] text-[#FFFFFF] md:text-[40px] md:w-[67px] md:h-[48px] md:ml-[165px] text-center">420</p>
          </div>

          {/* More Stats */}
          <div className="flex flex-col items-center md:items-start">
            <div className='md:ml-[140px]'>
              <Image src='/image3.png' alt="cap-pic" height={120} width={120} />
            </div>
            <p className="font-bold text-[24px] leading-[32px] text-[#FFFFFF] md:text-[24px] md:w-[218px] md:h-[32px] md:ml-[100px] md:my-6 text-center">Professional Chefs</p>
            <p className="font-bold text-[40px] leading-[48px] text-[#FFFFFF] md:text-[40px] md:w-[67px] md:h-[48px] md:ml-[165px] text-center">420</p>
          </div>

          {/* More Stats */}
          <div className="flex flex-col items-center md:items-start">
            <div className='md:ml-[140px]'>
              <Image src='/image4.png' alt="cap-pic" height={120} width={120}/>
            </div>
            <p className="font-bold text-[24px] leading-[32px] text-[#FFFFFF] md:text-[24px] md:w-[218px] md:h-[32px] md:ml-[100px] md:my-6 text-center">Professional Chefs</p>
            <p className="font-bold text-[40px] leading-[48px] text-[#FFFFFF] md:text-[40px] md:w-[67px] md:h-[48px] md:ml-[165px] text-center">420</p>
          </div>
        </div>
      </div>

      {/* Dessert */}
      <section className="w-full max-w-4xl my-12 px-4 flex flex-col md:flex-row gap-20 items-center ml-[300px]">
        <Image
          src="/desert.png"
          alt="Dessert"
          width={448}
          height={626}
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-4">Dessert</h2>
          <ul className="text-gray-600 space-y-4">
          <li className="flex justify-between">
            <div>
              <h3 className="font-bold">Fig and Lemon Cake</h3>
              <p className="text-sm">Toasted French bread topped with romano, cheddar</p>
              <p className="text-xs text-gray-500">560 CAL</p>
            </div>
            <span className="text-orange-500 font-bold">32$</span>
          </li>
          <li className="flex justify-between">
            <div>
              <h3 className="font-bold">Creamy Mascarpone Cake</h3>
              <p className="text-sm">Gorgonzola, ricotta, mozzarella, taleggio</p>
              <p className="text-xs text-gray-500">700 CAL</p>
            </div>
            <span className="text-orange-500 font-bold">43$</span>
          </li>
          <li className="flex justify-between">
            <div>
              <h3 className="font-bold">Pastry, Blueberries, Lemon Juice</h3>
              <p className="text-sm">Ground cumin, avocado, peeled and cubed</p>
              <p className="text-xs text-gray-500">1000 CAL</p>
            </div>
            <span className="text-orange-500 font-bold">14$</span>
          </li>
          <li className="flex justify-between">
            <div>
              <h3 className="font-bold">Pain au Chocolat</h3>
              <p className="text-sm">Spreadable cream cheese, crumbled blue cheese</p>
              <p className="text-xs text-gray-500">560 CAL</p>
            </div>
            <span className="text-orange-500 font-bold">35$</span>
          </li>
        </ul>
        </div>
      </section>

      {/* Drinks */}
      <section className="w-full max-w-4xl my-12 px-4 flex flex-col md:flex-row gap-20 items-center ml-[300px]">
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-4">Drinks</h2>
          <ul className="text-gray-600 space-y-4">
          <li className="flex justify-between">
            <div>
              <h3 className="font-bold">Caffè Macchiato</h3>
              <p className="text-sm">Toasted French bread topped with romano, cheddar</p>
              <p className="text-xs text-gray-500">560 CAL</p>
            </div>
            <span className="text-orange-500 font-bold">32$</span>
          </li>
          <li className="flex justify-between">
            <div>
              <h3 className="font-bold">Aperol Spritz Cappuccino</h3>
              <p className="text-sm">Gorgonzola, ricotta, mozzarella, taleggio</p>
              <p className="text-xs text-gray-500">700 CAL</p>
            </div>
            <span className="text-orange-500 font-bold">43$</span>
          </li>
          <li className="flex justify-between">
            <div>
              <h3 className="font-bold">Caffè Latte Campuri</h3>
              <p className="text-sm">Ground cumin, avocado, peeled and cubed</p>
              <p className="text-xs text-gray-500">1000 CAL</p>
            </div>
            <span className="text-orange-500 font-bold">14$</span>
          </li>
          <li className="flex justify-between">
            <div>
              <h3 className="font-bold">Tormentoso Bush Tea Pintage</h3>
              <p className="text-sm">Spreadable cream cheese, crumbled blue cheese</p>
              <p className="text-xs text-gray-500">560 CAL</p>
            </div>
            <span className="text-orange-500 font-bold">35$</span>
          </li>
        </ul>
        </div>
        <Image
          src="/drinks.png"
          alt="Drinks"
          width={448}
          height={626}
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* Partners & Client Section */}

      <div className="w-[1322px] h-[275px] text-center py-6 ml-[150px]">
        <p className='text-black'>Partners & Client</p>

        {/* Heading Section */}

        <p className=" w-[672.9px] h-[55.86] text-4xl text-center ml-[300px] text-black">We work with the best people</p>

        {/*  Logos Section */}

        <div className="w-[1322px] h-[129.37px] bg-white flex justify-center mt-10">
          <img src="/logo1.png" alt="Logo 1" width={240.96} height={129.23} className=" mx-4" />
          <img src="/logo2.png" alt="Logo 1" width={166.04} height={128.68} className=" mx-4" />
          <img src="/logo3.png" alt="Logo 1" width={143.98} height={127.01} className=" mx-4" />
          <img src="/logo4.png" alt="Logo 1" width={130.98} height={129.37} className=" mx-4" />
          <img src="/logo5.png" alt="Logo 1" width={169.97} height={129.17} className=" mx-4" />
          <img src="/logo6.png" alt="Logo 1" width={113.98} height={129.06} className=" mx-4" />
          </div>
      </div>
    </div>
  );
};

export default Menu;


