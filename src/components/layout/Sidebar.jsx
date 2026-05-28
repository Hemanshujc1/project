import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { RiUserSharedFill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className='bg-[#2f97df] w-15 sm:w-18 shrink-0 flex flex-col items-center justify-start pt-25 py-6 gap-10 h-full shadow-md z-10'>
      <Link to="/" className="text-white hover:text-gray-200 transition">
        <FaHome size={38} />
      </Link>
      <Link to="/" className="text-white hover:text-gray-200 transition">
        <RiUserSharedFill size={38} />
      </Link>
    </div>
  )
}

export default Sidebar;
