"use client";

import React from "react";
import styles from "./styles/Products.module.css";

const Products: React.FC = () => {
  const products = [
    { image: "/images/washing-product.png", name: "Bosh 300 Series SHEM63W55N", price: "998$" },
    { image: "/images/dishwasher.png", name: "Bosh 300 Series SHEM63W55N", price: "998$" },
    { image: "/images/pot.png", name: "Bosh 300 Series SHEM63W55N", price: "998$" },
    { image: "/images/fridge2.png", name: "Bosh 300 Series SHEM63W55N", price: "998$" },
    { image: "/images/kitchen.png", name: "Bosh 300 Series SHEM63W55N", price: "998$" },
    { image: "/images/oven1.png", name: "Bosh 300 Series SHEM63W55N", price: "998$" },
    { image: "/images/fridge1.png", name: "Bosh 300 Series SHEM63W55N", price: "998$" },
    { image: "/images/oven2.png", name: "Bosh 300 Series SHEM63W55N", price: "998$" },
    { image: "/images/pot2.png", name: "Bosh 300 Series SHEM63W55N", price: "998$" },
    { image: "/images/washingmachine.png", name: "Bosh 300 Series SHEM63W55N", price: "998$" },
  ];

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1>Our Products</h1>
        <p>Explore a wide range of high-quality products at the best prices!</p>
      </header>
      <section className={styles.gridSection}>
        <h2 className={styles.title}>Featured Products</h2>
        <div className={styles.grid}>
          {products.map((product, index) => (
            <div className={styles.productCard} key={index}>
              <img src={product.image} alt={product.name} className={styles.productImage} />
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productPrice}>{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
