import React from "react";
import HeroSection from "@/components/HeroSection";
import FlashSale from "@/components/FlashSale";
import ProductGrid from "@/components/ProductGrid";
import Category from "@/components/Category";
import BestSelling from "@/components/BestSelling";
import ImageOverlay from "@/components/ImageOverlay";
import SellingProducts from "@/components/BestSelling";
import Products from "@/components/Products";
import Collage from "@/components/Collage";
import Icons from "@/components/Icons";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FlashSale />
      <ProductGrid title="Featured Products" />
      <Category />
      <SellingProducts />
      <Products />
      <ImageOverlay />
      <BestSelling />
     
      <Collage />
      <Icons />
      <Footer />
    </main>
  );
}
