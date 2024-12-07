"use client";
import React, { useEffect, useState } from "react";

const BestSelling= () => {
  return (
    <div className="flex flex-col items-start px-4 sm:px-6 md:px-12 lg:px-28 bg-gray-100 py-6 space-y-6 mt-20">
      {/* Header */}
      <div className="flex items-center space-x-2">
        <div className="w-3 h-6 bg-red-600 rounded"></div>
        <span className="tracking-wide text-red-600">This Month's</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-4 space-y-4 md:space-y-0 md:space-x-6">
        {/* Flash Sale Title */}
        <div className="text-gray-900 text-2xl font-bold">
      Best Selling Products
        </div>

       {/* View all Button */}
        <div className="flex items-center space-x-2">
          <button className="text-white text-md bg-red-600  hover:text-red-800 ">
           View All
          </button>
          </div>
      </div>
    </div>
  );
};

export default BestSelling;
