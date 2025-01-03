import React from "react";
import Navbar from "../components/Navbar";;
import Link from "next/link";

const ShoppingCart = () => {
  return (
    <div className="min-h-screen bg-white">
    <Navbar/>
    {/* Hero Section */}
 <section className='w-full bg-[url("/signup.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
   <div className='container mx-auto px-4'>
     <div className='flex flex-col items-center'>
       {/* Page Title */}
       <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
       Shopping Cart
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
         Shopping Cart
         </Link>
       </div>
     </div>
   </div>
 </section>


      <div className="max-w-5xl mx-auto pt-[80px] bg-white">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className=" p-4 text-left">Product</th>
              <th className=" p-4">Price</th>
              <th className=" p-4">Quantity</th>
              <th className=" p-4">Total</th>
              <th className=" p-4">Remove</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 1, name: "Burger", price: 35, total: 221, image: "burger.jpg" },
              { id: 2, name: "Fresh Lime", price: 25, total: 521, image: "lime.jpg" },
              { id: 3, name: "Pizza", price: 15, total: 421, image: "pizza.jpg" },
              { id: 4, name: "Chocolate Muffin", price: 45, total: 521, image: "muffin.jpg" },
              { id: 5, name: "Cheese Butter", price: 15, total: 325, image: "cheese.jpg" },
            ].map((item) => (
              <tr key={item.id} className="border-t">
                <td className="flex items-center gap-4 p-4 ">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-4 w-4 ${i < 3 ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .587l3.668 7.568 8.332 1.151-6.063 5.981 1.432 8.313L12 18.897l-7.369 3.703 1.432-8.313-6.063-5.981 8.332-1.151z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </td>
                <td className="text-center ">${item.price.toFixed(2)}</td>
                <td className="text-center ">
                  <div className="flex items-center justify-center gap-2">
                    <button className="px-2 py-1 bg-gray-200 rounded">-</button>
                    <span className="px-2">1</span>
                    <button className="px-2 py-1 bg-gray-200 rounded">+</button>
                  </div>
                </td>
                <td className="text-center 0">${item.total.toFixed(2)}</td>
                <td className="text-center ">
                  <button className="text-red-500 hover:text-red-700">✕</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Coupon Code Section */}

        <div>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 pt-[80px]">
          <div className="p-4 border border-gray-200 bg-white rounded">
            <h2 className="text-lg font-semibold mb-4">Coupon Code</h2>
            <p className="text-sm text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Enter Here code"
                className="flex-grow px-4 py-2 border border-gray-300 rounded focus:outline-none"
              />
              <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                Apply
              </button>
            </div>
          </div>
          <div className="p-4 border border-gray-200 bg-white rounded">
            <h2 className="text-lg font-semibold mb-4">Total Bill</h2>
            <div className="mb-4">
              <div className="flex justify-between text-gray-600 mb-2">
                <span>Cart Subtotal</span>
                <span>$120.00</span>
              </div>
              <div className="flex justify-between text-gray-600 mb-2">
                <span>Shipping Charge</span>
                <span>$00.00</span>
              </div>
              <div className="flex justify-between font-semibold text-gray-800">
                <span>Total Amount</span>
                <span>$205.00</span>
              </div>
            </div>
            <button className="w-full py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default ShoppingCart;
