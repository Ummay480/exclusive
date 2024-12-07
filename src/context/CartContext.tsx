import React, { createContext, useContext, useState, ReactNode } from 'react';

// Cart context
interface CartContextType {
  cart: any[]; // Cart items array (could be of any type)
  addToCart: (item: any) => void; // Function to add items to the cart
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<any[]>([]);

  // Function to add items to the cart
  const addToCart = (item: any) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use Cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
