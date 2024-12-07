"use client";
import React, { useEffect, useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const FlashSale = () => {
  const [day, setDay] = useState(1);
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(45);
  const [second, setSecond] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecond((prevSecond) => {
        if (prevSecond === 0) {
          setMinute((prevMinute) => (prevMinute === 0 ? 59 : prevMinute - 1));
          return 59;
        }
        return prevSecond - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (minute === 0 && second === 0) {
      setHour((prevHour) => (prevHour === 0 ? 23 : prevHour - 1));
    }
    if (hour === 0 && minute === 0 && second === 0) {
      setDay((prevDay) => (prevDay === 0 ? 1 : prevDay - 1));
    }
  }, [second, minute, hour]);

  return (
    <div className="flex flex-col items-start px-4 sm:px-6 md:px-12 lg:px-28 bg-gray-100 py-6 space-y-6 mt-20">
      {/* Header */}
      <div className="flex items-center space-x-2">
        <div className="w-3 h-6 bg-red-600 rounded"></div>
        <span className="tracking-wide text-red-600">Today&apos;s</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-4 space-y-4 md:space-y-0 md:space-x-6">
        {/* Flash Sale Title */}
        <div className="text-gray-900 text-2xl font-bold">
          Flash Sale
        </div>

        {/* Countdown Timer */}
        <div className="flex flex-wrap items-center justify-center space-x-3 text-center">
          {[
            { label: "Day", value: day },
            { label: "Hours", value: hour },
            { label: "Minutes", value: minute },
            { label: "Seconds", value: second },
          ].map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <span className="text-2xl font-bold text-red-600">:</span>
              )}
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-600">{item.label}</span>
                <div className="text-2xl font-bold">{item.value}</div>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center space-x-2">
          <button className="text-black text-2xl hover:text-red-600 transition-transform">
            <BsArrowLeftShort />
          </button>
          <button className="text-black text-2xl hover:text-red-600 transition-transform">
            <BsArrowRightShort />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
