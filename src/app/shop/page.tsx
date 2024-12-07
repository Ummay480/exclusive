"use client"
import React from "react";

const ShopPage: React.FC = () => {
  // Sample products with images 1-38
  const products = Array.from({ length: 38 }, (_, index) => ({
    id: index + 1,
    image: `/images/Image-${index + 1}.jpeg`, // Updated to match your file extension
    title: `Product ${index + 1}`,
    price: `$${(index + 1) * 10}`,
  }));

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold text-center mb-8">Shop Our Products</h2>

      {/* Grid Layout for Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-xl font-bold text-red-600">{product.price}</p>
              <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-md w-full hover:bg-gray-700 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
