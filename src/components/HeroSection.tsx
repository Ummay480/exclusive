"use client"
import React from "react";
import styles from "./styles/HeroSection.module.css";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
  
      <img src="/images/slider.png" alt="Home Appliances" className={styles.heroImage} />
    </section>
  );
};

export default HeroSection;
