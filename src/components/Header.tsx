'use client';

import React from "react";
import { Button } from "./ui/button"; // Import Button
import { MdArrowDropDown } from 'react-icons/md';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col lg:flex-row items-center justify-between bg-gray-900 text-white py-4 px-6">
      {/* Sale Banner */}
      <div className="flex items-center justify-center mb-4 lg:mb-0 text-center">
        <p className="text-sm lg:text-base mr-4">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%
        </p>
        <Button className="py-2 px-4 bg-gray-900 text-white border-none hover:shadow-lg">
          Shop Now
        </Button>
      </div>

      {/* Language Selector */}
      <div className="flex items-center justify-center">
        <button className="text-white bg-gray-900 py-1 px-2 rounded flex items-center space-x-2">
          <span className="text-sm lg:text-base">Eng</span>
          <MdArrowDropDown className="text-lg" />
        </button>
      </div>
    </header>
  );
};

export default Header;
