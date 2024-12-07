import React from 'react';
import { useCart } from './context/CartContext'; // Update the path if needed

const CartComponent: React.FC = () => {
  const { cart, addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id: 1, name: 'Product 1' }); // Example of adding an item
  };

  return (
    <div>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <div>Items in Cart: {cart.length}</div>
    </div>
  );
};

export default CartComponent;
