import React, { useEffect, useState } from "react";
// import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Sidebar from "./components/layout/Sidebar";
import bannerimg from "./assets/bannerimg.png";

const App = () => {
  return (
    <div className="flex flex-col h-screen bg-[#f3f4f6] overflow-hidden">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden relative">
          <div className="w-full shrink-0 border-b-4 border-[rgb(48,82,125)]">
            <img
              src={bannerimg}
              alt="banner"
              className="w-full h-auto object-cover max-h-35"
            />
          </div>
          
          <main className="grow w-full max-w-7xl mx-auto flex flex-col pt-4 px-4 sm:px-6 pb-6">
            {/* <Routes>
              
            </Routes> */}
            {/* Main content placeholder */}

      
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App;