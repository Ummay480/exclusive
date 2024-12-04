"use client"
import React from 'react';
import FeatureCard from './FeatureCard';
import styles from './styles/Features.module.css';

const FeaturesSection: React.FC = () => {
  return (
    <section className={styles.featuresSection}>
      <FeatureCard
        icon="/images/user.png" // replace with the actual path of your icon
        title="Online Suppport"
        description="Dedicated Support Team"
      />
      <FeatureCard
        icon="/images/truck.png"
        title="Free Shipping"
        description="Purchases Over $100"
      />
      <FeatureCard
        icon="/images/bag.png"
        title="Timeless Shopping"
        description="24/7 Purchase"
      />
      <FeatureCard
        icon="images/Returns.png"
        title="Product Return"
        description="No-Question-Asked Return"
      />
    </section>
  );
};

export default FeaturesSection;
