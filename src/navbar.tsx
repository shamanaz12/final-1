import React from 'react';
const Navbar = () => {
  return (
    <div className="w-full fixed top-0 z-10 bg-gray-800 text-white">
      <nav className="flex justify-between items-center h-[87px] px-8">
        <div className="flex gap-6">
          <a href="#" className="hover:text-yellow-500">Home</a>
          <a href="#" className="hover:text-yellow-500">Menu</a>
          <a href="#" className="hover:text-yellow-500">Blog</a>
          <a href="#" className="hover:text-yellow-500">Pages</a>
          <a href="#" className="hover:text-yellow-500">About</a>
          <a href="#" className="hover:text-yellow-500">Shop</a>
          <a href="#" className="hover:text-yellow-500">Contact</a>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 text-lg font-bold hover:text-yellow-400">
        Foodtuck
        </div>
        <div className="text-gray-400">
          Search bar
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
