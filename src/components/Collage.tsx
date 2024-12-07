"use client";
import React from 'react';
import Image from 'next/image';  // Import the Image component

export function Collage() {
  return (
    <div className="flex flex-col items-start space-y-2">
      {/* Grid Section */}
      <div className="bg-black p-4 rounded-md">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex justify-center items-center">
            <Image
              src="/images/Image-28.jpeg"  // Path to your image
              alt="Image 28"
              width={80}  // Set width for the image
              height={80} // Set height for the image
              className="w-20 h-20"  // Tailwind classes for width and height
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/Image-30.jpeg"
              alt="Image 30"
              width={80}
              height={80}
              className="w-20 h-20"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/Image-29.jpeg"
              alt="Image 29"
              width={80}
              height={80}
              className="w-20 h-20"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/Image-27.jpeg"
              alt="Image 27"
              width={80}
              height={80}
              className="w-20 h-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Collage;