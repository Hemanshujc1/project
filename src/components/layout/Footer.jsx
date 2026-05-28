import React from "react";
import { Link } from "react-router-dom";
import vakrangeelogo from "../../assets/vakrangeelogo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-gray-800 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 py-1 gap-4">
        <div className="flex items-center">
          <img
            src={vakrangeelogo}
            alt="Vakrangee Logo"
            className="h-16 sm:h-20 w-auto object-contain"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <Link
            to="/"
            className="text-white text-sm font-semibold hover:text-[#f58b2b] transition"
          >
            Home
          </Link>

          <div className="w-18 border-t border-gray-500 my-3"></div>

          <button
            // onClick={logout}
            className="text-white text-sm font-semibold hover:text-[#f58b2b] transition"
          >
            Log Out
          </button>
        </div>

        <div className="text-center md:text-right">
          <p className="text-white text-sm sm:text-[16px] font-semibold">
            Copyright © 2026{" "}
            <span className="text-[#f58b2b]">Vakrangee Limited.</span> All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
