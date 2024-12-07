"use client"
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const WishlistPage: React.FC = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      imageUrl: "/images/product1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: 49.99,
      imageUrl: "/images/product2.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      price: 19.99,
      imageUrl: "/images/product3.jpg",
    },
  ]);

  const handleRemoveItem = (id: number) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Your Wishlist</h2>

        {/* Wishlist Items */}
        {wishlistItems.length === 0 ? (
          <p className="text-center text-lg text-gray-500">Your wishlist is empty.</p>
        ) : (
          <div className="space-y-4">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border-b"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">Price: ${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrashAlt className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Wishlist Summary */}
        {wishlistItems.length > 0 && (
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total items in wishlist:</span>
              <span>{wishlistItems.length}</span>
            </div>
            <div className="mt-4 flex justify-center">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
