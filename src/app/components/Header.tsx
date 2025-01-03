import { FaPinterestP } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import { RxTwitterLogo } from "react-icons/rx";
import Hero from './Hero';
import { Great_Vibes } from "next/font/google";
import Image from "next/image";


const VibeFont = Great_Vibes({subsets:['latin'], weight:['400']})

const Header = () => {
    return (
      <div className="relative bg-black">
        <div className="w-full ">
        {/* Background */}
        <div
        
          className="absolute ml-28 inset-0 opacity-30 w-[full] h-[500px]"
          style={{
            backgroundImage: "url('/bg1.png')",
          }}
        ></div>
        
  
        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center max-w-[80%] mx-auto px-6 py-20">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className={` ${VibeFont.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#FF9F0D] font-bold mb-4 sm:mb-6 text-start`}>
      Testimonial  
          </h2>
            {/* <p className="great_vibes text-[#ff9a00] font-semibold text-lg mb-2">
              A Quick & Amusing!
            </p> */}
            <h1 className="font-['helvetica'] text-5xl font-bold text-white leading-tight mb-4">
              <span className="text-[#FF9F0D]">Th</span>e Art of Speed <br />
              <span className="text-[#FF9F0D]">Food Quality</span>
            </h1>
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
              pharetra dictum neque massa congue.
            </p>
            <button className="px-6 py-3 w-[190px] h-[60px] bg-[#FF9F0D] hover:bg-yellow-600 text-white font-semibold rounded-full">
              See Menu
            </button>
          </div>
          
          {/* Left Sidebar with Social Media Links */}
      <div className="absolute bottom-32 -left-12 h-full flex items-center px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="h-32 border-l-2 border-white"></div>
          <a
            href="https://www.facebook.com"
            >
            <TfiFacebook className="text-white hover:text-[#FF9F0D]"/>
          </a>
          
          <a href="/">
          <RxTwitterLogo className="text-white hover:text-[#FF9F0D]"/>
          </a>

          <a href="/">
          <FaPinterestP className="text-white hover:text-[#FF9F0D]"/>
          </a>
        </div>
        <div className="absolute px-[1px] top-[405px] left-[22px] h-[25%] bg-white"></div>
        </div>
  
          {/* Image Content */}
          <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0 relative">
          
            <div className="relative">
              <Image
                src="/mypic.png"
                alt="Dish"
                width={877.8}
                height={670}
                className="w-[877.8px] h-[67opx] top-[198px] left-[865px]"
              />
            
            </div>
          </div>
        </div>
        </div>
         {/* Hero Section */}
        <Hero/> 
      </div>
      
    );
  }
  export default Header;