"use client";
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { CiHeadphones } from "react-icons/ci";
import { GoShieldCheck } from "react-icons/go";

const Icons: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-around items-center bg-gray-500 py-8 gap-6">
      {/* Free & Fast Delivery */}
      <div className="bg-black text-white flex flex-col justify-center items-center p-6 w-[300px] rounded-md">
        <TbTruckDelivery className="text-4xl mb-4" />
        <h2 className="text-lg font-semibold mb-2">Free & Fast Delivery</h2>
        <p className="text-sm text-center">
          Free Delivery for all orders over $140
        </p>
      </div>

      {/* 24/7 Customers Services */}
      <div className="bg-black text-white flex flex-col justify-center items-center p-6 w-[300px] rounded-md">
        <CiHeadphones className="text-4xl mb-4" />
        <h2 className="text-lg font-semibold mb-2">24/7 Customer Services</h2>
        <p className="text-sm text-center">
          Friendly 24/7 Customer Support
        </p>
      </div>

      {/* Money Back Guarantee */}
      <div className="bg-black text-white flex flex-col justify-center items-center p-6 w-[300px] rounded-md">
        <GoShieldCheck className="text-4xl mb-4" />
        <h2 className="text-lg font-semibold mb-2">Money Back Guarantee</h2>
        <p className="text-sm text-center">
          We Return Money Within 30 Days
        </p>
      </div>
    </div>
  );
};

export default Icons;
