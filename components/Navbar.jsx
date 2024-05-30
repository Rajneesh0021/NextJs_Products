import React from 'react';
import Image from 'next/image';

const Navbar = () => {


  return (
    <nav className="fixed w-full top-0 left-0 h-[105px] bg-black z-50 text-white">
      <div className="flex justify-between items-center px-6 py-3">
        <div className="text-lg font-bold">TANN TRIM</div>
        <div className="hidden md:flex space-x-6">
          <Image src='/icons/search.png' height={18} width={18} alt="Search" />
          <Image src='/icons/user-alt.png' height={18} width={18} alt="User" />
          <Image src='/icons/Bookmark.png' height={18} width={18} alt="Bookmark" />
          <Image src='/icons/shopping-bag.png' height={18} width={18} alt="Shopping Bag" />
        </div>
       
      </div>
      <div className='flex justify-center '>
        <div className="flex justify-between ">
          <a className="px-3 py-2 md:py-0 hover:bg-gray-700" href="./">Bags</a>
          <a className="px-3 py-2 md:py-0 hover:bg-gray-700" href="./">Travel</a>
          <a className="px-3 py-2 md:py-0 hover:bg-gray-700" href="./">Accessories</a>
          <a className="px-3 py-2 md:py-0 hover:bg-gray-700" href="./">Gifting</a>
          <a className="px-3 py-2 md:py-0 hover:bg-gray-700" href="./">Jewelry</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
