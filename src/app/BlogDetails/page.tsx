import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiPixelfedLine } from "react-icons/ri";
import Navbar from "../components/Navbar";



export default function BlogPost() {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="-mt-[30px]">
      <Navbar/>
      </div>

        {/* beckground image */}
        <section className='w-full bg-[url("/signup.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
  <div className='container mx-auto px-4'>
    <div className='flex flex-col items-center'>
      {/* Page Title */}
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
        Blog Details
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
          Blog Details
        </Link>
      </div>
    </div>
  </div>
</section>


      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 bg-white shadow-lg rounded-xl p-8">
          {/* Image */}
          <div className="relative mt-8">
            <img
              src="/wings.png"
              alt="Food"
              width={872}
              height={520}
              className=" rounded-t-xl"
            />
          </div>

          {/* Title and Meta Information */}
          
          <div className="flex items-center text-gray-500 text-sm mt-6">
            <span className="mr-2">📅 Feb 14, 2022</span>
            <span className="mr-2">/</span>
            <span className="mr-2">3 min read</span>
            <span>/ Admin</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mt-4">
            10 Reasons To Do A Digital Detox Challenge
          </h1>

          {/* Content */}
          <p className="text-gray-600 mt-2 mb-6">
          Netus pretium tellus nulla commodo massa adipiscing in elementum magna congue condimentum placerat habitasse potenti ac orci a quisque tristique elementum et viverra at condimentum scelerisque eu mi. Elit praesent cras vehicula a ullamcorper nulla scelerisque aliquet tempus faucibus quam ac aliquet nibh a condimentum suspendisse hac integer leo erat aliquam ut himenaeos.</p>
          <p className="text-gray-600">
          Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac.
          Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat 
          himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo.
          </p>
           
           {/* Highlight paragraph */}

           <div className="bg-[#ff9f0D] p-4 rounded-md mb-6 w-full sm:w-[780px] h-auto sm:h-[160px] mt-4">
             <blockquote className="text-white font-bold text-lg sm:text-2xl w-full sm:w-[741px]">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
              </blockquote>
            </div>


          <p className="text-gray-600 mb-6 w-[780px] h-[120px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          </p>

          {/* 2nd image section */}

          <div>
          <p className="text-gray-600 w-full sm:w-[420px] h-auto sm:h-[236px] text-sm sm:text-md">
             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          </p>

          <p className="text-gray-600 w-full sm:w-[420px] h-auto sm:h-[168px] text-sm sm:text-md">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          </p>

           <Image
              src="/detail.png" // Replace with your image URL or use static assets
              alt="Ramen"
              width={354}
            height={366}
            className='ml-[450px] h-[366px] w-[354px] relative -mt-[400px]'/>
             </div>

             <div>
  <p className="text-gray-600 mt-[40px] w-full sm:w-[780px] h-auto sm:h-[120px] text-sm sm:text-md">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
  </p>

  <p className="text-gray-600 mt-2 w-full sm:w-[780px] h-auto sm:h-[120px] text-sm sm:text-md">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
  </p>
</div>


        {/* Tag Section  */}
        <div className="flex justify-between items-center border-b pb-4 mb-4 w-[872px] h-[60px] mt-8">
          <div className="text-black font-bold ">
            <p className='text-2xl'>Tags:</p>
             <span className="text-gray-500">Restaurant</span>, <span className="text-gray-500">Dinner</span>, <span className="text-gray-500">Pizza</span>, <span className="text-gray-500">Yummy</span>
          </div>
          <div>
            <span className="text-black text-2xl font-bold mr-[200px]">Share:</span>
            
            
            <p className='flex gap-2 '>
                <FaFacebook/>
                <FaTwitter/>
                <FaInstagram />
                <RiPixelfedLine />
             </p>
            <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Coment 1 post */}

        <div className="mb-6">
          <div className="flex items-start space-x-4">
            <img src="/user1.png" alt="User" className="w-[72.11px] h-[65px] rounded-full" />
            <div>
              <h3 className="text-gray-800 font-bold">MD Sajib Khan</h3>
              <p className="text-sm text-gray-500">June 22, 2020</p>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem. Fusce hendrerit facilisis sollicitudin.
              </p>
              <button className="text-yellow-500 mt-2">Reply</button>
            </div>
          </div>
        </div>


          {/* Coment 2 post */}

<div className="mb-6 pl-16">
          <div className="flex items-start space-x-4">
            <img src="/user2.png" alt="User" className="w-[65.41px] h-[65px] rounded-full" />
            <div>
              <h3 className="text-gray-800 font-bold">MD Moin Khan</h3>
              <p className="text-sm text-gray-500">June 22, 2020</p>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem. Fusce hendrerit facilisis sollicitudin.
              </p>
              <button className="text-yellow-500 mt-2">Reply</button>
            </div>
          </div>
        </div>

        {/* Comment 3 */}
        <div className="mb-6">
          <div className="flex items-start space-x-4">
            <img src="/user3.png" alt="User" className="w-[72.11px] h-[65px] rounded-full" />
            <div>
              <h3 className="text-gray-800 font-bold">MD Gulil Khan</h3>
              <p className="text-sm text-gray-500">June 22, 2020</p>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem. Fusce hendrerit facilisis sollicitudin.
              </p>
              <button className="text-yellow-500 mt-2">Reply</button>
            </div>
          </div>
        </div>

          {/* Post a Comment */}
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Post a comment</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name*"
                className="border border-gray-300 rounded-md p-3 w-full"
              />
              <input
                type="email"
                placeholder="Email*"
                className="border border-gray-300 rounded-md p-3 w-full"
              />
            </div>
            <textarea
              placeholder="Write a comment"
              rows={8}
              className="border border-gray-300 rounded-md p-3 w-full"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              Post a comment
            </button>
          </form>
        </div>


       {/* Sidebar */}
        <div className='mt-4  '>
      <section className='flex flex-col md:flex-row justify-center md: gap-[70px] md:m-[50px]'>
        


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
    </div>
  );
}
