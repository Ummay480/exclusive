"use client";
import React from "react";
import Sidebar from "./ui/sidebar";  // Ensure the Sidebar path is correct
import { BsArrowRightShort } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row bg-gray-100">
      {/* Left Sidebar */}
      <div className="flex-none w-[320px] md:w-1/4 gap-6 justify-center mt-10 mb-20 ml-10">
        <div className="h-full p-6">
          <Sidebar />
        </div>
      </div>

      {/* Banner Content with Image */}
      <div className="flex flex-col md:flex-row justify-between items-center mx-10 mb-10 w-full md:w-3/4 bg-black text-white p-8">
        {/* Banner Left Content */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-4">
          <div className="flex items-center space-x-2">
            <FaApple className="text-2xl" />
            <span className="text-sm text-gray-400">iPhone 14 Series</span>
          </div>
          <h1 className="text-5xl font-bold">
            Up to 10% <br /> off Voucher
          </h1>
          <button className="text-sm font-medium text-white flex items-center border-b border-gray-400 w-fit">
            Shop Now
            <BsArrowRightShort className="ml-2 text-xl" />
          </button>
        </div>

        {/* Banner Right Image */}
        <div className="mt-8 lg:mt-0 relative w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/iphone-image.png"  // Your image path
            alt="iPhone 14"
            width={300}  // Adjust width as necessary
            height={250}  // Shortened height
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
