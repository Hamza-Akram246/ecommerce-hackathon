import Image from 'next/image';
import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';



const products = [
  
  {
    id: 1,
    name: 'Fresh Lime',
    price: '$14.00',
    cutprice: '$45.00',
    image: '/shop1.png',
    },
  {
    id: 2,
    name: 'Chocolate Muffin',
    price: '$28.00',
    image: '/shop2.png',
  },
  {
    id: 3,
    name: 'Burger',
    price: '$28.00',
    cutprice: '$45.00',
    image: '/shop3.png',
  },
  {
    id: 4,
    name: 'Pizza',
    price: '$43.00',
    image: '/shop6.png',
  },
  {
    id: 5,
    name: 'Chicken Chup',
    price: '$12.00',
    image: '/shop9.png',
  },
  {
    id: 6,
    name: 'Sandwich',
    price: '$25.00',
    image: '/shop8.png',
  },
  {
    id: 7,
    name: 'Country Burger',
    price: '$45.00',
    image: '/shop4.png',
  },
  {
    id: 8,
    name: 'Drinks',
    price: '$23.00',
    cutprice: '$45.00',
    image: '/shop5.png',
  },
  {
    id: 9,
    name: 'Cheese Butter',
    price: '$10.00',
    category: 'Snacks',
    image: '/shop7.png',
  },
  {
    id: 10,
    name: 'Country Burger',
    price: '$45.00',
    image: '/shop4.png',
  },
  {
    id: 11,
    name: 'Drinks',
    price: '$23.00',
    cutprice: '$45.00',
    image: '/shop5.png',
  },
  {
    id: 12,
    name: 'Pizza',
    price: '$43.00',
    image: '/shop6.png',
  },
  {
    id: 13,
    name: 'Cheese Butter',
    price: '$10.00',
    category: 'Snacks',
    image: '/shop7.png',
  },
  {
    id: 14,
    name: 'Sandwich',
    price: '$25.00',
    image: '/shop8.png',
  },
  {
    id: 15,
    name: 'Chicken Chup',
    price: '$12.00',
    image: '/shop9.png',
  },
  
];

export default function Home() {
  return (
    <div className="container mx-auto p-4 bg-white ">

      <Navbar/>

       {/* Background Image */}
 <section className='w-full bg-[url("/signup.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
   <div className='container mx-auto px-4'>
     <div className='flex flex-col items-center'>
       {/* Page Title */}
       <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
         Our Shop
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
         Our Shop
         </Link>
       </div>
     </div>
   </div>
 </section>

      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-12">
        {/* Product Grid */}
        <main className="col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id}>
                <img src={product.image} alt={product.name} className="w-[312px] h-[267px] object-cover" />
                <div className="pt-4">
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="text-[#FF9F0D] font-bold">{product.price}
                  <span className="text-gray-500 font-normal">{product.cutprice}</span></p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-center">
            <button className="px-4 py-2 bg-gray-300 rounded-md mx-1">Previous</button>
            <button className="px-4 py-2 bg-gray-300 rounded-md mx-1">1</button>
            <button className="px-4 py-2 bg-gray-300 rounded-md mx-1">2</button>
            <button className="px-4 py-2 bg-gray-300 rounded-md mx-1">Next</button>
          </div>
        </main>

        {/* Sidebar */}
        <div className="hidden md:block md:col-span-1">
          <div className="p-4 border rounded-md">
            <h2 className="text-lg font-bold mb-4">Category</h2>
            {/* Filter Categories */}
            <div className="mb-6">
              <ul>
                <li className="mb-1">
                  <label>
                    <input type="checkbox" className="mr-2" /> Sandwiches
                  </label>
                </li>
                <li className="mb-1">
                  <label>
                    <input type="checkbox" className="mr-2" /> Burger
                  </label>
                </li>
                <li className="mb-1">
                  <label>
                    <input type="checkbox" className="mr-2" /> Chicken Chup
                  </label>
                </li>
                <li className="mb-1">
                  <label>
                    <input type="checkbox" className="mr-2" /> Drink
                  </label>
                </li>
                <li className="mb-1">
                  <label>
                    <input type="checkbox" className="mr-2" /> Pizza
                  </label>
                </li>
                <li className="mb-1">
                  <label>
                    <input type="checkbox" className="mr-2" /> Thi
                  </label>
                </li>
                <li className="mb-1">
                  <label>
                    <input type="checkbox" className="mr-2" /> Non Veg
                  </label>
                </li>
                <li className="mb-1">
                  <label>
                    <input type="checkbox" className="mr-2" /> Uncategorized
                  </label>
                </li>
              </ul>
            </div>
            {/* Filter by Price */}
            <div>
            <Image src="/pro2.png" alt="Category" height={286} width={248} className="  mb-6" />

          <div className="mb-6">
            <h3 className="font-bold text-[20px] leading-[28px] mb-2">Filter By Price</h3>
            <div className="border-t-8 border-[#FF9F0D] mb-2 "></div>
            <div className='flex justify-between'>
            <p className="text-sm">From $0 to $8000</p>
            <p className=" text-black  rounded-md">Filter</p>
            </div>
          </div>

          {/* Latest Product Section */}

          <div className='w-[252px] h-[668px] mt-8'>
            <h3 className="font-bold text-[30px] leading-[28px] mb-4">Latest Products</h3>

            {/* Image Section */}
            <div className="flex space-x-4">
              <Image src="/pro1.png" alt="Category" height={65} width={71.81} className='mb-4'/>
              <div className='mt-2'>
                <p className="w-[183.6px] h-[24px] text-lg font-bold">Pizza</p>
                <p className="w-[183.6px] h-[24px] text-lg font-bold mt-4">$35.00</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Image src="/pro1.png" alt="Category" height={65} width={71.81} className='mb-4'/>
              <div className='mt-2'>
                <p className="w-[183.6px] h-[24px] text-lg font-bold">Pizza</p>
                <p className="w-[183.6px] h-[24px] text-lg font-bold mt-4">$35.00</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Image src="/pro1.png" alt="Category" height={65} width={71.81} className='mb-4'/>
              <div className='mt-2'>
                <p className="w-[183.6px] h-[24px] text-lg font-bold">Pizza</p>
                <p className="w-[183.6px] h-[24px] text-lg font-bold mt-4">$35.00</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Image src="/pro1.png" alt="Category" height={65} width={71.81} className='mb-4'/>
              <div className='mt-2'>
                <p className="w-[183.6px] h-[24px] text-lg font-bold">Pizza</p>
                <p className="w-[183.6px] h-[24px] text-lg font-bold mt-4">$35.00</p>
              </div>
            </div>
            {/* Product Tags Heading */}
            <div className='container mx-auto px-4 mt-6 mr-[200px]]'>
            <h2 className="text-2xl font-bold text-black mb-8"> Product Tags</h2>

            {/* Product Tags */}
            <div className="flex flex-wrap justify-between gap-4 mr-[50px]">
            <span className="text-gray-600 text-lg font-semibold">Services</span>
            <span className="text-gray-600 text-lg font-semibold">Our Menu</span>
            <span className="text-gray-600 text-lg font-semibold">Pizza</span>
            <span className="text-gray-600 text-lg font-semibold">Cup Cake</span>
            <span className="text-gray-600 text-lg font-semibold">Burger</span>
            <span className="text-gray-600 text-lg font-semibold">Cookies</span>
            <span className="text-gray-600 text-lg font-semibold">Tandoori Chicken</span>
            <span className="text-gray-600 text-lg font-semibold">Our Shop</span>
            </div>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}