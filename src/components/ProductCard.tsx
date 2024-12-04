"use client";
import React from "react";
import styles from "./styles/ProductCard.module.css";
import Image from "next/image";

type ProductCardProps = {
  image: string;
  name: string;
  price: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price }) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt={name} width={300} height={300} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>{price}</p>
    </div>
  );
};

export default ProductCard;
