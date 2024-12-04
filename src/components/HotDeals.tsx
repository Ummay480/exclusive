"use client"
import React from 'react';
import './styles/HotDeals.css';


type Product = {
  name: string;
  price: string;
  discountedPrice: string;
  imageUrl: string;
  discountLabel: string;
};

const HotDeals: React.FC = () => {
  const products: Product[] = [
    { name: "Bosch 300 Series SHEM63W55N", price: "1200$", discountedPrice: "998$", imageUrl: "/images/oven4.png", discountLabel: "50%" },
    { name: "Bosch 300 Series SHEM63W55N", price: "1200$", discountedPrice: "998$", imageUrl: "/images/dishwasher.png", discountLabel: "50%" },
    { name: "Bosch 300 Series SHEM63W55N", price: "1200$", discountedPrice: "998$", imageUrl: "/images/pot.png", discountLabel: "50%" },
    { name: "Bosch 300 Series SHEM63W55N", price: "1200$", discountedPrice: "998$", imageUrl: "/images/fridge2.png", discountLabel: "50%" },
  ];

  return (
    <section className="hot-deals">
      <div className="hot-deals__info">
        <h2>Discover Hot Deals <br /> for Your Home!</h2>
        <p>In Mansoury, daily you can find the highest discounts across all categories and products available on the website.</p>
        <button className="hot-deals__show-all">Show All Products</button>
      </div>
      <div className="hot-deals__carousel">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-card__discount">{product.discountLabel}</div>
            <img src={product.imageUrl} alt={product.name} className="product-card__image" />
            <h3 className="product-card__name">{product.name}</h3>
            <div className="product-card__prices">
              <span className="product-card__price">{product.discountedPrice}</span>
              <span className="product-card__original-price">{product.price}</span>
            </div>
            <button className="product-card__cart">🛒</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotDeals;
