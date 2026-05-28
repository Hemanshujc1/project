import { useState, useEffect } from "react";
import axios from "axios";
import vakrangeelogo from "../../assets/vakrangeelogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [balance, setBalance] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  // const getWalletBalance = async (vkid) => {
  //   const response = await axios.get("/vakrangee-connect/common/wallet-balance", {
  //     params: { userId: vkid },
  //   });
  //   return response.data;
  // };

  // -----------------------------------------
  // FETCH WALLET BALANCE
  // -----------------------------------------
  // useEffect(() => {
  //   const fetchBalance = async () => {
  //     const vkid = localStorage.getItem("vkid") || "RJ2903071";

  //     setIsLoading(true);

  //     try {
  //       const res = await getWalletBalance(vkid);

  //       if (res.status === "true") {
  //         setBalance(res.WalletBalance);
  //         localStorage.setItem("walletBalance", res.WalletBalance);
  //       }
  //     } catch (err) {
  //       console.error("Navbar: Failed to fetch wallet balance:", err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchBalance();

  //   const interval = setInterval(fetchBalance, 30000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <nav className="w-full bg-[#2f97df] flex flex-wrap items-center justify-between px-4 sm:px-6 py-2 shadow-sm z-10 relative">
      <Link to="/" className="flex items-center shrink-0">
        <img
          src={vakrangeelogo}
          alt="vakrangee logo"
          className="h-12 sm:h-16 w-auto object-contain"
        />
      </Link>

      <div className="flex-1 flex justify-center px-2 sm:px-4">
        <h1 className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center tracking-wide">
          Vakrangee Kendra Management System
        </h1>
      </div>

      <div className="flex flex-col items-end shrink-0 text-white font-semibold">
        <div className="text-sm sm:text-base whitespace-nowrap">
          User Name - RJ2903071
        </div>
        <div className="text-sm mt-0.5 whitespace-nowrap">
          Wallet Balance - ₹ 1000.00
          {/* {isLoading && !balance ? (
            <span className="inline-block ml-2 w-3 h-3 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></span>
          ) : (
            <span className="ml-1">{balance || "₹ 0.00"}</span>
          )} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
