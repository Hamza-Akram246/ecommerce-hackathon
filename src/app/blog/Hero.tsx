import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import BlogCard from '../components/BlogCard';
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiPixelfedLine } from "react-icons/ri";
import Navbar from '../components/Navbar';

function Hero() {
  return (
    <div className='bg-white'>
   {/* Hero Section */}
<section className='w-full bg-[url("/signup.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
  <div className='container mx-auto px-4'>
    <div className='flex flex-col items-center'>
      {/* Page Title */}
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
        Blog List
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
          Blog List
        </Link>
      </div>
    </div>
  </div>
</section>


    <div className='mt-4  '>
          <section className='flex flex-col md:flex-row justify-center md: gap-[70px] md:m-[50px]'>
            <div className='flex flex-col'>
              <BlogCard />
            </div>
           <div className='flex-col '>
         <h6><input type="text" placeholder='Search Your Keyword' className='border border-r-[#FF9F0D] p-4 border-r-[60px] md:mb-[40px] border-gray-300 h-[70px] md:w-[425px] md:ml-0 ml-3 w-[350px]' /></h6>
         <div className="w-[424px] h-[423px] flex flex-col mb-[30px] items-center justify-center bg-white border border-gray-300 rounded-sm">
     {/* Profile Picture Wrapper */}
    <div className="w-[147.7px] h-[129.43px] rounded-full overflow-hidden">
      {/* Profile Picture Image */}
      <Image 
        src="/profile.png" 
        alt="Profile Picture" 
        width={148} 
        height={130} 
        className="object-cover rounded-full"
      />
    </div>
    
    
      {/* Name and Review */}
      <div
        className="text-center mt-[30px] "
        style={{
          width: "135.64px",
          height: "29.23px",
          top: "174.97px",
          left: "144.68px",
        }}
      >
        <p className="font-bold text-[20px] leading-[28px]">Prince Miyako</p>
        <div className="flex items-center justify-center mt-2 ">
          <div className="w-[13.85px] h-[12.30px] flex text-[#FF9F0D]">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
          </div >
          <p className="text-sm ml-[56px] mt-[5px]">(1 Review)</p>
        </div>
      </div>
    
      {/* Paragraph */}
      <div
        className="text-center mt-[40px]"
        style={{
          width: "321.52px",
          height: "75.15px",
          top: "269.95px",
          left: "51.24px",
        }}
      >
        <p className="font-normal text-[16px] leading-[24px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veritatis distinctio, odio eligendi suscipit reprehenderit atque
        </p>
      </div>
    
      {/* Social Icons */}
      <div className="flex justify-center space-x-4 mt-6">
    
        {/* Facebook Icon */}
        <FaFacebookF />
    
        {/* Twitter Icon */}
        <FaTwitter />
    
        {/* Instagram Icon */}
        <FaInstagram />
        
        {/* Pixel Icon */}
        <RiPixelfedLine />
        </div>
      </div>
    <div className="w-[423px] h-[592px] bg-white border border-gray-300 p-4 mb-[30px] flex flex-col">
      {/* Recent Post Heading */}
      <h2 className="font-bold text-[20px] leading-[28px] mb-4">Recent Post</h2>
    
      {/* Posts */}
      <div className="flex flex-col space-y-4">
        {/* Single Post */}
        <div className="flex items-start space-x-4">
          {/* Image */}
          <div className="w-[99px] h-[91.58px] rounded-[6px] overflow-hidden bg-gray-300">
            <Image src="/recent1.png" alt="Post Image" width={99} height={91.58} className="object-cover w-full h-full" />
          </div>
          {/* Text Content */}
          <div>
            <p className="text-sm font-medium mb-2">June 22, 2020</p>
            <p className="font-normal text-[16px] leading-[24px] w-[205px] h-[47.7px]">Lorem ipsum dolor sit cing elit, sed do.</p>
          </div>
        </div>
    
        {/* Single Post */}
        <div className="flex items-start space-x-4">
          {/* Image */}
          <div className="w-[99px] h-[91.58px] rounded-[6px] overflow-hidden bg-gray-300">
            <Image src="/recent2.png" alt="Post Image" width={99} height={91.58} className="object-cover w-full h-full" />
          </div>
          {/* Text Content */}
          <div>
            <p className="text-sm font-medium mb-2">June 23, 2020</p>
            <p className="font-normal text-[16px] leading-[24px] w-[205px] h-[47.7px]">Lorem ipsum dolor sit cing elit, sed do.</p>
          </div>
        </div>
    
        {/* Single Post */}
        <div className="flex items-start space-x-4">
          {/* Image */}
          <div className="w-[99px] h-[91.58px] rounded-[6px] overflow-hidden bg-gray-300">
            <Image src="/recent3.png" alt="Post Image" width={99} height={91.58} className="object-cover w-full h-full" />
          </div>
          {/* Text Content */}
          <div>
            <p className="text-sm font-medium mb-2">June 24, 2020</p>
            <p className="font-normal text-[16px] leading-[24px] w-[205px] h-[47.7px]">Lorem ipsum dolor sit cing elit, sed do.</p>
          </div>
        </div>
    
        {/* Single Post */}
        <div className="flex items-start space-x-4">
          {/* Image */}
          <div className="w-[99px] h-[91.58px] rounded-[6px] overflow-hidden bg-gray-300">
            <Image src="/recent4.png" alt="Post Image" width={99} height={91.58} className="object-cover w-full h-full" />
          </div>
          {/* Text Content */}
          <div>
            <p className="text-sm font-medium mb-2">June 25, 2020</p>
            <p className="font-normal text-[16px] leading-[24px] w-[205px] h-[47.7px]">Lorem ipsum dolor sit cing elit, sed do.</p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Filter by menu portion */}
    <div className="w-[423px] h-[592px] bg-white border mb-[30px] border-gray-300 p-4 flex flex-col">
      {/*  Heading */}
      <h2 className="font-bold text-[20px] leading-[28px] mb-4">Filter By Menu</h2>
    
      {/* Filter by menu Posts */}
      <div className="flex flex-col space-y-4">
    <div className="flex items-center justify-between p-2 border-b border-gray-200">
          {/* Filter menu image 1  */}
          <div className="flex items-center space-x-3">
            <Image
              src="/filter1.png" // Replace with your image path
              alt="Chicken Fry"
              width={67}
              height={62}
              className="rounded-md"
            />
            <span className="font-medium text-gray-800">Chicken Fry</span>
          </div>
    
          {/* Count */}
          <span className="text-gray-500 text-sm">26</span>
        </div>
      
        {/* Filter menu image 2 */}
    
        <div className="flex items-center justify-between p-2 border-b border-gray-200">
          {/* Food2 Image */}
          <div className="flex items-center space-x-3">
            <Image
              src="/filter2.png" // Replace with your image path
              alt=""
              width={67}
              height={62}
              className="rounded-md"
            />
            <span className="font-medium text-gray-800">Noodels</span>
          </div>
    
          {/* Count */}
          <span className="text-gray-500 text-sm">46</span>
        </div>
        
        {/* Filter menu image 3  */}
        
        <div className="flex items-center justify-between p-2 border-b border-gray-200">
          {/* Food3 Image */}
          <div className="flex items-center space-x-3">
            <Image
              src="/filter3.png" // Replace with your image path
              alt=""
              width={67}
              height={62}
              className="rounded-md"
            />
            <span className="font-medium text-gray-800">Cake</span>
          </div>
    
          {/* Count */}
          <span className="text-gray-500 text-sm">16</span>
        </div>
    
        {/* Filter menu image 4  */}
        <div className="flex items-center justify-between p-2 border-b border-gray-200">
          {/* Food4 Image */}
          <div className="flex items-center space-x-3">
            <Image
              src="/filter4.png" // Replace with your image path
              alt=""
              width={67}
              height={62}
              className="rounded-md"
            />
            <span className="font-medium text-gray-800">Burger</span>
          </div>
    
          {/* Count */}
          <span className="text-gray-500 text-sm">36</span>
        </div>
    
        {/* Filter menu image 5  */}
         <div className="flex items-center justify-between p-2 border-b border-gray-200">
          {/* Food5 Image */}
          <div className="flex items-center space-x-3">
            <Image
              src="/filter5.png" // Replace with your image path
              alt="Chicken Fry"
              width={67}
              height={62}
              className="rounded-md"
            />
            <span className="font-medium text-gray-800">Sendwhich</span>
          </div>
    
          {/* Count */}
          <span className="text-gray-500 text-sm">16</span>
        </div>
      </div>
    </div>
    <div className="w-full md:w-[423px] h-auto bg-white mb-[30px] border border-gray-300 p-4 mt-4">
      {/* Popular Tags Heading */}
      <h2 className="font-bold text-[20px] leading-[28px] mb-4">Popular Tags</h2>
    
      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 border border-gray-200 rounded-md">Burger</span>
        <span className="px-3 py-1 border border-gray-200 rounded-md">Pizza</span>
        <span className="px-3 py-1 border border-gray-200 rounded-md">Sandwich</span>
        <span className="px-3 py-1 border border-gray-200 rounded-md">Pasta</span>
        <span className="px-3 py-1 border border-gray-200 rounded-md">Fries</span>
        <span className="px-3 py-1 border border-gray-200 rounded-md">Shake</span>
        <span className="px-3 py-1 border border-gray-200 rounded-md">Salad</span>
        <span className="px-3 py-1 border border-gray-200 rounded-md">Soup</span>
        <span className="px-3 py-1 border border-gray-200 rounded-md">Tacos</span>
        <span className="px-3 py-1 border border-gray-200 rounded-md">Burrito</span>
        <span className="px-3 py-1 border border-gray-200 rounded-md">Nachos</span>
        <span className="px-3 py-1 border border-gray-200 rounded-md">Wrap</span>
      </div>
    </div>
    
       {/* Photo Gallery Section */}
    <div className="w-[422px] h-[319px] bg-white border mb-[30px] border-gray-300 p-4 mt-4">
      {/* Photo Gallery Heading */}
      <h2 className="font-bold text-[20px] leading-[28px] mb-4">Photo Gallery</h2>
    
      {/* Gallery Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4">
        <div className="w-[110px] h-[92px] overflow-hidden">
          <Image src="/gallery1.png" alt="Gallery Image 1" width={110} height={92} className="object-cover w-full h-full" />
        </div>
        <div className="w-[110px] h-[92px] relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="2" 
              className="w-8 h-8"
            >
              <path d="M12 4.5c-3.86 0-7 2.5-7 5s3.14 5 7 5 7-2.5 7-5-3.14-5-7-5zm0 8.5c-2.21 0-4-1.34-4-3s1.79-3 4-3 4 1.34 4 3-1.79 3-4 3z"/>
            </svg>
          </div>
          <Image 
            src="/gallery2.png" 
            alt="Gallery Image 2" 
            width={110} 
            height={92} 
            className="object-cover w-full h-full" 
          />
        </div>
    
        <div className="w-[110px] h-[92px] overflow-hidden">
          <Image src="/gallery3.png" alt="Gallery Image 3" width={110} height={92} className="object-cover w-full h-full" />
        </div>
        <div className="w-[110px] h-[92px] overflow-hidden">
          <Image src="/gallery4.png" alt="Gallery Image 4" width={110} height={92} className="object-cover w-full h-full" />
        </div>
        <div className="w-[110px] h-[92px] overflow-hidden">
          <Image src="/gallery5.png" alt="Gallery Image 5" width={110} height={92} className="object-cover w-full h-full" />
        </div>
        <div className="w-[110px] h-[92px] overflow-hidden">
          <Image src="/gallery6.png" alt="Gallery Image 6" width={110} height={92} className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
    
       {/* here new section  */}
    
       <div className="w-full py-8 text-center border border-gray-300">
      <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
      <div className="flex justify-center gap-6">
        {/* Facebook Icon */}
        <div className="flex justify-center items-center bg-[#C4C4C4] p-3 rounded-full">
        <FaFacebookF />
        </div>
    
        {/* YouTube Icon */}
        <div className="flex justify-center items-center bg-[#C4C4C4] p-3 rounded-full">
        <FaYoutube />
        </div>
    
        {/* Instagram Icon with orange background */}
        <div className="flex justify-center items-center bg-[#FF9F0D] p-3 rounded-full">
        <FaInstagram />
        </div>
    
        {/* Pixel Icon */}
        <div className="flex justify-center items-center bg-[#C4C4C4] p-3 rounded-full">
        <RiPixelfedLine />
        </div>
    
        {/* Twitter Icon */}
        <div className="flex justify-center items-center bg-[#C4C4C4] p-3 rounded-full">
        <FaTwitter />
        </div>
      </div>
    </div>
    
    
        </div>
        
        </section>
        </div>
    </div>
  )
}

export default Hero

