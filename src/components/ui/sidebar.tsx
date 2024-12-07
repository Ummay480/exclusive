"use client";

import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Sidebar: React.FC = () => {
  return (
    <div className="w-full sm:w-64 h-auto bg-gray-100 p-4 shadow-lg">
      {/* Sidebar Header */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">Categories</h2>
      
      {/* Sidebar Menu */}
<ul className="space-y-0 ">
  <li className="hover:bg-gray-200 p-1 rounded-sm cursor-pointer flex justify-between items-center">
    <span className="text-gray-700 text-sm">Woman's Fashion</span>
    <MdKeyboardArrowRight className="text-gray-500 text-sm" />
  </li>
  <li className="hover:bg-gray-200 p-1 rounded-sm cursor-pointer flex justify-between items-center">
    <span className="text-gray-700 text-sm">Men's Fashion</span>
    <MdKeyboardArrowRight className="text-gray-500 text-sm" />
  </li>
        <li className="hover:bg-gray-200 p-1 rounded-sm cursor-pointer">
          <span className="text-gray-700 text-sm">Electronics</span>
        </li>
        <li className="hover:bg-gray-200 p-1 rounded-sm cursor-pointer">
          <span className="text-gray-700 text-sm">Home & Lifestyle</span>
        </li>
        <li className="hover:bg-gray-200 p-1 rounded-sm cursor-pointer">
          <span className="text-gray-700 text-sm">Medicine</span>
        </li>
        <li className="hover:bg-gray-200 p-1 rounded-sm cursor-pointer">
          <span className="text-gray-700 text-sm">Sports & Outdoor</span>
        </li>
        <li className="hover:bg-gray-200 p-1 rounded-sm cursor-pointer">
          <span className="text-gray-700 text-sm">Baby's Toys</span>
        </li>
        <li className="hover:bg-gray-200 p-1 rounded-sm cursor-pointer">
          <span className="text-gray-700 text-sm">Groceries & Pets</span>
        </li>
        <li className="hover:bg-gray-200 p-1 rounded-sm cursor-pointer">
          <span className="text-gray-700 text-sm">Health & Beauty</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
