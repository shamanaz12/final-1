import React from 'react';
import Link from 'next/link'; // Import Link from Next.js for navigation
import { BsHandbag } from 'react-icons/bs';
import { IoIosSearch } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
const ShoppingCart= () => {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="w-full h-[90px] bg-black flex items-center justify-between px-8">
        {/* Logo Section */}
        <div className="flex items-center">
          <h1 className="font-bold text-[24px] text-white mr-2">Food</h1>
          <span className="font-bold text-[24px] text-[#FF9F0D]">Tuck</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6">
          <li className="text-[16px] font-bold text-[#FF9F0D] hover:text-[#FF9F0D] transition-all">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[16px] font-bold text-white hover:text-[#FF9F0D] transition-all">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="text-[16px] font-bold text-white hover:text-[#FF9F0D] transition-all">
            <Link href="/about">About</Link>
          </li>
          <li className="text-[16px] font-bold text-white hover:text-[#FF9F0D] transition-all">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="text-[16px] font-bold text-white hover:text-[#FF9F0D] transition-all">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="flex items-center gap-4">
          <BsHandbag className="text-white hover:text-[#FF9F0D] cursor-pointer" size={24} />
          <IoIosSearch className="text-white hover:text-[#FF9F0D] cursor-pointer" size={24} />
          <FaUser className="text-white hover:text-[#FF9F0D] cursor-pointer" size={24} />
        </div>
      </div>

      {/* Background Section */}
      <div
        className="lg:max-w-[1920px] h-[320px]"
        style={{ backgroundImage: 'url(/images/bgimge.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Additional content can be added here */}
        <div className='w-full h-[104px] top-{198} left-{850} pt-[10%] text pl-[43%]'>
          <h1 className='font-bold text-[48px] text-white w-[225px] h-[56px] text-center '>
            Shopping Cart
          </h1>
        </div>
      </div>
    </div>
  
  );
};
export default ShoppingCart;
