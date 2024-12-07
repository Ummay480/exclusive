"use client";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

type ProductCardProps = {
  image: string;
  name: string;
  price: string;
  discountedPrice: string;
  discount: string;
  rating: number;
  reviews: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  discountedPrice,
  discount,
  rating,
  reviews,
}) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-black truncate">{name}</h3>
        <div className="flex items-center mt-2">
          <span className="text-xl font-bold text-gray-800">{discountedPrice}</span>
          <span className="text-sm text-gray-500 line-through ml-2">{price}</span>
          <span className="ml-2 text-sm text-red-600">{discount}</span>
        </div>
        <div className="flex items-center mt-2">
          <div className="flex">
            {Array.from({ length: rating }, (_, index) => (
              <FaStar key={index} className="text-yellow-400" />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-500">({reviews} reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
