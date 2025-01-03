"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex flex-col items-center p-4 bg-black relative">
            {/* Navbar header */}
            <div className="flex items-center justify-between w-full">
                <span className="text-yellow-500 font-bold text-lg flex-grow text-center">
                    Food<span className="text-white">tuck</span> {/* Brand name */}
                </span>
                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle menu">
                        {isOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />} {/* Toggle icon */}
                    </button>
                </div>
            </div>

            {/* Main Navigation for Desktop */}
            <div className="hidden md:flex flex-row items-center justify-around w-full p-2 transition-all duration-300 ease-in-out">
                <div className="flex items-center space-x-4">
                    {/* Desktop navigation links */}
                    <Link href="/" className="hover:text-yellow-500 cursor-pointer text-white">Home</Link>
                    <Link href="/blog" className="hover:text-yellow-500 text-white">Blog</Link>
                    <Link href="/about" className="hover:text-yellow-500 text-white">About</Link>
                    <Link href="/loginpage" className="hover:text-yellow-500 text-white">SignUp</Link>
                    <Link href="/Menupage" className="hover:text-yellow-500 text-white">Menu</Link>
                    <Link href="/404Error" className="hover:text-yellow-500 text-white">Pages</Link>
                    <Link href="/OurChefs" className="hover:text-yellow-500 text-white">Chefs</Link>
                    <Link href="/contact" className="hover:text-yellow-500 text-white">Contact</Link>
                </div>

                {/* Search and Cart for Desktop */}
                <div className="flex items-center mt-4 md:mt-0">
                    <div className="relative">
                        {/* Search input */}
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="pl-4 pr-10 py-2 rounded-full bg-black border border-yellow-500 text-white focus:outline-none" 
                        />
                        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500" /> {/* Search icon */}
                    </div>
                    <FaShoppingBag className="ml-4 text-white" /> {/* Shopping bag icon */}
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden flex flex-col items-center space-y-2 mt-2 transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
            >
                {/* Mobile navigation links */}
                <Link href="/" className="hover:text-yellow-500 text-white">Home</Link>
                <Link href="/Menupage" className="hover:text-yellow-500 text-white">Menu</Link>
                <Link href="/blog" className="hover:text-yellow-500 text-white">Blog</Link>
                <Link href="/404Error" className="hover:text-yellow-500 text-white">Pages</Link>
                <Link href="/about" className="hover:text-yellow-500 text-white">About</Link>
                <Link href="/OurChefs" className="hover:text-yellow-500 text-white">Chefs</Link>
                <Link href="/contact" className="hover:text-yellow-500 text-white">Contact</Link>
            </div>
            
        </nav>
    );
};

export default Navbar;