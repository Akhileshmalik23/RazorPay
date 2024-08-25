import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <a href="/">E-Shop</a>
        </div>
        
        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-white">
          <li><a href="/shop" className="hover:text-gray-400">Shop</a></li>
          <li><a href="/about" className="hover:text-gray-400">About</a></li>
          <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
          <li><a href="/wishlist" className="hover:text-gray-400">Wish List</a></li>
        </ul>
        
        {/* Cart Icon */}
        <div className="text-white">
          <a href="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-1.4 7M17 13l1.4 7M9 21h6" />
            </svg>
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
