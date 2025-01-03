import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="-mt-[40px]">
       <Navbar/>
       </div>

         {/* beckground image */}
         <section className='w-full bg-[url("/signup.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
  <div className='container mx-auto px-4'>
    <div className='flex flex-col items-center'>
      {/* Page Title */}
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
        Cheekout Page
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
          Cheekout Page
        </Link>
      </div>
    </div>
  </div>
</section>


      <div className="container mx-auto px-4 md:px-8 mt-[80px]">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Shipping Address Form */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company (optional)"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="text"
                placeholder="Choose Country"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  className="w-full border border-gray-300 rounded px-4 py-2"
                >
                  <option>Choose City</option>
                </select>
                <select
                  className="w-full border border-gray-300 rounded px-4 py-2"
                >
                  <option>Zip Code</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Address 1"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
                <input
                  type="text"
                  placeholder="Address 2"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
              </div>

              <div className=" items-center ">
                <p className="text-2xl font-bold mb-4">Billing Address</p>
                <input type="checkbox" id="same-as-shipping" />
                <label htmlFor="same-as-shipping">Same as shipping address</label>
              </div>
              <div className="flex gap-4">
              <button
                type="button"
                className="w-[450px] h-[56px] border border-gray-500"
              >
                Back to cart
              </button>
              <button
                type="button"
                className="w-[450px] h-[56px] bg-orange-500 text-white py-2 rounded  font-semibold hover:bg-orange-600"
              >
                Proceed to shipping
              </button>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow">
            
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src="/prons.png"
                      alt="Chicken Tikka Kabab"
                      width={16}
                      height={16}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-semibold">Chicken Tikka Kabab</p>
                      <p className="text-gray-500 text-sm">350g</p>
                      <p className="text-gray-500 text-sm">50$</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <span>Sub-total</span>
                <span>130$</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>25%</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>54.76$</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>$432.65</span>
              </div>
            </div>
            <button
              type="button"
              className="w-full bg-orange-500 text-white py-2 rounded font-semibold mt-4 hover:bg-orange-600"
            >
              Place an order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
