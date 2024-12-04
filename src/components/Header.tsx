"use client";

import React from "react";
import { Button } from "./ui/button"; // Import Button
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "./ui/tooltip"; // Import Tooltip components
import { MdArrowDropDown } from 'react-icons/md';

const Header: React.FC = () => {
  return (
    <TooltipProvider>
      <header className="flex items-center justify-center  bg-gray-900 text-white py-6 ">
        <div className="flex items-center justify-center ml-60">
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%</p>
          <Button className="py-2 px-4 bg-gray-900 text-white border-none hover:shadow-lg">Shop Now</Button>

        </div>

        {/* Language Selector with Tooltip */}
        <div className="flexitems-end">
          <Tooltip>
            <TooltipTrigger>
              <button className="text-white bg-gray-900 py-1 px-2 rounded flex items-center justify-center space-x-2">
                {/* Eng text */}
                <span className="text-base items-end ml-40">Eng</span>
            
                <MdArrowDropDown className="text-lg" />
              </button>
            </TooltipTrigger>
            <TooltipContent className="bg-black text-white px-2 py-1 ">
              Choose Language
            </TooltipContent>
          </Tooltip>
        </div>
      </header>
    </TooltipProvider>
  );
};

export default Header;
