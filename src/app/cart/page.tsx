"use client"
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      quantity: 2,
      imageUrl: "/images/product1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: 49.99,
      quantity: 1,
      imageUrl: "/images/product2.jpg",
    },
  ]);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Your Cart</h2>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <p className="text-center text-lg text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
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
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, Number(e.target.value))
                    }
                    className="w-12 p-2 border rounded text-center"
                    min="1"
                  />
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

        {/* Cart Summary */}
        {cartItems.length > 0 && (
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total:</span>
              <span>${getTotalPrice().toFixed(2)}</span>
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

export default CartPage;
