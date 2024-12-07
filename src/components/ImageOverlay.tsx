"use client";
import React from "react";
import Image from "next/image";

const ImageOverlay: React.FC = () => {
  return (
    <main className="w-full flex justify-center items-center mt-10 mb-1">
      <div className="flex sm:w-full md:w-[80%] sm:p-5 md:p-5 sm:h-auto md:h[400px] sm:flex-col md:flex-row sm:justify-start md:justify-center sm:items-start md:items-center bg-black">
        {/*left Box*/}
        <div className="sm:w-full md:w-[50%] p-4">
          <h3 className="text-green-500 font-bold">Categories</h3>
          <h1 className="text-white font-bold sm:text-md md:text-3xl lg:text-5xl">ENHANCE YOUR</h1>
          <h1 className="text-white font-bold sm:text-md md:text-3xl lg:text-5xl">MUSIC EXPERIENCE</h1>
          {/*Timer*/}
          <div className="flex sm:flex-wrap sm:justify-start md:justify-start pt-5 pb-4 gap-4">
            <div className="bg-slate-59 w-[70px] h-[70px] rounded-[50%] flex flex-col justify-center items-center">
              <span className="font-bold text-lg">23</span>
              <span className="sm:text-xs md:text-sm">Hours</span>
            </div>

            <div className="bg-slate-59 w-[70px] h-[70px] rounded-[50%] flex flex-col justify-center items-center">
              <span className="font-bold text-lg">05</span>
              <span className="sm:text-xs md:text-sm">Days</span>
            </div>

            <div className="bg-slate-59 w-[70px] h-[70px] rounded-[50%] flex flex-col justify-center items-center">
              <span className="font-bold text-lg">59</span>
              <span className="sm:text-xs md:text-sm">Minutes</span>
            </div>

            <div className="bg-slate-59 w-[70px] h-[70px] rounded-[50%] flex flex-col justify-center items-center">
              <span className="font-bold text-lg">35</span>
              <span className="sm:text-xs md:text-sm">Seconds</span>
            </div>
          </div>

          <button className="bg-green-500 hover:bg-green-800 sm:hidden md:block sm:px-3 md:px-7 sm:text-sm py-0 text-white font-bold rounded-sm h-10 mt-3">
            Buy Now
          </button>
        </div>

        {/*right Box*/}
        <div className="flex sm:w-full md:w-[40%] lg:[40%] pl-6 justify-center items-center">
          <Image
            src="/images/image-13.jpeg"
            alt="music speaker"
            width={200}
            height={200}
            className="w-full h-auto"
            style={{
              boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.3)",
            }}
          />
        </div>
      </div>
    </main>
  );
};

export default ImageOverlay;
