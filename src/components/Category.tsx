"use client";
import React from "react";
import {
  BsSmartwatch,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { MdOutlinePhone } from "react-icons/md";
import { CiCamera, CiHeadphones } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";

const Category = () => {
  const categories = [
    { icon: <BsSmartwatch className="text-4xl text-red-600" />, title: "Smartwatch" },
    { icon: <HiOutlineComputerDesktop className="text-4xl text-blue-600" />, title: "Computers" },
    { icon: <MdOutlinePhone className="text-4xl text-green-600" />, title: "Phones" },
    { icon: <CiCamera className="text-4xl text-purple-600" />, title: "Cameras" },
    { icon: <CiHeadphones className="text-4xl text-orange-600" />, title: "Headphones" },
    { icon: <LuGamepad className="text-4xl text-teal-600" />, title: "Gaming" },
  ];

  return (
    <div className="flex flex-col space-y-8 bg-gray-100 p-8 rounded-lg">
      {/* Row 1: Red Block with Text */}
      <div className="flex items-center space-x-2">
        {/* Red Block */}
        <div className="w-3 h-6 bg-red-600 rounded"></div>
        {/* Title Text */}
        <span className="tracking-wide text-red-600 text-xl font-semibold">
          Categories
        </span>
      </div>

      {/* Row 2: Browse by Category + Arrows */}
      <div className="flex justify-between items-center">
        {/* Browse by Category Text */}
        <div className="text-gray-900 text-2xl font-bold">
          <span className="tracking-wide">Browse by Category</span>
        </div>

        {/* Arrows */}
        <div className="flex space-x-4">
          {/* Back Arrow */}
          <button className="text-2xl text-black hover:text-red-600 transition-transform">
            <BsArrowLeftShort />
          </button>
          {/* Forward Arrow */}
          <button className="text-2xl text-black hover:text-red-600 transition-transform">
            <BsArrowRightShort />
          </button>
        </div>
      </div>

      {/* Row 3: Categories Grid */}
      <div className="bg-white h-60">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mt-14">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100 shadow-lg p-6 rounded-lg hover:shadow-xl hover:text-red-700 hover:scale-105 transition-transform"
          >
            {/* Icon */}
            <div className="mb-4">{category.icon}</div>
            {/* Title */}
            <p className="text-gray-800 font-semibold">{category.title}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Category;
