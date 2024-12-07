"use client";
import React from "react";
import Sidebar from "./ui/sidebar";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";
import { FaApple } from "react-icons/fa";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row bg-gray-100" >
      {/* Left Sidebar */}
      <div className="flex-none w-[1440px] h-16 md:w-1/4 gap-6 justify-center -mt-5 mb-20 ml-10">
        <div className="h-full p-6">
          <Sidebar />
        </div>
      </div>

      {/* Main Content on the Right */}
      <div className="flex flex-col justify-center items-start mx-10 mb-10 w-full md:w-3/4 h-96 bg-black text-white py-">
        {/* Text Content */}
        <div className="flex flex-col items-start space-y-6">
          <div className="flex items-center mt-16 ml-6 -mb-10">
            {/* iPhone Logo */}
            <FaApple className="text-4xl mr-3" />
            <p className="text-sm font-normal mt-1">iPhone 14 Series</p>
          </div>
          <h2 className="text-5xl font-bold py-10 ml-8">
            Up to 10% <br /> Off Voucher
          </h2>
          <button className="flex items-center space-x-2 text-white bg-black px-8 py-4 rounded-lg hover:bg-gray-300 transition">
            <span>Shop Now</span>
            <BsArrowRightShort className="text-2xl" />
          </button>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-1/2 item-end ml-40 -mt-40">
          <Image
            src="/images/image-31.jpeg" // Replace with your image path
            alt="Hero"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
